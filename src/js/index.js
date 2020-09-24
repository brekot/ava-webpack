import dropdown from './jquery.dropdown';
import mousewheel from './jquery.mousewheel';
import jscrollpane from './jquery.jscrollpane.min';
import filedrag from './filedrag';

require('@fancyapps/fancybox');

$(function() {

    /* - - - Подключение fancybox - - - */
    $('[data-fancybox]').fancybox({
        buttons: [
            "zoom",
            //"share",
            "slideShow",
            "fullScreen",
            //"download",
            //"thumbs",
            "close"
        ],
        touch: {
            vertical: false
        },
    });

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

    // Подсказка при вводе
    $('.filter-search__input').keyup(function() {

        if ($(this).val() !== '')
        {
            $(this).parent('.filter-search').addClass('filter-search_set');
        }
        else
        {
            $(this).parent('.filter-search').removeClass('filter-search_set');
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

        $('.js-label-remove-all').trigger('click');
    });

    require('./form/input');

    require('./form/select');
});