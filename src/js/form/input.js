$('.form-input__input').each(function(){

    if ($(this).val() !== '')
    {
        $(this).parent('.form-input').addClass('form-input_set');
    }
});

$(document).on('keyup', '.form-input__input', function() {

    if ($(this).val() !== '')
    {
        $(this).parent('.form-input').addClass('form-input_set');
    }
    else
    {
        $(this).parent('.form-input').removeClass('form-input_set');
    }
});