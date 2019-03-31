var canvas;
var ctx;
var name;
var data;
var process;
var temp;
var sound
var time;
function congrat() {
    name = location.search.substring(1)
    data = name.split("%20")
    console.log(data[0] + " " + data[1])
    canvas = document.getElementById('scene');
    document.getElementById('user').innerHTML = data[0]
    canvas.width = 1600;
    canvas.height = 900;
    canvas.style.border = "3px solid";
    ctx = canvas.getContext('2d')
    ctx.moveTo(0, 0);
    document.getElementById('score').innerHTML = "Score " + data[1]
    runStar();
}
function nextPage() {

    window.location.href = "home.html"
}

function addStar() {
    temp-=1000;
    if (temp < 1000) {
        clearTimeout(process)
    }
    sound.play();
    var hold = document.getElementById('holdStar')
    tempScore = data[1]
    console.log(tempScore)
    var img = new Image()
    img.src = './img/star.png'
    hold.appendChild(img)

}
function render(x) {
    window.setTimeout(addStar(),x)
}

function runStar() {
    sound = new Audio('sound/kickn.wav')
    temp = parseInt(data[1]);

    sound.onloadedmetadata = function () {

        var x = sound.duration*1000
        var funR = render
        process = window.setInterval(funR, x+200)
    }






}