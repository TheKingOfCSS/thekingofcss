const game = document.querySelector('.game');
const birds = document.querySelectorAll('.game .birds');
const controlPanel = document.querySelector('.game .controlPanel');
const canvas = document.querySelector('.game .canvas');
const sniper = document.querySelector('.sniper');
const patron = document.querySelectorAll('.game .controlPanel .life img');
const pointBirds = document.querySelector('.game .canvas .point .pointValue');
const winner = document.querySelector('.winner');
const nextLevel = document.querySelector('.winner .nextLevel');

let currentLife = patron.length;
let currentPoint = 0;
pointBirds.innerText = currentPoint + ' / ' + birds.length;
document.onmousemove = event => {
    sniper.style.top = event.pageY - 50 + 'px';
    sniper.style.left = event.pageX - 50 + 'px';
};
controlPanel.onmouseover = () => {
    sniper.style.display = 'none';
    game.style.cursor = 'auto';
}
controlPanel.onmouseleave = () => {
    sniper.style.display = 'block';
    game.style.cursor = 'none';
}
const gameReplay = document.querySelector('.gameOver .replay');
gameReplay.onclick = () => {
    window.location.reload();
};
document.onclick = event => {
    sniperSound.currentTime = 0;
    currentLife--;
    patron[currentLife].style.display = 'none';
    if (currentLife <= 0) {
        document.querySelector('.gameOver').style.opacity = 1;
        document.querySelector('.gameOver').style.visibility = 'visible';
    }
    const bullet = document.createElement('div');
    bullet.style = `width: 50px; height: 50px; background: url(images/bullet.png) no-repeat center / contain; position: absolute; top: ${event.pageY - 122}px; left: ${event.pageX - 23}px;`;
    canvas.appendChild(bullet);
    sniperSound.play();
};
for (let i = 0; i < birds.length; i++) {
    birds[i].onclick = function() {
        currentPoint++;
        birdDeath.currentTime = 1;
        birdDeath.play();
        setTimeout(() => {
            birdDeath.pause();
        }, 3000);
        this.style.width = 0;
        this.style.height = 0;
        pointBirds.innerText = currentPoint + ' / ' + birds.length;
        if (currentPoint == birds.length) {
            document.querySelector('.gameOver').style.display = 'none';
            winner.style.top = 0;
        }
    };
}
const backToMenu = document.querySelector('.game .canvas .backMenu .toMenu');
backToMenu.onclick = () => {
    localStorage.setItem('backToGame', 2);
    window.location.href = '../index.html';
};
nextLevel.onclick = () => {
    localStorage.setItem('backToGame', 3);
    window.location.href = 'level3.html';
};
document.oncontextmenu = () => false;
