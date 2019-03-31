
var timer = 10;
var qa = ["5 + 3 - 1 = ?", "6 + 8 - 2 = ?","7 + 7 - 7 = ?","8 - 4 - 7 = ?","1 + 14 - 15 = ?","mission completed"];
var textQa;
var qaKey = ["7,14,2,42,5", "12,15,4,9,10", "7,21,14,9,0", "-3,5,-7,-4,1","0,-15,-5,5,15","0,0,0,0,0"]

var count = 0
var score = 0;
console.log(qa[0]);
function createArea() {
    playSoundBG();
    startTimer();
    init();

    document.body.onmousedown = function () {
        playSound();
    }







}
function createBomb() {

    ctx = canvas.getContext('2d')
    var img = new Image()
    img.src = "./img/ezgif.com-gif-maker.gif";
    img.onload = function () {
        ctx.drawImage(img, (canvas.width - img.width) / 2, 400)

    }
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(canvas.width / 4, 10, 700, 75);
    // ctx.fillStyle = "#FF0000";
    // ctx.moveTo(0, 0);
    // ctx.lineTo(canvas.width, canvas.height)
    ctx.stroke();
}


function startTimer() {
    clock = setInterval(updateTimer, 1000)
}

function stopTimer() {
    clearInterval(clock)
}

function updateTimer() {
    if (score == 4000){
        stopTimer();
        console.log('before');
       
        new Audio('./sound/missionCom.mp3').play()
        setTimeout(function () {
            window.location.href = ('game2.html');
            console.log('after');
        }, 6000);
    }
    if (timer == 0) {
        stopTimer()
        console.log('before');
        alert("Game Over")
    
        setTimeout(function () {
            window.location.href=window.location.href;
            console.log('after');
        }, 1000);
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
function playSound() {
    var sound = new Audio('./sound/gun.mp3');
    var sound1 = new Audio('./sound/gun.ogg');
    sound.volume = 0.2;
    sound1.volume = 0.2;
    sound.play();
    sound1.play();
}
function playSoundBG(id) {

    new Audio('./sound/Metal.mp3').play()
    new Audio('./sound/Metal.ogg').play()


}
function changeSol1(id) {
    console.log(id);
    var ans = document.getElementById('t1').innerHTML
    console.log(ans);
    checkAns(ans);
    new Audio('./sound/TARMA.mp3').play()
    var sol1 = document.getElementById('anime01').src = "./img/sol2.gif";
    document.getElementById("t1").style.backgroundColor = "red";
    console.log('before');
    setTimeout(function () {
        sol1 = document.getElementById('anime01').src = "./img/sol1.gif";
        document.getElementById("t1").style.backgroundColor = "transparent";
        console.log('after');
    }, 1500);


}
function changeSol2(id) {
    console.log(id);
    var ans = document.getElementById('t2').innerHTML
    console.log(ans);
    checkAns(ans);
    new Audio('./sound/TARMA.mp3').play()

    var sol1 = document.getElementById('anime02').src = "./img/sol2.gif";
    document.getElementById("t2").style.backgroundColor = "red";
    console.log('before');
    setTimeout(function () {
        sol1 = document.getElementById('anime02').src = "./img/sol1.gif";
        document.getElementById("t2").style.backgroundColor = "transparent";
        console.log('after');
    }, 1500);


}
function changeSol3(id) {
    console.log(id);
    var ans = document.getElementById('t3').innerHTML
    console.log(ans);
    checkAns(ans);
    new Audio('./sound/TARMA.mp3').play()

    var sol1 = document.getElementById('anime03').src = "./img/sol2.gif";
    document.getElementById("t3").style.backgroundColor = "red";
    console.log('before');
    setTimeout(function () {
        sol1 = document.getElementById('anime03').src = "./img/sol1.gif";
        document.getElementById("t3").style.backgroundColor = "transparent";
        console.log('after');
    }, 1500);


}
function changeSol4(id) {
    console.log(id);
    var ans = document.getElementById('t4').innerHTML
    console.log(ans);
    checkAns(ans);
    new Audio('./sound/TARMA.mp3').play()

    var sol1 = document.getElementById('anime04').src = "./img/sol2.gif";
    document.getElementById("t4").style.backgroundColor = "red";
    console.log('before');
    setTimeout(function () {
        sol1 = document.getElementById('anime04').src = "./img/sol1.gif";
        document.getElementById("t4").style.backgroundColor = "transparent";
        console.log('after');
    }, 1500);


}
function changeSol5(id) {
    console.log("this is id "+id);
    var ans = document.getElementById('t5').innerHTML
    console.log("this is my ans "+ans);
    checkAns(ans);
    new Audio('./sound/TARMA.mp3').play()

    var sol1 = document.getElementById('anime05').src = "./img/sol2.gif";
    document.getElementById("t5").style.backgroundColor = "red";
    console.log('before');
    setTimeout(function () {
        sol1 = document.getElementById('anime05').src = "./img/sol1.gif";
        document.getElementById("t5").style.backgroundColor = "transparent";
        console.log('after');
    }, 1500);


}
function runQa() {
    count++
    showAns();
    textQa.innerHTML = qa[count];

}
function init() {
    count=-1;
    textQa = document.getElementById('cal')

    runQa()

}
function checkAns(ans) {
    console.log("Ans =" + ans)
    console.log("QAkey =" + qaKey[count])
    var key = qaKey[count].split(",")
    if (ans == key[0]) {
        timer = 10;
        score +=800;
        console.log("score"+score)

    } else {
        console.log("false")
        console.log('before');
        
        alert("Game Over")
        setTimeout(function () {
       
            window.location.href=window.location.href
            console.log('after');
        }, 500);
        
    }

    runQa();
}
function showAns() {
    document.getElementById('t2').innerHTML = qaKey[count]
    var ans =  qaKey[count].split(',')
    var num = 1;
    console.log(ans.length + "<<<<<<<<<<<<<<<<<")
    while (ans.length > 0) {
        console.log(ans)
        var index = Math.round(Math.random() * ans.length)
        var i =  ans[index]
        if (i==null){
            continue
        }
        var doc =  document.getElementById('t' + num);
        doc.innerHTML =  i
        ans.splice(index, 1,)
        num++




    }
}

