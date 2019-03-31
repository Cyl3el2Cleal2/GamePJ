var canvas;
var timer = 20;
var clock;
var ctx;
var width;
var imgCos;
var key, pos = 0;
var div;
var indexofMath = 0;
var xW = 0;
var yW = 0;
var score;
var name;
var data;
var correctSound;
var music;
var loseSound;

function CreateScene() {
    name = location.search.substring(1)
    data = name.split("%20")
    console.log(data[0] + " " + data[1] + " " + data.length)
    canvas = document.getElementById('scene');
    canvas.width = 1600;
    canvas.height = 900;
    canvas.style.border = "3px solid";
    ctx = canvas.getContext('2d')
    ctx.moveTo(0, 0);
    ctx.stroke();


    // startTimer();
    custom();
    MathTitle();
    initSound();
    startTimer();
    document.getElementById("Modal").style.display = "none";


}

function initSound() {
    correctSound = new Audio('./sound/game3/sound.wav');
    loseSound = new Audio('./sound/game2/boom.wav');
    music = new Audio('./sound/game2/wrong.wav');
    correctSound.play();
}
function custom() {
    var image = ["./img/customGame3/1.png", "./img/customGame3/b1.png", "./img/customGame3/2.png", "./img/customGame3/b2.png"
        , "./img/customGame3/3.png", "./img/customGame3/b3.png", "./img/customGame3/4.png", "./img/customGame3/b4.png",
        "./img/customGame3/5.png"
        , "./img/customGame3/b5.png", "./img/customGame3/6.png", "./img/customGame3/b6.png"];
    ctx = canvas.getContext('2d')
    width = canvas.width * (1 / 3) + 200
    imgCos = new Image()
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
            yW = yW + 2;
            if (yW % 2 == 0) {
                if (yW == 12) {
                    yW = 0;
                }

                imgCos.src = image[yW + 1];
                ctx.drawImage(imgCos, Math.floor(width), canvas.height * (4 / 5) - 80, 200, 200);
                width -= 5;
            }
        }
        else if (key == 39) {
            xW = xW + 2;
            if (xW % 2 == 0) {
                if (xW == 12) {
                    xW = 0;
                }
                imgCos.src = image[xW];
                ctx.drawImage(imgCos, Math.floor(width), canvas.height * (4 / 5) - 80, 200, 200);

                width += 5;
            }
        } else {

            return;
        }
        canvas.width = canvas.width
        if (width > canvas.width - 200) {
            width = canvas.width - 200;
        } else if (width < 0) {
            width = 0;
        }
    }, 5);


}

function MathTitle() {

    var opUsing = ["(2*3)+" + Math.floor(Math.random() * 100) + "+(10/2)", "(20/5)+(2*11)-" + Math.floor(Math.random() * 100) + "", "" + Math.floor(Math.random() * 100) + "+2-(4*8)*2", "(4/2)-(8-" + Math.floor(Math.random() * 100) + ")+35", "" + Math.floor(Math.random() * 100) + "-(((2*8)*2)+9)"];
    var q = location.search.substring(1);
    var nums = q.split("%20")
    var query = parseInt(nums[2], 10);

    if (query == null) {

        document.getElementById("Level").innerHTML = "Level " + 1
    }
    if (query > 0) {
        if (query > 5) {
            window.location.href = "win.html"
        }
        document.getElementById("Level").innerHTML = "Level " + parseInt(query + 1, 10)
        indexofMath = query
        var res = opUsing[query]
        var render = res.split("");
        var txts = "";
        for (var i = 0; i < render.length; i++) {
            if (render[i] == "*") {

                txts += "x"
            } else if (render[i] == "/") {
                txts += "÷"             
            } else {
                txts += "" + render[i]   
            }
        }
        document.getElementById("MathN0").innerHTML = txts + " = ?";
        MathAnswer(Math.floor(eval(res)));
    } else {
        indexofMat = 0;
        var res = opUsing[indexofMath]
        var render = res.split("");
        var txts = ""
        for (var i = 0; i < render.length; i++) {
            if (render[i] == "*") {
                txts += "x"
            } else if (render[i] == "/") {
                txts += "÷"
            } else {
                txts += "" + render[i]
            }
        }
        document.getElementById("MathN0").innerHTML = txts + " = ?";
        MathAnswer(Math.floor(eval(res)));
    }
}
function inArray(arr, el) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == el) return true;
    return false;
}

function getRandomIntNoDuplicates(min, max, DuplicateArr) {
    var RandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (DuplicateArr.length > (max - min)) return false;
    if (!inArray(DuplicateArr, RandomInt)) {
        DuplicateArr.push(RandomInt);
        return RandomInt;
    }
    return getRandomIntNoDuplicates(min, max, DuplicateArr);
}
function MathAnswer(res) {

    var duplicates = []
    var index1;
    for (var i = 1; i <= 3; i++) {
        index1 = "MathN" + getRandomIntNoDuplicates(1, 3, duplicates);
        if (i > 1) {
            document.getElementById(index1).innerHTML = Math.floor(Math.random() * 100);
            document.getElementById(index1).innerHTML = Math.floor(Math.random() * 100);

        } else {

            document.getElementById(index1).innerHTML = res;
            div = index1;
        }
    }
}

function GameOver() {
    var wx = document.getElementById(div).offsetWidth
    var wx1 = document.getElementById("MathN1").offsetWidth
    var wx2 = document.getElementById("MathN2").offsetWidth
    var wx3 = document.getElementById("MathN3").offsetWidth
    var ar1 = 532;  //532
    var ar2 = 1031;  //499
    var ar2 = 1563;   //532
    console.log(width + " " + wx + " " + wx1 + " " + wx2 + " " + wx3)
    if (Math.floor(width) > 0 && Math.floor(width) < wx1 && wx == wx1) {

        win();
    } else if (Math.floor(width) > wx1 && Math.floor(width) < wx1 + wx2 && wx == wx2) {
        win();
    } else if (Math.floor(width) > wx1 + wx2 && Math.floor(width) < wx1 + wx2 + wx3 && wx == wx3)
        win();
    else {
        bomb(width)
    }

}
function win() {
    document.onkeydown = function (e) {
        return false;
    }
    document.getElementById("Modal").style.display = "block";
    document.getElementById("GO").innerHTML = "ชนะ";
    document.getElementById("PA").innerHTML = "ต่อไป";
    document.getElementById("PA").style.backgroundColor = "rgb(105,105,105)";
    document.getElementById("Modal").style.backgroundColor = "rgb(0,0,0)";
}
function bomb(width) {
    var image = ["./img/customGame3/bomb.png"];
    ctx = canvas.getContext('2d')
    var imgBomb = new Image()
    imgBomb.src = image[0];

    imgBomb.onload = function () {
        ctx.drawImage(imgBomb, width, canvas.height * (4 / 5) - 150, 400, 400)
    }
    loseSound.play();
    document.onkeydown = function (e) {
        return false;
    }
    document.getElementById("GO").innerHTML = "แพ้";
    document.getElementById("PA").innerHTML = "เล่นอีกครั้ง";
    document.getElementById("Modal").style.display = "block";
}
function nextPage() {
    var elem = document.getElementById("PA");
    var txt = elem.textContent || elem.innerText;
    if (txt == "ต่อไป") {
        indexofMath = indexofMath + 1;
        parseInt(indexofMath, 10);
        if (parseInt(indexofMath, 10) > 4) {
            document.getElementById("Modal").style.display = "block";
            document.getElementById("GO").innerHTML = "ชนะ";
            document.getElementById("PA").innerHTML = "ยินดีด้วย คุณได้ 50 คะแนนเต็ม";
            document.getElementById("PA").style.backgroundColor = "rgb(105,105,105)";
            document.getElementById("Modal").style.backgroundColor = "rgb(0,0,0)";
            var so = parseInt(data[1])
            so = so + 5000
            window.location.href = "congrat.html?" + data[0] + " " + so
        } else {
            window.location.href = "game3.html?" + data[0] + " " + data[1] + " " + indexofMath
        }

    } else {
        window.location.href = "game3.html?" + data[0] +" " +data[1]
    }
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
            music.play()
            document.getElementById('bdTime').style.color = "red";
        } else {

            document.getElementById('bdTime').style.color = "white";
        }
    }
}


