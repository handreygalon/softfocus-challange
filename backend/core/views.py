from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser

from .models import CropLossComm
from .serializers import CropLossCommSerializer
from . import utils
from datetime import datetime


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/communication-list/',
        'Detail': '/communication-detail/<str:pk>/',
        'Create': '/communication-create/',
        'Update': '/communication-update/<str:pk>',
        'Delete': '/communication-delete/<str:pk>',
    }
    return Response(api_urls)

@api_view(['GET'])
def communicationList(request):
    comms = CropLossComm.objects.all()
    serializer = CropLossCommSerializer(comms, many=True)
    print(serializer)
    return Response(serializer.data)

@api_view(['GET'])
def communicationDetail(request, pk):
    comms = CropLossComm.objects.get(id=pk)    
    serializer = CropLossCommSerializer(comms, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def communicationCreate(request):
    comms = list(CropLossComm.objects.all())
    serializer = CropLossCommSerializer(data=request.data)

    if serializer.is_valid():

        requestLat = request.data["latitude"]
        requestLon = request.data["longitude"]
        requestHarvestDate = datetime.fromisoformat(request.data["harvestDate"]).date()

        latitudeList, longitudeList, validPositionList, harvestDateList = [], [], [], []

        for i in range(len(comms)):
            latitudeList.append(comms[i].latitude)            
            longitudeList.append(comms[i].longitude)
            validPositionList.append(utils.haversine(longitudeList[i], latitudeList[i], requestLon, requestLat))

            harvestDateList.append(comms[i].harvestDate.date())

        if any(x == True for x in validPositionList) and any(x == requestHarvestDate for x in harvestDateList):
            return Response("There is another occurrence recorded nearby in the same period.")
        else:
            serializer.save()
        
    return Response(serializer.data)

@api_view(['PUT'])
def communicationUpdate(request, pk):
    comms = CropLossComm.objects.get(id=pk)
    serializer = CropLossCommSerializer(instance=comms, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def communicationDelete(request, pk):
    comms = CropLossComm.objects.get(id=pk)
    comms.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)