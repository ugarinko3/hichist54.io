document.getElementById("button_slide").addEventListener("click", openWindow);
document.getElementById("button_menu_order").addEventListener("click", openWindows);
document.getElementById("button_menu_order-2").addEventListener("click", openWindow);
document.getElementById("button_pensia").addEventListener("click", openWindow);
document.getElementById("button_family").addEventListener("click", openWindow);
var click_1_close = document.getElementById("close");
var typeDesign = parseFloat(document.getElementById("button_pensia").value);

function FamilyPensia(){
    var typeDesign = 200;
}

function openWindow() {
    document.getElementById("window").classList.add("open");
}
function openWindows() {
    $('.header_burger,.header_menu').toggleClass('actived');
    document.getElementById("window").classList.add("open");
    
}
click_1_close.onclick = function() {
    document.getElementById("window").classList.remove("open");
}
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('window').classList.remove('open')
    }
});

document.querySelector('#window .modal_box').addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById('window').addEventListener('click', event =>  {
    if(event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});