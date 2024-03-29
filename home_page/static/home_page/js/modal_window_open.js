var buttonFunctions = {
    "button_menu_order": setupMenuOrderListeners,
    "button_menu_order-2": setupMenuOrder2Listeners,
    "button_slide": setupSlideListeners,
    "button_pensia": setupPensiaListeners,
    "button_family": setupFamilyListeners
};
for (var buttonId in buttonFunctions) {
    var button = document.getElementById(buttonId);
    
    if (button) {
        button.removeEventListener("click", buttonFunctions[buttonId]);
        button.addEventListener("click", buttonFunctions[buttonId]);
    }
}
function setupMenuOrderListeners() {
    openWindows();
}

function setupMenuOrder2Listeners() {
    openWindow();
}

function setupSlideListeners() {
    openWindow();
}

function setupPensiaListeners() {
    openWindow();
}

function setupFamilyListeners() {
    openWindow();
}

var clickClose = document.getElementById("close");
clickClose.onclick = function() {
    document.getElementById("window").classList.remove("open");
};


window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('window').classList.remove('open');
    }
});
document.querySelector('#window .modal_box').addEventListener('click', event => {
    event._isClickWithInModal = true;
});


document.getElementById('window').addEventListener('click', event =>  {
    if(event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


function openWindow() {
    document.getElementById("window").classList.add("open");
}

function openWindows() {
    $('.header_burger,.header_menu').toggleClass('actived');
    $('body').toggleClass('lock');
    document.getElementById("window").classList.add("open");
}