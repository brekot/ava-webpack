<a href="https://brekot.github.io/ava-webpack/tasks.html">Список задач</a><br>
<a href="https://brekot.github.io/ava-webpack/task.html">Карточка задачи</a><br>
<a href="https://brekot.github.io/ava-webpack/equipment.html">Оборудование</a><br>
<a href="https://brekot.github.io/ava-webpack/profile.html">Профиль</a><br>
<a href="https://brekot.github.io/ava-webpack/tariff-main.html">Тариф</a><br>
<a href="https://brekot.github.io/ava-webpack/tariff-income.html">Пополнения</a><br>
<a href="https://brekot.github.io/ava-webpack/tariff-payment.html">Списания</a><br>
<a href="https://brekot.github.io/ava-webpack/tariff-hours.html">Часы</a><br>
<a href="https://brekot.github.io/ava-webpack/tariff-refill.html">Пополнить счет</a><br>
<a href="https://brekot.github.io/ava-webpack/text.html">Текстовая страница</a><br>
<a href="https://brekot.github.io/ava-webpack/registration.html">Регистрация</a><br>

<hr>

Папка /docs - для разработчика. Содержит готовые файлы верски. Остальные файлы и папки служебные.

<hr>

<b>Подключены в JS:</b><br>
<ul>
    <li>jQuery и jquery.mousewheel.js</li>
    <li>jQuery.dropdown - для всплывающих элементов (https://www.jqueryscript.net/demo/Bootstrap-style-jQuery-Drop-Down-Plugin-dropdown/)</li>
    <li>jScrollPane - для полосы прокрутки (http://jscrollpane.kelvinluck.com/)</li>
    <li>fancybox - для окон (https://fancyapps.com/fancybox/3/)</li>
    <li>datePicker - для выбора даты (http://t1m0n.name/air-datepicker/docs/index-ru.html)</li>
</ul>

<hr>

<b>Bootstrap используются только классы:</b><br>
<ul>
    <li>.container</li>
    <li>.row</li>
    <li>.col-*</li>
    <li>.d-*-none</li>
	<li>.d-*-flex</li>
    <li>.d-*-block</li>
    <li>.d-*-inline</li>
    <li>.d-*-inline-flex</li>
	<li>.d-*-inline-block</li>
</ul>

<hr>

<pre>
// Открыть окно
$.fancybox.open({
    src: '#w1', // id окна
    type : 'inline',
    opts : {
        beforeShow : function( instance, current ) {

            // Перед открытием обращаемся к этому окну (current.src) находим в нем заголовок (window-one__head-title) и заменем текст
            $(current.src).find('.window-one__head-title').text('Новый Заголовок окна большого');
        }
    }
});
</pre>
