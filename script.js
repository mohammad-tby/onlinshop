let timer={};
$('#menu_top > li').hover(function (){
    let tag=$(this);
    let timerattr=tag.attr('data-timer');
    clearTimeout(timer[timerattr]);
    timer= setTimeout(function (){
        $('>ul',tag).fadeIn(0);
        tag.addClass('active_menu');
        $('>.top_menu3',tag).fadeIn(0);
    },3000)
},function (){
    let tag=$(this);
    let timerattr=tag.attr('data-timer');
    clearTimeout(timer[timerattr]);
    timer= setTimeout(function (){
        $('>ul',tag).fadeOut(0);
        tag.removeClass('active_menu');
        $('>.top_menu3',tag).fadeOut(0);
    },3000)
})