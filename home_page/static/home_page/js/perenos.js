document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("myDiv");
    var originalClass = element.className;

    // Обработчик события для изменения класса при обнаружении переноса строки
    function handleLineBreak() {
        var hasLineBreak = element.scrollHeight > element.clientHeight;
        if (hasLineBreak) {
            element.className = originalClass + " extendedClass";
        } else {
            element.className = originalClass;
        }
    }

    // Вызываем функцию обработки при загрузке страницы и изменении размеров окна
    handleLineBreak();
    window.addEventListener("resize", handleLineBreak);
});