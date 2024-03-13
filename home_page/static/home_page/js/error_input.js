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



document.getElementById('form_name_phone').addEventListener('submit', function(event){
    event.preventDefault()
    if (validation(this)==true){

    }
});
document.getElementById('form_calculator').addEventListener('submit', function(event){
    event.preventDefault()
    if (validation(this)==true){

    }
});

