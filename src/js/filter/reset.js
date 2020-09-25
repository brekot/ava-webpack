// Главный поиск: удаление меток
$(document).on('click', '.js-label-remove', function(){

    $(this).remove();
});

// Главный поиск: удаление всех меток
$(document).on('click', '.js-label-remove-all', function(){

    $(this).prevAll('.search-line__label').remove();

    $(this).prev('.search-line__count').remove();

    $(this).prevAll('.search-line__input').val('');

    $(this).remove();
});

// Сброс фильтра
$('.js-filter-reset').click(function(){

    $(this).parents('form').find('.js-dropdown-remove').remove();

    $(this).parents('form')[0].reset();

    $('.js-label-remove-all').trigger('click');
});