// main.js
document.addEventListener("DOMContentLoaded", function () {
    //AOS 세팅
    AOS.init({
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "linear",
    });


    //스크롤시 헤더 스타일 변경
    $(window).scroll(function () {
        var logo = $(".logo");
        var ham = $(".menu_btn");
        var scrollTop = $(window).scrollTop();

        // 각 섹션의 위치 정보
        var section2Top = $(".section2").offset().top;
        var section3Top = $(".section3").offset().top;
        var section4Top = $(".section4").offset().top;
        var section5Top = $(".section5").offset().top;
        var section6Top = $(".section6").offset().top;
        var section7Top = $(".section7").offset().top;
        var section8Top = $(".section8").offset().top;
        var section9Top = $(".section9").offset().top;

        // 스크롤 이벤트에 따라 스타일 변경
        if (scrollTop >= section2Top && scrollTop < section3Top) {
            // 스크롤이 section2에 있는 경우
            logo.addClass("scrolled");
            ham.addClass("scrolled");
        } else if (scrollTop >= section4Top && scrollTop < section5Top) {
            // 스크롤이 section4에 있는 경우
            logo.addClass("scrolled");
            ham.addClass("scrolled");
        } else if (scrollTop >= section6Top && scrollTop < section7Top) {
            // 스크롤이 section6에 있는 경우
            logo.addClass("scrolled");
            ham.addClass("scrolled");
        } else if (scrollTop >= section8Top && scrollTop < section9Top) {
            // 스크롤이 section8에 있는 경우
            logo.addClass("scrolled");
            ham.addClass("scrolled");
        } else {
            // 스크롤이 다른 곳에 있는 경우
            logo.removeClass("scrolled");
            ham.removeClass("scrolled");
        }
    });


    //햄버거메뉴 영역
    $(".menu_btn").click(function () {
        $(this).toggleClass("on");
        $(this).find("span").toggleClass("on");
        $(".menu_link").toggleClass("on");
    });

}); ////////////////////js///////////////////////
