
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
var tempNumber = 0;
var point = 0;
var endGame = 0;
var closeBtn;
var myModal;
var userName;
var score = 0;
var correctSound;
var wrongSound;
var loseSound;
var winSound;
var music;
var textBtn;
var numFail = 1.00;
window.addEventListener('keydown', this.check, false);

function check(e) {
    //console.log(e.keyCode)
    if (parseInt(e.keyCode) >= 48 && parseInt(e.keyCode) <= 57 || (e.keyCode >=96 && e.keyCode <= 105)) {
        number = e.keyCode<= 57 ? e.keyCode - 48:e.keyCode - 96;
        // console.log(anwser);
        if (anwser > 9) {

            if (tempNumber != 0) {
                updateGame(tempNumber * 10 + number)
            } else {
                tempNumber = number
                return
            }



        } else {
            if (endGame == 0)
                updateGame(number);
        }
        tempNumber = 0



    } else {
        alert('กดตัวเลขเท่านั้น')
    }
}

function processUser()
  {
    var parameters = location.search.substring(1).split("&");

    var tempTxt = parameters[0].split("%20");
    console.log(tempTxt)
    userName = tempTxt[0]
    score = parseInt(tempTxt[1])

  }

function startGame() {
    slideBar();
    drawBoard();
    runGame();
    startTimer();
}

function initSound() {
    correctSound = new Audio('./sound/game2/correct.wav');
    wrongSound = new Audio('./sound/game2/wrong.wav');
    loseSound = new Audio('./sound/game2/boom.wav');
    winSound = new Audio('./sound/game2/win.wav');
    //music = new Audio('./sound/game2/music.ogg');
    //music.play();
    //new Audio('./sound/game2/music.ogg').play();
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
    initSound();
    initModal();
    createBomb();
    showStart();

}

function getScore(){
    return Math.max(0,Math.round((timer/53.00)*3000*numFail*current/900));
}

function initModal() {
    processUser();
    myModal = document.getElementById('myModal')
    closeBtn = document.getElementById('closeBtn')
    textBtn = document.getElementById('textBtn')
}

function showModal() {
    // alert(getScore())
    textOut = document.getElementById('modalText')
    if (endGame == 1) {
        textOut.innerHTML = "ยินดีด้วย "+userName+" คุณได้ไปด่านต่อไป";
        textBtn.innerHTML = "เล่นต่อ";
        closeBtn.onclick = function () {
            location.href = "./startgame3.html?"+userName+" "+(getScore()+score);
        };
    } else if (endGame == -1) {
        textOut.innerHTML = "เสียใจด้วย เวลาหมดแล้ว";
        textBtn.innerHTML = "เริ่มใหม่";
        closeBtn.onclick = function () {
            location.href = "./game2.html?"+userName+" "+score;
        };

    } else {
        textOut.innerHTML = "เสียใจด้วย ระเบิดทำงานแล้ว ลองใหม่นะ";
        textBtn.innerHTML = "เริ่มใหม่";
        closeBtn.onclick = function () {
            location.href = "./game2.html?"+userName+" "+score;
        };
    }
    myModal.style.display = "block";
}

function showStart() {
    textOut = document.getElementById('modalText')

    textOut.innerHTML = "สวัสดี "+userName
    document.getElementById('modalSub').innerHTML = "วิธีเล่น:กดตัวเลขเพื่อตอบโจทย์ที่กำหนดภายใน 1 นาที และให้ทันเวลาระเบิด";
    textBtn.innerHTML = "  เริ่มเกม  ";
    closeBtn.onclick = function () {
        myModal.style.display = "none";
        startGame();
        document.getElementById('modalSub').innerHTML =  ""

    }
    myModal.style.display = "block";
}

function checkAnswer(num) {
    //console.log("check this"+num+" : "+anwser)
    if (parseInt(num) == parseInt(anwser)) {
        point = 100
        correctSound.play();

    } else {
        wrongSound.play();
        numFail-=0.01
    }

}

function drawBoard() {
    ctx.fillStyle = "#7F7F7F"
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
        if (y == 0)
            y++;
        var x = anwser * y
        textOut = x + " ÷ " + y + " = ?"
    }
    console.log(anwser)
    ctx.font = 'bold 110px sans-serif';
    ctx.fillStyle = "#D72121"
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
    if (current > 900) {
        stopTimer()
        ctx.fillRect(351, 801, 900, 28);
        return
    }
    ctx.fillRect(351, 801, current, 28);
    ctx.restore();
    console.log('I \'m point' + point)
    if (point > 0) {
        current += point
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
    ctx.stroke();

}
function startTimer() {
    slide = setInterval(loadSlidebar, 50)
    clock = setInterval(updateTimer, 1000)

}

function stopTimer() {

    clearInterval(clock)
    clearInterval(slide)
    if (current > 0 && timer > 0) {
        endGame = 1;
        winSound.play();
    }
    else {
        loseSound.play();
        if (timer < 0) {
            endGame = -1;
        } else {
            endGame = -2;
        }
    }
    showModal();
}

function updateTimer() {
    if (timer == 0) {
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
