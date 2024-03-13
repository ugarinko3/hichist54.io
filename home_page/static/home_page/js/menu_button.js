document.addEventListener('DOMContentLoaded', function() {
    // Получаем параметры запроса из URL
    const urlParams = new URLSearchParams(window.location.search);
    
    // Проверяем, существует ли параметр "action" и его значение
    if (urlParams.has('action')) {
        const action = urlParams.get('action');
        // Выполняем функцию в зависимости от значения параметра "action"
        switch (action) {
            case 'executeFunction1':
                scrollToDivOne(); // Замените "yourFunction1" на вашу функцию для Главной
                break;
            case 'executeFunction2':
                scrollToDivTwo(); // Замените "yourFunction2" на вашу функцию для Услуг
                break;
            case 'executeFunction3':
                scrollToDivThree(); // Замените "yourFunction3" на вашу функцию для Калькулятора
                break;
            case 'executeFunction4':
                scrollToDivFour(); // Замените "yourFunction4" на вашу функцию для Этапов
                break;
            case 'executeFunction5':
                scrollToDivFive(); // Замените "yourFunction5" на вашу функцию для Льгот
                break;
            default:
                break;
        }
    }
});

function scrollToDivOne() {
    offclick();
    var targetDiv = document.getElementById('slide_one');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}
function scrollToDivTwo() {
    offclick();
    setTimeout(function() {
        var targetDiv = document.getElementById('slide_six');
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
}
function scrollToDivThree() {
    offclick();
    var targetDiv = document.getElementById('slide_five');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}
function scrollToDivFour() {
    offclick();
    var targetDiv = document.getElementById('slide_four');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}
function scrollToDivFive() {
    offclick();
    var targetDiv = document.getElementById('slide_discount');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}
function offclick(){
    const windowInnerWidth = window.innerWidth
    if (windowInnerWidth < 900 ){
        if ($('.header_burger,.header_menu').hasClass('actived')) {
            $('.header_burger,.header_menu').removeClass('actived');
            $('body').removeClass('lock');
        }
    }
    if ($('.modal_window').hasClass('open')) {
        $('.modal_window').removeClass('open');
    }
}
