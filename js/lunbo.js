 
 function anment (element,  target ){
    clearInterval(element.timeid)
    //  动画三步走
    // 1.获取当前位置
     element.timeid = setInterval(function( ){

        var current =  element.offsetLeft;
         
        var step = current < target ? 50 : -50
    
        
        // 2.累加小碎步
        
        if(Math.abs(current - target) >=  Math.abs(step)){
        
         current += step

        // 3.重新赋值
         element.style.left = current + 'px'
    }else{
        clearInterval(element.timeid)
    }
    },30)
 }
 var ul = document.querySelector('.carousel ul');
 var ulis = document.querySelectorAll('.carousel li')
 var ol = document.querySelector('.carousel ol')
 for ( var i = 0 ; i < ulis.length ; i ++){
     var li = document.createElement('li')
    //  li.innerText = i + 1 ;
     ol.appendChild(li)
 } 
 var olis = ol.querySelectorAll('li');
 olis[0].className = 'current'
  2.
  ulis[0].cloneNode(true);
  ul.appendChild(  ulis[0].cloneNode(true));
  3.
  var left = document.querySelector('.left');
  var right = document.querySelector('.right');
  var imgWidth = document.querySelector('.box').offsetWidth;
  console.log(imgWidth)
  var index = 0
 left.onclick = function ( ){
     if(index == 0){
         index = 3;
         ul.style.left = -index * imgWidth + 'px'
     }
   
     index--

     anment( ul , -index * imgWidth)
     for (var i = 0; i < olis.length ; i++) {
        olis[i].className = '';
    }
    olis[index].className = 'current';
     for (var i = 0; i < olis.length ; i++) {
        olis[i].className = '';
        // console.log(olis[0])
    }
    if(index == 3){
        olis[0].className = 'current';
    }else{

        olis[index].className = 'current';
    }

  }


 right.onclick = function( ){
     if(index == 3){
         index = 0 ; 
         ul.style.left = 0 ;
     }
     index++
     anment( ul , -index * imgWidth);
     for (var i = 0; i < olis.length ; i++) {
        olis[i].className = '';
        // console.log(olis[0])
    }
    if(index == 3){
        olis[0].className = 'current';
    }else{

        olis[index].className = 'current';
    }

 }
 4.
 var box = document.querySelector('.box');
 var arrow = document.querySelector('.arrow');
 var time = 3000;
 var timeid = setInterval( function ( ){
       right.onclick( )
 },time)
 box.onmouseover = function ( ){
  clearInterval( timeid);
  arrow.style.display = 'block'
 }
 box.onmouseout = function ( ){
     arrow.style.display = 'none';
     timeid = setInterval( function ( ){
       right.onclick( )
 },time)
 }
 5.
 for( var i = 0 ; i < olis.length ; i++){
     olis[i].index = i ;
     olis[i].onclick = function ( ){
         for(var i = 0 ; i <olis.length ; i++){
             olis[i].className = '';
         }
             index = this.index;
            this.className = 'current'
            anment( ul , -this.index*imgWidth)
     }
            
 }