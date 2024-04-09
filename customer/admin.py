from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _

from .models import *


##########################################################################################

# General

class EmailUserAdmin(UserAdmin):
    model =UserMaster
    fieldsets = (
        (None, {'fields': ('email','mobile_no', 'password')}),
        (_('Personal info'), {'fields': ('role',)}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {'fields': ('last_login', )}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','mobile_no', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'mobile_no', 'is_active', 'is_staff','is_superuser')
    list_filter = ('is_active', 'is_staff', 'groups', 'user_permissions')
    search_fields = ('email', 'mobile_no','first_name', 'last_name')
    ordering = ('email','mobile_no')
    filter_horizontal = ('groups', 'user_permissions',)

admin.site.register(UserMaster, EmailUserAdmin)