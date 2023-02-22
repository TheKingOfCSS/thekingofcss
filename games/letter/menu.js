window.onload = () => {
	if (localStorage.getItem('letLev1') != null) {
		let val = localStorage.getItem('letLev1');
		levels[1].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[0].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev2') != null) {
		let val = localStorage.getItem('letLev2');
		levels[2].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[1].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev3') != null) {
		let val = localStorage.getItem('letLev3');
		levels[3].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[2].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev4') != null) {
		let val = localStorage.getItem('letLev4');
		levels[4].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[3].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev5') != null) {
		let val = localStorage.getItem('letLev5');
		levels[5].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[4].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev6') != null) {
		let val = localStorage.getItem('letLev6');
		levels[6].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[5].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev7') != null) {
		let val = localStorage.getItem('letLev7');
		levels[7].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[6].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev8') != null) {
		let val = localStorage.getItem('letLev8');
		levels[8].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[7].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev9') != null) {
		let val = localStorage.getItem('letLev9');
		levels[9].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[8].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev10') != null) {
		let val = localStorage.getItem('letLev10');
		levels[10].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[9].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev11') != null) {
		let val = localStorage.getItem('letLev11');
		levels[11].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[10].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev12') != null) {
		let val = localStorage.getItem('letLev12');
		levels[12].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[11].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev13') != null) {
		let val = localStorage.getItem('letLev13');
		levels[13].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[12].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev14') != null) {
		let val = localStorage.getItem('letLev14');
		levels[14].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[13].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev15') != null) {
		let val = localStorage.getItem('letLev15');
		levels[15].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[14].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev16') != null) {
		let val = localStorage.getItem('letLev16');
		levels[16].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[15].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev17') != null) {
		let val = localStorage.getItem('letLev17');
		levels[17].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[16].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev18') != null) {
		let val = localStorage.getItem('letLev18');
		levels[18].classList.remove('noactive');
		for (let i = 0; i < val; i++) {
			starBlock[17].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
	if (localStorage.getItem('letLev19') != null) {
		let val = localStorage.getItem('letLev19');
		for (let i = 0; i < val; i++) {
			starBlock[18].children[i].style = 'background: #ff0; width: 45px; height: 45px;';
		}
	}
};
const rooms = document.querySelector('.menu .rooms');
const play = document.querySelector('.menu .play');
const title = document.querySelector('.menu h1');
const studio = document.querySelector('.menu .studio');
const levels = document.querySelectorAll('.menu .rooms .row');
const effect = document.querySelector('.menu .effect');
const starBlock = document.querySelectorAll('.menu .starBlock');
const path = [
	'lev1.html',
	'levels/lev2.html',
	'levels/lev3.html',
	'levels/lev4.html',
	'levels/lev5.html',
	'levels/lev6.html',
	'levels/lev7.html',
	'levels/lev8.html',
	'levels/lev9.html',
	'levels/lev10.html',
	'levels/lev11.html',
	'levels/lev12.html',
	'levels/lev13.html',
	'levels/lev14.html',
	'levels/lev15.html',
	'levels/lev16.html',
	'levels/lev17.html',
	'levels/lev18.html',
	'levels/lev19.html',
];

play.onclick = () => {
	studio.style.bottom = '-100%';
	play.style.transform = 'translateY(150vh)';
	title.style.transform = 'translateY(150vh)';
	rooms.style.top = '100px';
};

levels.forEach((item, index) => {
	item.onclick = () => {
		effect.style.clipPath = 'circle(100%)';
		effect.ontransitionend = () => window.location.href = path[index];
	};
});

