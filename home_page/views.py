
from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from .counter import counter


def index(request):
    return render(request, 'home_page/index.html')

def privacy(request):
    return render(request, 'home_page/privacy.html')

def forms_window(request):
    if request.method == 'POST':
        phone = request.POST.get('phone_window', '')
        name = request.POST.get('name_window', '')

        # Отправка письма
        send_mail(
            f'Заявка №{counter()}',
            f'Нужна консультация.\nТелефон: {phone}\nИмя: {name}.',
            settings.EMAIL_HOST_USER,
            ['ugarinko3@gmail.com']
        )
    return render(request, 'home_page/index.html')

def forms_calculator(request):
    design_list = {
        'Шерсть, Синтетика': 250,
        'Вискоза, Шелк': 300,
        'Шегги': 280
    }
    manufacturing_list = {
        'Ручная работа': 1000,
        'Машинная работа': 2000
    }
    if request.method == 'POST':
        wight = float(request.POST.get('wight', '0'))
        height = float(request.POST.get('height', '0'))
        manufacturing_value = float(request.POST.get('manufacturing', '0'))
        hand = float(request.POST.get('hand', '0'))
        design_value = float(request.POST.get('design', '0'))
        phone = request.POST.get('phone', '')
        name = request.POST.get('name', '')


        square = wight * height
        summa = ((square * design_value) + manufacturing_value) * hand
        design = next((key for key, value in design_list.items() if value == design_value), '')
        manufacturing = next((key for key, value in manufacturing_list.items() if value == manufacturing_value), '')

        # Отправка письма
        send_mail(
            f'Заявка №{counter()}',
            f'Сумма: {summa} рублей.\nТип изготовления: {manufacturing}.\nТип материала: {design}.\nТелефон: {phone}\nИмя: {name}.',
            settings.EMAIL_HOST_USER,
            ['ugarinko3@gmail.com']
        )

    return render(request, 'home_page/index.html')
