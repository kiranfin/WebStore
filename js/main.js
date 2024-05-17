let swiperCards = new Swiper('.cardcontent', {
    loop: true,
    spaceBetween: 32,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    slidesPerView: 3,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});