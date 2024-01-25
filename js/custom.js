$(function () {


    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.mySwiper .swiper-slide').on('afterChange', function (e, s, c) {
        console.log(e, s, c); // c=0,1
        $('.mainVisual .right_dots li').removeClass('on');
        $('.mainVisual .right_dots li').eq(c).addClass('on');
        $('.mainVisual .num span').text('0' + (c + 1));

        const current = $('.mainVisual .visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.grid_tab .tit .right .tab_tit li a').on('click', function (e) {
        // 1. a를 클릭했을 떄 새로고침 되지않게 하기
        e.preventDefault();
        // 2. 번호를 받아오기
        let idx = $(this).parent().index();
        // 3. 번호에 부합하는 .tab_con>li를 보야주기
        $('.grid_tab .grid_tab_wrap').removeClass('on');
        $('.grid_tab .grid_tab_wrap').eq(idx).addClass('on');

        //4. 메뉴에 스타일 붙이기
        $('.grid_tab .tit .right .tab_tit li a').removeClass('on');
        $('.grid_tab .tit .right .tab_tit li a').eq(idx).addClass('on');
    });

    var swiper = new Swiper(".banner_slide", {
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".ramen_wrap", {
        centeredSlides: true,
        spaceBetween: 30,

        slidesPerView: 4,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


});
