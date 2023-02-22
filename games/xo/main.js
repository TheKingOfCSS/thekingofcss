const gameContinue = document.querySelector('.game .menu .continue');
const gameXO = document.querySelector('.game .XO');
const gameMenu = document.querySelector('.game .menu');
const XOBox = document.querySelectorAll('.game .XO .box');
const gameExit = document.querySelector('.game .menu .exit');
const gameStart = document.querySelector('.game .menu .start');
const gameReplay = document.querySelector('.game .winner .replayGame');
const gameAgain = document.querySelector('.game .gameAgain');
const gameExitYes = document.querySelector('.game .exitQuestion .yes');
const gameExitNo = document.querySelector('.game .exitQuestion .no');
const gameExitQuestion = document.querySelector('.game .exitQuestion');
const gameWinner = document.querySelector('.game .winner');
const gameWinnerTitleParent = document.querySelector('.game .winner .title');
const gameWinnerTitle = document.querySelector('.game .winner .title .players');
const showPlayerParent = document.querySelector('.game .currentPlyerParent');
const showPlayer = document.querySelector('.game .currentPlyerParent .currentPlyer .PXY');
const gameStudio = document.querySelector('.loading .Studio');
const gameLoadingBlockParent = document.querySelector('.loading');
const gameLoadingBlock = document.querySelector('.loading .progress');
const gameLoading = document.querySelector('.loading progress');
const gameLoadingValue = document.querySelector('.loading .progress .value');
const gamexFace = document.querySelector('.loading .xFace');
const gameoFace = document.querySelector('.loading .oFace');
const gameoAccountBlock = document.querySelector('.game .account');
const gameoAccountX = document.querySelector('.game .account .XplayerPoint .countX');
const gameoAccountO = document.querySelector('.game .account .OplayerPoint .countO');
const gameoAccountValueX = document.querySelector('.game .account .XplayerPoint .countXvalue');
const gameoAccountValueO = document.querySelector('.game .account .OplayerPoint .countOvalue');
const gameoAccountValueNo = document.querySelector('.game .account .noOne .noOneValue');
const gameoAccountValueNoBlock = document.querySelector('.game .account .noOne');
const gameoChangePlayerX = document.querySelectorAll('.game .settingsBlock .choice .smileIconX');
const gameoChangePlayerY = document.querySelectorAll('.game .settingsBlock .choice .smileIconY');
const gameoSettingClick = document.querySelector('.game .menu .settings');
const gameoSettingClose = document.querySelector('.game .settingsBlock .closeSet');
const gameoSettingsBlock = document.querySelector('.game .settingsBlock');
const gameoSmileAdd = document.querySelectorAll('.game .settingsBlock .choice .smileShowXAll, .game .settingsBlock .choice .smileShowYAll');
const gameBackSetting = document.querySelector('.game .backSettings');
const gameBackMenu = document.querySelector('.game .backMenu');
const gameMusic = document.querySelector('.game .audioPause');
let LayerX;
let LayerY;
let LayerXz = 'X';
let LayerYz = 'O';
let currentPlayer = 0;
gameoAccountX.innerText = LayerXz;
gameoAccountO.innerText = LayerYz;
gameoAccountXPlus = 0;
gameoAccountOPlus = 0;
gameoAccountNoOnePlus = 0;
localStorage.getItem('Xwin') != null ? gameoAccountXPlus = localStorage.getItem('Xwin') : '';
localStorage.getItem('Ywin') != null ? gameoAccountOPlus = localStorage.getItem('Ywin') : '';
localStorage.getItem('draw') != null ? gameoAccountNoOnePlus = localStorage.getItem('draw') : '';

const musicTheme = new Audio();
const soundClick = new Audio();
const soundWin = new Audio();
musicTheme.src = 'audio/theme.mp3';
soundClick.src = 'audio/sound.mp3';
soundWin.src = 'audio/win.mp3';
musicTheme.ontimeupdate = () => musicTheme.ended ? musicTheme.play() : '';

gameMusic.onclick = () => {
	if (musicTheme.paused) {
		let playthemex = 60;
		musicTheme.play();
		gameMusic.firstElementChild.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
		setInterval(() => {
			if (playthemex > 39) {
				playthemex -= .5;
				gameMusic.firstElementChild.style.background = `linear-gradient(to right, #fff 0 ${playthemex}%, transparent 40% 61%, #fff 61% 100%)`;
			}
		}, 1);
	} else {
		let playthemex = 39;
		musicTheme.pause();
		gameMusic.firstElementChild.style.clipPath = 'polygon(0 0, 100% 50%, 100% 50%, 0% 100%)';
		setInterval(() => {
			if (playthemex < 61) {
				playthemex += .5;
				gameMusic.firstElementChild.style.background = `linear-gradient(to right, #fff 0 ${playthemex}%, transparent 40% 61%, #fff 61% 100%)`;
			}
		}, 1);
	}
};
for (let i = 0; i < XOBox.length; i++) {
    XOBox[i].onclick = function() {
		LayerXz == LayerYz ? LayerYz = 'O' : '';
		this.style.pointerEvents = 'none';
		soundClick.play();
		setTimeout(() => soundClick.currentTime = 0, 100);
        if (currentPlayer % 2 == 0) {
            LayerX = this.innerText = LayerXz;
			showPlayer.innerText = LayerYz;
        } else {
            LayerY = this.innerText = LayerYz;
			showPlayer.innerText = LayerXz;
        }
        currentPlayer++;
		if (XOBox[0].innerText == LayerX && XOBox[1].innerText == LayerX && XOBox[2].innerText == LayerX || XOBox[3].innerText == LayerX && XOBox[4].innerText == LayerX && XOBox[5].innerText == LayerX || XOBox[6].innerText == LayerX && XOBox[7].innerText == LayerX && XOBox[8].innerText == LayerX || XOBox[0].innerText == LayerX && XOBox[3].innerText == LayerX && XOBox[6].innerText == LayerX || XOBox[1].innerText == LayerX && XOBox[4].innerText == LayerX && XOBox[7].innerText == LayerX || XOBox[2].innerText == LayerX && XOBox[5].innerText == LayerX && XOBox[8].innerText == LayerX || XOBox[0].innerText == LayerX && XOBox[4].innerText == LayerX && XOBox[8].innerText == LayerX || XOBox[2].innerText == LayerX && XOBox[4].innerText == LayerX && XOBox[6].innerText == LayerX) {
			XOBox.forEach(item => item.style.pointerEvents = 'none');
			gameWinner.style.opacity = 1;
			gameWinner.style.visibility = 'visible';
			gameWinnerTitle.innerText = LayerX;
			gameoAccountXPlus++;
			gameoAccountValueX.innerText = gameoAccountXPlus;
			setTimeout(() => {
				gameoAccountBlock.style.left = '-30%';
				gameoAccountBlock.style.transition = '.8s';
			}, 500);
			showPlayerParent.style.display = 'none';
			showPlayerParent.style.top = '-100px';
			localStorage.setItem('Xwin', gameoAccountXPlus);
            gameBackMenu.style.right = '-100%';
			soundWin.play();
			setTimeout(() => {
				gameReplay.style.bottom = '18%';
				gameBackSetting.style.left = 0;
				gameBackSetting.style.animation = 'XOMenuBtn 2s ease infinite alternate';
			}, 1200);
		} else if (XOBox[0].innerText == LayerY && XOBox[1].innerText == LayerY && XOBox[2].innerText == LayerY || XOBox[3].innerText == LayerY && XOBox[4].innerText == LayerY && XOBox[5].innerText == LayerY || XOBox[6].innerText == LayerY && XOBox[7].innerText == LayerY && XOBox[8].innerText == LayerY || XOBox[0].innerText == LayerY && XOBox[3].innerText == LayerY && XOBox[6].innerText == LayerY || XOBox[1].innerText == LayerY && XOBox[4].innerText == LayerY && XOBox[7].innerText == LayerY || XOBox[2].innerText == LayerY && XOBox[5].innerText == LayerY && XOBox[8].innerText == LayerY || XOBox[0].innerText == LayerY && XOBox[4].innerText == LayerY && XOBox[8].innerText == LayerY || XOBox[2].innerText == LayerY && XOBox[4].innerText == LayerY && XOBox[6].innerText == LayerY) {
			XOBox.forEach(item => item.style.pointerEvents = 'none');
			gameWinner.style.opacity = 1;
			gameWinner.style.visibility = 'visible';
			gameWinnerTitle.innerText = LayerY;
			gameoAccountOPlus++;
			gameoAccountValueO.innerText = gameoAccountOPlus;
			setTimeout(() => {
				gameoAccountBlock.style.left = '-30%';
				gameoAccountBlock.style.transition = '.8s';
			}, 500);
			showPlayerParent.style.display = 'none';
			showPlayerParent.style.top = '-100px';
			localStorage.setItem('Ywin', gameoAccountOPlus);
            gameBackMenu.style.right = '-100%';
			soundWin.play();
			setTimeout(() => {
				gameReplay.style.bottom = '18%';
				gameBackSetting.style.left = 0;
				gameBackSetting.style.animation = 'XOMenuBtn 2s ease infinite alternate';
			}, 1200);
		} else if (currentPlayer == XOBox.length) {
            gameoAccountNoOnePlus++;
            gameoAccountValueNo.innerText = gameoAccountNoOnePlus;
            gameoAccountValueNoBlock.style.animation = 'accountNoOne 3s ease .3s forwards';
            showPlayerParent.style.display = 'none';
			showPlayerParent.style.top = '-100px';
			localStorage.setItem('draw', gameoAccountNoOnePlus);
            gameBackMenu.style.right = '-100%';
			soundWin.play();
			setTimeout(() => {
                gameAgain.style.bottom = '80px';
                gameAgain.style.opacity = 1;
                gameAgain.style.visibility = 'visible';
				gameBackSetting.style.left = 0;
				gameBackSetting.style.animation = 'XOMenuBtn 2s ease infinite alternate';
                gameoAccountValueNoBlock.style.animation = 'none';
			}, 3300);
        } 
    };
}

(function autoGradient(MenuX) {
	let XOSet = setInterval(() => {
		MenuX += .001;
		gameMenu.style.backgroundImage = `repeating-conic-gradient(#0009 ${MenuX}%, transparent 11%, #0001 12%)`;
		if (MenuX > 11) {
			clearInterval(XOSet);
			let XOSet2 = setInterval(() => {
				MenuX -= .001;
				gameMenu.style.backgroundImage = `repeating-conic-gradient(#0009 ${MenuX}%, transparent 11%, #0001 12%)`;
				if (MenuX < 10) {
					clearInterval(XOSet2);
					MenuX = 10;
					autoGradient(MenuX);
				}
			}, 1);
		}
	}, 1);
})(10);

window.onload = () => {
	if (localStorage.getItem('Xwin') != null || localStorage.getItem('Ywin') != null || localStorage.getItem('draw') != null) {
		gameContinue.style.display = 'block';
		gameStart.innerText = 'Սկսել զրոյից';
	} else {
		gameStart.innerText = 'Խաղալ';
	}
};

gameExit.onclick = () => {
	gameExitQuestion.style.left = '50%';
	gameMenu.style.opacity = 0;
	document.querySelector('.game .exitQuestion .question:nth-of-type(1)').style.animation = 'exitQuestion 4s ease .7s forwards';
	document.querySelector('.game .exitQuestion .question:nth-of-type(2)').style.animation = 'exitQuestion 4s ease 2.5s forwards';
	setTimeout(() => {
		document.querySelector('.game .exitQuestion .emoji').style.right = '15px';
	}, 3400);
	setTimeout(() => {
		document.querySelector('.game .exitQuestion .yes').style.left = 0;
		document.querySelector('.game .exitQuestion .no').style.right = 0;
	}, 4100);
};

gameExitYes.onclick = () => window.close();
gameExitNo.onclick = () => {
	setTimeout(() => {
        document.querySelector('.game .exitQuestion .yes').style.left = '-150%';
        document.querySelector('.game .exitQuestion .no').style.right = '-150%';
    }, 500);
    document.querySelector('.game .exitQuestion .emoji').classList.add('active');
	setTimeout(() => {
		gameExitQuestion.style.left = '-100%';
		gameMenu.style.opacity = 1;
		document.querySelector('.game .exitQuestion .question:nth-of-type(1)').style.animation = 'none';
		document.querySelector('.game .exitQuestion .question:nth-of-type(2)').style.animation = 'none';
		document.querySelector('.game .exitQuestion .emoji').style.right = '-100%';
        setTimeout(() => {
            document.querySelector('.game .exitQuestion .emoji').classList.remove('active');
        }, 400);
	}, 1000);
};

gameStart.onclick = () => {
	gameMenu.style.top = '100%';
	gameXO.style.right = 0;
	gameXO.style.opacity = 1;
    gameBackMenu.style.right = 0;
    gameBackMenu.style.transitionDelay = '1s';
	gameoAccountBlock.style.left = 0;
	if (gameStart.innerText == 'Սկսել զրոյից') {
        gameStart.innerText == 'Խաղալ';
		localStorage.clear();
		gameoAccountXPlus = 0;
		gameoAccountOPlus = 0;
		gameoAccountNoOnePlus = 0;
        gameoAccountValueX.innerText = 0;
        gameoAccountValueO.innerText = 0;
        gameoAccountValueNo.innerText = 0;
        setTimeout(() => {
            gameContinue.style.display = 'none';
            gameoSettingClick.style.display = 'block';
        }, 300);
        XOBox.forEach(item => {
            item.innerText = '';
            item.style.pointerEvents = 'auto';
        });
	}
	setTimeout(() => {
		gameMenu.style.display = 'none';
        gameBackMenu.style.transitionDelay = '0s';
	}, 800);
	showPlayerParent.style.top = 0;
};

gameBackMenu.onclick = () => {
    if (localStorage.getItem('Xwin') != null || localStorage.getItem('Ywin') != null || localStorage.getItem('draw') != null) {
		gameContinue.style.display = 'block';
		gameStart.innerText = 'Սկսել զրոյից';
        gameoSettingClick.style.display = 'none';
	} else {
        gameStart.innerText = 'Խաղալ';
    }
    XOBox.forEach(item => {
        if (item.innerText != '') {
            gameoSettingClick.style.display = 'none';
        }
    });
    gameXO.style.right = '-200%';
	gameXO.style.opacity = 0;
    showPlayerParent.style.top = '-100%';
    gameoAccountBlock.style.left = '-100%';
    gameMenu.style.display = 'grid';
    setTimeout(() => {
        gameMenu.style.top = 0;
        gameBackMenu.style.right = '-100%';
    }, 1000);
};

gameReplay.onclick = () => {
	gameWinner.style.opacity = 0;
	gameWinner.style.visibility = 'hidden';
	gameReplay.style.bottom = '-100%';
	currentPlayer = 0;
	XOBox.forEach(item => {
		item.innerText = '';
		item.style.pointerEvents = 'auto';
	});
	showPlayerParent.style.display = 'block';
	showPlayer.innerText = LayerXz;
	setTimeout(() => {
		showPlayerParent.style.top = 0;
        gameBackMenu.style.right = 0;
	}, 600);
	setTimeout(() => {
		gameoAccountBlock.style.left = 0;
		gameoAccountBlock.style.transition = '.8s .4s';
		gameBackSetting.style.left = '-100%';
		gameBackSetting.style.animation = 'none';
	}, 500);
};

gameAgain.onclick = () => {
	gameAgain.style.bottom = '-80%';
	gameAgain.style.opacity = 0;
	gameAgain.style.visibility = 'hidden';
	gameBackSetting.style.left = '-100%';
	gameBackSetting.style.animation = 'none';
	currentPlayer = 0;
	XOBox.forEach(item => {
		item.innerText = '';
		item.style.pointerEvents = 'auto';
	});
	showPlayerParent.style.display = 'block';
	showPlayer.innerText = LayerXz;
	setTimeout(() => {
		showPlayerParent.style.top = 0;
        gameBackMenu.style.right = 0;
	}, 100);
};

gameoSettingClick.onclick = () => {
	gameMenu.style.top = '-100%';
	setTimeout(() => {
		gameoSettingsBlock.style.left = '50%';
	}, 200);
};
gameoSettingClose.onclick = () => {
    gameBackSetting.style.top = '70%';
	gameoSettingsBlock.style.left = '-100%';
	gameWinnerTitleParent.style.opacity = 1;
	gameReplay.style.opacity = 1;
	gameReplay.style.visibility = 'visible';
	gameAgain.style.opacity = 1;
	gameAgain.style.visibility = 'visible';
	setTimeout(() => {
		gameMenu.style.top = 0;
	}, 200);
};

gameoSmileAdd.forEach(item => {
	item.onclick = () => {
		if(item.parentElement.style.height != '280px') {
			gameoSmileAdd.forEach(item => {
				item.parentElement.style.height = '82px';
				item.parentElement.style.overflowY = 'hidden';
				item.parentElement.scrollTop = 0;
				item.firstElementChild.style.transform = 'translateY(-24px) rotate(0)';
			});
			item.parentElement.style.height = '280px';
			item.parentElement.style.overflowY = 'auto';
			item.firstElementChild.style.transform = 'translateY(8px) rotate(-180deg)';
			gameoSettingsBlock.style.height = '570px';
		} else {
			item.parentElement.style.height = '82px';
			item.parentElement.style.overflowY = 'hidden';
			item.firstElementChild.style.transform = 'translateY(-24px) rotate(0)';
			gameoSettingsBlock.style.height = '380px';
		}
	};
});

gameBackSetting.onclick = () => {
    gameBackSetting.style.top = '-100%';
	gameoSettingsBlock.style.left = '50%';
	gameWinnerTitleParent.style.opacity = 0;
	gameReplay.style.opacity = 0;
	gameReplay.style.visibility = 'hidden';
	gameAgain.style.opacity = 0;
	gameAgain.style.visibility = 'hidden';
};

gameoChangePlayerX.forEach(item => {
	item.onclick = () => {
		gameoChangePlayerX.forEach(smile => smile.classList.remove('active'));
        showPlayer.innerText = item.innerText;
		LayerXz = item.innerText;
		gameoAccountX.innerText = LayerXz;
        if (LayerXz == LayerYz) {
            item.classList.add('error');
            setTimeout(() => {
                item.classList.remove('error');
                gameoChangePlayerX.forEach(smile => smile.classList.remove('active'));
                gameoChangePlayerX[0].classList.add('active');
                gameoAccountX.innerText = LayerXz = 'X';
            }, 1000);
        }
		item.classList.add('active');
	};
});
gameoChangePlayerY.forEach(item => {
	item.onclick = () => {
		gameoChangePlayerY.forEach(smile => smile.classList.remove('active'));
		LayerYz = item.innerText;
		gameoAccountO.innerText = LayerYz;
        if (LayerXz == LayerYz) {
            item.classList.add('error');
            setTimeout(() => {
                item.classList.remove('error');
                gameoChangePlayerY.forEach(smile => smile.classList.remove('active'));
                gameoChangePlayerY[0].classList.add('active');
                gameoAccountO.innerText = LayerYz = 'O';
            }, 1000);
        }
		item.classList.add('active');
	};
});

gameContinue.onclick = () => {
	localStorage.getItem('Xwin') != null ? gameoAccountValueX.innerText = localStorage.getItem('Xwin') : '';
	localStorage.getItem('Ywin') != null ? gameoAccountValueO.innerText = localStorage.getItem('Ywin') : '';
	localStorage.getItem('draw') != null ? gameoAccountValueNo.innerText = localStorage.getItem('draw') : '';
	gameMenu.style.top = '100%';
	gameXO.style.right = 0;
	gameXO.style.opacity = 1;
    gameBackMenu.style.right = 0;
	gameoAccountBlock.style.left = 0;
	setTimeout(() => {
		gameMenu.style.display = 'none';
	}, 800);
	showPlayerParent.style.top = 0;
};

let loadGame = setInterval(() => {
	gameLoading.value += .4;
	gameLoadingValue.innerText = Math.round(gameLoading.value) + '%';
	if (gameLoading.value == 100) {
		clearInterval(loadGame);
		setTimeout(() => {
			gameLoadingBlock.style.opacity = 0;
			setTimeout(() => {
				gameLoadingBlock.style.display = 'none';
				gameStudio.style.transform = 'translate(-50%, -50%) scale(1)';
				gameStudio.style.opacity = 1;
				gamexFace.style.opacity = 0;
				gameoFace.style.opacity = 0;
				setTimeout(() => {
					document.querySelector('.loading .Studio .name').style.opacity = 1;
					setTimeout(() => {
						document.querySelector('.loading .Studio .developer').style.opacity = 1;
						setTimeout(() => {
							gameLoadingBlockParent.style.top = '100%';
							setTimeout(() => {
								gameLoadingBlockParent.style.display = 'none';
							}, 800);
						}, 1200);
					}, 1500);
				}, 2000);	
			}, 500);
		}, 500);
	}
}, 50);

