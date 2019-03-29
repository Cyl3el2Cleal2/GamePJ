var canvas;
var timer = 20;
var clock;
var ctx;
var width;
var imgCos;
var key, pos = 0;
function CreateScene() {
    canvas = document.getElementById('scene');

    canvas.width = 1600;
    canvas.height = 900;

    canvas.style.border = "3px solid";

    ctx = canvas.getContext('2d')
    ctx.moveTo(0, 0);


    ctx.stroke();
    startTimer();
    document.getElementById("Modal").style.display = "none";
    custom();
    MathTitle();

    // // setBg();

}

function custom() {

    var image = ["./img/customGame3/W1.png", "./img/customGame3/W2.png"];
    ctx = canvas.getContext('2d')
    width = canvas.width * (1 / 3) + 200
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
        if (key == 37) {
            imgCos.src = image[0];
            width -= 5;
        }


        if (key == 39) {
            imgCos.src = image[1];
            width += 5;
        }
        canvas.width = canvas.width


        console.log(width)
        console.log(canvas.width - 200)
        if (width > canvas.width - 200) {
            width = canvas.width - 200;
        } else if (width < 0) {
            width = 0;
        }

        ctx.drawImage(imgCos, width, canvas.height * (4 / 5) - 80, 200, 200);

    }, 5);
}


function MathTitle() {
    var i = 0;
    var opUsing = ["(2*3)+2-(10/2)", "(20/3)+(2*11)-10", "4+2-(4*8)/3", "(4/2)-(8-2)+35", "10-(((2*8)/3)+9)"];



   var res = opUsing[i]
   

    
  
    document.getElementById("MathN0").innerHTML = opUsing[i] + " = ?";
    MathAnswer(eval(res));
}
function MathAnswer(res) {

    var b = [1,2,3]
    var i =0;
    document.getElementById("MathN"+b[i]).innerHTML = res;
    document.getElementById("MathN"+b[i+1]).innerHTML = Math.floor(Math.random() * 100);
    document.getElementById("MathN"+b[i+2]).innerHTML = Math.floor(Math.random() * 100);
    
}

function GameOver() {
    var image = ["./img/customGame3/bomb.png"];
    ctx = canvas.getContext('2d')
    var imgBomb = new Image()
    imgBomb.src = image[0];
    console.log(image[0])
    imgBomb.onload = function () {

        ctx.drawImage(imgBomb, width, canvas.height * (4 / 5) - 150, 400, 400)
    }
    document.onkeydown = function (e) {
        return false;
    }
    document.getElementById("Modal").style.display = "block";


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
        GameOver();
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