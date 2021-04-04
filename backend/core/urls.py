from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('communication-list', views.communicationList, name='communication-list'),
    path('communication-detail/<str:pk>', views.communicationDetail, name='communication-detail'),
    path('communication-create', views.communicationCreate, name='communication-create'),
    path('communication-update/<str:pk>', views.communicationUpdate, name='communication-update'),
    path('communication-delete/<str:pk>', views.communicationDelete, name='communication-delete'),
]