# Generated by Django 3.1.7 on 2021-04-04 14:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20210404_1124'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='croplosscomm',
            name='slug',
        ),
    ]
