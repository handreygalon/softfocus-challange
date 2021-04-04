from django.db import models
from django.utils.translation import gettext_lazy as _


class Event(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Cultivation(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class CropLossComm(models.Model):
    '''    
    class EventType(models.TextChoices):
        RAIN = 'CE', _('CHUVA EXCESSIVA')
        FROST = 'GE', _('GEADA')
        HAIL = 'GR', _('GRANIZO')
        DRY = 'SE', _('SECA')
        DROUGHT = 'VE', _('VENDAVAL')
        LIGHTNING = 'RA', _('RAIO')
    '''    

    name = models.CharField(max_length=255)
    email = models.EmailField()
    cpf = models.CharField(max_length=11)
    latitude = models.FloatField()
    longitude = models.FloatField()
    # cultivation = models.CharField(max_length=255)
    cultivation = models.ForeignKey(Cultivation, on_delete=models.SET('DELETED'))
    # event = models.CharField(max_length=2, choices=EventType.choices, default=EventType.RAIN)
    event = models.ForeignKey(Event, on_delete=models.SET('DELETED'))
    harvestDate = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    # slug = models.SlugField(max_length=255, unique=True)

    '''def __str__(self):
        return self.name + " - " + str(self.harvestDate)'''
