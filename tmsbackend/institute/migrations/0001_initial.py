# Generated by Django 5.1.2 on 2024-11-08 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Standard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('std', models.CharField(max_length=100, unique=True)),
            ],
        ),
    ]
