const htmlMarioData = document.querySelector('.menu .records .recMario');
const htmlSonicData = document.querySelector('.menu .records .recSonic');
const resetData = document.querySelector('.menu .records .reset');
let marioRecord = localStorage.getItem('mariorecord') || 0;
let sonicRecord = localStorage.getItem('sonicrecord') || 0;
htmlMarioData.innerText = marioRecord;
htmlSonicData.innerText = sonicRecord;
resetData.onclick = () => {
	localStorage.removeItem('mariorecord');
	localStorage.removeItem('sonicrecord');
	htmlMarioData.innerText = 0;
	htmlSonicData.innerText = 0;
};
const stageTrue = () => {
	const game = document.querySelector('.game');
	const mario = document.querySelector('.game .room .mario');
	const marioShiled = document.querySelector('.game .room .marioShield');
	const marioWeapon = document.querySelector('.game .marioWeapons .shield');
	const sonic = document.querySelector('.game .room .sonic');
	const room = document.querySelector('.game .room');
	const stone = document.querySelectorAll('.game .room .stone:not(.st2)');
	const stoneMushroom = document.querySelector('.game .room .st2');
	const Mushroom = document.querySelector('.game .room .mushroom');
	const sonicWeapon1 = document.querySelector('.game .room .sonicstone');
	let sonicCurrentWeapon = 0;
	const sonicCollection = document.querySelectorAll('.game .sonicWeapons .stoneSon');
	const marioLife = document.querySelector('.game .life.marioLife .width');
	const marioIcon = document.querySelector('.game .icon.marioIcon');
	const sonicLife = document.querySelector('.game .life.sonicLife .width');
	const shootView = document.querySelector('.game .marioWeapons .shootView');
	let marioWidth = 100;
	let sonicWidth = 100;
	const key = {};
	let x = 80;
	let shotX = 100;
	let xShield = 55;
	let xRoom = 0;
	let mushroomX = 520;
	let mushroomBool = false;
	let mushroomBool2 = true;
	let gameBattle = true;
	let shieldTrue = true;
	let state = 0;
	let shotBool = false;
	let bigBool = true;
	const theme = new Audio('sound/theme.mp3');
	const jump = new Audio('sound/jump.mp3');
	const death = new Audio('sound/death.mp3');
	const kick = new Audio('sound/kick.mp3');
	const power = new Audio('sound/power.mp3');
	const winnerIs = new Audio('sound/win.mp3');
	const breakBlock = new Audio('sound/block.mp3');
	const myCoin = new Audio('sound/coin.mp3');
	jump.volume = .5;
	document.onkeydown = e => {
		theme.play();
		key[e.which] = true;
		if (gameBattle) {
			if (key[38]) {
				mario.style.animation = 'jump .5s ease-in-out';
				marioShiled.style.animation = 'jump .5s ease-in-out';
				jump.play();
				mario.onanimationend = () => {
					mario.style.animation = '';
					marioShiled.style.animation = '';
				};
			}
			if (key[38] && key[37]) {
				x -= 15;
				mario.style.transform = 'scaleX(-1)';
				mario.style.left = x + 'px';
				state == 0 ? mario.style.backgroundImage = 'url(img/mario2.gif)' : state == 1 ? mario.style.backgroundImage = 'url(img/mario4.gif)' : mario.style.backgroundImage = 'url(img/mario5.gif)';
				xRoom += 13;
				room.style.left = xRoom + 'px';
				mario.style.animation = 'jump .5s ease-in-out';
				marioShiled.style.animation = 'jump .5s ease-in-out';
				xShield -= 15;
				marioShiled.style.left = xShield + 'px';
				document.body.style.setProperty('--shoot', shotX + 'px');
				setTimeout(() => document.body.style.setProperty('--shootX', '-130%'), 1000);
				shotX -= 2;
				jump.play();
				mario.onanimationend = () => {
					mario.style.animation = '';
					marioShiled.style.animation = '';
				};
			} else if (key[37]) {
				x -= 15;
				mario.style.transform = 'scaleX(-1)';
				mario.style.left = x + 'px';
				state == 0 ? mario.style.backgroundImage = 'url(img/mario2.gif)' : state == 1 ? mario.style.backgroundImage = 'url(img/mario4.gif)' : mario.style.backgroundImage = 'url(img/mario5.gif)';
				xShield -= 15;
				marioShiled.style.left = xShield + 'px';
				document.body.style.setProperty('--shoot', shotX + 'px');
				setTimeout(() => document.body.style.setProperty('--shootX', '-130%'), 1000);
				shotX -= 2;
				xRoom += 13;
				room.style.left = xRoom + 'px';
			}
			if (key[38] && key[39]) {
				x += 15;
				mario.style.transform = 'none';
				mario.style.left = x + 'px';
				state == 0 ? mario.style.backgroundImage = 'url(img/mario2.gif)' : state == 1 ? mario.style.backgroundImage = 'url(img/mario4.gif)' : mario.style.backgroundImage = 'url(img/mario5.gif)';
				mario.style.animation = 'jump .5s ease-in-out';
				marioShiled.style.animation = 'jump .5s ease-in-out';
				xShield += 15;
				marioShiled.style.left = xShield + 'px';
				document.body.style.setProperty('--shoot', shotX + 'px');
				setTimeout(() => document.body.style.setProperty('--shootX', '130%'), 1000);
				shotX += 2;
				jump.play();
				mario.onanimationend = () => {
					mario.style.animation = '';
					marioShiled.style.animation = '';
				};
				xRoom -= 13;
				room.style.left = xRoom + 'px';
			} else if (key[39]) {
				x += 15;
				mario.style.transform = 'none';
				mario.style.left = x + 'px';
				state == 0 ? mario.style.backgroundImage = 'url(img/mario2.gif)' : state == 1 ? mario.style.backgroundImage = 'url(img/mario4.gif)' : mario.style.backgroundImage = 'url(img/mario5.gif)';
				xShield += 15;
				marioShiled.style.left = xShield + 'px';
				document.body.style.setProperty('--shoot', shotX + 'px');
				setTimeout(() => document.body.style.setProperty('--shootX', '130%'), 1000);
				shotX += 2;
				xRoom -= 13;
				room.style.left = xRoom + 'px';
			}
			if (shotBool) {
				if (key[32]) {
					const shot = document.createElement('div');
					shot.classList.add('shootRun');
					shot.style = `width: 15px; height: 15px; background: radial-gradient(#ffa700, #ff4e00, #ff8000); border-radius: 50%; position: absolute; bottom: 140px; animation: shoot 2s forwards;`;
					game.append(shot);
					kick.play();
				}
			}
		}
	};
	document.onkeyup = e => {
		delete key[e.which];
		state == 0 ? mario.style.backgroundImage = 'url(img/mario1.png)' : state == 1 ? mario.style.backgroundImage = 'url(img/mario3.png)' : mario.style.backgroundImage = 'url(img/mario6.png)';
	};
	let set = setInterval(() => {
		stone.forEach(item => {
			if (mario.offsetTop <= item.offsetTop + item.offsetHeight && mario.offsetTop + mario.offsetHeight >= item.offsetTop + item.offsetHeight && item.offsetLeft <= mario.offsetLeft + mario.offsetWidth - 20 && item.offsetLeft + item.offsetWidth - 20 >= mario.offsetLeft) {
				item.children[0].style.transform = 'translate(-20px, -40px) rotate(-45deg)';
				item.children[1].style.transform = 'translate(20px, -40px) rotate(45deg)';
				item.children[2].style.transform = 'translate(-10px, 60px) rotate(-45deg)';
				item.children[3].style.transform = 'translate(10px, 60px) rotate(45deg)';
				setTimeout(() => {
					item.style.opacity = 0;
					setTimeout(() => item.style.display = 'none', 300);
				}, 100);
				breakBlock.play();
			}
		});
		if (sonicWeapon1.offsetLeft <= mario.offsetLeft + mario.offsetWidth - 3 && mario.offsetTop + mario.offsetHeight >= sonicWeapon1.offsetTop && sonicWeapon1.offsetLeft + sonicWeapon1.offsetWidth >= mario.offsetLeft && sonicWeapon1.offsetLeft > marioShiled.offsetLeft + marioShiled.offsetWidth) {
			marioWidth > 0 ? marioWidth-- : '';
			marioLife.style.width = marioWidth + '%';
			marioLife.previousElementSibling.innerText = marioWidth + '%';
			mario.style.filter = 'brightness(1.5)';
			setTimeout(() => mario.style.filter = 'none', 100);
		}
		if (marioWidth <= 30) {
			marioIcon.style.backgroundImage = 'url(img/face2.png)';
		}
		if (mario.offsetLeft > sonic.offsetLeft + sonic.offsetWidth - 30) {
			sonicWeapon1.style.setProperty('--chord', '-130%');
			sonic.style.transform = 'scaleX(1)';
		} else {
			sonicWeapon1.style.setProperty('--chord', '130%');
			sonic.style.transform = 'scaleX(-1)';
		}
		if (mario.offsetLeft + mario.offsetWidth - 10 < game.offsetLeft || mario.offsetLeft + 15 > game.offsetWidth) {
			mario.style.bottom = -mario.offsetHeight - 50 + 'px';
			marioShiled.style.bottom = -marioShiled.offsetHeight - 50 + 'px';
			gameBattle = false;
			theme.pause();
			death.play();
			marioWidth = 0;
			marioLife.style.transition = '.5s';
			marioLife.style.width = marioWidth + '%';
			marioLife.previousElementSibling.innerText = marioWidth + '%';
		}
		if (mario.offsetTop <= stoneMushroom.offsetTop + stoneMushroom.offsetHeight && stoneMushroom.offsetLeft <= mario.offsetLeft + mario.offsetWidth - 20 && stoneMushroom.offsetLeft + stoneMushroom.offsetWidth - 20 >= mario.offsetLeft) {
			Mushroom.style.bottom = '279px';
			Mushroom.style.animation = 'mushroom .5s linear .5s forwards';
			stoneMushroom.style.display = 'none';
			document.querySelector('.game .room .stoneFalse').style.display = 'block';
			myCoin.play();
			Mushroom.onanimationend = () => {
				Mushroom.style.animation = 'none';
				Mushroom.style.bottom = '129px';
				Mushroom.style.transition = 'none';
				mushroomBool = true;
			};
		}
		if (mushroomBool) {
			if (mushroomX <= sonic.offsetLeft - 20 && mushroomBool2) {
				mushroomX++;
			} else {
				mushroomBool2 = false;
				mushroomX -= 2;
				if (mushroomX + Mushroom.offsetWidth - 10 < game.offsetLeft) {
					Mushroom.style.transition = '.5s';
					Mushroom.style.bottom = -Mushroom.offsetHeight + 'px';
				}
			}
			Mushroom.style.left = mushroomX + 'px';
			if (Mushroom.offsetLeft < mario.offsetLeft + mario.offsetWidth - 10 && mario.offsetTop + mario.offsetHeight > Mushroom.offsetTop + 10 && Mushroom.offsetLeft + Mushroom.offsetWidth >= mario.offsetLeft && bigBool) {
				Mushroom.style.display = 'none';
				bigBool = false;
				state = 1;
				mario.style.width = '41px';
				mario.style.height = '68px';
				mario.style.backgroundPosition = '-23px -20px';
				mario.style.backgroundImage = 'url(img/mario3.png)';
				mario.style.animation = 'marioBig .5s linear';
				shootView.style = 'pointer-events: auto; opacity: 1;';
				power.play();
			}
		}
		const allshot = document.querySelectorAll('.shootRun');
		allshot.forEach(item => {
			if (item.offsetLeft + item.offsetWidth > sonic.getBoundingClientRect().left && item.offsetLeft < sonic.getBoundingClientRect().right && sonic.offsetTop + sonic.offsetHeight >= item.offsetTop) {
				sonicWidth > 0 ? sonicWidth -= .05 : '';
				sonicLife.style.width = Math.round(sonicWidth) + '%';
				sonicLife.previousElementSibling.innerText = Math.round(sonicWidth) + '%';
				sonic.style.filter = 'brightness(1.5)';
				setTimeout(() => sonic.style.filter = 'none', 100);
			}
		});
		if (sonicWidth <= 0) {
			clearInterval(set);
			theme.pause();
			winnerIs.play();
			sonic.style.display = 'none';
			sonicWeapon1.style.display = 'none';
			setTimeout(() => window.location.reload(), 5000);
		}
		if (marioWidth <= 0) {
			clearInterval(set);
			theme.pause();
			setTimeout(() => mario.style.display = 'none', 300);
			setTimeout(() => window.location.reload(), 3000);
		}
	}, 1);
	setInterval(() => {
		if (sonicCurrentWeapon == 0) {
			sonicCollection.forEach(item => item.style.opacity = .3);
			sonicCollection[0].style.opacity = 1;
			sonicWeapon1.classList.remove('bumerang');
		} else if (sonicCurrentWeapon == 1) {
			sonicCollection.forEach(item => item.style.opacity = .3);
			sonicCollection[1].style.opacity = 1;
			sonicWeapon1.classList.add('bumerang');
		}
		sonicCurrentWeapon++;
		sonicCurrentWeapon > 1 ? sonicCurrentWeapon = 0 : '';
		if (shieldTrue) {
			marioWeapon.style = 'opacity: 1; pointer-events: auto;';
		}
	}, 20000);
	marioWeapon.onclick = () => {
		shieldTrue = false;
		marioShiled.style.display = 'block';
		marioWeapon.style = 'opacity: .2; pointer-events: none;';
		setTimeout(() => {
			marioShiled.style.display = 'none';
			shieldTrue = true;
		}, 5000);
	};
	shootView.onclick = () => {
		shotBool = true;
		state = 2;
		mario.style.backgroundPosition = '-18px 0';
		mario.style.backgroundSize = '76px 71px';
		mario.style.backgroundImage = 'url(img/mario6.png)';
		mario.style.animation = 'marioBig .5s linear';
		shootView.style = 'opacity: .4; pointer-events: hidden;';
		power.play();
	};
};
const stageFalseTrue = () => {
	const game = document.querySelector('.game');
	const mario = document.querySelector('.game .room .mario');
	const sonic = document.querySelector('.game .room .sonic');
	const sonicShoot = document.querySelector('.game .room .sonicstone');
	const room = document.querySelector('.game .room');
	const stone = document.querySelectorAll('.game .room .stone:not(.st2)');
	const stoneQues = document.querySelector('.game .room .stone.st2');
	const mushroom = document.querySelector('.game .room .mushroom');
	const shootView = document.querySelector('.game .marioWeapons .shootView');
	const sonicWeapon1 = document.querySelector('.game .room .sonicstone');
	const sonicCollection = document.querySelectorAll('.game .sonicWeapons .stoneSon');
	const marioLife = document.querySelector('.game .life.marioLife .width');
	const marioIcon = document.querySelector('.game .icon.marioIcon');
	const sonicIcon = document.querySelector('.game .icon.sonicIcon');
	const sonicLife = document.querySelector('.game .life.sonicLife .width');
	let marioWidth = 100;
	let sonicWidth = 100;
	const key = {};
	let x = 80;
	let sx = 80;
	let xRoom = 0;
	let shotX = 100;
	let sonoshotX = 100;
	let gameBattle = true;
	let state = 0;
	let shotBool = false;
	let leftBool = true;
	stoneQues.style.display = 'none';
	mushroom.style.display = 'none';
	sonicShoot.style.display = 'none';
	mario.style.width = '41px';
	mario.style.height = '68px';
	mario.style.backgroundPosition = '-23px -20px';
	shootView.style.opacity = 1;
	shootView.style.pointerEvents = 'auto';
	document.querySelector('.game .marioWeapons h3').innerText = 'Mario Weapons';
	document.querySelector('.game .marioWeapons .shield').style.display = 'none';
	sonicCollection[1].style.display = 'none';
	sonicCollection[0].style.marginTop = '20px';
	const theme = new Audio('sound/theme.mp3');
	const jump = new Audio('sound/jump.mp3');
	const death = new Audio('sound/death.mp3');
	const winnerIs = new Audio('sound/win.mp3');
	const breakBlock = new Audio('sound/block.mp3');
	const kick = new Audio('sound/kick.mp3');
	const sonkick = new Audio('sound/sonkick.mp3');
	const sonjump = new Audio('sound/sonjump.mp3');
	const power = new Audio('sound/power.mp3');
	sonic.style.animation = 'none';
	sonicShoot.style.animation = 'none';
	jump.volume = .5;
	sonjump.volume = .7;
	document.onkeydown = e => {
		theme.play();
		key[e.which] = true;
		if (gameBattle) {
			if (key[87]) {
				mario.style.animation = 'jump .5s ease-in-out';
				jump.play();
				mario.onanimationend = () => mario.style.animation = '';
			}
			if (key[87] && key[65]) {
				x -= 15;
				mario.style.transform = 'scaleX(-1)';
				mario.style.left = x + 'px';
				state == 0 ? mario.style.backgroundImage = 'url(img/mario4.gif)' : mario.style.backgroundImage = 'url(img/mario5.gif)';
				mario.style.animation = 'jump .5s ease-in-out';
				jump.play();
				mario.onanimationend = () => mario.style.animation = '';
				document.body.style.setProperty('--shoot', mario.offsetLeft + 'px');
				setTimeout(() => document.body.style.setProperty('--shootX', '-130%'), 1000);
			} else if (key[65]) {
				x -= 15;
				mario.style.transform = 'scaleX(-1)';
				mario.style.left = x + 'px';
				state == 0 ? mario.style.backgroundImage = 'url(img/mario4.gif)' : mario.style.backgroundImage = 'url(img/mario5.gif)';
				document.body.style.setProperty('--shoot', mario.offsetLeft + 'px');
				setTimeout(() => document.body.style.setProperty('--shootX', '-130%'), 1000);
			}
			if (key[87] && key[68]) {
				x += 15;
				mario.style.transform = 'none';
				mario.style.left = x + 'px';
				state == 0 ? mario.style.backgroundImage = 'url(img/mario4.gif)' : mario.style.backgroundImage = 'url(img/mario5.gif)';
				mario.style.animation = 'jump .5s ease-in-out';
				jump.play();
				mario.onanimationend = () => mario.style.animation = '';
				document.body.style.setProperty('--shoot', mario.offsetLeft + 20 + 'px');
				setTimeout(() => document.body.style.setProperty('--shootX', '130%'), 1000);
			} else if (key[68]) {
				x += 15;
				mario.style.transform = 'none';
				mario.style.left = x + 'px';
				state == 0 ? mario.style.backgroundImage = 'url(img/mario4.gif)' : mario.style.backgroundImage = 'url(img/mario5.gif)';
				document.body.style.setProperty('--shoot', mario.offsetLeft + 20 + 'px');
				setTimeout(() => document.body.style.setProperty('--shootX', '130%'), 1000);
			}
			if (shotBool) {
				if (key[32] && marioWidth > 0) {
					const shot = document.createElement('div');
					shot.classList.add('shootRun');
					shot.style = `width: 15px; height: 15px; background: radial-gradient(#ffa700, #ff4e00, #ff8000); border-radius: 50%; position: absolute; left: ${mario.offsetLeft + mario.offsetWidth - 5}px; bottom: 140px; animation: shoot 2s forwards;`;
					game.append(shot);
					kick.play();
					setTimeout(() => shot.remove(), 2000);
				}
			}
			if (key[38]) {
				sonic.style.animation = 'jump .5s ease-in-out';
				sonic.onanimationend = () => sonic.style.animation = 'as';
				sonjump.play();
			}
			if (key[38] && key[37]) {
				sonic.style.animation = 'jump .5s ease-in-out';
				sonic.onanimationend = () => sonic.style.animation = 'as';
				sonic.style.backgroundImage = 'url(img/sonic.gif)';
				sx += 15;
				sonic.style.right = sx + 'px';
				sonic.style.transform = 'scaleX(-1)';
				document.body.style.setProperty('--Sonoshoot', sx + 'px');
				setTimeout(() => document.body.style.setProperty('--SonoshootX', '130%'), 1000);
				sonjump.play();
			} else if (key[37]) {
				sx += 15;
				sonic.style.right = sx + 'px';
				sonic.style.transform = 'scaleX(-1)';
				sonic.style.backgroundImage = 'url(img/sonic.gif)';
				document.body.style.setProperty('--Sonoshoot', sx + 'px');
				setTimeout(() => document.body.style.setProperty('--SonoshootX', '130%'), 1000);
			}
			if (key[38] && key[39]) {
				sonic.style.animation = 'jump .5s ease-in-out';
				sonic.onanimationend = () => sonic.style.animation = 'as';
				sonic.style.backgroundImage = 'url(img/sonic.gif)';
				sx -= 15;
				sonic.style.right = sx + 'px';
				sonic.style.transform = 'none';
				document.body.style.setProperty('--Sonoshoot', sx + 'px');
				setTimeout(() => document.body.style.setProperty('--SonoshootX', '-130%'), 1000);
				sonjump.play();
			} else if (key[39]) {
				sx -= 15;
				sonic.style.right = sx + 'px';
				sonic.style.transform = 'none';
				sonic.style.backgroundImage = 'url(img/sonic.gif)';
				document.body.style.setProperty('--Sonoshoot', sx + 'px');
				setTimeout(() => document.body.style.setProperty('--SonoshootX', '-130%'), 1000);
			}
			if (key[13] && sonicWidth > 0) {
				const shot = document.createElement('div');
				shot.classList.add('shootRun2');
				shot.style = `width: 15px; height: 15px; background: radial-gradient(#383838, #292929, #171717); border-radius: 50%; position: absolute; right: ${sonic.offsetLeft}px; bottom: 140px; animation: sonicshoot 2s forwards;`;
				game.append(shot);
				sonkick.currentTime = 0;
				sonkick.play();
				setTimeout(() => shot.remove(), 2000);
			}
		}
	};
	document.onkeyup = e => {
		delete key[e.which];
		state == 0 ? mario.style.backgroundImage = 'url(img/mario3.png)' : mario.style.backgroundImage = 'url(img/mario6.png)';
		sonic.style.backgroundImage = 'url(img/sonic.png)';
	};
	let vsgame = setInterval(() => {
		stone.forEach(item => {
			if (mario.offsetTop <= item.offsetTop + item.offsetHeight && mario.offsetTop + mario.offsetHeight >= item.offsetTop + item.offsetHeight && item.offsetLeft <= mario.offsetLeft + mario.offsetWidth - 20 && item.offsetLeft + item.offsetWidth - 20 >= mario.offsetLeft || sonic.offsetTop <= item.offsetTop + item.offsetHeight && sonic.offsetTop + sonic.offsetHeight >= item.offsetTop + item.offsetHeight && item.offsetLeft <= sonic.offsetLeft + sonic.offsetWidth - 20 && item.offsetLeft + item.offsetWidth - 20 >= sonic.offsetLeft) {
				item.children[0].style.transform = 'translate(-20px, -40px) rotate(-45deg)';
				item.children[1].style.transform = 'translate(20px, -40px) rotate(45deg)';
				item.children[2].style.transform = 'translate(-10px, 60px) rotate(-45deg)';
				item.children[3].style.transform = 'translate(10px, 60px) rotate(45deg)';
				setTimeout(() => {
					item.style.opacity = 0;
					setTimeout(() => item.style.display = 'none', 300);
				}, 100);
				breakBlock.play();
			}
		});
		const allshot = document.querySelectorAll('.shootRun');
		allshot.forEach(item => {
			if (item.offsetLeft + item.offsetWidth > sonic.getBoundingClientRect().left && item.offsetLeft < sonic.getBoundingClientRect().right && sonic.offsetTop + sonic.offsetHeight >= item.offsetTop) {
				sonicWidth > 0 ? sonicWidth -= .05 : '';
				sonicLife.style.width = Math.round(sonicWidth) + '%';
				sonicLife.previousElementSibling.innerText = Math.round(sonicWidth) + '%';
				sonic.style.filter = 'brightness(1.5)';
				setTimeout(() => sonic.style.filter = 'none', 100);
			}
		});
		const allshotSon = document.querySelectorAll('.shootRun2');
		allshotSon.forEach(item => {
			if (item.offsetLeft < mario.getBoundingClientRect().right && item.offsetLeft + item.offsetWidth > mario.getBoundingClientRect().left && mario.offsetTop + mario.offsetHeight >= item.offsetTop) {
				marioWidth > 0 ? marioWidth -= .05 : '';
				marioLife.style.width = Math.round(marioWidth) + '%';
				marioLife.previousElementSibling.innerText = Math.round(marioWidth) + '%';
				mario.style.filter = 'brightness(1.5)';
				setTimeout(() => mario.style.filter = 'none', 100);
			}
		});
		if (marioWidth <= 30) {
			marioIcon.style.backgroundImage = 'url(img/face2.png)';
		}
		if (sonicWidth <= 30) {
			sonicIcon.style.backgroundImage = 'url(img/sonicface2.png)';
		}
		if (mario.offsetLeft + 15 > game.offsetWidth) {
			room.style.left = '-40px';
			room.style.transition = '.2s';
			mario.style.bottom = -mario.offsetHeight - 50 + 'px';
			gameBattle = false;
			theme.pause();
			death.play();
			marioWidth = 0;
			marioLife.style.transition = '.5s';
			marioLife.style.width = marioWidth + '%';
			marioLife.previousElementSibling.innerText = marioWidth + '%';
			leftBool = false;
		}
		if (mario.offsetLeft + mario.offsetWidth - 10 < game.offsetLeft && leftBool) {
			room.style.left = '40px';
			room.style.transition = '.2s';
			mario.style.bottom = -mario.offsetHeight - 50 + 'px';
			gameBattle = false;
			theme.pause();
			death.play();
			marioWidth = 0;
			marioLife.style.transition = '.5s';
			marioLife.style.width = marioWidth + '%';
			marioLife.previousElementSibling.innerText = marioWidth + '%';
		}
		if (sonic.offsetLeft + sonic.offsetWidth - 10 < game.offsetLeft && leftBool) {
			room.style.left = '40px';
			room.style.transition = '.2s';
			sonic.style.bottom = -sonic.offsetHeight - 50 + 'px';
			gameBattle = false;
			theme.pause();
			death.play();
			sonicWidth = 0;
			sonicLife.style.transition = '.5s';
			sonicLife.style.width = sonicWidth + '%';
			sonicLife.previousElementSibling.innerText = sonicWidth + '%';
		}
		if (sonic.offsetLeft + 15 > game.offsetWidth) {
			room.style.left = '-40px';
			room.style.transition = '.2s';
			sonic.style.bottom = -sonic.offsetHeight - 50 + 'px';
			gameBattle = false;
			theme.pause();
			death.play();
			sonicWidth = 0;
			sonicLife.style.transition = '.5s';
			sonicLife.style.width = sonicWidth + '%';
			sonicLife.previousElementSibling.innerText = sonicWidth + '%';
			leftBool = false;
		}
		if (sonicWidth <= 0) {
			theme.pause();
			death.pause();
			winnerIs.play();
			setTimeout(() => sonic.style.display = 'none', 200);
			setTimeout(() => window.location.reload(), 5600);
			clearInterval(vsgame);
			marioRecord++;
			localStorage.setItem('mariorecord', marioRecord);
		}
		if (marioWidth <= 0) {
			theme.pause();
			death.pause();
			winnerIs.play();
			setTimeout(() => mario.style.display = 'none', 200);
			setTimeout(() => window.location.reload(), 5600);
			clearInterval(vsgame);
			sonicRecord++;
			localStorage.setItem('sonicrecord', sonicRecord);
		}
	}, 1);
	shootView.onclick = () => {
		shotBool = true;
		state = 2;
		mario.style.backgroundPosition = '-18px 0';
		mario.style.backgroundSize = '76px 71px';
		mario.style.backgroundImage = 'url(img/mario6.png)';
		mario.style.animation = 'marioBig .5s linear';
		shootView.style = 'opacity: .4; pointer-events: hidden;';
		power.play();
	};
}

const gameMenu = document.querySelector('.menu');
const playGame = document.querySelector('.menu .play');
const playGameRoom = document.querySelector('.menu .version');
const playGameRoomVer = document.querySelectorAll('.menu .version .ver');
let playcurX = -148;
let playBool = true;
let setPlay1;
let setPlay2;
const menuSound = new Audio('sound/menu.mp3');
playGame.onmouseover = () => {
	if (playBool) {
		setPlay1 = setInterval(() => {
			playcurX -= .8;
			playcurX <= -220 ? clearInterval(setPlay1) : '';
			playGame.style.background = `linear-gradient(${playcurX}deg, #0019ff 50%, #f00 50%)`;
		}, 20);
	}
};
playGame.onmouseleave = () => {
	playBool = true;
	if (playBool) {
		setPlay2 = setInterval(() => {
			playcurX += .8;
			playcurX >= -148 ? clearInterval(setPlay2) : '';
			playGame.style.background = `linear-gradient(${playcurX}deg, #0019ff 50%, #f00 50%)`;
		}, 20);
	}
};
playGame.onclick = () => {
	clearInterval(setPlay1);
	clearInterval(setPlay2);
	playGameRoom.style.top = 0;
};
playGameRoomVer[0].onclick = () => {
	gameMenu.style.top = '100%';
	stageFalseTrue();
	menuSound.pause();
};
playGameRoomVer[1].onclick = () => {
	gameMenu.style.top = '100%';
	stageTrue();
	menuSound.pause();
};
gameMenu.onmousedown = () => menuSound.play();
document.oncontextmenu = () => false;
document.addEventListener('keydown', e => e.ctrlKey ? e.preventDefault() : e.which == 123 ? e.preventDefault() : '');