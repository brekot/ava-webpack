$('.js-calc-input').on('keyup', function() {

    var num = $(this).val();

    if (!num) num = 0;

    $('.js-calc-count').text(num);

    num *= $('.js-calc-price').val();

    $('.js-calc-summ').text(num.toLocaleString('ru'));
});

$('.js-calc-clear').click(function(){

    $('.js-calc-input').val('');

    $('.js-calc-summ').text('0');

    $('.js-calc-count').text('0');
});