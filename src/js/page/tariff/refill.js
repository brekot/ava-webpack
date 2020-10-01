$('.js-refill-reset').click(function(){

    $(this).parents('.js-refill-block').find('input[type="text"]').each(function(){

        $(this).val('');

        $(this).trigger('keyup');
    });
});