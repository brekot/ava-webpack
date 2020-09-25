$(document).on('focusout', '.form-date__input', function() {

    if ($(this).val() !== '')
    {
        $(this).parent('.form-date').addClass('form-date_set');
    }
    else
    {
        $(this).parent('.form-date').removeClass('form-date_set');
    }
});