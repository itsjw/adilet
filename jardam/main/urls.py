from django.conf.urls import url
from .views import search

urlpatterns = [
    url(r'^(?P<name_article>[\w\-]+)/$', search, name='search')
]