document.addEventListener('DOMContentLoaded', function () {
    const servicesSlider = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 26,
        autoplay: 1000,

        // Navigation arrows
        navigation: {
            nextEl: '.services__slider-next',
            prevEl: '.services__slider-prev',
        },
    });
});