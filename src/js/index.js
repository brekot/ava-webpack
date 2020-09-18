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
});