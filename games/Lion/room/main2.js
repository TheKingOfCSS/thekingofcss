const back = document.querySelector('.game');
const hero = document.querySelector('.game .hero');
const wrag = document.querySelector('.game .wrag');
const laser = document.querySelector('.game .laser');
const coinText = document.querySelector('.game .coin');
let jump = true;
let gameBool = true;
let coin = 0;
const sound = new Audio('../sound/horse.mp3');
const music = new Audio('../sound/music2.mp3');
const lion = new Audio('../sound/lion.mp3');
let soundBool = true ;
music.ontimeupdate = () => music.ended ? music.play() : '';
back.onclick = () => {
	if (soundBool) sound.play();
	music.play();
	soundBool = false;
	lion.play();
    if (jump) {
        jump = false;
        hero.style.animation = 'jump 1s';
        laser.style.animation = 'laser 1s';
        setTimeout(() => {
            hero.style.animation = 'none';
            laser.style.animation = 'none';
            jump = true;
        }, 1000);
    }
};

let set = setInterval(() => {
    if (wrag.offsetLeft <= hero.offsetLeft + hero.offsetWidth - 20 && hero.offsetTop + hero.offsetHeight - 40 >= wrag.offsetTop && wrag.offsetLeft + wrag.offsetWidth - 90 > hero.offsetLeft && gameBool) {
		let over = document.querySelector('.game h3');
		over.style.transform = 'translate(-50%, -50%)';
		over.style.opacity = 1;
		clearInterval(set);
		hero.style.display = 'none';
		wrag.style.display = 'none';
		setTimeout(() => location.href = '../menu.html', 2000);
    }
    if (wrag.offsetLeft <= laser.offsetLeft + laser.offsetWidth && laser.offsetTop + laser.offsetHeight >= wrag.offsetTop && wrag.offsetLeft + wrag.offsetWidth >= laser.offsetLeft) {
        wrag.style.backgroundImage = 'url(../img/death2.png)';
        gameBool = false;
        coin += .015;
        coinText.innerText = parseInt(coin)  + ' / 20';
    }
    if (wrag.offsetLeft + wrag.offsetWidth < 0) {
        wrag.style.backgroundImage = 'url(../img/wrag2.gif)';
        gameBool = true;
		sound.play();
    }
	if (coin >= 20) {
		let winner = document.querySelector('.game h2');
		winner.style.transform = 'translate(-50%, -50%)';
		winner.style.opacity = 1;
		wrag.style.display = 'none';
		clearInterval(set);
		setTimeout(() => {
			localStorage.setItem('lionGame', 3);
			localStorage.setItem('lev2', 20);
			location.href = '../menu.html';
		}, 2000);
	}
}, 1);

back.ondblclick = () => {
    hero.style.left = '320px';
    laser.style.left = '550px';
    setTimeout(() => {
        hero.style.left = '200px';
        laser.style.left = '440px';
    }, 500);
};

back.oncontextmenu = () => {
    laser.style.width = '290px';
    laser.style.opacity = 1;
    laser.style.transition = 'width .3s, opacity .1s';
    setTimeout(() => {
        laser.style.width = 0;
        laser.style.opacity = 0;
        laser.style.transition = 'width .3s, opacity .1s .3s';
    }, 300);
    return false;
};


