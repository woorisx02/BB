$(function(){
    $(window).scroll(function(){
        var h = $(document).scrollTop();
        if(h){
            $('header').addClass('hd-background');
        }else{
            $('header').removeClass('hd-background');
        }
        
    });
    
});