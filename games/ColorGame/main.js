
const list = document.querySelector('.list');
const listItem = document.querySelectorAll('.menu .list .colors .item');
const colorArr = ['red','orange','green','blue'];
const gameItem = document.querySelectorAll('.game .colorItems .item');
const game = document.querySelector('.game');
const gameBlock = document.querySelector('.game .colorItems');
const gamePoint = document.querySelector('.game .myPoints');
const gameWinner = document.querySelector('.game .winner');
const nextLevel = document.querySelector('.game .nextLevel');
const developers = document.querySelector('.menu .developers');
let myColor;
let myPoints = 2;
let goal = 10;
let checkBool = true;
let timeGame = 1000;
let levels = 1;
let indexDesign = 0;
const design = [
    'width: 100%; height: 100%;',
    'width: 100%; height: 80%;',
    'width: 100%; height: 50%; border-radius: 50%;',
    'width: 100%; height: 50%; border-radius: 30% 70% 30% 70% / 30% 30% 70% 70%;',
    'width: 100%; height: 100%; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);',
    'width: 100%; height: 100%; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);',
];

const theme = new Audio('sound/theme.mp3');
const trueAnswer = new Audio('sound/trueanswer.mp3');
const falseAnswer = new Audio('sound/falseanswer.mp3');
const winnerMusic = new Audio('sound/winner.mp3');

document.onmousedown = () => theme.play();
theme.ontimeupdate = () => theme.ended ? theme.play() : '';

play.onmousemove = e => {
    play.style.setProperty('--t', e.offsetY + 'px');
    play.style.setProperty('--l', e.offsetX + 'px');
};
const colorsItem = document.querySelectorAll('.menu .list .colors .item ');
for (let i = 0; i < colorsItem.length; i++) {
    colorsItem[i].style.background = colorArr[i];
}
function openClose(x) {
   list.style.bottom = x;
}

for (let i = 0; i < listItem.length; i++) {
    listItem[i].onclick = () => {
        myColor = listItem[i].style.backgroundColor;
        listItem[i].firstElementChild.style.animation = 'check 1s  forwards';
        listItem[i].onanimationend = () => {
            list.style.bottom = '-100%';
            play.style.left = '-100%';
            title.style.left = '100%';
            developers.style.bottom = '-100%';
            game.style.top = '0';
            for (let i = 0; i < gameItem.length; i++) {
                gameItem[i].style.pointerEvents = 'none';
            }
            let a = Math.round(Math.random() * 3);
            let b = Math.round(Math.random() * 3);
            let c = Math.round(Math.random() * 3);
            while(a == b) {
                b = Math.round(Math.random() * 3);
            }
            while(a == c || b == c) {
                c = Math.round(Math.random() * 3);
            }
            let d = 6 - (a + b + c);
            
            gameItem[0].style.background = colorArr[a];
            gameItem[1].style.background = colorArr[b];
            gameItem[2].style.background = colorArr[c];
            gameItem[3].style.background = colorArr[d];
            
            function randomColor() {
                a = Math.round(Math.random() * 3);
                b = Math.round(Math.random() * 3);
                c = Math.round(Math.random() * 3);
                while(a == b) {
                    b = Math.round(Math.random() * 3);
                }
                while(a == c || b == c) {
                    c = Math.round(Math.random() * 3);
                }
                d = 6 - (a + b + c);
            }
            
            function again() {
                let set = setInterval(() => {
                    if (checkBool) {
                        gameItem[0].style.background = colorArr[a];
                        gameItem[1].style.background = colorArr[b];
                        gameItem[2].style.background = colorArr[c];
                        gameItem[3].style.background = colorArr[d];
                        randomColor();
                        for (let i = 0; i < gameItem.length; i++) {
                            gameItem[i].style.pointerEvents = 'auto';
                        }
                    }
                    if (myPoints == goal) {
                        clearInterval(set);
                        timeGame -= 10;
                        again();
                    }
                }, timeGame);
            }
            again();
        }
        for (let j = 0; j < listItem.length; j++) {
            listItem[j].style.pointerEvents = 'none';
        }
    }
}

gameBlock.onclick = e => {
    if (e.target.className == 'item') {
        if (e.target.style.background == myColor) {
            myPoints++;
            trueAnswer.play();
			trueAnswer.currentTime = 0;
            if (myPoints == goal) {
				winnerMusic.play();
                checkBool = false;
                setTimeout(() => game.style.top = '-100%', 500);
                gameWinner.style.top = '50%';
                levels++;
                nextLevel.innerText = 'level ' + levels;
                setTimeout(() => {
                    indexDesign++;
                    if (indexDesign == design.length) {
                        indexDesign = 0;
                    }
                    for (let i = 0; i < gameItem.length; i++) {
                        gameItem[i].style = design[indexDesign];
                    }
                    nextLevel.style.top = '50%';
                    nextLevel.style.transition = '.5s 1s';
                    setTimeout(() => {
                        nextLevel.style.top = '-100%';
                        nextLevel.style.transition = '.5s';
                        gameWinner.style.top = '-100%';
                        setTimeout(() => game.style.top = 0, 500);
                        checkBool = true;
                        myPoints = 2;
                        goal += 5;
                        gamePoint.innerText = myPoints + ' / ' + goal;
                    }, 3000);
                }, 800);
                for (let i = 0; i < gameItem.length; i++) {
                    gameItem[i].style.pointerEvents = 'none';
                }
            }
            gamePoint.innerText = myPoints + ' / ' + goal;
        } else {
            myPoints--;
            falseAnswer.play();
			falseAnswer.currentTime = 0;
            if (myPoints == 0) {
                checkBool = false;
                setTimeout(() => game.style.top = '-100%', 500);
                gameWinner.style.top = '50%';
                gameWinner.innerText = 'Game Over';
                setTimeout(() => window.location.reload(), 3000);
            }
            if (myPoints >= 0) {
                gamePoint.innerText = myPoints + ' / ' + goal;
            }
        }
    }
};

