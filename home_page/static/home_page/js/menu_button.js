window.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const reloadParam = urlParams.get('reload');
    const targetElementId = urlParams.get('targetElementId');

    if (window.location.pathname === "/" && reloadParam === 'true' && targetElementId) {
        start(targetElementId);
    }
});

function start(targetElementId) {
    var elementToScrollTo = document.getElementById(targetElementId);
    if (elementToScrollTo) {
        elementToScrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function scrollToDivOne() {
    checkAndScrollToElement('slide_one');
}

function scrollToDivTwo() {
    checkAndScrollToElement('slide_six');
}

function scrollToDivThree() {
    checkAndScrollToElement('slide_five');
}

function scrollToDivFour() {
    checkAndScrollToElement('slide_four');
}

function scrollToDivFive() {
    checkAndScrollToElement('slide_discount');
}

function checkAndScrollToElement(elementId) {
    if (window.location.pathname === "/") {
        scrollToElement(elementId);
        offclick();
    } else {
        redirectToHomePage(elementId);
    }
}

function scrollToElement(elementId) {
    var targetDiv = document.getElementById(elementId);
    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth', block: "start" });
    }
}

function offclick() {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth < 900) {
        if ($('.header_burger, .header_menu').hasClass('actived')) {
            $('.header_burger, .header_menu').removeClass('actived');
            $('body').removeClass('lock');
        }
    }
    if ($('.modal_window').hasClass('open')) {
        $('.modal_window').removeClass('open');
    }
}

function redirectToHomePage(targetElementId) {
    window.location.href = "http://127.0.0.1:8000?reload=true&targetElementId=" + encodeURIComponent(targetElementId);
}