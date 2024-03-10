document.getElementById("submitBtn").addEventListener("click", function() {
    var option1 = document.getElementById("a_square_width");
    var option2 = document.getElementById("type_design");
    var option3 = document.getElementById("type_manufacturing");s
    var errorDiv = document.getElementById("error");
    
    if (option1.checked && option2.checked && option3.checked) {
        errorDiv.textContent = "Borm"; // Скрыть сообщение об ошибке
        alert("Form submitted successfully!"); // Действие при успешной отправке формы
    } else {
        errorDiv.textContent = "Please select all options."; // Отобразить сообщение об ошибке
    }
});