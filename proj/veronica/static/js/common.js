$('.header-c-m .hamburger').on('touchstart', function () {
  $(this).toggleClass("active");
  // $('.header').css('height','100%')
  $('.header').toggleClass("touchactive");
  $('body').toggleClass("active");
  $(".container").toggleClass("filter");
  $('.header-c-m .nav-list').fadeToggle(150);
});



function windowScrollTop() {
  return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
}
function toupMOve(ele, target) {
  clearInterval(ele.timer);
  ele.timer = setInterval(function () {
    var start = ele.offsetTop;
    step = (target - start) / 10;
    start += step;
    if (Math.abs(step) < 1) {
      step = step > 0 ? 1 : -1;
    }
    ele.style.top = start + "px";
    if (start == target) {
      clearInterval(ele.timer);
    }
  }, 17);
}

window.onload = function () {
  var oldTop = $('.toup').offset().top;
  $(window).on('scroll', function () {

    if (windowScrollTop() >= 80) {
      $('.header').addClass("active");
    } else {
      $('.header').removeClass("active");
    }
    if(windowScrollTop()>600) {
      $('.toup').css('opacity',0.9)
    }else {
      $('.toup').css('opacity',0)
    }
      var target = oldTop + windowScrollTop();
      toupMOve($('.toup')[0],target)
  })
}


