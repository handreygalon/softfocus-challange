from rest_framework import serializers
from .models import CropLossComm, Cultivation, Event


class CultivationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cultivation
        fields = '__all__'
        depth = 1


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        depth = 1


class CropLossCommSerializer(serializers.ModelSerializer):
    cultivation = CultivationSerializer()
    event = EventSerializer()

    class Meta:
        model = CropLossComm
        fields = '__all__'