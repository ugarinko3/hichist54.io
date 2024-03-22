from . import views
from django.urls import path

urlpatterns = [
    path('', views.forms_calculator, name='index'),
    path('privacy/', views.privacy, name='privacy'),
    path('', views.forms_calculator, name='forms_calculator'),
    path('', views.forms_window, name='forms_window'),
]
