
from django.shortcuts import render

def index(request):
    return render(request, 'home_page/index.html')

def privacy(request):
    return render(request, 'home_page/privacy.html')