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
$('.acitivity-details .swiper-slide').on('mouseenter', function () {

  $(this).css('animation', 'text-detail .3s ease-in 1 both');
});
$('.acitivity-details .swiper-slide').on('mouseleave', function () {
  $(this).css('animation', 'none')
});

function loadJScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://api.map.baidu.com/api?v=2.0&ak=HcXs2rnlNZ1BGQv0zim9Z5ljoZpmdBjl&callback=init";
  document.body.appendChild(script);
}
function init() {
  var map = new BMap.Map("baiduaddr");            // 创建Map实例
  var point = new BMap.Point(113.64964385, 34.75661006); // 创建点坐标

  map.enableScrollWheelZoom();                 //启用滚轮放大缩小
  map.centerAndZoom(point, 15);

  //创建小狐狸
  var pt = new BMap.Point(113.64964385, 34.75661006);
  var myIcon = new BMap.Icon("../../img/v.png", new BMap.Size(100, 100));
  var marker = new BMap.Marker(pt, { icon: myIcon });
  map.addOverlay(marker);              // 将标注添加到地图中
  marker.setAnimation(BMAP_ANIMATION_BOUNCE);
  var top_right_navigation = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL });
  map.addControl(top_right_navigation);    
}

$(function() {
  loadJScript();
})
