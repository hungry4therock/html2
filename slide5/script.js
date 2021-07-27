var imgs=4;
var now=0;
var play;
start1();
function start1(){
    $(".imgs>img").eq(0).css("opacity","1");
    $(".dot").eq(0).css("background-color","red");
    play=setInterval(function(){slide1();},2000);
}
function slide1(){
    if(imgs==now){
        now=0;
    }else{
        now++;
    }
    $(".imgs>img").eq(now-1).stop().animate({"opacity":"0"},2000);
    $(".imgs>img").eq(now).stop().animate({"opacity":"1"},2000);
    $(".dot").eq(now-1).css("background-color","#fff");
    $(".dot").eq(now).css("background-color","red");
}
$(".btn_dot").mouseover(function(){
    clearInterval(play);
})
$(".btn_dot").mouseleave(function(){
    play=setInterval(function(){slide1();},2000);
})
$(".dot").click(function(){    
    var current_now=$(this).index();
    $(".imgs>img").eq(now).stop().animate({"opacity":"0"},2000);
    $(".imgs>img").eq(current_now).stop().animate({"opacity":"1"},2000);
    $(".dot").eq(now).css("background-color","#fff");
    $(".dot").eq(current_now).css("background-color","red");
    now=current_now;
})

$(".next").mouseover(function(){
    clearInterval(play);
})
$(".next").mouseleave(function(){
    play=setInterval(function(){slide1();},2000);
})
$(".next").click(function(){
    if(imgs==now){now=0;}else{now++;}
    $(".imgs>img").eq(now-1).stop().animate({"opacity":"0"},2000);
    $(".imgs>img").eq(now).stop().animate({"opacity":"1"},2000);
    $(".dot").eq(now-1).css("background-color","#fff");
    $(".dot").eq(now).css("background-color","red");
})
$(".prev").mouseover(function(){
    clearInterval(play);
})
$(".prev").mouseleave(function(){
    play=setInterval(function(){slide1();},2000);
})
$(".prev").click(function(){
    if(now==0){
        $(".dot").eq(now).css("background-color","#fff");
        now=4;
    }else{
        now--;
    }
    
    $(".imgs>img").eq(now+1).stop().animate({"opacity":"0"},2000);
    
    $(".imgs>img").eq(now).stop().animate({"opacity":"1"},2000);
    $(".dot").eq(now+1).css("background-color","#fff");
    $(".dot").eq(now).css("background-color","red");
})