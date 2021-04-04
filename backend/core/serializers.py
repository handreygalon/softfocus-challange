from rest_framework import serializers
from .models import CropLossComm


class CropLossCommSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropLossComm
        fields = '__all__'