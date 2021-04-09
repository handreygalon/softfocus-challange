from django.shortcuts import render
from django.db.models import Q

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
        print("POST")
        comm_data = request.data
        requestLat = comm_data["latitude"]
        requestLon = comm_data["longitude"]
        requestHarvestDate = comm_data["harvestDate"]
        latitudeList, longitudeList, validPositionList = [], [], []

        event = Event.objects.get(id=comm_data["event"])

        # print(event)

        mesmaData = CropLossComm.objects.filter(harvestDate=requestHarvestDate)
        mesmaData = mesmaData.filter(~Q(event=event))

        print(mesmaData)

        if mesmaData.exists():
            validDate = True
        else:
            validDate = False
        # print(validDate)

        '''for item in self.queryset:
            print(item.event)
            validPositionList.append(utils.haversine(item.latitude, item.longitude, requestLon, requestLat))'''
        '''if item.event.id == comm_data["event"]:
            validEvent = True
        else:
            validEvent = False'''

        for i in range(len(mesmaData)):

            # print(mesmaData[i].event)

            latitudeList.append(mesmaData[i].latitude)            
            longitudeList.append(mesmaData[i].longitude)
            validPositionList.append(utils.haversine(longitudeList[i], latitudeList[i], requestLon, requestLat))
            
        # print(validPositionList)

        if any(x == True for x in validPositionList) and validDate:
            return Response(status=status.HTTP_417_EXPECTATION_FAILED)

        cultivation = Cultivation.objects.get(id=comm_data["cultivation"])
        
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
    
    def update(self, request, *args, **kwargs):
        print("PUT")
        comm_data = request.data
        print(kwargs['pk'])
        comm = CropLossComm.objects.get(id=kwargs['pk'])

        cultivation = Cultivation.objects.get(id=comm_data["cultivation"])
        event = Event.objects.get(id=comm_data["event"])

        comm.name = comm_data["name"]
        comm.email = comm_data["email"]
        comm.cpf = comm_data["cpf"]
        comm.latitude = comm_data["latitude"]
        comm.longitude = comm_data["longitude"]
        comm.cultivation = cultivation
        comm.event = event
        comm.harvestDate = comm_data["harvestDate"]

        comm.save()
        serializer = CropLossCommSerializer(comm)
        return Response(serializer.data)


class CultivationViewSet(viewsets.ModelViewSet):
    queryset = Cultivation.objects.all()
    serializer_class = CultivationSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer