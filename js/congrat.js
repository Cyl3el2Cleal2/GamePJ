var canvas;
var ctx;
var name;
var data;
function congrat() {
    name = location.search.substring(1)
    data = name.split("%20")
    console.log(data[0] + " " + data[1])
    canvas = document.getElementById('scene');
    canvas.width = 1600;
    canvas.height = 900;
    canvas.style.border = "3px solid";
    ctx = canvas.getContext('2d')
    ctx.moveTo(0, 0);
}
function nextPage() {
    window.location.href = "game3.html?" + data[0] + " " + data[1]
}