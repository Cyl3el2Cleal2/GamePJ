var canvas;
var timer = 20;
var clock;
var ctx;
function CreateScene() {
    canvas = document.getElementById('scene');
    canvas.width = 1600;
    canvas.height = 900;

    canvas.style.border = "3px solid";

    ctx = canvas.getContext('2d')
    ctx.moveTo(0, 0);


    ctx.moveTo(canvas.width * (1 / 3), 0)
    ctx.lineTo(canvas.width * (1 / 3), canvas.height)

    ctx.moveTo(canvas.width * (2 / 3), 0)
    ctx.lineTo(canvas.width * (2 / 3), canvas.height)

    ctx.moveTo(0, canvas.height * (1 / 5))
    ctx.lineTo(canvas.width, canvas.height * (1 / 5))
    
    
    ctx.stroke();
    startTimer();
    createTime();
    // setBg();
    
}
function custom(){
    ////Version1///
    var image = ["./img/bg3.jpg","./img/bg3.jpg","./img/bg3.jpg"];
    ctx = canvas.getContext('2d')

    var img = new Image()
    for(var i = 0;i<image.length;i++){
        img.src = image[i];
        // img.onload = function () {  
        //     ctx.drawImage(img,canvas.width*(2/3),canvas.height*(4/5), 50, 50) 
        // }
    }
   
}
function setBg(){
    ctx = canvas.getContext('2d')
    var img = new Image()
    img.src = "./img/bg3.jpg";

    img.onload = function () {

        ctx.drawImage(img,0,0, canvas.width, canvas.height)

    }
}
function MathTitle(){

}
function MathAnswer(){

}
function updateMove() {
        
}

function startTimer() {
    clock = setInterval(updateTimer, 1000)
}

function stopTimer() {
    clearInterval(clock)
}
function updateTimer() {
    
    if (timer == 0) {
        stopTimer()
        return;
    }
    timer = parseInt(timer, 10) - 1;

    console.log(timer)
    document.getElementById('bdTime').innerHTML = "Time : " + timer;
    if (timer < 10) {
        if (timer % 2 == 0) {
            document.getElementById('bdTime').style.color = "red";
        } else {

            document.getElementById('bdTime').style.color = "white";
        }
    }
}