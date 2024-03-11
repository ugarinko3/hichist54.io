function scrollToDivOne() {
    var targetDiv = document.getElementById('slide_one');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    offclick();
}
function scrollToDivTwo() {
    var targetDiv = document.getElementById('slide_six');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    offclick();
}
function scrollToDivThree() {
    var targetDiv = document.getElementById('slide_five');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    offclick();
}
function scrollToDivFour() {
    var targetDiv = document.getElementById('slide_four');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    offclick();
}
function scrollToDivFive() {
    var targetDiv = document.getElementById('slide_discount');
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    offclick();
}
function offclick(){
    const windowInnerWidth = window.innerWidth
    if (windowInnerWidth < 830 ){
        $('.header_burger,.header_menu').toggleClass('actived');
    }
}
