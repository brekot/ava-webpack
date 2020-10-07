// Показать / скрыть фильтр на ПК
$('.search-line__input').click(function(){

    $('.filter-block').toggleClass('filter-block_open');
});

$(document).mouseup(function (e){

    var div = $('.search-line__panel');

    var datapic = $('#datepickers-container');

    if (!div.is(e.target) && div.has(e.target).length === 0 && !datapic.is(e.target) &&  datapic.has(e.target).length === 0)
    {
        $('.filter-block').removeClass('filter-block_open');
    }
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