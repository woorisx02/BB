
$(function(){
    $('.login-btn').click(function(){
        $('.login-box').css('display', 'block');
    });
    $('.login-box > button').click(function(){
        $('.login-box').css('display','none');
    });
});

