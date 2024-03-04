document.addEventListener('DOMContentLoaded', function () {
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.getElementById('menu');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });

    let menuList = document.querySelector('.menu-list__container');

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
            setActiveMenuItem(menuList, this);
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

    phoneMatrix('[type="tel"]', '+7 (___) ___ __ __');

    let clientWindowHeight = document.documentElement.clientHeight;
    let ways = {
        "wayUp": document.querySelectorAll('.way--up'),
        "wayLeft": document.querySelectorAll('.way--left'),
        "wayRight": document.querySelectorAll('.way--right')
    };

    for (key in ways) {
        ways[key].forEach(element => {
            new Waypoint({
                element: element,
                handler: function() {
                    this.element.classList.add('way--active');
                },
                offset: clientWindowHeight * 0.8
            })
        });
    }

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
    menu.querySelectorAll('a').forEach(link => link.classList.remove('active'));
    item.classList.add('active');
}

function scrollToElem(el){
    let top = el.offsetTop - 70;

    window.scrollTo({
        top,
        behavior: "smooth"
    });
}

function phoneMatrix(selector, matrix = '+7 (___) ___ __ __') {
    [].forEach.call( document.querySelectorAll(selector), function(input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) : a
                });
            i = new_value.indexOf("_");
            if (i !== -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substring(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });
}