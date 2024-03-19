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
    if (window.location.pathname === "/privacy") {
        redirectToHomePage(elementId);
        start(elementId);
    } else {
        scrollToElement(elementId);
    }
    offclick();
}

function scrollToElement(elementId) {
    var targetDiv = document.getElementById(elementId);
    targetDiv.scrollIntoView({ behavior: 'smooth', block: "start"  });
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

window.addEventListener("load", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const reloadParam = urlParams.get('reload');
    const targetElementId = urlParams.get('targetElementId');

    if (reloadParam === 'true' && targetElementId) {
        start(targetElementId);
    }
});

function start(targetElementId) {
    setTimeout(function() {
        var elementToScrollTo = document.getElementById(targetElementId);
        if (elementToScrollTo) {
            elementToScrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, 500); // Задержка в 1000 миллисекунд (1 секунда)
}