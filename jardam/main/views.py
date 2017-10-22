from django.shortcuts import render
from help.models import Article

def search(request, name_article):
    search_list = Article.objects.all().filter(title__startswith=name_article)
    print(search_list)
    return render(request, 'main/result.html', {'search_list': search_list})
