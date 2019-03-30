$(function () {
    //dropdown menu side and hide menu side
    $(".header__dropdown").click(function () {
        $(".header__list-right").slideToggle();
    });
    $(window).resize(function () {
        if (window.innerWidth > 990){
            $(".header__list-right").hide();
        }
    });
    //go to top
    $("#goTop").click(function(){
        $("html, body").stop().animate({ scrollTop: 0 }, 600);
        return false;
    });
    //show ul menu
    $(".header__list-right ul li").has("ul.nav").append("<i class='la la-angle-down'></i>");
    $(".header__list-right ul li>a,.header__list-right ul li>i").click(function (e) {
        e.preventDefault();
        $(this).parent().children("ul.lv2").slideToggle().parent().children("i").toggleClass("la-angle-down").toggleClass("la-angle-up");
        $(this).parent().siblings().children("ul.lv2").slideUp();
        if ($(this).parent().siblings().children("i").hasClass("la-angle-up")===true){
            $(this).parent().siblings().children("i").removeClass("la-angle-up").addClass("la-angle-down");
        }

    });
    $(".header__menu .nav-item:not(.current)").hover(function () {
        $(this).toggleClass("active");
    });
//tab article click
    let li =$(".feature__recent li");
    li.click(function () {
    $(".feature__recent li").removeClass("clicked");
    $(this).addClass("clicked");
    let index = li.index($(this))+1;
    $(`.feature__new.tab${index}`).show().siblings().hide();
    //category change listview

});
});