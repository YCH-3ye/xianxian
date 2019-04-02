var ipt1 = document.querySelector(".input1");
ipt1.onfocus = function(){
    // alert(1);
    if(ipt1.value == "秋天"){
        ipt1.value = "";
    }
}
ipt1.onblur = function(){
    if(ipt1.value == ""){
        ipt1.value = "秋天";
    }
}

var new1 = document.querySelector(".new1");
var new2 = document.querySelector(".new2");
var hot = document.querySelector(".hot");
var list1 = document.querySelector(".list1");
var list2 = document.querySelector(".list2");
var a1 = document.querySelector(".a1");
var a2 = document.querySelector(".a2");
a1.onclick = function(){
    // alert(2);
    return false;
}
a2.onclick = function(){
    return false;
}
var index = 1;
new2.onclick = function(){
    // alert(1);
    hot.className = "";
    new2.className = "jjZEeY";
    list1.style.display = "block";
    list2.style.display = "none";
    Time1();
    index = 1;
    // console.log(index);
}
hot.onclick = function(){
    // alert(2);
    hot.className = "jjZEeY";
    new2.className = "";
    list2.style.display = "block";
    list1.style.display = "none";
    Time1();
    index = 2;
}
Time1();
function Time1(){
    var span = document.querySelectorAll(".span");
var count = 100;
 var timeId = setInterval(function(){
   
     count+=2523;
     for(var i=0 ; i<2;i++){
        span[i].innerText = count;
     }
    
     if(count > 1884374){
         clearInterval(timeId);
     }  
  },1);
}
// console.log(index)
$(function () {
    //url data function dataType
    function loadMeinv() {
        var data = 0;
        for (var i = 0; i < 10; i++) {//每次加载时模拟随机加载图片
            data = parseInt(Math.random() * 10);
            var html = "";
            html = '<li><img src = img/qt/'
                + data + '.jpg></li>';
            $minUl = getMinUl();
            $minUl.append(html);
        }
    }
    loadMeinv();
    $(window).on("scroll", function () {
        $minUl = getMinUl();
        if ($minUl.height() <= $(window).scrollTop() + $(window).height()) {
            //当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
            loadMeinv();
        }
    })
    function getMinUl() {//每次获取最短的ul,将图片放到其后
        var str = ".list"+index+" #container .col";
        var $arrUl = $(str);
        
        var $minUl = $arrUl.eq(0);
        $arrUl.each(function (index, elem) {
            if ($(elem).height() < $minUl.height()) {
                $minUl = $(elem);
            }
        });
        return $minUl;
    }
})


var li4 = document.querySelector(".li4 a");
var radiosclick = document.querySelector(".radiosclick");
li4.onclick = function(){
    // alert(1);
    if(radiosclick.style.display=="none"){
        radiosclick.style.display = "block";
    }else{
        radiosclick.style.display = "none";
    }
   
}