from django.db import models


class Clinic(models.Model):
    problem = models.CharField(max_length=255, verbose_name='Проблема')
    category = models.CharField(max_length=255, verbose_name='Категория')
    info = models.CharField(max_length=255, verbose_name='Информация')
    contacts = models.CharField(max_length=255, verbose_name='Контакты')

    def __str__(self):
        return self.problem