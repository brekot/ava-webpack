$('.form-input__input').keyup(function() {

    if ($(this).val() !== '')
    {
        $(this).parent('.form-input').addClass('form-input_set');
    }
    else
    {
        $(this).parent('.form-input').removeClass('form-input_set');
    }
});