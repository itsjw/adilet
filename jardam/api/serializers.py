from rest_framework import serializers
from clinic.models import Clinic
from education.models import EducationCategory, Education
from help.models import Article, HelpCategory


class ClinicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Clinic
        fields = ('id', 'problem', 'category', 'info', 'contacts')


class EducationCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = EducationCategory
        fields = ('id', 'category_name', 'article')


class EducationSerializer(serializers.ModelSerializer):
    ecategory_info = EducationCategorySerializer(read_only=True, source='ecategory')
    ecategory = serializers.IntegerField(allow_null=True, source='ecategory_id')

    class Meta:
        model = Education
        fields = ('id', 'title', 'content', 'tag', 'category')


class HelpCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = HelpCategory
        fields = ('id', 'category_name', 'article')


class HelpSerializer(serializers.ModelSerializer):
    hcategory_info = HelpCategorySerializer(read_only=True, source='hcategory')
    hcategory = serializers.IntegerField(allow_null=True, source='hcategory_id')

    class Meta:
        model = Article
        fields = ('id', 'title', 'description', 'tag')