from django.db import models


class EducationCategory(models.Model):
    category_name = models.CharField(max_length=255, verbose_name='Название категории')
    article = models.ForeignKey('Education', related_name='article', null=True, verbose_name='Статья')

    def __str__(self):
        return self.category_name


class Education(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    content = models.CharField(max_length=2000, verbose_name='Контент')
    tag = models.CharField(max_length=255, verbose_name='Тэг')

    def __str__(self):
        return self.title
