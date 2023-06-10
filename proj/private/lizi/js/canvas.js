var lizi=document.getElementsByClassName("lizi")[0];
var ctx=lizi.getContext("2d");

function aniCircle(option) {
    this._init(option);
}

aniCircle.prototype = {
    _init: function(option) {
        this.num = option.num;
        this.x = option.x;
        this.y = option.y;
        this.dur = option.dur;
        this.dir = option.dir;
        this.offsetX = option.offsetX;
        this.offsetY = option.offsetY;
        this.step = option.step;
        this.r = [];
        this.flag = [];
        this.w = [];
        this.h = [];
        this.f = []; // f:[第几次出现动画（第几帧）[第几个点[w宽度]],[[[h]]]]
        ctx.translate(this.offsetX,this.offsetY);
    },
    render: function(ctx) {
        var time = this.dur/this.step;
        var _this = this;
        var i = 0;
        if(this.dir == "return"){
            time = this.f.length -1;
            var stop = setInterval(function() { //定时器只改变this的指向，里面的变量还是一层一层往上找！
                //                          所以可以通过_this=this来继续访问this！ WDNMD
                // console.log(time)
                ctx.clearRect(-_this.offsetX,-_this.offsetY,ctx.canvas.width,ctx.canvas.height);
                _this.drawCircleReturn(time);
                time--;
                // _this.flag = [];
                // _this.f.w.push(_this.w[i]);
                // _this.f.h.push(_this.h[i]);
                // _this.f.flag.push(_this.flag[i]);
                //          i++;
                console.log(time)
            }, this.step);
            setTimeout(function() {
                _this.f = []; //清除本次粒子的返回数据
            }, _this.dur+this.step*2);
        } else {
            var stop = setInterval(function() {
                ctx.clearRect(-_this.offsetX,-_this.offsetY,ctx.canvas.width,ctx.canvas.height);
                _this.drawCircle(time);
                // console.log(_this.f)
                // _this.f = [];
                time--;
                console.log(time)
            }, this.step);
            this.w = [];    //清除本次粒子前进数据 暂时还没出现bug 出现问题了把这个也改成和上面一样的定时器
            this.h = [];    //清除本次粒子前进数据
            this.flag = []; //清除本次粒子前进数据
        }
        setTimeout(function() {
            clearInterval(stop);
            // console.log(_this.f);
            ctx.clearRect(-_this.offsetX,-_this.offsetY,ctx.canvas.width,ctx.canvas.height);
            // time = _this.dur/50;
            // console.log(time);
            // _this.f = [];
        }, _this.dur+this.step*2);//清除无限循环的定时器stop 要比持续时间稍微长一点，因为透明度消失比持续时间略长
    },
    drawCircle: function(time) { //感觉不应该这样一个函数写出所有粒子，应该一个函数只写一个的。
        var flag = this.flag, //用于模拟粒子轨迹的变量，顺便判断是不是第一次进入画图，不过好像可以用time代替，先鸽了
        num = this.num;
        var time = (time)/(this.dur/this.step);
        var wh = [[],[]];
        if(!flag[0]) { //判断是否第一次绘制图像
            for(var i = 0; i < num; i++){
                this.w[i] = Math.random()*this.x;
                this.h[i] = Math.random()*this.y;
                this.r[i] = Math.random()*3+1;
                flag[i] = Math.random()*3 - 2;
            }
        } 
        else {
            for(var i = 0; i < num; i++) {
                if(this.w[i] < (1-time)*this.x +15*1) {    //一般来说这边可能出问题，数字可以改大点。加15是为了让动画消失比div消失快上一点点 可以改成和this.x相关的数据
                    //左边往右边
                // if(this.w[i] < (time)*this.x +15) { 右边往左边
                    this.w[i] = this.w[i] + -flag[i]*flag[i]/2;
                    this.h[i] += flag[i];
                    ctx.moveTo(this.w[i],this.h[i]);
                    ctx.beginPath();
                    ctx.arc(this.w[i],this.h[i],this.r[i],0,2*Math.PI,false);
                }
                ctx.strokeStyle = "rgba(0,0,255,"+ time + ")";
                ctx.fillStyle = "rgba(0,0,255,"+ time  + ")";
                ctx.stroke();
                ctx.fill();
                flag[i] += Math.random()*4 - 2;
                // console.log(time/(this.dur/150));     
                wh[0].push(this.w[i]);
                wh[1].push(this.h[i]);
            }
                this.f.push(wh);
        }
    },
    drawCircleReturn: function(time) {
        var num = this.num;
        // console.log(time,this.f)
        time = time>0?(time-1):0;
        // var time1 = (time)/(this.dur/20); 
        var time1 = (time)/(this.f.length-1/this.step); 
        // time = this.f.length - 1;
        // console.log(time,this.f)
        // console.log(this.f,time)
        // console.log(time,this.f)
        for(var i = num - 1; i >= 0; i--) {
            // console.log(this.f[time][0][i],i);
            // if(this.w[i] < (1-time)*this.x +15) {    
                //左边往右边
                // console.log(time,i)
                // console.log(this.f[time][0],time,i);
            if(this.f[time][0][i] < ((time1)*this.x ) +10*1){ //加10是为了让动画消失比div消失快上一点点 可以改成和this.x相关的数据
                //右边往左边
                ctx.moveTo(this.f[time][0][i],this.f[time][1][i]);
                ctx.beginPath();
                ctx.arc(this.f[time][0][i],this.f[time][1][i],this.r[i],0,2*Math.PI,false);
            }
            ctx.strokeStyle = "rgba(0,0,255,"+ time1 + ")";
            ctx.fillStyle = "rgba(0,0,255,"+ time1  + ")";
            ctx.stroke();
            ctx.fill();
            //  this.time--;
        }
    }
}

var aa = new aniCircle({
    num: 3111,//粒子数量    Edge粒子数量一多就会卡住，导致动画帧数很低.  chrome也不能别超3200吧
    x: 140, //width 粒子横轴宽度
    y: 70, //height 粒子纵轴高度
    dur: 1100, //持续时间
    dir: "toRight", //方向
    offsetX: 100, //距离画布左上角的横轴距离
    offsetY: 100,  //距离画布左上角的纵轴距离
    step: 50  //动画播放间隔
    // num/(dur/step) 超过一定值的时候会出现bug，比如设置num:3111, dur:1100, step:20 时，需要写入3111*1100/20的数据
    // 中间几次粒子的值可能无法写入数组，修改后不影响视觉效果，但数组仍然无法完全写入， 值太多了
});

var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var fff = false; //判断破碎还是复原
var flg = true;  //节流阀
t1.addEventListener("click", traS);
function traS() {
    if(flg){
        flg = false;
        if(!fff) {
            t1.style.cssText = "transform: translateX(100%);opacity:0.5";
            t2.style.cssText = "transform: translateX(-100%)";
            setTimeout(() => {
                aa.dir ="return";
                // t1.style.cssText = "visibility: hidden;"
            }, 1100);
        } else {
            t1.style.cssText = "transform: translateX(0%);opacity:1";
            t2.style.cssText = "transform: translateX(0%)";
            setTimeout(() => {
                aa.dir ="toRight";
                // t1.style.cssText = "visibility: hidden;"
            }, 1100);
        }
        fff = !fff;
        aa.render(ctx);
        setTimeout(() => {
            flg = true;
        }, 1100+aa.step * 2);
    }
}
