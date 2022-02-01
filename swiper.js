//
// prices section swiper gallery
//

var pricing = new Swiper(".pricing-swiper", {
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
            spaceBetween: 120,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
    },
});

//
// Reviews section swiper gallery
//

var swiper = new Swiper(".reviews-swiper", {
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
            spaceBetween: 120,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
    },
});