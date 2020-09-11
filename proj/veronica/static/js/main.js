
// initLoading:function(){
//   var ossPre = '';
// //            var loadingImgArr = ['ditu.jpg','banner1.png','banner2.png','balloon.png','paizi.png','san.png','yun.png'];
//   var loadingImgArr = ['https://bufanui-v2.oss-cn-beijing.aliyuncs.com/web/banner_v3_1.jpg'];

//   var count = 0;
//   for(var i = 0 ; i < loadingImgArr.length ; i++){
//       var img = new Image();
//       img.src = ossPre+loadingImgArr[i];
//       img.onload = function(){
//           count++;
//           if(count == loadingImgArr.length){
//               complate();
//           }
//       }
//   }
//   function complate(){
//       $('.loading').fadeOut();
//       setTimeout(function(){
//           $('.loading').remove();
//       },100)
//   }
initloading();
function initloading() {
//loading显示部分
  var osspre = '';
  var loadingImgArr = ['./static/img/banner1.jpg','./static/img/banner2.jpg'];
  var count = 0;
  var banner = $('.home-banner .swiper-slide');
  for(var i = 0; i < loadingImgArr.length; i ++) {
    var img = new Image();
    // console.log('====>',img, $('.home-banner .swiper-slide.banner-one')[i])
    $('.home-banner .swiper-slide')[i].appendChild(img);
    img.src = osspre + loadingImgArr[i];   //????load后面
    img.onload = function() {
      count ++;
      if(count == loadingImgArr.length) {
        complate();
      }
    }
  }
}
function complate() {
  $('.loading').fadeOut();
  // setTimeout(function () { 
  //   $('.loading').remove();
  //  },100)
}
loadinnerImg();
function loadinnerImg() {
  var load = 0;
  $('.loading img').each(function(index){
    // console.log($('.loading img'),$(this)[0],'====>',this)
    this.onload = function() {
      load ++ ;
      if(load == $('.loading img').length) {
        $('.loading img').css('display','block');
        $('.loading .dots').css('display','inline-block');
      }
    }
  });
}



$('.loading .dots').each(function(index) {
  $(this).timeoutTimer = setTimeout(()=> {
    $(this).setTimer = setInterval(()=> {
      $(this).toggleClass("active");
    },600)
  },(index+1)*200) 
})
var swiperBanner = new Swiper('.home-banner', {
  slidesPerView: 1,
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 6000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  spaceBetween: 30,
  loop: true,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
});
var weddingSwiper = new Swiper('.wedding-banner', {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      var arr = ['新品/NEW', '2018春夏', '2018秋冬', '专属定制']
      return '<span class="' + className + '">' + (arr[index]) + '</span>';
    },
  },
});
var weddingSwiperM = new Swiper('.wedding-banner-m', {
  slidesPerView: 2.1,
  spaceBetween: 5,
  slidesPerGroup: 2,
  slidesPerColumn: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      var arr = ['新品/NEW', '2018春夏', '2018秋冬', '专属定制']
      return '<span class="' + className + '">' + (arr[index]) + '</span>';
    },
  },
});
var activitiesSwiper = new Swiper('.activities-c-m', {
  slidesPerView: 1.05,
  loop: true,
});
new WOW().init();











