
var canvas;
var timer = 10;
var clock;
var slide;
var ctx;
var current = 800;


window.addEventListener('keydown', this.check, false);

function check(e) {
    console.log(e.keyCode)
    if (parseInt(e.keyCode) >= 48 && parseInt(e.keyCode) <= 57) {

    } else {
        alert('กดตัวเลขเท่านั้น')
    }
}
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
    testSegment()
}
function testSegment() {
    ctx.font = '30px sans-serif';
    ctx.fillText("Hello World", 30, 30)
}
function updateGame() {
    loadSlidebar();

}
function slideBar() {
    var img = new Image()
    img.src = "./img/fire.png"
    img.onload = function () {
        ctx.drawImage(img, 150, 750)
    }
    var img2 = new Image()
    img2.src = "./img/lock.png"
    img2.onload = function () {
        ctx.drawImage(img2, 1325, 750)
    }
    ctx.rect(350, 800, 900, 30)
    ctx.stroke();
}
function loadSlidebar() {
    ctx.clearRect(351, 801, current + 4, 28)
    if (current >= 1250 || current <= 0) {
        stopTimer()
    }
    var grd = ctx.createLinearGradient(0, 0, 1250, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "yellow");
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(351, 801, current, 28);
    ctx.restore();

    current -= 4;

}

function createBomb() {

    ctx = canvas.getContext('2d')
    var img = new Image()
    img.src = "./img/bomb2.png";
    img.onload = function () {
        ctx.drawImage(img, (canvas.width - img.width) / 2, 400)

    }
    ctx.moveTo(canvas.width / 2, 0)
    ctx.lineTo(canvas.width / 2, canvas.height)
    ctx.fillStyle = "#FF0000";
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height)
    ctx.stroke();

}
function startTimer() {
    slide = setInterval(loadSlidebar, 200)
    clock = setInterval(updateTimer, 1000)
}

function stopTimer() {
    clearInterval(clock)
    clearInterval(slide)
}

function updateTimer() {
    if (timer == 22222) {
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
