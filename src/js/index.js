import dropdown from './jquery.dropdown.min';

$(function() {

    // Выпадающие плашки
    $('.jq-dropdown a').click(function(){

        $('.jq-dropdown').hide();
        $('.jq-dropdown-open').removeClass('jq-dropdown-open');
    });

    $('.page-counter__selector a').click(function(){

        $('.page-counter__label-count').text($(this).data('val'));
    });

    // Раскрытие меню на мобиле
    $('.btn-menu').click(function(){

        $('.nav-mobile').addClass('nav-mobile_open');
        $('body').css({'overflow': 'hidden'});
    });

    $('.nav-mobile__close').click(function(){

        $('.nav-mobile').removeClass('nav-mobile_open');
        $('body').css({'overflow': 'auto'});
    });

    // Показать / скрыть фильтр на ПК
    $('.search-line__inner').click(function(){

        $('.filter-block').toggleClass('filter-block_open');
    });

    $(document).mouseup(function (e){

		var div = $('.search-line__panel');

		if (!div.is(e.target) && div.has(e.target).length === 0)
        {
			$('.filter-block').removeClass('filter-block_open');
		}
	});

    //
    $('.filter-block__line').click(function(){

        $(this).children('input').focus();
    });

    $('.filter-block__input').keyup(function() {

        if ($(this).val() !== '')
        {
            $(this).parent('.filter-block__line').addClass('filter-block__line_set');
        }
        else
        {
            $(this).parent('.filter-block__line').removeClass('filter-block__line_set');
        }
    });

    // 
    $('.filter-select-dropdown__checkbox').on('change', function(){

        var elemParent = $(this).parents('.jq-dropdown');

        var elemParentPrev = elemParent.prev();

        var elemAll = elemParent.find('.filter-select-dropdown__checkbox');

        elemParentPrev.find('.filter-label').remove();

        elemParent.find('.filter-select-dropdown__checkbox:checked').each(function(){

            elemParentPrev.prepend('<a href="javascript:;" data-num="' + elemAll.index(this) + '" class="filter-label">' + $(this).next('.filter-select-dropdown__name').text() + '<span class="filter-label__icon font-md"></span></a>')
        });
    });
});