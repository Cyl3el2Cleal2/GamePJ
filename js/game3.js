var canvas;
var timer = 20;
var clock;
var ctx;

var imgCos;
var key,pos=0;
function CreateScene() {
    canvas = document.getElementById('scene');

    canvas.width = 1600;
    canvas.height = 900;

    canvas.style.border = "3px solid";

    ctx = canvas.getContext('2d')
    ctx.moveTo(0, 0);


    ctx.stroke();
    startTimer();
    ctx.stroke();
    custom();
    startTimer();

    // // setBg();

}

function custom() {
  
    var image = ["./img/customGame3/W1.png"];
    ctx = canvas.getContext('2d')
    var width = canvas.width * (1 / 3) + 200
    imgCos = new Image()
    console.log(width)
    imgCos.src = image[0];
    imgCos.onload = function () {
        ctx.drawImage(imgCos, width, canvas.height * (4 / 5) - 80, 200, 200)
    }
    document.onkeydown = function (e) {
        pos = 1;
        key = window.event ? e.keyCode : e.which;
    }
    document.onkeyup = function (e) { pos = 0; }
    setInterval(function () {
        
        if (pos == 0) return;
        if (key == 37) width -= 10;
       
        if (key == 39) width += 10;  
        canvas.width = canvas.width
        ctx.drawImage(imgCos, width, canvas.height * (4 / 5) - 100,200, 200);
    
    }, 5);
}

function setBg() {
    ctx = canvas.getContext('2d')
    var img = new Image()
    img.src = "./img/bg3.jpg";

    img.onload = function () {

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

    }
}
function MathTitle() {

}
function MathAnswer() {

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


    document.getElementById('bdTime').innerHTML = "Time : " + timer;
    if (timer < 10) {
        if (timer % 2 == 0) {
            document.getElementById('bdTime').style.color = "red";
        } else {

            document.getElementById('bdTime').style.color = "white";
        }
    }
}