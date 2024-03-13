var element = document.getElementById('phone_calculator');
var element_2 = document.getElementById('phone_modal');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
} 
var mask_2 = new IMask(element_2, maskOptions);
var mask = new IMask(element, maskOptions);