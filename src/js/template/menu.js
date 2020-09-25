// Раскрытие меню на мобиле
$('.btn-menu').click(function(){

    $('.nav-mobile').addClass('nav-mobile_open');
    $('body').css({'overflow': 'hidden'});
});

$('.nav-mobile__close').click(function(){

    $('.nav-mobile').removeClass('nav-mobile_open');
    $('body').css({'overflow': 'auto'});
});