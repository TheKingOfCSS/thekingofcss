const gameBlock = document.querySelector('.gameDino');
const start = document.querySelector('.gameDino .start');
const dino = document.querySelector('.gameDino .dino');
const cactus = document.querySelector('.gameDino .cactus');
let trueGame = false;
let coin = 0;
let speed = 3;
let speedBg = 1.3;
let image = ['img/cac.webp', 'img/html.png', 'img/css.png', 'img/js.png'];
let imgCurrent = 0;
let bool = true;
function clickStart() {
	startGame();
	trueGame = true;
	theme.play();
	start.classList.add('stop');
	gameBlock.classList.add('start');
	cactus.style.animation = 'cactus 3s linear infinite';
	gameBlock.style.animation = 'bg 1.3s linear infinite, nightSun 10s linear infinite alternate';
	dino.style.background = 'url(img/dino.gif) no-repeat 50% -13px / 130%';
	dino.style.filter = 'invert(1) drop-shadow(0 0 1px #fff)';
	setInterval(() => {
		speed -= .0001;
		speedBg -= .00001;
		if (speed <= 1) {
			speed = 1;
			speedBg = 1;
		}
	}, 1);
	setInterval(() => {
			let cactusLeft = Math.ceil(+window.getComputedStyle(cactus).getPropertyValue('left').slice(0, -2));
		if (cactusLeft < -30) {
			imgCurrent++;
			imgCurrent == image.length ? imgCurrent = 0 : '';
			cactus.style.backgroundImage = `url(${image[imgCurrent]})`;
		}
	}, 100);
}
start.onclick = () => {
	bool = false;
	clickStart();
};

const soundDeath = new Audio();
const soundFlight = new Audio();
const theme = new Audio();
soundDeath.src = 'img/death.mp3';
soundFlight.src = 'img/flight.mp3';
theme.src = 'img/theme.mp3';
theme.ontimeupdate = () => theme.ended ? theme.play() : '';
function startGame() {
	let game = setInterval(() => {
		cactus.style.animationDuration = speed + 's';
		gameBlock.style.animationDuration = speedBg + 's 60s';
		let cactusLeft = Math.ceil(+window.getComputedStyle(cactus).getPropertyValue('left').slice(0, -2));
		let dinoLeft = Math.ceil(+window.getComputedStyle(dino).getPropertyValue('left').slice(0, -2));
		let = dinoBottom = Math.ceil(+window.getComputedStyle(dino).getPropertyValue('bottom').slice(0, -2));
		dinoLeft = Math.ceil(+window.getComputedStyle(dino).getPropertyValue('left').slice(0, -2));
		console.log(dinoLeft + dino.offsetWidth);
		if (cactusLeft <= dinoLeft + dino.offsetWidth -10 && cactusLeft >= dinoLeft && dinoBottom <= cactus.offsetHeight - 20) {
			document.querySelector('.gameDino .gameOver').classList.add('lost');
			cactus.style.animationPlayState = 'paused';
			gameBlock.style.animationPlayState = 'paused';
			dino.style.backgroundImage = 'url(img/gameover.png)';
			dino.style.filter = 'none';
			trueGame = false;
			soundDeath.play();
			clearInterval(game);
			setTimeout(() => {
				location.reload();
			}, 1500);
		}
		if (dinoBottom >= cactus.offsetHeight && dinoLeft >= cactusLeft && dinoLeft <= cactusLeft + cactus.offsetWidth) {
			coin++;
			soundFlight.currentTime = 0;
			soundFlight.play();
			clearInterval(game);
			setTimeout(() => {
				startGame();
			}, 200);
			document.querySelector('.gameDino .coin').innerText = `${coin} Միավոր`;
		}
	}, 1);
};

document.onkeydown = e => {
	if (bool) {
		bool = false;
		clickStart();
	}
	if (trueGame) {
		if (e.which == 32 || e.which == 38) {
			dino.style.animation = 'dino .6s';
			dino.onanimationend = () => dino.style.animation = 'none';
		}
	}
};