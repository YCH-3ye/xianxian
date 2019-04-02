
var fvideo = document.querySelector('.video');
var video = document.querySelector("video");
var div1 = document.querySelector(".detali-p-o div");
var div2 = document.querySelector(".detali-p-o .div2");
var div3 = document.querySelector(".detali-p-o .div3");
var conjs = document.querySelectorAll('.conjs');

var v1 = document.createElement("video");
var v2 = document.createElement("video");
var v3 = document.createElement("video");
v1.src = "video/1.mp4";
v2.src = "video/2.mp4";
v3.src = "video/3.mp4";
v1.style.cssText = "min-width: 1200px;width: 100%";
v2.style.cssText = "min-width: 1200px;width: 100%";
v3.style.cssText = "min-width: 1200px;width: 100%";
var arrVideo = [v1,v2,v3];

conjs.forEach(function(v,i) {
    v.index = i+1;
    v.onmouseover = function() {
        
            for(var j = 0; j<conjs.length; j++) {
                conjs[j].classList.remove('hover');
                console.log('s');
                
            }
            this.classList.add('hover');

        fvideo.removeChild(fvideo.children[0]);
        var video1 = arrVideo[this.index-1];
        video1.muted = true;
        video1.autoplay = true;
        video1.loop = true;
        fvideo.insertBefore(video1, fvideo.children[0]);
        video1.play();
    };
});
