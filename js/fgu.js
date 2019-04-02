     // 飘落
     $(function(){
         setInterval(function(){
             var content = ['✿','♫','❤','✪','★','☆','☺','☽','♪','☹'];//文字图案数组
             var test = $('<div class="test1"></div>').text(content[parseInt(Math.random()*7)]);
             var pageWidth = $('.page').width();//页面宽度
             var x = Math.random()*(pageWidth)-100;//开始横向位置
             var deg = Math.random()*360;//开始旋转角度
             var size = 25 + Math.random()*30;//文字图案的大小
             var duration = 5 + Math.random()*2;//transition动画执行时间
             var colorArray =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
             var beginColor = '#';//背景渐变开始颜色
             var endColor = '#';//背景渐变结束颜色
             var endPositionX = parseInt(Math.random()*100 + 50);//结束位置的横向位置
             var endHeight = document.documentElement.clientHeight - 65 - parseInt(Math.random()*40);//结束高度
             for(var i =0; i<6; i++){
                 beginColor+=colorArray[parseInt(Math.random()*15)];
                 endColor+=colorArray[parseInt(Math.random()*15)];
             }
             test.appendTo('.page')
                 .css({
                     transform:'translate3d('+ x +'px,-100px,0)' + 'rotateZ('+ deg +'deg)',
                     'font-size':size + 'px',
                     'background-image':'-webkit-linear-gradient('+beginColor+','+endColor+')',//渐变背景
                 });
                 setTimeout(function(){
                     test.css({
                         transition:'all '+ duration +'s linear',
                         opacity:'0.4',
                         transform:"translate3d("+ endPositionX +"px,"+endHeight+"px,0) rotateZ(360deg)",
                     });
                 },100);//延迟0.1秒是因为js执行过快把后面的transform覆盖前面的transform,造成效果丢失
                 setTimeout(function(){
                     test.remove();
                 },duration*1000);
         },1000);
         
     });
             
     //头
     var center = document.querySelector('.center1');
     var as = center.querySelectorAll('a');
     console.log(as)
     for ( var i = 0 ; i<as.length ; i++){
         as[i].onclick = function ( ){
         for(var i = 0 ; i <as.length ; i++){
 
             as[i].className = '';
         }
         this.className = 'current'
         }
     }
     // 推荐区域

     var $bsds = $('.pic .bsd');
     $bsds.mouseenter(function () {
         $(this).addClass('shadow').siblings().removeClass('shadow');
     })
      //控制右侧栏
     var mainPart = document.querySelector('#mainPart');
     var navPart = document.querySelector('#navPart');
     var h = document.querySelector('.h');
     var pro = document.querySelector('.pro');
     var f = document.querySelector('.f');
     document.onscroll = function () {
         var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
         if(scrollTop >= h.offsetHeight && scrollTop <= h.offsetHeight + mainPart.offsetHeight - navPart.offsetHeight){
             navPart.style.position = 'fixed';
             navPart.style.top = h.offsetHeight -50  +  'px';
             navPart.style.left = mainPart.offsetWidth + mainPart.offsetLeft + 20 +'px';
         }else{
             navPart.style.position = '';
             navPart.style.marginTop = mainPart.offsetTop;
         }
     }