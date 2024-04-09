from rest_framework import serializers
from .models import *
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model

class UserMasterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Make sure 'password' is marked as write_only
    class Meta:
        model = get_user_model()
        fields='__all__'
    # def create(self, validated_data):
    #     # Hash the password before saving it
    #     validated_data['password'] = make_password(validated_data['password'])
    #     return super().create(validated_data)
