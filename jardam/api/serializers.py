from rest_framework import serializers
from clinic.models import Clinic
from education.models import EducationCategory, Education
from help.models import Article


class ClinicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Clinic
        fields = ('id', 'problem', 'category', 'info', 'contacts')


class EducationCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = EducationCategory
        fields = ('id', 'category_name', 'article')

class EducationSerializer(serializers.ModelSerializer):
    category = EducationCategorySerializer(read_only=True)

    class Meta:
        model = Education
        fields = ('id', 'title', 'content', 'tag', 'category')

class HelpSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ('id', 'title', 'description', 'tag')
