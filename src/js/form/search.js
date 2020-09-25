// Подсказка при вводе
$('.form-search__input').keyup(function() {

    if ($(this).val() !== '')
    {
        $(this).parent('.form-search').addClass('form-search_set');
    }
    else
    {
        $(this).parent('.form-search').removeClass('form-search_set');
    }
});

// Фокус на инпуте
$('.form-search').click(function(){

    $(this).children('input').focus();
});