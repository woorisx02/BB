
$(function(){
    $('#trigger').click(function(){
        $(this).toggleClass('active');
        $('#main-menu-bg').toggleClass('active');
        $('#main-menu').toggleClass('active');
        $('body').toggleClass('active');
        $('h1').toggleClass('active');
    });
});