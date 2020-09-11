; (function () {
    function MySwiper(className,imgs) {
        this.className = className;
        this.wraper = document.querySelector(className);
        this.imgs = imgs;
        this.init();
    }
   
    MySwiper.prototype = {
        constructor : MySwiper,
        init: function () {
            this.CreatHtml();
            this.swiper = this.wraper.children[0];
            this.slide = this.swiper.children;
            this.count = 0;
            this.sliW = this.slide[0].offsetWidth;
            // console.log(this.slide[0].offsetWidth,this.sliW);
            this.arr = document.querySelectorAll('.arr');
            this.timer = null;
            this.autoPlay();
            this.bindMouoseEnter();
            this.bindMouseleave();
            this.bindArrEvent();
            
        },
        CreatHtml : function() {
          var swiperHtml =  ` 
            <ul class="swiper">
                {{lis}}
            </ul>
            <span class="arr">&lt;</span>
            <span class="arr arrR">&gt;</span>
        `
        var lisHtml = '';
        for(var i = 0; i < this.imgs.length; i ++) {
            lisHtml += '<li class="slide"><img src="' + this.imgs[i] + '" alt=""></li>';
        }
        console.log(lisHtml);
        swiperHtml = swiperHtml.replace('{{lis}}',lisHtml);
        
        this.wraper.innerHTML = swiperHtml;
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                //往左走 
                /* count++;
                var target = -1 * liw * count;
                animate(swiper, target); */
                that.goNext(true);
            }, 2000)
            console.log('============');

        },
        bindMouoseEnter: function () {
            var that = this;
            this.wraper.onmouseenter = function () {
                clearInterval(that.timer)
            }
        },
        bindMouseleave: function () {
            var that = this;
            this.wraper.onmouseleave = function () {
                that.autoPlay();
            }
        },
        bindArrEvent: function () {
            var that = this;
            this.arr[0].onclick = function () {
                that.goNext();
            }
            this.arr[1].onclick = function () {
                that.goNext(true);
            }
        },
        goNext: function (isR) {
            if (isR) {
                this.count++;
                // console.log(this.count)
                if (this.count == this.slide.length) {
                    this.swiper.style.left = 0;
                    this.count = 1;
                }

            } else {
                this.count--;
                if (this.count == -1) {
                    this.swiper.style.left = -1 * this.sliW * (this.slide.length - 1) + 'px';
                    this.count = this.slide.length - 2;
                }
            }
            var target = -1 * this.count * this.sliW;
            console.log(target, this.count, isR)
            this.animate(this.swiper, target);
        },
        animate: function (ele, target) {
            console.log(target)
            clearInterval(ele.timer);
            ele.timer = setInterval(function () {
                var currentLeft = ele.offsetLeft;
                var step = (target - currentLeft) / 10;
                if (Math.abs(step) < 1) {
                    step = step > 0 ? 1 : -1;
                }
                currentLeft += step;
                ele.style.left = currentLeft + 'px';
                if (currentLeft == target) {
                    clearInterval(ele.timer);
                }

            }, 17)
        },
    }
    window.Superswiper = MySwiper;
}());