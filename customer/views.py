from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

from rest_framework.permissions import AllowAny,IsAuthenticatedOrReadOnly,IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import viewsets,permissions

from .serializers import *
from .renderers import UserRenderer
from rest_framework.decorators import api_view,permission_classes
import jwt
from rest_framework import exceptions
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework_simplejwt.tokens import RefreshToken
from .models import UserMaster
from .auth import generate_access_token, generate_refresh_token
from rest_framework import exceptions

from django.conf import settings
from django.core.mail import send_mail

from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
import logging
from django.core.exceptions import ValidationError
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import logging
from rest_framework import serializers
from django.http import JsonResponse

# Logging configuration
LOG_FILE = 'log/app.log'
logging.basicConfig(filename=LOG_FILE, level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


index = never_cache(TemplateView.as_view(template_name='index.html'))

class UserMasterViewSet(viewsets.ModelViewSet):
    queryset = UserMaster.objects.all()
    serializer_class = UserMasterSerializer

    def list(self, request, *args, **kwargs):
        try:
            queryset = UserMaster.objects.all().order_by('-id')
            serializer = UserMasterSerializer(queryset, many=True)
            return Response({'success': 1, 'message': 'User master List', 'result': serializer.data})
        except Exception as e:
            logging.error(f'Error listing UserMaster: {str(e)}')
            return Response({'success': 0, 'message': 'Not Found', 'result': serializer.errors})

    def retrieve(self, request, pk, *args, **kwargs):
        try:
            user = UserMaster.objects.get(pk=pk)
            serializer = UserMasterSerializer(user)
            return Response({'success': 1, 'message': 'User master', 'result': serializer.data})
        except Exception as e:
            logging.error(f'Error retrieving UserMaster: {str(e)}')
            return Response({'success': 0, 'message': 'Not Found'})

    def create(self, request, *args, **kwargs):
        try:
            # Ensure that both 'email' and 'mobile_no' are present in the request data
            if 'email' not in request.data or 'mobile_no' not in request.data:
                error_message = "Please enter both 'email' and 'mobile_no'."
                if 'email' not in request.data:
                    error_message = "Please enter an email."
                elif 'mobile_no' not in request.data:
                    error_message = "Please enter a mobile number."
                raise serializers.ValidationError(error_message)
            
            # Ensure that 'password' is present in the request data
            if 'password' not in request.data:
                raise serializers.ValidationError("Please enter a password.")
            
            serializer = UserMasterSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            # Welcome email
            subject = 'Welcome to YourApp!'
            message = f"Dear {serializer.data['name']},\n\nThank you for registering in Vinding Machine.\n\n Your Gmail Id is {serializer.data['email']}\n\nBest regards,\nThe Vinding Machine Team"
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [serializer.data['email'], ]
            send_mail(subject, message, email_from, recipient_list)
            
            # Log successful creation
            logging.info(f'Data Created: {serializer.data}')

            # Log email sent
            logger.info(f'Welcome email sent to {serializer.data["email"]}')

            return Response({'success': 1, 'message': 'Data Created Successfully', 'result': serializer.data}, status=status.HTTP_201_CREATED)
        except serializers.ValidationError as ve:
            # Log validation error
            logging.error(f'Validation Error creating UserMaster: {ve}')
            return Response({'success': 0, 'message': 'Validation Error', 'result': str(ve)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Log general error
            logging.error(f'Error creating UserMaster: {str(e)}')
            return Response({'success': 0, 'message': 'Not Created Data', 'result': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
   
    def update(self, request, pk, *args, **kwargs):
        try:
            chp = UserMaster.objects.get(pk=pk)
            serializer = UserMasterSerializer(chp, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            # Log successful creation
            logging.info(f'Data Updated Successfully: {serializer.data}')
            return Response({'success': 1, 'message': 'Data Updated', 'result': serializer.data})
        except Exception as e:
            logging.error(f'Error listing UserMaster: {str(e)}')
            return Response({'success': 0, 'message': 'Not Found', 'result': serializer.errors})
    
    def destroy(self, request, pk, *args, **kwargs):
        try:
            user = UserMaster.objects.get(pk=pk)
            user.delete()
            return Response({'success': 1, 'message': 'Data Deleted'})
        except UserMaster.DoesNotExist:
            return Response({'success': 0, 'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            logging.error(f'Error deleting UserMaster: {str(e)}')
            return Response({'success': 0, 'message': 'Not Found'}, status=status.HTTP_400_BAD_REQUEST)
   
        
    


@api_view(['POST'])
@permission_classes([AllowAny])
@ensure_csrf_cookie
def login_view(request):
    try:
        User = get_user_model()
        email = request.data.get('email')
        password = request.data.get('password')
        response = Response()
        if (email is None) or (password is None):
            response.data = {'success': 0,
                             'message': 'email and password required',
                             'result': ""}
            return response

        user = User.objects.filter(email=email).first()
        if user is None:
            response.data = {'success': 0,
                             'message': 'User Not Found',
                             'result': ""}
            return response
        if not user.check_password(password):
            response.data = {'success': 0,
                             'message': 'wrong password',
                             'result': ""}
            return response

        serialized_user = UserMasterSerializer(user).data

        access_token = generate_access_token(user)
        refresh_token = generate_refresh_token(user)

        response.set_cookie(key='refreshtoken', value=refresh_token, httponly=True)
        response.data = {
            'success': 1,
            'message': 'Login successfully',
            'result': {
                'access': access_token,
                'refresh': refresh_token,
                'user': serialized_user,
            }
        }

        logging.info(f'User {email} logged in successfully.')

    except Exception as e:
        logging.error(f'Login failed. An error occurred: {str(e)}')
        response.data = {'success': 0, 'message': 'Login failed. An error occurred.', 'result': ""}
    return response


@api_view(['POST'])
@permission_classes([AllowAny])
# @csrf_protect
def refresh_token_view(request):
    User = get_user_model()
    refresh_token = request.data.get('refresh')
    if refresh_token is None:
        raise exceptions.AuthenticationFailed(
            'Authentication credentials were not provided.')
    try:
        payload = jwt.decode(
            refresh_token, settings.SECRET_KEY, algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        raise exceptions.AuthenticationFailed(
            'expired refresh token, please login again.')

    user = User.objects.filter(id=payload.get('user_id')).first()
    if user is None:
        raise exceptions.AuthenticationFailed('User not found')

    if not user.is_active:
        raise exceptions.AuthenticationFailed('user is inactive')

    serialized_user = UserMasterSerializer(user).data

    access_token = generate_access_token(user)
    # refresh_token = generate_refresh_token(user)
    return Response({'access': access_token, 'refresh': refresh_token, 'user': serialized_user})

# class ChangePasswordView(generics.UpdateAPIView):
#     """
#     An endpoint for changing password.
#     """
#     # permission_classes = [IsAuthenticatedOrReadOnly]
#     serializer_class = ChangePasswordSerializer
#     model = CioklubUsers

#     def get_object(self, queryset=None):
#         try:
#             obj = self.request.user
#             return obj
#         except Exception as e:
#             return HttpResponse(str(e)) 

#     def update(self, request, *args, **kwargs):
#         try:
#             self.object = self.get_object()
#             serializer = self.get_serializer(data=request.data)
#             if serializer.is_valid():
#                 # Check old password
#                 if not self.object.check_password(serializer.data.get("old_password")):
#                     return Response({'success': 0, 'message': 'Wrong old password', 'result': serializer.errors})
#                 # set_password also hashes the password that the user will get
#                 self.object.set_password(serializer.data.get("new_password"))
#                 self.object.save()
#                 response = {
#                     'success': 1,
#                     'message': 'Password updated successfully',
#                     'result': serializer.data
#                 }
#                 return Response(response)
#         except Exception as e:
#             logger(str(e), 'e')
#             return Response({'success': 0, 'message': 'Invalid Data', 'result': serializer.errors})






# @api_view(['POST'])
# @permission_classes([userWriteOnly])
# @ensure_csrf_cookie
# def forgot_password(request):
#     try:
#         con = EmailConfiguration.objects.get(id=1)
#         User = get_user_model()
#         email = request.data.get('email')
#         response = Response()
#         if (email is None):
#             response.data = {'success': 0,
#                             'message': 'Invalid User Name',
#                             'result': ""}
#             return response
#         user = User.objects.filter(email__iexact=email).first()
#         if(user is None):
#             response.data = {'success': 0,
#                             'message': 'Invalid User Name',
#                             'result': ""}
#             return response
#         backend = EmailBackend(host=con.email_host, port=con.email_port, username=con.email_authentication_user_name,
#                             password=con.email_authentication_password, use_tls=con.use_tls, fail_silently=con.fail_silently)
#         from_email = con.email_host
#         serialized_user = CioklubUsersSerializer(user).data
#         domain = request.META['HTTP_HOST']
#         protocol = request.scheme
#         uid = urlsafe_base64_encode(force_bytes(user.id))
#         token = default_token_generator.make_token(user)
#         print(protocol+'://'+domain+'/#/resetpassword/'+uid+'/'+token)
#         userdata = {
#             'name': user.name,
#             'CIOKlub_id': user.cioklub_user_ref,
#             'expiry_year': user.expiry_year,
#             'payment_link': protocol+'://'+domain+'/#/resetpassword/'+uid+'/'+token
#         }
#         email1 = EmailMultiAlternatives(
#                     "Reset Your CIO Association Account Password" , protocol+'://'+domain+'/#/resetpassword/'+uid+'/'+token, from_email=from_email, to=[email],connection=backend
#                     )
#         # html_template = "<div>Dear "+user.name+",</div><div>&nbsp;</div><div>We have received a request to reset your password for your CIO Klub account associated with the email address "+email+". To reset your password, please click on the link below and follow the instructions:</div><div>&nbsp;</div><div>Password Reset Link - <a href=\""+protocol+'://'+domain+'/#/resetpassword/'+uid+'/'+token+"\">Click here</a></div><div>&nbsp;</div><div>If you did not initiate this request or believe this to be a mistake, please ignore this email.</div><div>&nbsp;</div><div>If you have any questions or concerns, please contact us at <a href=\"mailto:helpdesk@cioklub.com\" rel=\"noopener noreferrer\" target=\"_blank\">helpdesk@cioklub.com</a> or call us at 9987764337 between 9 AM and 5 PM (Monday to Friday).</div><div>&nbsp;</div><div>Best regards, </div><div>The CIO Klub Team </div><div><a href=\"http://www.cioklub.com/\" rel=\"noopener noreferrer\" target=\"_blank\">www.cioklub.com</a></div><div><br></div>"
#         html_template = loader.get_template("email/forgot.html")
#         dynamic_data = {'user': user,'password_link': protocol+'://'+domain+'/#/resetpassword/'+uid+'/'+token }
#         html_template = html_template.render(dynamic_data)
#         email1.attach_alternative(html_template, 'text/html')
#         # email1.send()
#         email_logger('Email Subject :'+str(email1.subject),'i')
#         for item in email1.to:
#             email_logger('To Email :'+str(item),'i')
#         try:
#             num_sent = email1.send()
#             if num_sent == 1:
#                 email_logger("Email was sent successfully.",'i')
#             else:
#                 email_logger("Failed to send the email.",'i')
#         except BadHeaderError:
#             email_logger("Invalid header found in the email.",'i')
#         except Exception as e:
#             email_logger(str(e), 'e')
#         return response
#     except Exception as e:
#         logger(str(e), 'e')
#         return HttpResponse(str(e)) 


# class ResetPasswordView(generics.UpdateAPIView):
#     """
#     An endpoint for changing password.
#     """
#     serializer_class = ResetPasswordSerializer
#     model = UserMaster

#     def update(self, request, *args, **kwargs):
#         try:
#             # self.object = self.get_object()
#             serializer = self.get_serializer(data=request.data)
#             serializer.is_valid(raise_exception=True)
#             email = request.session.get('email')
#             user = UserMaster.objects.get(email=email)
#             user.password = make_password(serializer.data.get("new_password"))
#             user.save()
#             response = {
#                 'success': 1,
#                 'message': 'Password updated successfully',
#                 'result': serializer.data
#             }
#             return Response(response)
#         except Exception as e:
#             logger(str(e), 'e')
#             return Response({'success': 0, 'message': 'Invalid Data', 'result': serializer.errors})


