var swiper = new Swiper('.wedding-swiper', {
  slidesPerView: 5,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
autoplay:true,
  // init: false,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    320: {
      centeredSlides: true,
      slidesPerView: 1.4,
      spaceBetween: 0,
    }
  }
});
