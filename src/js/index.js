import dropdown from './jquery.dropdown';
import mousewheel from './jquery.mousewheel';
import jscrollpane from './jquery.jscrollpane.min';

$(function() {

    // Полоса прокрутки
    $('.scroll-pane').jScrollPane({
		showArrows: true,
		autoReinitialise: true
	});

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
    $('.search-line__input').click(function(){

        $('.filter-block').toggleClass('filter-block_open');
    });

    $(document).mouseup(function (e){

		var div = $('.search-line__panel');

		if (!div.is(e.target) && div.has(e.target).length === 0)
        {
			$('.filter-block').removeClass('filter-block_open');
		}
	});

    // Селект: установка меток
    $('.filter-select-dropdown__checkbox').on('change', function(){

        var elemParent = $(this).parents('.jq-dropdown');

        var elemParentPrev = elemParent.prev();

        var elemAll = elemParent.find('.filter-select-dropdown__checkbox');

        elemParentPrev.find('.filter-label').remove();

        elemParent.find('.filter-select-dropdown__checkbox:checked').each(function(){

            elemParentPrev.prepend('<a href="javascript:;" data-num="' + elemAll.index(this) + '" class="js-dropdown-remove filter-label">' + $(this).next('.filter-select-dropdown__name').text() + '<span class="filter-label__icon font-md"></span></a>')
        });
    });

    // Главный поиск: удаление меток
    $(document).on('click', '.js-label-remove', function(){

        $(this).remove();
    });

    // Главный поиск: удаление всех меток
    $(document).on('click', '.js-label-remove-all', function(){

        $(this).prevAll('.search-line__label').remove();

        $(this).prev('.search-line__count').remove();

        $(this).remove();
    });

    // Селект: удаление меток
    $(document).on('click', '.js-dropdown-remove', function(){

        var intNum = $(this).data('num');

        $(this).parents('.filter-select').find('.filter-select-dropdown__checkbox').eq(intNum).prop('checked', false);

        $(this).remove();
    });

    // Инпут подсказка при вводе
    $('.filter-input__input, .filter-search__input').keyup(function() {

        if ($(this).val() !== '')
        {
            $(this).parent('.filter-input').addClass('filter-input_set');
        }
        else
        {
            $(this).parent('.filter-input').removeClass('filter-input_set');
        }
    });

    // Фокус на инпуте
    $('.filter-search').click(function(){

        $(this).children('input').focus();
    });

    // Показать/скрыть фильтр на мобильнике
    $('.search-line__filter').click(function(){

        $('.filter-block').addClass('filter-block_open');
        $('body').css({'overflow': 'hidden'});
    });

    $('.filter-block__close').click(function(){

        $('.filter-block').removeClass('filter-block_open');
        $('body').css({'overflow': 'auto'});
    });

    // Сброс фильтра
    $('.js-filter-reset').click(function(){

        $(this).parents('form').find('.js-dropdown-remove').remove();
        
        $(this).parents('form')[0].reset();
    });
});