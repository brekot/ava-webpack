// Селект: простановка меток
$('.form-select-dropdown__checkbox').on('change', function(){

    var elemParent = $(this).parents('.jq-dropdown');

    var elemParentPrev = elemParent.prev();

    var elemAll = elemParent.find('.form-select-dropdown__checkbox');

    elemParentPrev.find('.filter-label').remove();

    elemParent.find('.form-select-dropdown__checkbox:checked').each(function(){

        elemParentPrev.prepend('<a href="javascript:;" data-num="' + elemAll.index(this) + '" class="js-dropdown-remove filter-label">' + $(this).next('.form-select-dropdown__name').text() + '<span class="filter-label__icon font-md"></span></a>')
    });
});

// Селект: удаление меток
$(document).on('click', '.js-dropdown-remove', function(){

    var intNum = $(this).data('num');

    $(this).parents('.form-select').find('.form-select-dropdown__checkbox').eq(intNum).prop('checked', false);

    $(this).remove();
});