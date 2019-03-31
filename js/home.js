
function createArea(){
    document.body.onmousedown = function () {
        playSound();
    }
;
}

function playSound() {
    var sound = new Audio('./sound/gun.mp3');
    var sound1 = new Audio('./sound/gun.ogg');
    sound.volume = 0.2;
    sound1.volume = 0.2;
    sound.play();
    sound1.play();
}
function gogo(){
    console.log('before');
    // document.getElementById('startButton').src = "./img/start1.gif";

    setTimeout(function () {
   
        window.location.href = ('name.html');
        console.log('after');
    }, 1000);
   
  }
  function goGame1(){
    console.log('before');
    var sound = new Audio('./sound/NARRATOR 1 (1).mp3');
    
   
    sound.play();
    
        
    var q = location.search.substring(1);
    console.log(q)
    setTimeout(function () {
        window.location.href = ('pang1.html?'+q);
        console.log('after');
    }, 3500);
   
  }
  