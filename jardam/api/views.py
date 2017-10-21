from rest_framework import viewsets
from clinic.models import Clinic
from .serializers import ClinicSerializer, EducationSerializer, HelpSerializer
from education.models import Education, EducationCategory
from help.models import HelpCategory, Article


class ClinicViewSet(viewsets.ModelViewSet):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class HelpViewSet(viewsets.ModelViewSet):
    queryset = HelpCategory.objects.all()
    serializer_class = HelpSerializer