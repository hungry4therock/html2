$(".menu>li").mouseover(function(){
        $(".submenu_back").stop().slideDown();
        $(".submenu").stop().slideDown();        
    
})
$(".menu>li").mouseleave(function(){    
        $(".submenu_back").stop().slideUp();
        $(".submenu").stop().slideUp();       
 
})



