document.addEventListener('DOMContentLoaded', function () {


    //  JS slide
    let slideUp = (target, duration = 500) => {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            //alert("!");
        }, duration);
    }

    let slideDown = (target, duration = 500) => {
        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;

        if (display === 'none')
            display = 'block';

        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }
    var slideToggle = (target, duration = 500) => {
        if (window.getComputedStyle(target).display === 'none') {
            return slideDown(target, duration);
        } else {
            return slideUp(target, duration);
        }
    }

    // slideUp(document.getElementById("target"), 200);
    // slideDown(document.getElementById("target"), 200);
    // slideToggle(document.getElementById("target"), 200);


    // text__slider
    const textSlider = new Swiper('.text__slider', {
        loop: true,
        spaceBetween: 6,
        grabCursor: true,
        slidesPerView: "auto",
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        allowTouchMove: false,
        freeMode: false,
        speed: 5000,
        freeModeMomentum: false,
    });


    // clients__slider
    const clientsSlider = new Swiper('.clients__slider', {
        loop: true,
        spaceBetween: 8,
        grabCursor: true,
        slidesPerView: "auto",
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        allowTouchMove: false,
        freeMode: false,
        speed: 5000,
        freeModeMomentum: false,
    });


    // show/hide price content
    const priceButton = document.querySelectorAll('.price__content .button')

    priceButton?.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active')
            slideToggle(this.closest('.content__inner').querySelector('.hide__content'), 200);
        })
    })


    // faq
    const faqTabs = document.querySelectorAll('.faq_tabs')

    faqTabs?.forEach(el => {
        const faqTitle = el.querySelectorAll('.faq_tabs .title')
        faqTitle?.forEach(title => {
            title.addEventListener('click', function () {
                this.classList.toggle('active')
                slideToggle(this.nextElementSibling, 200);
            })
        })
    })


    //  tooltip
    const breakpoint = window.matchMedia('(max-width: 575px)');
    const tooltip = document.querySelectorAll('.footer__pay li')

    tooltip?.forEach(el => {
        el.addEventListener('mouseenter', (event) => {
            el.classList.add('active')
            setTimeout(function () {
                el.classList.remove('active')
            }, 3000);
        });
        el.addEventListener('mouseleave', (event) => {
            el.classList.remove('active')
        });
    })

    if (breakpoint.matches) {
        tooltip?.forEach(el => {
            setTimeout(function () {
                el.classList.remove('active')
            }, 3000);
        })

    }


    Fancybox.bind("[ data-fancybox-video]", {
        mainClass: "standart_modal",
        thumbs: false,
        hash: false,
        infinite: false,
        backFocus: false,
        trapFocus: false,
        placeFocusBack: false,
    });


});


const YA_METRIKA_ID = 99004910;
document.addEventListener("DOMContentLoaded", () => {
    const interval = setInterval(() => {
        if (!window['ym']) return;
        clearInterval(interval);
        window['ym'](YA_METRIKA_ID, 'getClientID', (clientID) => {
            const links = document.querySelectorAll(".custom-link");
            if (links.length) {
                for(const link of links) {
                    let href = link.getAttribute('href');
                    href = href.replace('start=titaniumvpn-lt', `start=titaniumvpn-lt_client-id_${clientID}`);
                    link.href = href;
                }
            }
        });
    }, 1000);
});
