from django.contrib import admin
from .models import CropLossComm, Event, Cultivation


@admin.register(CropLossComm)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "cpf", "email", "cultivation", "event", "harvestDate")

@admin.register(Event)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "name")

@admin.register(Cultivation)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "name")