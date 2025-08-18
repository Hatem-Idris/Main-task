
var thumbsSwiper = new Swiper(".swiper-thumbs", {
    spaceBetween: 0,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
});

var mainSwiper = new Swiper(".swiper-main", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000, disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thumbsSwiper,
    },
});