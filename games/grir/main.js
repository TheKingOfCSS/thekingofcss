const example = document.querySelector('.game .display .example .box');
const exercise = document.querySelector('.game .display .exercise .box');
const codeEditor = document.querySelector('.game .editor');
const coin = document.querySelector('.game .coin');
const Winner = document.querySelector('.game h4');
let coinD = 0;
const theme = new Audio();
theme.src = 'music/guitar.mp3';
theme.ontimeupdate = () => theme.ended ? theme.play() : '';
let Level = 0;

codeEditor.oninput = () => {
	theme.play();
	exercise.style = codeEditor.value;
	if (Level == 0) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && (codeEditor.value.includes('background: red;') || codeEditor.value.includes('background: #ff0000;') || codeEditor.value.includes('background: rgb(255, 0, 0);'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'background: orange; border: 10px solid;';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 1) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && (codeEditor.value.includes('background: orange;') || codeEditor.value.includes('background: #ffa500;') || codeEditor.value.includes('background: rgb(255, 165, 0);')) && (codeEditor.value.includes('border: 10px solid #000;') || codeEditor.value.includes('border: 10px solid black;') || codeEditor.value.includes('border: 10px solid rgb(0, 0, 0);'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'background: green; border: 15px dashed #000;';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 2) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && (codeEditor.value.includes('background: green;') || codeEditor.value.includes('background: #008000;') || codeEditor.value.includes('background: rgb(0, 128, 0);')) && (codeEditor.value.includes('border: 15px dashed #000;') || codeEditor.value.includes('border: 15px dashed black;') || codeEditor.value.includes('border: 15px dashed rgb(0, 0, 0);'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'background: black; border: 10px dotted #fff; border-top-right-radius: 15px;';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 3) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && (codeEditor.value.includes('background: black;') || codeEditor.value.includes('background: #000;') || codeEditor.value.includes('background: rgb(0, 0, 0);')) && (codeEditor.value.includes('border: 10px dotted #fff;') || codeEditor.value.includes('border: 10px dotted white;') || codeEditor.value.includes('border: 10px dotted rgb(255, 255, 255);')) && (codeEditor.value.includes('border-top-right-radius: 15px;') || codeEditor.value.includes('border-radius: 0 15px 0 0;'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'border: 10px solid #000; border-radius: 50%; background: none;';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 4) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && (codeEditor.value.includes('border: 10px solid #000;') || codeEditor.value.includes('border: 10px solid black;') || codeEditor.value.includes('border: 10px solid rgb(0, 0, 0);')) && codeEditor.value.includes('border-radius: 50%;')) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'border: 10px double #000; border-radius: 50%; background: none; border-bottom-left-radius: 0;';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 5) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && (codeEditor.value.includes('border: 10px double #000;') || codeEditor.value.includes('border: 10px double black;') || codeEditor.value.includes('border: 10px double rgb(0, 0, 0);')) && (codeEditor.value.includes('border-radius: 50% 50% 50% 0;') || codeEditor.value.includes('border-top-left-radius: 50%;') && codeEditor.value.includes('border-bottom-right-radius: 50%;') && codeEditor.value.includes('border-top-right-radius: 50%;'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'border: 10px dotted #ff0000; border-radius: 50% 0; background: none;';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 6) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && (codeEditor.value.includes('border: 10px dotted #ff0000;') || codeEditor.value.includes('border: 10px dotted red;') || codeEditor.value.includes('border: 10px dotted rgb(255, 0, 0);')) && (codeEditor.value.includes('border-radius: 50% 0;') || codeEditor.value.includes('border-top-left-radius: 50%;') && codeEditor.value.includes('border-bottom-right-radius: 50%;'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'border: 0; border-radius: 0; background: linear-gradient(red 33.3%, blue 33.3% 66.6%, orange 66.6%);';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 7) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && (codeEditor.value.includes('background: linear-gradient(red 33.3%, blue 33.3% 66.6%, orange 66.6%);') || codeEditor.value.includes('background: linear-gradient(to bottom, red 33.3%, blue 33.3% 66.6%, orange 66.6%);') || codeEditor.value.includes('background: linear-gradient(180deg, red 33.3%, blue 33.3% 66.6%, orange 66.6%);') || codeEditor.value.includes('background: linear-gradient(#ff0000 33.3%, #0000ff 33.3% 66.6%, #ffa500 66.6%);'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'border: 0; border-radius: 50%; background: linear-gradient(transparent 50%, #000 50%);';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 8) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && codeEditor.value.includes('border-radius: 50%;') &&(codeEditor.value.includes('background: linear-gradient(transparent 50%, #000 50%);') || codeEditor.value.includes('background: linear-gradient(to bottom, transparent 50%, #000 50%);') || codeEditor.value.includes('background: linear-gradient(to bottom, transparent 50%, black 50%);') || codeEditor.value.includes('background: linear-gradient(transparent 50%, black 50%);') || codeEditor.value.includes('background: linear-gradient(rgba(0, 0, 0, 0) 50%, #000 50%);'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'border: 0; border-radius: 50%; box-shadow: inset 50px 0 0 #ffff00; background: none;';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 9) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && codeEditor.value.includes('border-radius: 50%;') && (codeEditor.value.includes('box-shadow: inset 50px 0 0 #ffff00;') || codeEditor.value.includes('box-shadow: inset 50px 0 0 yellow;'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				coin.style.animation = 'none';
				example.style = 'border: 0; border-radius: 100% 0 0 0; box-shadow: none; background: linear-gradient(to right, #ff0000, transparent 50%, #ff0000 50%);';
				setTimeout(() => {
					codeEditor.value = null;
					codeEditor.disabled = false;
					codeEditor.style.color = '#fff';
				}, 1000);
			}, 500);
			codeEditor.style.color = '#00ff14';
		}
	} else if (Level == 10) {
		if (codeEditor.value.includes('width: 200px;') && codeEditor.value.includes('height: 200px;') && (codeEditor.value.includes('border-radius: 100% 0 0 0;') || codeEditor.value.includes('border-top-left-radius: 100%;')) && (codeEditor.value.includes('background: linear-gradient(to right, #ff0000, transparent 50%, #ff0000 50%);') || codeEditor.value.includes('background: linear-gradient(90deg, #ff0000, transparent 50%, #ff0000 50%);') || codeEditor.value.includes('background: linear-gradient(to right, red, transparent 50%, red 50%);'))) {
			Level++;
			codeEditor.disabled = true;
			coinD++;
			coin.innerText = coinD + '/10';
			Winner.style.opacity = 1;
			Winner.style.visibility = 'visible';
			coin.style.animation = 'coin .5s';
			setTimeout(() => {
				window.close();
			}, 2000);
			codeEditor.style.color = '#00ff14';
		}
	}
};

codeEditor.onkeydown = e => {
	if (e.which == 9) {
		return false;
	}
};

const burger = document.querySelector('.game .display .burger');
const colors = document.querySelector('.game .display input');
const changeColor = document.querySelector('.game .display .example');

burger.onmouseover = () => {
	burger.style.left = '-35px';
	colors.style.left = '-40px';
};
let colorBool = true;
document.onclick = () => {
	if (colorBool) {
		burger.style.left = 0;
		colors.style.left = '-90px';
	}
};
colors.onmouseover = () => colorBool = false;
colors.onmouseout = () => colorBool = true;
colors.oninput = () => {
	if (colors.value % 10 == 0) {
		let r = Math.random() * 255;
		let g = Math.random() * 255;
		let b = Math.random() * 255;
		changeColor.style.background = `rgb(${r}, ${g}, ${b})`;
	}
};
const menu = document.querySelector('.menu');
const title = document.querySelector('.menu h1');
const start = document.querySelector('.menu .btn.start');
const descr = document.querySelector('.menu .btn.descr');
const exit = document.querySelector('.menu .btn.exit');
const info = document.querySelector('.info');
const author = document.querySelector('.game .author');
document.onmousemove = e => {
	title.style.backgroundImage = `radial-gradient(circle at ${e.x / 15}% 50%, #000 30%, #ffa500 30.4%)`;
};
exit.onclick = () => window.location.href = '../games.html';
start.onclick = () => { menu.style.top = '-100vh'; author.style.color = '#fff'; author.style.right = '15px'; author.style.transform = 'none'; };
descr.onclick = () => info.style.left = '50%';
info.firstElementChild.onclick = () => info.style.left = '150%';
