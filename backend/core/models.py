from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Cultivation(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class CropLossComm(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    cpf = models.CharField(max_length=11)
    latitude = models.FloatField()
    longitude = models.FloatField()
    cultivation = models.ForeignKey(Cultivation, on_delete=models.SET('DELETED'))
    event = models.ForeignKey(Event, on_delete=models.SET('DELETED'))
    harvestDate = models.DateField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    '''def __str__(self):
        return self.name + " - " + str(self.harvestDate)'''
