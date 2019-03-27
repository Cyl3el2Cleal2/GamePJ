var canvas;
var timer=60;
var clock;
function createArea() {
    var div = document.getElementById("gameArea")
    canvas = document.createElement('canvas')
    canvas.height = div.height
    canvas.width = div.width
    canvas.style.border   = "3px solid";
    

    div.appendChild(canvas)
    startTimer();
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
    }
    timer = parseInt(timer,10)-1;
    console.log(timer)
    document.getElementById('bdTime').innerHTML = "Time left: "+timer;
}