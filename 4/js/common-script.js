$(function(){
    $(window).scroll(function(){
        var scrollHeight = $(document).scrollTop();
        if(scrollHeight>300){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
        
    });
    
});