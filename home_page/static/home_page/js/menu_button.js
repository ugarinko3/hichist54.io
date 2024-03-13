function scrollToDivOne() {
    offclick();
    var targetDiv = document.getElementById('slide_one');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}
function scrollToDivTwo() {
    offclick();
    var targetDiv = document.getElementById('slide_six');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
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
