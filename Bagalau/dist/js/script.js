document.addEventListener('DOMContentLoaded', function () {
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.getElementById('menu');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });

    let menuListDropdown = document.querySelector('.menu-list__dropdown');
    let menuList = document.querySelector('.menu-list__container');

    document.addEventListener('click', function (e) {
        let target = e.target;
        let box = target.closest('.city');

    });

    delegate(menuList, '.js-anchor', 'click', function(e){
        e.preventDefault();

        let target = document.querySelector(this.hash);
        scrollToElem(target);
        setActiveMenuItem(menuList, this);
    });

    let hash = window.location.hash;
    let autoTarget = hash.length > 0 ? document.querySelector(hash) : null;

    if(autoTarget !== null){
        scrollToElem(autoTarget);
        setActiveMenuItem(menuList, menuList.querySelector(`[href$="${hash}"]`));
    }

    delegate(document, '.menu-list__dropdown, html', 'click', function(e){
        if (this.closest('.dropdown-menu')) {
            let dropdown = this.closest('.dropdown-menu').querySelector('.dropdown-menu__list');
            let cl = dropdown.classList;
            let animation = dropdown.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], { duration: 100 });

            if(cl.contains('active')){
                animation.addEventListener('finish', function(){
                    cl.remove('active');
                });
            }
            else{
                cl.add('active');
                dropdown.animate([
                    { opacity: 0 },
                    { opacity: 1 }
                ], { duration: 100 });
            }
        } else {
            let dropdownLists = document.querySelectorAll('.dropdown-menu__list');

            dropdownLists.forEach(dropdownList => {
                let cl = dropdownList.classList;
                let animation = dropdownList.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], { duration: 100 });

                if(cl.contains('active')){
                    animation.addEventListener('finish', function(){
                        cl.remove('active');
                    });
                }
            });
        }


    });

    const servicesSlider = new Swiper('.services__slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 26,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },

        breakpoints: {
            576: {
                slidesPerView: 3,
            },

            0: {
                slidesPerView: 1,
            },
        },

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

        breakpoints: {
            1200: {
                slidesPerView: 4.5,
            },
            992: {
                slidesPerView: 3.5,
            },
            576: {
                slidesPerView: 2.5,
            },

            0: {
                slidesPerView: 1,
            },
        },

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

    let wayUp = document.querySelectorAll('.way--up');
    let wayLeft = document.querySelectorAll('.way--left');
    let wayRight = document.querySelectorAll('.way--right');
    let clientWindowHeight = document.documentElement.clientHeight;

    wayUp.forEach(element => {
        new Waypoint({
            element: element,
            handler: function() {
                this.element.classList.add('way--active');
            },
            offset: clientWindowHeight * 0.8
        })
    });

    wayLeft.forEach(element => {
        new Waypoint({
            element: element,
            handler: function() {
                this.element.classList.add('way--active');
            },
            offset: clientWindowHeight * 0.8
        })
    });

    wayRight.forEach(element => {
        new Waypoint({
            element: element,
            handler: function() {
                this.element.classList.add('way--active');
            },
            offset: clientWindowHeight * 0.8
        })
    });
});

$(document).ready(function() {
    $('.js-select').niceSelect();
});

function delegate(box, selector, eventName, handler){
    box.addEventListener(eventName, function(e){
        let elem = e.target.closest(selector);

        if(elem !== null && box.contains(elem)){
            handler.call(elem, e);
        }
    });
}

function setActiveMenuItem(menu, item){
    menu.querySelectorAll('a').forEach(link => link.classList.remove('menu__link-active'));
    item.classList.add('menu__link-active');
}

function scrollToElem(el){
    let top = el.offsetTop - 70;

    window.scrollTo({
        top,
        behavior: "smooth"
    });
}
