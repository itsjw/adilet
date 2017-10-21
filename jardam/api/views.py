from rest_framework import viewsets
from clinic.models import Clinic
from .serializers import ClinicSerializer, EducationSerializer, HelpSerializer, EducationCategorySerializer, \
    HelpCategorySerializer
from education.models import Education, EducationCategory
from help.models import HelpCategory, Article


class ClinicViewSet(viewsets.ModelViewSet):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class EducationCategoryViewSet(viewsets.ModelViewSet):
    queryset = EducationCategory.objects.all()
    serializer_class = EducationCategorySerializer


class HelpViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = HelpSerializer


class HelpCategoryViewSet(viewsets.ModelViewSet):
    queryset = HelpCategory.objects.all()
    serializer_class = HelpCategorySerializer