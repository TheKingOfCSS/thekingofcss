const game = document.querySelector('.game');
const bird = document.querySelector('.game .bird');
const enemy = document.querySelector('.game .enemy');
const bullet = document.querySelector('.game .bullet');
const allPipe = document.querySelectorAll('.game .pipe');
const topPipe = document.querySelectorAll('.game .pipe.top');
const bottomPipe = document.querySelectorAll('.game .pipe.bottom');
const floor = document.querySelector('.game .floor');
const gameOver = document.querySelector('.game .gameOver');
const control = document.querySelector('.game .control');
const replay = document.querySelector('.game .control .replay');
const menu = document.querySelector('.game .control .menu');
const time = document.querySelector('.game .time');
const point = document.querySelector('.game .point');
const rain = document.querySelector('.game .rain');
const view = document.querySelector('.game .view');
const powerOn = document.querySelector('.game .powerBlock .power .on');
const powerBlock = document.querySelector('.game .powerBlock .power');
const ourTime = localStorage.getItem('flappyTime') || 0;
const ourPoint = localStorage.getItem('flappyPoint') || 0;
let birdY = 50;
let birdZ = 0;
let currentTime = 0;
let currentPoint = 0;
let x = 0;
let speedBackground = 12;
let speedPipe = 7;
let speedEnemy = 4;
let speedBullet = 4;
let power = 0;
let powerBool;
let powEnd = true;
const endGame = () => {
    floor.style.animationPlayState = 'paused';
    game.style.animationPlayState = 'paused';
    allPipe.forEach(item => item.style.animationPlayState = 'paused');
    clearInterval(down);
    clearInterval(gameCheck);
    clearInterval(timeSet);
    bird.style.rotate = null;
    bird.style.transform = 'translateY(8px) rotate(180deg)';
    bird.style.backgroundImage = 'url(img/deathBird.png)';
    document.onkeydown = null;
    bird.style.top = floor.offsetTop - bird.offsetHeight + 'px';
    setTimeout(() => {
        bird.style.backgroundImage = 'url(img/fire.gif)';
        bird.style.backgroundSize = '125px 91px';
        bird.style.backgroundPosition = '-19px -35px';
        bird.style.transition = '.5s linear';
        gameOver.style = 'opacity: 1; top: 25%;';
        control.style = 'opacity: 1; visibility: visible; top: 50%;';
        currentTime > ourTime ? localStorage.setItem('flappyTime', currentTime) : '';
        currentPoint > ourPoint ? localStorage.setItem('flappyPoint', currentPoint) : '';
        view.style = 'top: 65%; padding: 0 40%;';
    }, 400);
};
let gameCheck = setInterval(_ => {
    allPipe.forEach(item => item.offsetLeft < 0 ? item.style.height = Math.random() * (35 - 15) + 15 + '%' : '');
    bird.offsetTop + bird.offsetWidth > floor.offsetTop ? endGame() : '';
    topPipe.forEach(item => {
        if (item.offsetLeft < bird.offsetLeft + bird.offsetWidth && bird.offsetTop < item.offsetTop + item.offsetHeight && item.offsetLeft + item.offsetWidth > bird.offsetLeft) {
            endGame();
        }
    });
    if (bird.offsetLeft > topPipe[x].offsetLeft + topPipe[x].offsetWidth) {
        currentPoint++;
        x++;
        x > 2 ? x = 0 : '';
        point.innerText = 'Point ' + currentPoint;
        powEnd ? power += 3 : '';
        powerOn.style.height = power + '%';
        power >= 100 ? (powerBlock.style.animation = 'power 1s infinite', powerBool = true, powEnd = false) : '';
    }
    bottomPipe.forEach(item => {
        if (item.offsetLeft < bird.offsetLeft + bird.offsetWidth && bird.offsetTop + bird.offsetHeight > item.offsetTop && item.offsetLeft + item.offsetWidth > bird.offsetLeft) {
            endGame();
        }
    });
    speedBackground > 5 ? speedBackground -= .0001 : '';
    speedPipe > 2 ? speedPipe -= .0001 : '';
    currentTime >= 50 && speedEnemy > 1.5 ? (speedEnemy -= .0001, enemy.style.animationDuration = speedEnemy + 's', enemy.style.animationPlayState = 'running') : '';
    currentTime >= 100 && speedBullet > 1 ? (speedBullet -= .0001, bullet.style.animationDuration = speedBullet + 's', bullet.style.animationPlayState = 'running') : '';
    currentTime >= 150 && currentTime < 200 ? rain.style.opacity = 1 : rain.style.opacity = 0;
    game.style.animationDuration = speedBackground + 's';
    floor.style.animationDuration = speedPipe + 's';
    allPipe.forEach(item => item.style.animationDuration = speedPipe + 's');
    if (enemy.offsetLeft < 0) {
        enemy.style.top = Math.random() * (game.offsetHeight - floor.offsetHeight - enemy.offsetHeight) + 'px';
    }
    if (bullet.offsetLeft + bullet.offsetWidth < 0) {
        bullet.style.top = Math.random() * (game.offsetHeight - floor.offsetHeight - bullet.offsetHeight) + 'px';
    }
    if (enemy.offsetLeft < bird.offsetLeft + bird.offsetWidth && enemy.offsetLeft + enemy.offsetWidth > bird.offsetLeft && bird.offsetTop < enemy.offsetTop + enemy.offsetHeight && bird.offsetTop + bird.offsetHeight > enemy.offsetTop) {
        endGame();
    }
    if (bullet.offsetLeft < bird.offsetLeft + bird.offsetWidth && bullet.offsetLeft + bullet.offsetWidth > bird.offsetLeft && bird.offsetTop < bullet.offsetTop + bullet.offsetHeight && bird.offsetTop + bird.offsetHeight > bullet.offsetTop) {
        endGame();
    }
}, 1);
let down = setInterval(() => {
    birdY += 20;
    birdZ < 45 ? birdZ += 5 : '';
    bird.style.top = birdY + 'px';
    bird.style.rotate = birdZ + 'deg';
}, 50);
document.onkeydown = e => {
    if (e.which == 32 || e.which == 38) {
        birdY -= 120;
        birdZ = -30;
        bird.style.top = birdY + 'px';
        bird.style.rotate = birdZ + 'deg';
    } else if (e.which == 13 && powerBool) {
        bird.style = 'width: 34px; height: 26px; background-size: 40px 38px; background-position: -3px -6px;';
        powerBlock.style.animation = '';
        powerBool = false;
        let set = setInterval(() => {
            power -= .3;
            powerOn.style.height = power + '%';
            if (power <= 0) {
                clearInterval(set);
                powEnd = true;
                bird.style = 'width: 86px; height: 56px; background-size: 100px 80px; background-position: -7px -12px;'; 
            }
        }, 70);
    }
};
let timeSet = setInterval(() => {
    currentTime++;
    time.innerText = 'Time ' + currentTime;
    currentTime % 20 == 0 ? game.classList.toggle('night') : '';
}, 1000);
replay.onclick = () => window.location.reload();
menu.onclick = () => window.location.replace('index.html');
document.oncontextmenu = () => false;
document.addEventListener('keydown', e => e.ctrlKey || e.which == 123 ? e.preventDefault() : '');