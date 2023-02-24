const container = document.querySelector('.container');
const piano = document.querySelector('.container .piano');
const pianoDoor = document.querySelector('.container .piano .user .door');
const pianoPlayer = document.querySelector('.container .piano .it.front2 .player');

const Mansuryan = {
	image: [
		'img/Mansuryan1.png',
		'img/Mansuryan2.jpeg',
		'img/Mansuryan3.jpg',
		'img/Mansuryan4.jpg',
		'img/Mansuryan5.jpg',
		'img/Mansuryan6.jpg',
	],
	music: [
		'music/hinorerierg.mp3',
		'music/ktormerkinq.mp3',
		'music/hinorerierg2.mp3',
		'music/mermankutyantangon.mp3',
		'music/siromexedi.mp3',
		'music/ashnanarev.mp3',
	],
	name: [
		'Հին Օրերի Երգը',
		'Կտոր Մը Երկինք',
		'Հին Օրերի Երգը 2',
		'Մեր Մանկության Տանգոն',
		'Սիրո Մեղեդի',
		'Աշնան Արև',
	],
	size: [55, 60, 63, 100, 45, 50],
	position: [130, 130, 115, 18, 165, 170],
	pic: document.querySelector('.container .piano .it.front2 .player .pic'),
	slide: document.querySelector('.container .piano .it.front2 .player .pic .slide'),
	slideItem: document.querySelectorAll('.container .piano .it.front2 .player .pic .slide .item'),
	prev: document.querySelector('.container .piano .it.front2 .player .slideBtn.prev'),
	next: document.querySelector('.container .piano .it.front2 .player .slideBtn.next'),
	songName: document.querySelector('.container .piano .it.front .songName'),
	current: 0,
	cur: 0,
	mouseX: null,
	bool: false,
	zoom: true,
	audio: new Audio('music/mermankutyantangon.mp3'),
	currentTime: document.querySelector('.container .piano .it.front2 .player .current'),
	durationTime: document.querySelector('.container .piano .it.front2 .player .duration'),
	fullTime: document.querySelector('.container .piano .user .door .d.db .timePlus'),
};

Mansuryan.slideItem.forEach((item, index) => item.style.backgroundImage = `url(${Mansuryan.image[index]})`);

Mansuryan.next.onclick = () => {
	Mansuryan.current -= 100;
	Mansuryan.cur++;
	Mansuryan.current < -500 ? Mansuryan.current = 0 : '';
	Mansuryan.cur == Mansuryan.name.length ? Mansuryan.cur = 0 : '';
	Mansuryan.slide.style.left = Mansuryan.current + '%';
	Mansuryan.songName.innerText = Mansuryan.name[Mansuryan.cur];
	Mansuryan.songName.style.transition = 'none';
	Mansuryan.songName.style.width = 0;
	setTimeout(() => {
		Mansuryan.songName.style.transition = 'width 5.5s';
		Mansuryan.songName.style.width = Mansuryan.size[Mansuryan.cur] + '%';
		Mansuryan.songName.style.left = Mansuryan.position[Mansuryan.cur] + 'px';
	}, 0);
	Mansuryan.audio.src = Mansuryan.music[Mansuryan.cur];
	Mansuryan.audio.play();
};
Mansuryan.prev.onclick = () => {
	Mansuryan.current += 100;
	Mansuryan.cur--;
	Mansuryan.current > 0 ? Mansuryan.current = -500 : '';
	Mansuryan.cur < 0 ? Mansuryan.cur = Mansuryan.name.length-1 : '';
	Mansuryan.slide.style.left = Mansuryan.current + '%';
	Mansuryan.songName.innerText = Mansuryan.name[Mansuryan.cur];
	Mansuryan.songName.style.transition = 'none';
	Mansuryan.songName.style.width = 0;
	setTimeout(() => {
		Mansuryan.songName.style.transition = 'width 5.5s';
		Mansuryan.songName.style.width = Mansuryan.size[Mansuryan.cur] + '%';
		Mansuryan.songName.style.left = Mansuryan.position[Mansuryan.cur] + 'px';
	}, 0);
	Mansuryan.audio.src = Mansuryan.music[Mansuryan.cur];
	Mansuryan.audio.play();
};

Mansuryan.pic.onmousedown = e => {
	Mansuryan.mouseX = e.x;
	Mansuryan.bool = true;
	Mansuryan.zoom = false;
	Mansuryan.slideItem.forEach(item => {
		item.style.transform = 'none';
		item.style.backgroundPosition = 'center';
		item.style.transition = '.5s';
	});
};
Mansuryan.pic.onmouseup = () => {
	Mansuryan.bool = false;
	setTimeout(() => Mansuryan.zoom = true, 1000);
};
Mansuryan.pic.onmouseout = () => {
	Mansuryan.slideItem.forEach(item => {
		item.style.transform = 'none';
		item.style.backgroundPosition = 'center';
		item.style.transition = '.5s';
	});
};
Mansuryan.pic.onmousemove = e => {
	if (Mansuryan.zoom) {
		Mansuryan.slideItem[Mansuryan.cur].style.transform = 'scale(2.5)';
		Mansuryan.slideItem[Mansuryan.cur].style.transition = '.4s';
		Mansuryan.slideItem[Mansuryan.cur].style.backgroundPosition = `${-(e.offsetX - Mansuryan.slideItem[Mansuryan.cur].offsetWidth / 2)}px ${-(e.offsetY - Mansuryan.slideItem[Mansuryan.cur].offsetHeight / 2)}px`;
	}
	if (Mansuryan.bool) {
		if (e.x < Mansuryan.mouseX - 5) {
			Mansuryan.current -= 100;
			Mansuryan.cur++;
			Mansuryan.cur == Mansuryan.name.length ? Mansuryan.cur = 0 : '';
			Mansuryan.current < -500 ? Mansuryan.current = 0 : '';
			Mansuryan.slide.style.left = Mansuryan.current + '%';
			Mansuryan.bool = false;
			Mansuryan.songName.innerText = Mansuryan.name[Mansuryan.cur];
			Mansuryan.songName.style.transition = 'none';
			Mansuryan.songName.style.width = 0;
			setTimeout(() => {
				Mansuryan.songName.style.transition = 'width 5.5s';
				Mansuryan.songName.style.width = Mansuryan.size[Mansuryan.cur] + '%';
				Mansuryan.songName.style.left = Mansuryan.position[Mansuryan.cur] + 'px';
			}, 0);
			Mansuryan.audio.src = Mansuryan.music[Mansuryan.cur];
			Mansuryan.audio.play();
		} else if (e.x > Mansuryan.mouseX + 5) {
			Mansuryan.current += 100;
			Mansuryan.cur--;
			Mansuryan.cur < 0 ? Mansuryan.cur = Mansuryan.name.length-1 : '';
			Mansuryan.current > 0 ? Mansuryan.current = -500 : '';
			Mansuryan.slide.style.left = Mansuryan.current + '%';
			Mansuryan.bool = false;
			Mansuryan.songName.innerText = Mansuryan.name[Mansuryan.cur];
			Mansuryan.songName.style.transition = 'none';
			Mansuryan.songName.style.width = 0;
			setTimeout(() => {
				Mansuryan.songName.style.transition = 'width 5.5s';
				Mansuryan.songName.style.width = Mansuryan.size[Mansuryan.cur] + '%';
				Mansuryan.songName.style.left = Mansuryan.position[Mansuryan.cur] + 'px';
			}, 0);
			Mansuryan.audio.src = Mansuryan.music[Mansuryan.cur];
			Mansuryan.audio.play();
		}
	}
};

Mansuryan.audio.ontimeupdate = () => {
	let curmins = Math.floor(Mansuryan.audio.currentTime / 60);
	let cursec = Math.floor(Mansuryan.audio.currentTime - curmins * 60);
	let durmins = Math.floor(Mansuryan.audio.duration / 60);
	let dursec = Math.floor(Mansuryan.audio.duration - durmins * 60);
	curmins = curmins < 10 ? '0' + curmins : curmins;
	cursec = cursec < 10 ? '0' + cursec : cursec;
	durmins = durmins < 10 ? '0' + durmins : durmins;
	dursec = dursec < 10 ? '0' + dursec : dursec;
	if (!isNaN(dursec)) {
		Mansuryan.currentTime.innerText = curmins + ':' + cursec;
		Mansuryan.durationTime.innerText = durmins + ':' + dursec;
	}
	Mansuryan.audio.ended ? Mansuryan.audio.play() : '';
	Mansuryan.fullTime.style.background = `linear-gradient(to right, rgb(194 61 91) ${Mansuryan.fullTime.value}%, #7c273a ${Mansuryan.fullTime.value}%)`;
	Mansuryan.fullTime.value = Mansuryan.audio.currentTime * 100 / Mansuryan.audio.duration;
};

Mansuryan.fullTime.oninput = () => {
	Mansuryan.audio.currentTime = Mansuryan.audio.duration * Mansuryan.fullTime.value / 100;
};
let oneBool = true;
document.onclick = () => {
	piano.style.transform = 'translate(-50%, -50%) rotateX(-10deg) translate3d(0, -2rem, 13rem)';
	pianoDoor.style.transform = 'translateZ(-59px) rotateX(-1deg)';
	container.style.filter = 'drop-shadow(-36px 0 5px rgba(0,0,0,.5)) drop-shadow(36px 15px 5px rgba(0,0,0,.5))';
	pianoPlayer.classList.add('active');
	document.querySelector('.container .piano .user .door .d.db .timePlus').classList.add('active');
	Mansuryan.audio.play();
	if (oneBool) {
		oneBool = false;
		setTimeout(() => {
			document.querySelectorAll('.container .piano .user .ut .key.press').forEach(item => item.classList.add('active'));
		}, 3000);
		setTimeout(() => {
			Mansuryan.songName.innerText = Mansuryan.name[Mansuryan.cur];
			Mansuryan.songName.style.transition = 'none';
			Mansuryan.songName.style.width = 0;
			setTimeout(() => {
				Mansuryan.songName.style.transition = 'width 5.5s';
				Mansuryan.songName.style.width = Mansuryan.size[Mansuryan.cur] + '%';
				Mansuryan.songName.style.left = Mansuryan.position[Mansuryan.cur] + 'px';
			}, 0);
			document.querySelector('.container .piano .it.front .pedal.ped3').classList.add('active');
		}, 9000);
		setTimeout(() => {
			let cs = 35;
			let cs2 = 37;
			let cs3 = 38;
			setInterval(() => {
				container.style.background = `linear-gradient(to top, #3a223ac9, #3d2f3df5, #4f3b4f, #130413c9 ${cs}%, #282828 ${cs2}%, #ffffff00 ${cs3}%) #6c6c6c6b`;
				cs > 25 ? cs-=.5 : '';
				cs2 > 27 ? cs2-=.5 : '';
				cs3 > 28 ? cs3-=.5 : '';
			}, 100);
		}, 2000);
	}
};

document.oncontextmenu = () => false;
document.addEventListener('keydown', e => e.ctrlKey ? e.preventDefault() : e.which == 123 ? e.preventDefault() : '');



