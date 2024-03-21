var element = document.getElementById('formTel');
var element_2 = document.getElementById('phone_modal');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}
if (element) {
    var mask = new IMask(element, maskOptions);
}

if (element_2) {
    var mask_2 = new IMask(element_2, maskOptions);
}