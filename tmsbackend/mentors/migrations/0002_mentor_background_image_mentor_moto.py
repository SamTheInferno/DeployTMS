# Generated by Django 5.1.2 on 2024-12-01 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mentors', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mentor',
            name='background_image',
            field=models.FileField(blank=True, null=True, upload_to='mentors/backgroundImages'),
        ),
        migrations.AddField(
            model_name='mentor',
            name='moto',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
