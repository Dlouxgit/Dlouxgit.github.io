<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>var red = document.getElementsByClassName("red")[0];
var green = document.getElementsByClassName("green")[0];
var purple = document.getElementsByClassName("purple")[0];
var yellow = document.getElementsByClassName("yellow")[0];
var btn = document.getElementsByClassName("button")[0];
var btn2 = document.getElementsByClassName("button")[1];
var btn3 = document.getElementsByClassName("button")[2];
var btn4 = document.getElementsByClassName("button")[3];
var rtArray = document.getElementsByClassName("section-color");
var lbArray = document.getElementsByClassName("section-title");
var charList1 = lbArray[0].getElementsByTagName("span");
var charList2 = lbArray[1].getElementsByTagName("span");
var charList3 = lbArray[2].getElementsByTagName("span");
var charList4 = lbArray[3].getElementsByTagName("span");
var charList = [charList1, charList2, charList3, charList4];
var box = document.getElementsByClassName("box")[0];
var doc = document.documentElement;
var home = document.getElementsByClassName("Home")[0];
btn.addEventListener("click", btnB);
btn2.addEventListener("click", loc);
btn3.addEventListener("click", loc);
btn4.addEventListener("click", loc);
// window.addEventListener("mousewheel", btnB);
window.addEventListener("scroll", btnB);
home.addEventListener("click", loc);
// window.onscroll = btnB(event);



function loc() {
    window.location = "loginLock.html";
}

function btnB(event) {
    // var eve = event || window.event,
    // currentH = eve.layerY;
    // console.log(currentH);
    //可以获取页面已滚动的高度，不过写到这里的时候突然发现我下面已经定义好了换色为什么我还要再写。。
    // 而且这个方法不太好确定换色区间



    //     classNameList = [];
    // for(var l = 0, length3 = eve.path.length; l < length3; l++){
    //     classNameList[l] = eve.path[l].className;
    // }       发现event.path属性会把当前屏幕里的元素从上到下罗列到一个Array（数组）中，可以从中取出页面内的元素，
    //          但发现必须要换色元素完全显示在页面中，才会刷新path值。变色太慢。

    // var pattern = /^section (red|green|purple|yellow)/gi;
    // var matches = pattern.exec(eve.toElement.className);
    // console.log(matches);想过用正则来确定颜色，但发现只要屏幕内一出现换色的div，toElement值会马上变，也就是会马上换色，换色太快了
                //           而且toElement还可能会是p或者span标签，导致className为null，无法换色

    // var rectR = red.getBoundingClientRect().y; //取元素相对于视窗位置的高;兼容问题，Edge里没有y属性
    // var rectG = green.getBoundingClientRect().y;
    // var rectP = purple.getBoundingClientRect().y;
    // var rectY = yellow.getBoundingClientRect().y;
    var rectR = red.getBoundingClientRect().top; //取元素相对于视窗位置的高;
    var rectG = green.getBoundingClientRect().top;
    var rectP = purple.getBoundingClientRect().top;
    var rectY = yellow.getBoundingClientRect().top;
    console.log(window.innerHeight);
    console.log(event);
    console.log(document.documentElement.scrollTop ,window.pageYOffset , document.body.scrollTop,doc.scrollTop,document.getElementsByTagName("body")[0].scrollTop); 
    //好东西! 但不知道为什么我的Edge无法获取高度 一直是0
    // console.log(rectR + rectG + rectP + rectY);//Edge取得最高值为5802，谷歌是5814，差不多，不要求精度就不再修改了
    if(rectR + rectG + rectP + rectY < window.innerHeight*(6 - 4 * 2 - 2)) {
        box.style.cssText = "background-color: #d9b612";
        // lb4.style.cssText = "opacity: 1";
        lbhidden(4);
    }
    else if(rectR + rectG + rectP + rectY < window.innerHeight*(6 - 4 -2)) {
        box.style.cssText = "background-color: #494166";
        // lb3.style.cssText = "opacity: 1";
        lbhidden(3);
    }
    else if(rectR + rectG + rectP + rectY < window.innerHeight*(6 - 2)) {
        box.style.cssText = "background-color: #789262";
        // lb2.style.cssText = "opacity: 1";
        lbhidden(2);
    } else {
        box.style.cssText = "background-color: #9d2932";
        // lb1.style.cssText = "opacity: 1";
        lbhidden(1);
    }
    // if(rectR + rectG + rectP + rectY < 5808 - 3872*2 -1936) {
    //     box.style.cssText = "background-color: #d9b612";
    //     // lb4.style.cssText = "opacity: 1";
    //     lbhidden(4);
    // }
    // else if(rectR + rectG + rectP + rectY < 5808 - 3872 - 1936) {
    //     box.style.cssText = "background-color: #494166";
    //     // lb3.style.cssText = "opacity: 1";
    //     lbhidden(3);
    // }
    // else if(rectR + rectG + rectP + rectY < 5808 - 1936) {
    //     box.style.cssText = "background-color: #789262";
    //     // lb2.style.cssText = "opacity: 1";
    //     lbhidden(2);
    // } else {
    //     box.style.cssText = "background-color: #9d2932";
    //     // lb1.style.cssText = "opacity: 1";
    //     lbhidden(1);
    // }
}

// lbArray[1].style.cssText = "opacity: 1;";
// lbArray[2].style.cssText = "opacity: 1;";
// lbArray[3].style.cssText = "opacity: 1;";
// lbArray[0].style.cssText = "opacity: 1;";
function lbhidden(n) {
    rtArray[1].style.cssText = "opacity:0";
    rtArray[2].style.cssText = "opacity: 0";
    rtArray[3].style.cssText = "opacity: 0";
    rtArray[0].style.cssText = "opacity: 0";
    rtArray[n-1].style.cssText = "opacity: 1";
    lbArray[1].style.cssText = "opacity:0";
    lbArray[2].style.cssText = "opacity: 0";
    lbArray[3].style.cssText = "opacity: 0";
    lbArray[0].style.cssText = "opacity: 0";
    lbArray[n-1].style.cssText = "opacity: 1";
    charHidden(n-1);
    
}

function charHidden(n) {
    for(var i = 0, length = charList.length; i < length; i++) {
        for(var j = 0, length1 = charList[i].length ; j < length1; j++) {
            charList[i][j].style.cssText = "opacity: 0;transform: translateY(100%);transition: all 0.15s " + 0.03*j + "s;z-index: -1;";
            if( i < n ) {
                charList[i][j].style.cssText = "opacity: 0;transform: translateY(-100%);transition: all .15s " + 0.03*j + "s;z-index: -1;";
            }
        }
    }
    for(var k = 0, length2 = charList[n].length; k < length2; k++) {
        charList[n][k].style.cssText = "opacity: 1;transform: translateY(0);transition: all .2s " + 0.05*k + "s;z-index: 2;";
    }
}