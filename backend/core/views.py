from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from .models import CropLossComm, Event, Cultivation
from .serializers import CropLossCommSerializer, CultivationSerializer, EventSerializer

from . import utils


class CommViewSet(viewsets.ModelViewSet):
    queryset = CropLossComm.objects.all()
    serializer_class = CropLossCommSerializer

    '''def list(self, request, *args, **kwargs):
        queryset = CropLossComm.objects.all()
        serializer = CommSimpleSerializer(queryset, many=True)
        return Response(serializer.data)'''

    def create(self, request, *args, **kwargs):
        comm_data = request.data
        requestLat = comm_data["latitude"]
        requestLon = comm_data["longitude"]
        requestHarvestDate = comm_data["harvestDate"]
        latitudeList, longitudeList, validPositionList = [], [], []

        if CropLossComm.objects.filter(harvestDate=requestHarvestDate).exists():
            validDate = True
        else:
            validDate = False

        for i in range(len(self.queryset)):
            latitudeList.append(self.queryset[i].latitude)            
            longitudeList.append(self.queryset[i].longitude)
            validPositionList.append(utils.haversine(longitudeList[i], latitudeList[i], requestLon, requestLat))

        if any(x == True for x in validPositionList) and validDate:
            return Response(status=status.HTTP_417_EXPECTATION_FAILED)

        cultivation = Cultivation.objects.get(id=comm_data["cultivation"])
        event = Event.objects.get(id=comm_data["event"])
        new_comm = CropLossComm.objects.create(name=comm_data["name"],
                                               email=comm_data["email"],
                                               cpf=comm_data["cpf"],
                                               latitude=comm_data["latitude"],
                                               longitude=comm_data["longitude"],
                                               cultivation=cultivation,
                                               event=event,
                                               harvestDate=comm_data["harvestDate"])
        new_comm.save()
        serializer = CropLossCommSerializer(new_comm)
        return Response(serializer.data)


class CultivationViewSet(viewsets.ModelViewSet):
    queryset = Cultivation.objects.all()
    serializer_class = CultivationSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer