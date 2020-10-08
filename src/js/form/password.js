$('.password-icon').click(function(){

    $(this).toggleClass('password-icon_active');

    if ($(this).hasClass('password-icon_active'))
    {
        $(this).prevAll('input')[0].type = "text";
    }
    else
    {
        $(this).prevAll('input')[0].type = "password";
    }
});