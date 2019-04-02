var center = document.querySelector('.center1.w1200');
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
// banner区域js效果
