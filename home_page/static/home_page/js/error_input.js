function validation(form){

    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }
    
    
    let result = true;

    const allInput = form.querySelectorAll('input');
    num = -1;
    for(const input of allInput) {
        num += 1;
        removeError(input)
        if (num === 1){
            const secondInput = allInput[num].value;
            let onlyDigits = secondInput.replace(/\D/g, "");
            if (onlyDigits.length!==11){
                createError(allInput[num], 'Поле не знаполнено!')
                result = false
            }
        }
        if(input.value==''){
            result = false
            createError(input, 'Поле не знаполнено!')
        }
    }

    return result
}
function validation_calculator(form){

    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }
    function removeErrorSelector(select) {
        const parent = select.parentNode;
        if (select.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            select.classList.remove('error')
        }
    }
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }
    function createErrorSelector(select, text) {
        const parent = select.parentNode
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        
        select.classList.add("error");

        parent.append(errorLabel)
    }
    
    
    let result = true;
    var selectElements = document.getElementsByClassName("input_choice");

    for (var i = 0; i < selectElements.length; i++) {
        var selectedValue = selectElements[i].value;
        removeErrorSelector(selectElements[i])
        if (selectedValue === "0") {
            createErrorSelector(selectElements[i], 'Поле не знаполнено!')
            result = false;
        }
    }

    const allInput = form.querySelectorAll('input');

    num = -1;
    for(const input of allInput) {
        num += 1;
        removeError(input)
        if (num === 6){
            const secondInput = allInput[num].value;
            let onlyDigits = secondInput.replace(/\D/g, "");
            if (onlyDigits.length!==11){
                createError(allInput[num], 'Поле не знаполнено!')
                result = false
            }
        }
        if(input.value==''){
            result = false
            createError(input, 'Поле не знаполнено!')
        }
    }
    return result

}
function showModal() {
    var modal = document.getElementById("successful");
    modal.classList.add("active"); // Добавляем класс "active", чтобы показать модальное окно
    setTimeout(function(){
        modal.classList.remove("active"); // Удаляем класс "active" через 5 секунд
    }, 5000);
}



document.getElementById('form_name_phone').addEventListener('submit', function(event){
    event.preventDefault()
    if (validation(this)==true){
        document.getElementById("window").classList.remove("open");
        showModal();
    };
});
document.getElementById('form_calculator').addEventListener('submit', function(event){
    event.preventDefault()
    if (validation_calculator(this)==true){
        document.getElementById("window").classList.remove("open");
        showModal();
    }
});