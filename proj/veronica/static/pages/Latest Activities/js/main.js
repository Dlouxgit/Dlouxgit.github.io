var swiper = new Swiper('.acitivity-details', {
  slidesPerView: 1,
  slidesPerColumn: 3,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});
$('.acitivity-details .swiper-slide').on('mouseenter',function() {

  $(this).css('animation','text-detail .3s ease-in 1 both');
});
$('.acitivity-details .swiper-slide').on('mouseleave',function() {
  $(this).css('animation','none')
});
