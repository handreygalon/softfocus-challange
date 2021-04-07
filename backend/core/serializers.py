from rest_framework import serializers
from .models import CropLossComm, Cultivation, Event


class CropLossCommSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropLossComm
        fields = '__all__'


class CultivationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cultivation
        fields = ['name']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['name']