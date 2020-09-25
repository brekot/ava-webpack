import dropdown from './lib/jquery.dropdown';
import mousewheel from './lib/jquery.mousewheel';
import jscrollpane from './lib/jquery.jscrollpane.min';
import filedrag from './lib/filedrag';
import a from './lib/datepicker.js';

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

    require('./template/menu');

    require('./form/input');

    require('./form/select');

    require('./form/search');

    require('./form/date');

    require('./filter/show');

    require('./filter/reset');
});