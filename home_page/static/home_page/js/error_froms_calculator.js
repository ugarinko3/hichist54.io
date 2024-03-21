function validation_calculator(form){

    function removeError(input) {
        const parent_input = input.parentNode;
        if (input.classList.contains('_error')) {
            parent_input.querySelector('.error-label').remove()
            input.classList.remove('_error')
        }
    }
    function removeErrorSelector(select) {
        const parent_input = select.parentNode;
        if (select.classList.contains('_error')) {
            parent_input.querySelector('.error-label').remove()
            select.classList.remove('_error')
        }
    }
    function createError(input, text) {
        const parent = input;
        const parent_input = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('_error')

        parent_input.append(errorLabel)
    }
    function createErrorSelector(select, text) {
        const parent_input = select.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        
        select.classList.add("_error");

        parent_input.append(errorLabel)
    }
    
    
    let result = true;
    var selectElements = document.getElementsByClassName("select");

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
        if (input.name !== "image") {
            num += 1;
            removeError(input)
            if (num === 7){
                const secondInput = allInput[num].value;
                let onlyDigits = secondInput.replace(/\D/g, "");
                if (onlyDigits.length!==11){
                    createError(allInput[num], 'Поле не знаполнено!')
                    result = false
                }
            } else if(input.value==''){
                result = false
                createError(input, 'Поле не знаполнено!')
            }
        }
    }
    return result

}
function calculateTotal() {
    var length = parseFloat(lengthInput.value);
    var width = parseFloat(widthInput.value);
    var manufacturing = parseFloat(manufacturingSelect.value);
    var design = parseFloat(designSelect.value);
    var state = parseFloat(document.querySelector('input[name="hand"]:checked').value);
    if (!isNaN(length) && !isNaN(width) && !isNaN(manufacturing) && !isNaN(design) && !isNaN(state)) {
        var area = length * width;

        var total = (area * design + manufacturing) * state;

        document.getElementById('result').innerHTML = total + ' руб.';
    } else {
        document.getElementById('result').innerHTML = '0' + ' руб.';
    }
}

function uploadFile(file) {
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        createError(file.parentNode, 'Разрешены только изображения.')
        formImage.value = '';
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        createError(file.parentNode, 'Файл должен быть менее 2 МБ.')
        return;
    }
}
function showModal(form) {
    var modal = document.getElementById("successful");
    modal.classList.add("active"); // Добавляем класс "active", чтобы показать модальное окно
    setTimeout(function(){
        modal.classList.remove("active"); // Удаляем класс "active" через 5 секунд
        if (form) {
            form.submit(); // Отправляем форму
        }
    }, 5000);
}

var element_2 = document.getElementById('formTel');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}
var mask_2 = new IMask(element_2, maskOptions);

var lengthInput = document.getElementById('formWight');
var widthInput = document.getElementById('formHeight');
var manufacturingSelect = document.getElementById('type_manu');
var designSelect = document.getElementById('type_desi');
var stateRadios = document.querySelectorAll('input[name="hand"]');

if (lengthInput && widthInput && manufacturingSelect && designSelect && stateRadios.length > 0) {
    lengthInput.addEventListener('input', calculateTotal);
    widthInput.addEventListener('input', calculateTotal);
    manufacturingSelect.addEventListener('change', calculateTotal);
    designSelect.addEventListener('change', calculateTotal);
    stateRadios.forEach(function(radio) {
        radio.addEventListener('change', calculateTotal);
    });
}
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    if (validation_calculator(this)==true){
        showModal();
        this.submit();
    } else {
        // Если валидация не пройдена, ничего не делаем
        return false;
    }
});