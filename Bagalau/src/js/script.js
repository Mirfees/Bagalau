document.addEventListener('DOMContentLoaded', function () {
    const servicesSlider = new Swiper('.services__slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 26,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.services__slider-next',
            prevEl: '.services__slider-prev',
        },

    });

    servicesSlider.autoplay;

    const licenseSlider = new Swiper('.license__slider', {
        loop: true,
        slidesPerView: 4.5,
        spaceBetween: 25,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.license__slider-next',
            prevEl: '.license__slider-prev',
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });

    Fancybox.bind("[data-fancybox]", {
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: [
                    "zoomIn",
                    "zoomOut",
                    "toggle1to1",
                    "rotateCCW",
                    "rotateCW",
                ],
                right: ["slideshow", "thumbs", "close"],
            },
        },
    });
});