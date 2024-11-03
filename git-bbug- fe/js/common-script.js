$(function(){


    $('#trigger').click(function(event){
        $('#main-menu').toggleClass('on');
        $('.bn-shadow').toggleClass('on');
        $('.draw-bg').toggleClass('on');
        $('nav').toggleClass('on');
        $('body').toggleClass('active');
        $('#trigger > i:nth-child(1)').toggleClass('active');
        $('#trigger > i:nth-child(2)').toggleClass('show');
        
        
    });

    $(window).scroll(function(){
        var scrollHeight = $(document).scrollTop();
        if (scrollHeight >= 300) {
            $('header').addClass('active');
          
        } else {
            $('header').removeClass('active');
           
        }
    });

    var currentIndex = 0;
    var slidePosition;
    
    setInterval(function(){
        if(currentIndex < 2) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        } slidePosition = currentIndex * (-400) +"px";
        
        $(".sp-item-slides").animate({top: slidePosition}, 400);
    },3000);

});






