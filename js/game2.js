var canvas;
var timer=10;
var clock;
var ctx;
function createArea() {

    var div = document.getElementById("gameArea")
    canvas = document.createElement('canvas')
    canvas.height = div.height
    canvas.width = div.width
    canvas.style.border   = "3px solid";
    ctx = canvas.getContext('2d')

    div.appendChild(canvas)
    startTimer();
    createBomb();
}

function createBomb() {

    ctx = canvas.getContext('2d')
    var img = document.createElement("IMG")
    img.src = "./img/bomb.png"
    ctx.drawImage(img,(canvas.width - img.width)/2 ,(canvas.height-img.height)/2)
    ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);
}
function startTimer(){
    clock = setInterval(updateTimer,1000)
}

function stopTimer(){
    clearInterval(clock)
}

function updateTimer(){
    if(timer == 0)
    {
        stopTimer()
        return;
    }
    timer = parseInt(timer,10)-1;
    console.log(timer)
    document.getElementById('bdTime').innerHTML = "Time left: "+timer;
    if(timer < 10){
        if(timer % 2 == 0){
document.getElementById('bdTime').style.color = "red";
        }else{
            
document.getElementById('bdTime').style.color = "white";
        }
    }
}