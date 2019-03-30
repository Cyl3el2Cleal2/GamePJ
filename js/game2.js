
var canvas;
var timer = 60;
var clock;
var slide;
var ctx;
var current = 500;
var anwser;
var textOut;
var temp;
var number;
var tempNumber;
var point = 0;
var endGame = 0;
var closeBtn;
var myModal;

window.addEventListener('keydown', this.check, false);

function check(e) {
    //console.log(e.keyCode)
    if (parseInt(e.keyCode) >= 48 && parseInt(e.keyCode) <= 57) {
        number = e.keyCode - 48;
        //console.log(number)
        if (anwser > 9) {
            if (tempNumber != 0) {
                updateGame(tempNumber * 10 + number)
            } else {
                tempNumber = number
                return
            }



        } else {
            if(endGame == 0)
                updateGame(number);
        }
        tempNumber = 0



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

    initModal();
    startTimer();
    createBomb();
    slideBar();
    drawBoard();
    runGame();
}

function initModal(){
    myModal = document.getElementById('myModal')
}

function showModal(){
    myModal.style.display ="block";
}

function checkAnswer(num) {
    //console.log("check this"+num+" : "+anwser)
    if (parseInt(num) == parseInt(anwser)) {
        point = 100
    }

}

function drawBoard() {
    ctx.fillStyle = "#008000"
    ctx.fillRect(500, 200, 600, 130);
}



function runGame() {
    
    textOut = ""
    anwser = Math.round(Math.random() * 9)
    const op = Math.random()
    if (op < 0.5) {
        var x = anwser
        var y = Math.round(Math.random() * 9)
        anwser = x * y
        textOut = x + " x " + y + " = ?"

    } else {
        var y = Math.round(Math.random() * 9);
        if (y==0)
            y++;
        var x = anwser * y
        textOut = x + " ÷ " + y + " = ?"
    }
    console.log(anwser)
    ctx.font = 'bold 110px sans-serif';
    ctx.fillStyle = "#FF1493"
    ctx.fillText(textOut, 540, 300)
    temp = ctx
}
function updateGame(input) {
    checkAnswer(input)
    drawBoard()
    runGame()
    
    
    
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
    ctx.clearRect(351, 801, current + 1, 28)
    if (current >= 900 || current <= 0) {
        stopTimer()
    }
    var grd = ctx.createLinearGradient(0, 0, 1250, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "yellow");
    // Fill with gradient
    ctx.fillStyle = grd;
    if (current > 900){
        stopTimer()
        ctx.fillRect(351, 801, 900, 28);
        return
    }
    ctx.fillRect(351, 801, current, 28);
    ctx.restore();
    console.log('I \'m point'+point)
    if(point > 0){
        current+= point
        point = 0
    }
    current -= 1;

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
    slide = setInterval(loadSlidebar, 50)
    clock = setInterval(updateTimer, 1000)
}

function stopTimer() {
    endGame+=1;
    clearInterval(clock)
    clearInterval(slide)
    showModal();
}

function updateTimer() {
    if (timer == 22222) {
        stopTimer()
        return;
    }
    timer = parseInt(timer, 10) - 1;

    //console.log(timer)
    document.getElementById('bdTime').innerHTML = "Time left: " + timer;
    if (timer < 10) {
        if (timer % 2 == 0) {
            document.getElementById('bdTime').style.color = "red";
        } else {

            document.getElementById('bdTime').style.color = "white";
        }
    }
}
