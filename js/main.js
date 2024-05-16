const swiper = new Swiper(".swiper", {
    direction: 'vertical',
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
