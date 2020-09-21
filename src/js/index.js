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
    
    $('.filter-block__line').click(function(){

        $(this).children('input').focus();
    });

    $(".filter-block__input").keyup(function() {

        if ($(this).val() !== '')
        {
            $(this).parent('.filter-block__line').addClass('filter-block__line_set');
        }
        else
        {
            $(this).parent('.filter-block__line').removeClass('filter-block__line_set');
        }
    });

    $('.filter-select-dropdown__checkbox').on('change', function(){

        $(this).parents('.jq-dropdown').prev().find('.search-line__label').remove();
        
        $(this).parents('.jq-dropdown').find('.filter-select-dropdown__checkbox:checked').each(function(){

            $(this).parents('.jq-dropdown').prev().prepend('<a href="javascript:;" class="search-line__label">' + $(this).val() + '<span class="search-line__label-icon font-md"></span></a>')
        });
    });
});