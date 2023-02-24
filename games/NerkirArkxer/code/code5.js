const gameMenu = document.querySelector('.gameMenu');
const startButton = document.querySelector('.gameMenu .control .start');
const description = document.querySelector('.description');
const closeDescr = document.querySelector('.description .closeDescr');
const aboutInfo = document.querySelector('.gameMenu .control .about');

closeDescr.onclick = () => {
    description.style.display = 'none';  
};
aboutInfo.onclick = () => {
    description.style.display = 'block';  
};
startButton.onclick = function() {
    gameMenu.style.top = '100%';
};
const boxBlock = document.querySelector('.level1 .boxBlock');

for (let i = 0; i < 300; i++) {
    const levBox = document.createElement('div');
    levBox.className = 'box';
    boxBlock.appendChild(levBox);
}

const levelsMenuButton = document.querySelector('.levelsGame .levelsControlPanel .backMenu');
const levelsMenuButton2 = document.querySelector('.levelsMenu .backMenu');
levelsMenuButton.onclick = function() {
    gameMenu.style.top = 0;
};
levelsMenuButton2.onclick = function() {
    gameMenu.style.top = 0;
};
const overlay = document.querySelector('.overlay');
const overlaySecond = document.querySelector('.overlay h4');
const GameTimer = document.querySelector('.levelsGame .levelsControlPanel .timeBlock .time');
let overlaySecondText = 3;
let GameTimerText = 45;
const box = document.querySelectorAll('.level1 .boxBlock .box');
const point = document.querySelector('.levelsGame .levelsControlPanel .pointCount .point');
let boxCount = 0;

setTimeout(() => {
    overlay.style.opacity = 1;
    let set = setInterval(() => {
        overlaySecondText--;
        overlaySecond.innerText = overlaySecondText + 's';
        if (overlaySecondText == 0) {
            clearInterval(set);
        }
        
        if (overlaySecondText == 2) {
            overlaySecond.style.textShadow = '0 0 13px #f800ff';
        } else if (overlaySecondText == 1) {
            overlaySecond.style.textShadow = '0 0 13px rgb(1, 255, 94)';
        } else if (overlaySecondText == 0) {
            overlaySecond.style.textShadow = '0 0 13px #ff0000';
            setTimeout(() => {
                overlay.style.opacity = 0;
                overlay.style.visibility = 'hidden';
                let timer = setInterval(() => {
                    GameTimerText--;
                    GameTimer.innerText = GameTimerText + 's';
                    if (GameTimerText == 0 || GameTimerText < 0) {
                        GameTimer.innerText = 0 + 's';
                        document.querySelector('.gameOver').style.opacity = 1;
                        document.querySelector('.gameOver').style.visibility = 'visible';
                        clearInterval(timer);
                    }
                    if (boxCount == box.length) {
                        clearInterval(timer);
                        localStorage.setItem('gameLevel', 6);
                        setTimeout(() => {
                            document.querySelector('.winner').classList.add('win');
                            setTimeout(() => {
                               
                               document.querySelector('.winner').classList.add('winPart2');
                                document.querySelector('.levelsMenu').classList.add('next');
                            }, 2500);
                        }, 500);
                    }
                }, 1000);
            },1000);
        }
    }, 1000);
}, 500);

const gameReplay = document.querySelector('.gameOver .replay');
gameReplay.onclick = () => {
    window.location.reload();
};

for (let i = 0; i < box.length; i++) {
    box[i].onmouseover = function() {
        boxCount++;
        this.style.background = '#ff0000';  
        this.style.pointerEvents = 'none';
        point.innerText = boxCount;
    };
}

const effectPlayGame = document.querySelector('.effectPlayGame');
const levelsPlayButton = document.querySelectorAll('.levelsMenu .levels .item');
levelsPlayButton[1].onclick = function() {
    effectPlayGame.classList.add('active');
    effectPlayGame.classList.add('activeNext');
    setTimeout(() => {
        window.location.href = 'code6.html';
    }, 500);
};
const bomb1 = document.querySelector('.levelsGame .boxBlock .bomb1 .bomb');
bomb1.onmouseover = function() {
    GameTimerText -= 6;
    this.style.display = 'none';
    document.querySelector('.levelsGame .boxBlock .bomb1 .boom').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.levelsGame .boxBlock .bomb1').style.display = 'none';
    },300);
};
const bomb2 = document.querySelector('.levelsGame .boxBlock .bomb2 .bomb');
bomb2.onmouseover = function() {
    GameTimerText -= 7;
    this.style.display = 'none';
    document.querySelector('.levelsGame .boxBlock .bomb2 .boom').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.levelsGame .boxBlock .bomb2').style.display = 'none';
    },300);
};