// 头
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



//  tab栏切换
$(function () {
    var $lis = $('.nav li');
    var $pics = $('.imgs-pic .pic');
    $lis.click(function () {
        $(this).addClass('tip').siblings().removeClass('tip');
        var index = $(this).index();
        $pics.eq(index).stop().show(800).addClass('imgs-pic pic').siblings().stop().hide(1000);
    })

})



//时间

$(function(){
    $('#zzsc').html('<canvas id="canvas"></canvas>');
    var WINDOW_WIDTH = 800;
    var WINDOW_HEIGHT = 150;
    var RADIUS = 3; //球半径
    var NUMBER_GAP = 1; //数字之间的间隙
    var u=0.55; //碰撞能量损耗系数
    var context; //Canvas绘制上下文
    var balls = []; //存储彩色的小球
    const colors = ["rgba(51,181,229,.5)","rgba(0,153,204,.5)","rgba(170,102,204,.5)","rgba(153,51,204,.5)","rgba(153,204,0,.5)","rgba(102,153,0,.5)","rgba(255,187,51,.5)","rgba(255,136,0,.5)","rgba(255,68,68,.5)","rgba(204,0,0,.5)"]; //彩色小球的颜色
    var currentNums = []; //屏幕显示的8个字符
    var digit =
        [
            [

                [0,1,1,1,1,1,0],
                [0,1,0,0,0,1,0],
                [0,1,0,0,0,1,0],
                [0,1,0,0,0,1,0],
                [0,1,1,1,1,1,0]



            ],//0
            [
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0]

            ],//1
            [
                [0,1,1,1,1,1,0],
                [0,0,0,0,0,1,0],
                [0,1,1,1,1,1,0],
                [0,1,0,0,0,0,0],
                [0,1,1,1,1,1,0]
            ],//2
            [
                [0,1,1,1,1,1,0],
                [0,0,0,0,0,1,0],
                [0,1,1,1,1,1,0],
                [0,0,0,0,0,1,0],
                [0,1,1,1,1,1,0]
            ],//3
            [
                [0,1,0,0,0,1,0],
                [0,1,0,0,0,1,0],
                [0,1,1,1,1,1,0],
                [0,0,0,0,0,1,0],
                [0,0,0,0,0,1,0]
            ],//4
            [
                [0,1,1,1,1,1,0],
                [0,1,0,0,0,0,0],
                [0,1,1,1,1,1,0],
                [0,0,0,0,0,1,0],
                [0,1,1,1,1,1,0]
            ],//5
            [
                [0,1,1,1,1,1,0],
                [0,1,0,0,0,0,0],
                [0,1,1,1,1,1,0],
                [0,1,0,0,0,1,0],
                [0,1,1,1,1,1,0]
            ],//6
            [
                [0,1,1,1,1,1,0],
                [0,0,0,0,0,1,0],
                [0,0,0,0,0,1,0],
                [0,0,0,0,0,1,0],
                [0,0,0,0,0,1,0]
            ],//7
            [
                [0,1,1,1,1,1,0],
                [0,1,0,0,0,1,0],
                [0,1,1,1,1,1,0],
                [0,1,0,0,0,1,0],
                [0,1,1,1,1,1,0]
            ],//8
            [
                [0,1,1,1,1,1,0],
                [0,1,0,0,0,1,0],
                [0,1,1,1,1,1,0],
                [0,0,0,0,0,1,0],
                [0,1,1,1,1,1,0]
            ],//9
            [
                [0,0,0],
                [0,1,0],
                [0,0,0],
                [0,1,0],
                [0,0,0]
            ]//:
        ];

    function drawDatetime(cxt){
        var nums = [];

        context.fillStyle="rgba(194,79,105,.8)";
        var date = new Date();
        var offsetX = 70, offsetY = 30;
        var hours = date.getHours();
        var num1 = Math.floor(hours/10);
        var num2 = hours%10;
        nums.push({num: num1});
        nums.push({num: num2});
        nums.push({num: 10}); //冒号
        var minutes = date.getMinutes();
        var num1 = Math.floor(minutes/10);
        var num2 = minutes%10;
        nums.push({num: num1});
        nums.push({num: num2});
        nums.push({num: 10}); //冒号
        var seconds = date.getSeconds();
        var num1 = Math.floor(seconds/10);
        var num2 = seconds%10;
        nums.push({num: num1});
        nums.push({num: num2});

        for(var x = 0;x<nums.length;x++){
            nums[x].offsetX = offsetX;
            offsetX = drawSingleNumber(offsetX,offsetY, nums[x].num,cxt);
            //两个数字连一块，应该间隔一些距离
            if(x<nums.length-1){
                if((nums[x].num!=10) &&(nums[x+1].num!=10)){
                    offsetX+=NUMBER_GAP;
                }
            }
        }

        //说明这是初始化
        if(currentNums.length ==0){
            currentNums = nums;
        }else{
            //进行比较
            for(var index = 0;index<currentNums.length;index++){
                if(currentNums[index].num!=nums[index].num){
                    //不一样时，添加彩色小球
                    addBalls(nums[index]);
                    currentNums[index].num=nums[index].num;
                }
            }
        }
        renderBalls(cxt);
        updateBalls();

        return date;
    }

    function addBalls (item) {
        var num = item.num;
        var numMatrix = digit[num];
        for(var y = 0;y<numMatrix.length;y++){
            for(var x = 0;x<numMatrix[y].length;x++){
                if(numMatrix[y][x]==1){
                    var ball={
                        offsetX:item.offsetX+RADIUS+RADIUS*2*x,
                        offsetY:30+RADIUS+RADIUS*2*y,
                        color:colors[Math.floor(Math.random()*colors.length)],
                        g:1.5+Math.random(),
                        vx:Math.pow(-1, Math.ceil(Math.random()*10))*4+Math.random(),
                        vy:-5
                    }
                    balls.push(ball);
                }
            }
        }
    }

    function renderBalls(cxt){
        for(var index = 0;index<balls.length;index++){
            cxt.beginPath();
            cxt.fillStyle=balls[index].color;
            cxt.arc(balls[index].offsetX, balls[index].offsetY, RADIUS, 0, 2*Math.PI);
            cxt.fill();
        }
    }

    function updateBalls () {
        var i =0;
        for(var index = 0;index<balls.length;index++){
            var ball = balls[index];
            ball.offsetX += ball.vx;
            ball.offsetY += ball.vy;
            ball.vy+=ball.g;
            if(ball.offsetY > (WINDOW_HEIGHT-RADIUS)){
                ball.offsetY= WINDOW_HEIGHT-RADIUS;
                ball.vy=-ball.vy*u;
            }
            if(ball.offsetX>RADIUS&&ball.offsetX<(WINDOW_WIDTH-RADIUS)){

                balls[i]=balls[index];
                i++;
            }
        }
        //去除出边界的球
        for(;i<balls.length;i++){
            balls.pop();
        }
    }
    function drawSingleNumber(offsetX, offsetY, num, cxt){
        var numMatrix = digit[num];
        for(var y = 0;y<numMatrix.length;y++){
            for(var x = 0;x<numMatrix[y].length;x++){
                if(numMatrix[y][x]==1){
                    cxt.beginPath();
                    cxt.arc(offsetX+RADIUS+RADIUS*2*x,offsetY+RADIUS+RADIUS*2*y,RADIUS,0,2*Math.PI);
                    cxt.fill();
                }
            }
        }
        cxt.beginPath();
        offsetX += numMatrix[0].length*RADIUS*2;
        return offsetX;
    }

    var canvas = document.getElementById("canvas");
    canvas.width=WINDOW_WIDTH;
    canvas.height=WINDOW_HEIGHT;
    context = canvas.getContext("2d");

    //记录当前绘制的时刻
    var currentDate = new Date();

    setInterval(function(){
        //清空整个Canvas，重新绘制内容
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        drawDatetime(context);
    }, 50)
});