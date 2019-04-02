// banner区域效果
// 封装
// 参数1 : 目标元素
// 参数2 : 目标值 (目的地)
// var timerId;  window.timerId
function banner( element, target) {

  // 清除上一个定时器
  clearInterval(element.timerId);

  // 开启一个新的定时器
  element.timerId = setInterval(function () {

    // 动画三步走
    //1. 获取当前位置
    var current = element.offsetLeft;

    //2. 累加小碎步
    // 确定步数
    // var step = current < target ? 20 : -20;
    // 没有到达目的地 (距离 >= 步数)
    // if (Math.abs(target-current) >= Math.abs(step) ) {
      
      current += -5;
      //3. 重新赋值
      element.style.left = current + 'px';
     if(current == target){
      element.style.left = 0;
     }
    // } else {
    //   // 到达目的地
    //   clearInterval(element.timerId);
    //   // 直接赋值目的地
    //   element.style.left = target + 'px';
    // }
  },20);
  
}
// table栏效果
var hovers = document.querySelectorAll('.img-hover');
var limage = document.querySelector('.nav-img');
var imgs   =  limage.querySelectorAll('li')

for (var i = 0 ; i<hovers.length ; i++){
    hovers[i].index = i;
    hovers[i].onmouseover = function ( ){
        for(var i = 0 ; i <imgs.length ; i++){
        imgs[i].style.display = 'none';
        hovers[i].className = 'img-hover';
        hovers[i].style.background = "url('img/shouye/未标题-"+ (i+1)+(i+1) +".png') no-repeat";
        }
        imgs[this.index].style.display = 'block'
    }
    hovers[i].onmouseout = function ( ){
       
      for(var i = 0 ; i < hovers.length ; i++){
        hovers[i].className = 'img-hover';
      }
      this.className = 'img-hover mouseout';
      this.style.background = "url('img/shouye/未标题-"+ (this.index+1) +".png') no-repeat";
    }
}
// table栏结束