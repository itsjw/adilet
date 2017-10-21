from django.db import models


class HelpCategory(models.Model):
    category_name = models.CharField(max_length=255, verbose_name='Название категории')
    article = models.ForeignKey('Article', related_name='article', null=True, verbose_name='Статья')

    def __str__(self):
        return self.category_name


class Article(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    description = models.CharField(max_length=2000, verbose_name='Описание')
    tag = models.CharField(max_length=255, verbose_name='Тэг')

    def __str__(self):
        return self.title
