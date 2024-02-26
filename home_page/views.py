from django.shortcuts import render
from django.http import HttpResponse


def index(request) -> HttpResponse:
    context: dict = {
        'title': 'Химчист - фабрики чистки ковров в Новосибирске',
    }
    return render(request, 'home_page/index.html', context)


def privacy(request):
    return render(request, 'home_page/privacy.html')
