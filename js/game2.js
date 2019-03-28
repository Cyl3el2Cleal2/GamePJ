var canvas;
var timer = 10;
var clock;
var ctx;
function createArea() {
    canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }
    canvas.width = 1600;
    canvas.height = 900;
    canvas.style.border = "3px solid";
    ctx = canvas.getContext('2d')
    startTimer();
    createBomb();
    slideBar();
}
function updateGame(){

}
function slideBar(){
    
    ctx.rect(350, 800, 900, 30)
    ctx.stroke();
}

function createBomb() {

    ctx = canvas.getContext('2d')
    var img = new Image()
    img.src = "./img/bomb2.png";
    img.onload = function () {
        ctx.drawImage(img, (canvas.width - img.width)/2, 400)

    }
    ctx.moveTo(canvas.width / 2, 0)
    ctx.lineTo(canvas.width / 2, canvas.height)
    ctx.fillStyle = "#FF0000";
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height)
    ctx.stroke();

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
    document.getElementById('bdTime').innerHTML = "Time left: " + timer;
    if (timer < 10) {
        if (timer % 2 == 0) {
            document.getElementById('bdTime').style.color = "red";
        } else {

            document.getElementById('bdTime').style.color = "white";
        }
    }
}
