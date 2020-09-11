var swiper = new Swiper('.wedding-swiper', {
  slidesPerView: 6,
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
      slidesPerView: 4,
      spaceBetween: 50,
    },
    640: {
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 50,
    },
    320: {
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});