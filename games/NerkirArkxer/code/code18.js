const gameMenu = document.querySelector('.gameMenu');
const startButton = document.querySelector('.gameMenu .control .start');
const description = document.querySelector('.description');
const closeDescr = document.querySelector('.description .closeDescr');
const aboutInfo = document.querySelector('.gameMenu .control .about');
document.querySelector('.endGame .backToMenu').onclick = () => {
    window.location.href = '../index.html';  
};
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

for (let i = 0; i < 348; i++) {
    const levBox = document.createElement('div');
    levBox.className = 'box';
    boxBlock.appendChild(levBox);
}
for (let i = 0; i < 29; i++) {
    const ice = document.createElement('div');
    ice.className = 'ice ice1';
    ice.style = `--i:${i}`;
    boxBlock.appendChild(ice);
    const ice2 = document.createElement('div');
    ice2.className = 'ice ice2';
    ice2.style = `--i:${i}`;
    boxBlock.appendChild(ice2);
    const ice3 = document.createElement('div');
    ice3.className = 'ice ice3';
    ice3.style = `--i:${i}`;
    boxBlock.appendChild(ice3);
    const ice4 = document.createElement('div');
    ice4.className = 'ice ice4';
    ice4.style = `--i:${i}`;
    boxBlock.appendChild(ice4);
    const ice5 = document.createElement('div');
    ice5.className = 'ice ice5';
    ice5.style = `--i:${i}`;
    boxBlock.appendChild(ice5);
    const ice6 = document.createElement('div');
    ice6.className = 'ice ice6';
    ice6.style = `--i:${i}`;
    boxBlock.appendChild(ice6);
    const ice7 = document.createElement('div');
    ice7.className = 'ice ice7';
    ice7.style = `--i:${i}`;
    boxBlock.appendChild(ice7);
    const ice8 = document.createElement('div');
    ice8.className = 'ice ice8';
    ice8.style = `--i:${i}`;
    boxBlock.appendChild(ice8);
    const ice9 = document.createElement('div');
    ice9.className = 'ice ice9';
    ice9.style = `--i:${i}`;
    boxBlock.appendChild(ice9);
    const ice10 = document.createElement('div');
    ice10.className = 'ice ice10';
    ice10.style = `--i:${i}`;
    boxBlock.appendChild(ice10);
    const ice11 = document.createElement('div');
    ice11.className = 'ice ice11';
    ice11.style = `--i:${i}`;
    boxBlock.appendChild(ice11);
    const ice12 = document.createElement('div');
    ice12.className = 'ice ice12';
    ice12.style = `--i:${i}`;
    boxBlock.appendChild(ice12);
    
    const Doubleice = document.createElement('div');
    Doubleice.className = 'ice Doubleice d';
    Doubleice.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice);
    const Doubleice2 = document.createElement('div');
    Doubleice2.className = 'ice Doubleice d2';
    Doubleice2.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice2);
    const Doubleice3 = document.createElement('div');
    Doubleice3.className = 'ice Doubleice d3';
    Doubleice3.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice3);
    const Doubleice4 = document.createElement('div');
    Doubleice4.className = 'ice Doubleice d4';
    Doubleice4.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice4);
    const Doubleice5 = document.createElement('div');
    Doubleice5.className = 'ice Doubleice d5';
    Doubleice5.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice5);
    const Doubleice6 = document.createElement('div');
    Doubleice6.className = 'ice Doubleice d6';
    Doubleice6.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice6);
    const Doubleice7 = document.createElement('div');
    Doubleice7.className = 'ice Doubleice d7';
    Doubleice7.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice7);
    const Doubleice8 = document.createElement('div');
    Doubleice8.className = 'ice Doubleice d8';
    Doubleice8.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice8);
    const Doubleice9 = document.createElement('div');
    Doubleice9.className = 'ice Doubleice d9';
    Doubleice9.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice9);
    const Doubleice10 = document.createElement('div');
    Doubleice10.className = 'ice Doubleice d10';
    Doubleice10.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice10);
    const Doubleice11 = document.createElement('div');
    Doubleice11.className = 'ice Doubleice d11';
    Doubleice11.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice11);
    const Doubleice12 = document.createElement('div');
    Doubleice12.className = 'ice Doubleice d12';
    Doubleice12.style = `--i:${i}`;
    boxBlock.appendChild(Doubleice12);
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
let GameTimerText = 25;
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
                setInterval(() => {
                    let l = Math.round(Math.random() * 900);
                    let t = Math.round(Math.random() * 480);
                    let randomBomb = document.createElement('img');
                    randomBomb.src = '../img/bomb2.gif';
                    randomBomb.className = 'randomB';
                    randomBomb.style.position = 'absolute';
                    randomBomb.style.height = '90px';
                    randomBomb.style.top = t + 'px';
                    randomBomb.style.left = l + 'px';
                    randomBomb.style.zIndex = 3;
                    document.querySelector('.levelsGame .boxBlock').appendChild(randomBomb);
                    const allRandomBomb = document.querySelectorAll('.levelsGame .boxBlock .randomB');
                    let removeTime = setTimeout(() => {
                        for (let i = 0; i < allRandomBomb.length; i++) {
                            allRandomBomb[i].style.display = 'none';
                        }
                        GameTimerText -= 3;
                    }, 2600);

                    for (let i = 0; i < allRandomBomb.length; i++) {
                        allRandomBomb[i].onmouseover = function() {
                            clearTimeout(removeTime);
                            this.style.display = 'none';
                        };
                    }
                }, 3500);
                (function newDeathBomb() {
                    let deathBomb = setInterval(() => {
                        let l = Math.round(Math.random() * 900);
                        let t = Math.round(Math.random() * 480);
                        let randomBomb = document.createElement('img');
                        let randomBomb2 = document.createElement('img');
                        let randomBombBoom = document.createElement('img');
                        let randomBombBoom2 = document.createElement('img');
                        randomBomb.src = '../img/rumbBig2.png';
                        randomBomb2.src = '../img/rumbBig2.png';
                        randomBombBoom.src = '../img/boom.gif';
                        randomBombBoom2.src = '../img/boom.gif';
                        randomBomb.className = 'deathBomb';
                        randomBomb2.className = 'deathBomb2';
                        randomBombBoom.className = 'deathBombBoom';
                        randomBombBoom2.className = 'deathBombBoom2';
                        randomBomb.style.position = 'absolute';
                        randomBomb2.style.position = 'absolute';
                        randomBombBoom.style.position = 'absolute';
                        randomBombBoom2.style.position = 'absolute';
                        randomBomb.style.height = '70px';
                        randomBomb2.style.height = '70px';
                        randomBombBoom.style.height = '100px';
                        randomBombBoom2.style.height = '100px';
                        randomBombBoom.style.display = 'none';
                        randomBombBoom2.style.display = 'none';
                        randomBomb.style.top = t + 'px';
                        randomBomb2.style.top = t + 120 + 'px';
                        randomBombBoom.style.top = t + 'px';
                        randomBombBoom2.style.top = t + 120 + 'px';
                        randomBomb.style.left = l + 'px';
                        randomBomb2.style.left = l + 'px';
                        randomBombBoom.style.left = l + 'px';
                        randomBombBoom2.style.left = l + 'px';
                        randomBomb.style.zIndex = 4;
                        randomBomb2.style.zIndex = 4;
                        randomBombBoom.style.zIndex = 5;
                        randomBombBoom2.style.zIndex = 5;
                        document.querySelector('.levelsGame .boxBlock').appendChild(randomBomb);
                        document.querySelector('.levelsGame .boxBlock').appendChild(randomBombBoom);
                        document.querySelector('.levelsGame .boxBlock').appendChild(randomBomb2);
                        document.querySelector('.levelsGame .boxBlock').appendChild(randomBombBoom2);
                        const allRandomBomb = document.querySelectorAll('.levelsGame .boxBlock .deathBomb');
                        const allRandomBomb2 = document.querySelectorAll('.levelsGame .boxBlock .deathBomb2');
                        const allRandomBombBoom = document.querySelectorAll('.levelsGame .boxBlock .deathBombBoom');
                        const allRandomBombBoom2 = document.querySelectorAll('.levelsGame .boxBlock .deathBombBoom2');
                        setTimeout(() => {
                            for (let i = 0; i < allRandomBomb.length; i++) {
                                allRandomBomb[i].style.display = 'none';
                                allRandomBombBoom[i].style.display = 'none';
                                allRandomBomb2[i].style.display = 'none';
                                allRandomBombBoom2[i].style.display = 'none';
                            }
                        }, 1000);
                        for (let i = 0; i < allRandomBomb.length; i++) {
                            allRandomBomb[i].onmouseover = function() {
                                for (let i = 0; i < allRandomBomb.length; i++) {
                                    allRandomBomb[i].style.display = 'none';  
                                }
                                randomBombBoom.style.display = 'block';
                                setTimeout(() => {
                                    randomBombBoom.style.display = 'none';
                                    clearInterval(deathBomb);
                                    GameTimerText = 0;
                                }, 500);
                            };
                        }
                        for (let i = 0; i < allRandomBomb2.length; i++) {
                            allRandomBomb2[i].onmouseover = function() {
                                for (let i = 0; i < allRandomBomb2.length; i++) {
                                    allRandomBomb2[i].style.display = 'none';  
                                }
                                randomBombBoom2.style.display = 'block';
                                setTimeout(() => {
                                    randomBombBoom2.style.display = 'none';
                                    clearInterval(deathBomb);
                                    GameTimerText = 0;
                                    setTimeout(() => {
                                        newDeathBomb();
                                    }, 15000);
                                }, 500);
                            };
                        }
                    }, 2000);
                })();
                
                setInterval(() => {
                    let l = Math.round(Math.random() * 900);
                    let t = Math.round(Math.random() * 480);
                    let randomHealth = document.createElement('img');
                    let randomHealthText = document.createElement('span');
                    let healthGlobRandom = Math.round(Math.random() * (20 - 1) + 1);
                    randomHealthText.innerText = `+${healthGlobRandom}`;
                    randomHealth.src = '../img/health.png';
                    randomHealth.className = 'health';
                    randomHealthText.className = 'healthText';
                    randomHealth.style.position = 'absolute';
                    randomHealthText.style.position = 'absolute';
                    randomHealthText.style.fontSize = '25px';
                    randomHealthText.style.color = '#fff';
                    randomHealth.style.height = '40px';
                    randomHealth.style.filter = 'drop-shadow(0 0 3px #fff) drop-shadow(0 0 4px #fff) drop-shadow(0 0 5px #fff)';
                    randomHealth.style.top = t + 'px';
                    randomHealthText.style.top = t + 3 + 'px';
                    randomHealth.style.left = l + 'px';
                    randomHealthText.style.left = l + 2 + 'px';
                    randomHealth.style.zIndex = 3;
                    randomHealthText.style.zIndex = 3;
                    document.querySelector('.levelsGame .boxBlock').appendChild(randomHealth);
                    document.querySelector('.levelsGame .boxBlock').appendChild(randomHealthText);
                    const AllrandomHealth = document.querySelectorAll('.levelsGame .boxBlock .health');
                    const AllhealthText = document.querySelectorAll('.levelsGame .boxBlock .healthText');
                    let removeTime = setTimeout(() => {
                        for (let i = 0; i < AllrandomHealth.length; i++) {
                            AllrandomHealth[i].style.display = 'none';
                            AllhealthText[i].style.display = 'none';
                        }
                    }, 5000);

                    for (let i = 0; i < AllrandomHealth.length; i++) {
                        AllrandomHealth[i].onmouseover = function() {
                            this.style.display = 'none';
                            AllhealthText[i].style.display = 'none';
                            GameTimerText += healthGlobRandom;
                        };
                        AllhealthText[i].onmouseover = function() {
                            this.style.display = 'none';
                            AllrandomHealth[i].style.display = 'none';
                            GameTimerText += healthGlobRandom;
                        };
                    }
                }, 5000);
                
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
                        setTimeout(() => {
                            document.querySelector('.endGame').style.display = 'block';
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
        this.style.background = 'transparent';  
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
        window.location.href = 'code18.html';
    }, 500);
};

const iceIce = document.querySelectorAll('.level1 .ice');

iceIce.forEach(item => {
   item.onmouseover = function() {
       this.style.visibility = 'hidden';
       this.style.opacity = 0;
   };
});




