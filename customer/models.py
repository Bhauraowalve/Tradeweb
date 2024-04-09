# Create your models here.
from django.contrib.auth.models import AbstractUser,BaseUserManager, Group, Permission
from django.db import models
from django.utils.translation import gettext_lazy as _

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """
        Create and return a superuser with an email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))

        return self.create_user(email, password, **extra_fields)

class UserMaster(AbstractUser):
    username=None
    name=models.CharField(max_length=50,null=True,blank=True)
    email = models.EmailField(unique=True, blank=True, null=True)
    mobile_no = models.CharField(max_length=15, blank=True, null=True)
    role = models.CharField(max_length=50,null=True,blank=True)
    address1 = models.TextField(blank=True, null=True)
    address2 = models.TextField(blank=True, null=True)
    pincode = models.CharField(max_length=10,blank=True,null=True)
    state = models.CharField(max_length=100,blank=True,null=True)
    country = models.CharField(max_length=100,blank=True,null=True)
    landmark = models.CharField(max_length=100,blank=True, null=True)
    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        related_name='custom_user_groups'  # Custom related_name to avoid clashes
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        related_name='custom_user_permissions'  # Custom related_name to avoid clashes
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class Appointment_Scheduling(models.Model):
    mobile_number = models.CharField(max_length=15, unique=True, blank=True, null=True)

class Service_Selection(models.Model):
    mobile_number = models.CharField(max_length=15, unique=True, blank=True, null=True)

class Availability_Management(models.Model):
    mobile_number = models.CharField(max_length=15, unique=True, blank=True, null=True)

class Reviews_Rating(models.Model):
    mobile_number = models.CharField(max_length=15, unique=True, blank=True, null=True)

class Booking(models.Model):
    mobile_number = models.CharField(max_length=13,unique=True,null=True,blank=True)