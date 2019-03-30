var canvas;
var timer = 20;
var clock;
var ctx;
var width;
var imgCos;
var key, pos = 0;
var div;
var indexofMath = 0;
var xW =0;
var yW =0;
function CreateScene() {
    canvas = document.getElementById('scene');
    canvas.width = 1600;
    canvas.height = 900;
    canvas.style.border = "3px solid";
    ctx = canvas.getContext('2d')
    ctx.moveTo(0, 0);
    ctx.stroke();
    startTimer();
    document.getElementById("Modal").style.display = "none";
    custom();
    MathTitle();
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
             yW = yW+2;          
            if(yW%2==0  ){
                if(yW==12){
                    yW = 0;
                }
                console.log(yW+1 + "  39")
                console.log(image[yW+1] + "  39" + " "+yW+1)               
                imgCos.src = image[yW+1];
                ctx.drawImage(imgCos, Math.floor(width), canvas.height * (4 / 5) - 80, 200, 200);    
                width -= 5;
            }
        }
        if (key == 39) {            
            xW = xW+2;           
            if(xW%2==0  ){
                if(xW==12){
                    xW = 0;
                }             
                imgCos.src = image[xW];
                ctx.drawImage(imgCos, Math.floor(width), canvas.height * (4 / 5) - 80, 200, 200);  
                width += 5;
            }        
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
    var opUsing = ["(2*3)+2-(10/2)", "(20/5)+(2*11)-10", "4+2-(4*8)/3", "(4/2)-(8-2)+35", "10-(((2*8)/3)+9)"];
    var query = parseInt(location.search.substring(1), 10);
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
        document.getElementById("MathN0").innerHTML = opUsing[query] + " = ?";
        MathAnswer(Math.floor(eval(res)));
    } else {
        indexofMat = 0;
        var res = opUsing[indexofMath]
        document.getElementById("MathN0").innerHTML = opUsing[indexofMath] + " = ?";
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
    console.log(Math.floor(res))
    var duplicates = []
    var index1;
    for (var i = 1; i <= 3; i++) {
        index1 = "MathN" + getRandomIntNoDuplicates(1, 3, duplicates);
        if (i > 1) {
            document.getElementById(index1).innerHTML = Math.floor(Math.random() * 100);
            document.getElementById(index1).innerHTML = Math.floor(Math.random() * 100);
            console.log(index1 + " " + document.getElementById(index1).offsetWidth)
        } else {
            console.log(index1 + " " + document.getElementById(index1).offsetWidth)
            document.getElementById(index1).innerHTML = res;
            div = index1;
        }
    }
}

function GameOver() {
    var wx = document.getElementById(div).offsetWidth

    console.log("wx = " + wx + " " + div)
    var ar1 = 532;  //532
    var ar2 = 1031;  //499
    var ar2 = 1563;   //532
    console.log("Width =" + Math.floor(width))
    if (Math.floor(width) > 0 && Math.floor(width) < 532 && wx == 532) {
        win();
    } else if (Math.floor(width) > 532 && Math.floor(width) < 1031 && wx == 499) {
        win();
    } else if (Math.floor(width) > 1031 && Math.floor(width) < 1563 && wx == 532)
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
    document.getElementById("PA").style.backgroundColor = "#281785bb";
    document.getElementById("Modal").style.backgroundColor = "rgba(44, 179, 17, 0.651)";
}
function bomb(width) {
    var image = ["./img/customGame3/bomb.png"];
    ctx = canvas.getContext('2d')
    var imgBomb = new Image()
    imgBomb.src = image[0];
    console.log(image[0])
    imgBomb.onload = function () {
        ctx.drawImage(imgBomb, width, canvas.height * (4 / 5) - 150, 400, 400)
    }
    document.onkeydown = function (e) {
        return false;
    }
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
            window.location.href = "congrat.html"
        } else {
            window.location.href = "game3.html?" + indexofMath
        }

    } else {
        window.location.href = "game3.html"
    }
}
function startTimer() {
    clock = setInterval(updateTimer, 1000)
}
function stopTimer() {
    clearInterval(clock)
}
function updateTimer() {
    if (timer == 15) {
        stopTimer()
        GameOver();
        return;
    }
    timer = parseInt(timer, 10) - 1;
    document.getElementById('bdTime').innerHTML = "Time : " + timer;
    if (timer < 10) {
        if (timer % 2 == 0) {
            document.getElementById('bdTime').style.color = "red";
        } else {

            document.getElementById('bdTime').style.color = "white";
        }
    }
}