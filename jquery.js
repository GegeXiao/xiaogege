$(function () {
    var colors = ["red", "green", "hotponk", "pink", "cyan", "yellowgreen", "purple", "deepskyblue"];
    $("#btn").click(function () {
        var randomColor = parseInt(Math.random() * colors.length);
        // console.log(randomColor);

        var randomY = parseInt(Math.random() * 40);
        // console.log(randomY);
        $("<span></span>")//创建span
            .text($("#text").val())//设置内容
            .css("color", colors[randomColor])//设置字体颜色
            .css("left", "1800px")//设置lefe值
            .css("top", randomY)//设置top值
            .css("fontSize", randomY)
            .animate({ left: -2000 }, 30000,function(){
                $(this).remove();
            })
            .appendTo("#boxDom");
        $(".text").val("");
        console.log($(window).width());
        
    });
});