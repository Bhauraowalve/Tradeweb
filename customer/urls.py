from django.urls import path,include
# from .views import CustomLoginView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from .views import * #,UserMasterViewSet
from . import views
router = DefaultRouter()


urlpatterns = [
    # path('api/register/', views.register_view, name='register'),
    path('login/',views.login_view,name='login'),
    path('login/refresh/',views.refresh_token_view,name='refresh'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
    
]