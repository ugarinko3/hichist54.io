$(document).ready(function(){
    $('label[for="one"]').click(function(event) {
        $('.box_one').toggleClass('active');
        if ($('.box_two').hasClass('active')) {
            $('.box_two').removeClass('active');
        }
        if ($('.box_three').hasClass('active')) {
            $('.box_three').removeClass('active');
        }
    });
    $('label[for="two"]').click(function(event) {
        $('.box_two').toggleClass('active');
        if ($('.box_one').hasClass('active')) {
            $('.box_one').removeClass('active');
        }
        if ($('.box_three').hasClass('active')) {
            $('.box_three').removeClass('active');
        }
    });
    $('label[for="three"]').click(function(event) {
        $('.box_three').toggleClass('active');
        if ($('.box_two').hasClass('active')) {
            $('.box_two').removeClass('active');
        }
        if ($('.box_one').hasClass('active')) {
            $('.box_one').removeClass('active');
        }
    });
});
