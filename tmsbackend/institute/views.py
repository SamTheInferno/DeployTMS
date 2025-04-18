from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
import json

from .models import Standard

@api_view(['GET'])
def getStandards(request):
    Standards = Standard.objects.all()
    return Response(list(Standards.values()))