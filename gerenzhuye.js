$(function () {
    var name = '';
    $(".menue-child").mouseenter(function () {
        $(this).css("background", "url(images/menue.png) no-repeat 0px -200px").siblings().css("background", "url()");
        $("[id =" + name + "]").css("background", "url(images/menue.png) no-repeat 0px -200px");
    })
    $(".menue-child").mouseleave(function () {
        $(this).css("background", "url()");
        $("[id =" + name + "]").css("background", "url(images/menue.png) no-repeat 0px -200px");
    })
    $(".menue-child").click(function () {
        $(this).css("background", "url(images/menue.png) no-repeat 0px -200px");
        $(this).siblings().css("background", "url()");
        name = $(this).attr("id");
        $(".info img").css("display", "none");
        $(".info img").attr("src", "images/" + $(this).attr("id") + ".png").stop().slideDown(500);
    })
})