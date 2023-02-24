/* Mega Work NoteBook */

const megaWorkTitle = document.querySelector('.notebookBlock h1');
const megaWorkDeveloper = document.querySelector('.notebookBlock h2');
const MegaWorkNoteBook = document.querySelector('.notebookBlock .noteBook');
const NoteBookTrailer = document.querySelector('.notebookBlock .noteBook .keyboadCube.screen .boardBottom');
const MegaWorkNoteBookScreen = document.querySelector('.notebookBlock .noteBook .keyboadCube.screen');
const NoteBookControlsButton = document.querySelectorAll('.notebookBlock button');
const NoteBookRObotButton = document.querySelectorAll('.butRobot');
setTimeout(() => {
	megaWorkTitle.style.display = 'none';
	setTimeout(() => {
		megaWorkDeveloper.style.display = 'block';
		setTimeout(() => {
			megaWorkDeveloper.style.display = 'none';
			NoteBookTrailer.classList.add('shadow');
			MegaWorkNoteBook.classList.add('start');
			setTimeout(() => {
				NoteBookTrailer.classList.remove('shadow');
			}, 4000);
			setTimeout(() => {
				MegaWorkNoteBookScreen.classList.add('openScreen');
			}, 9000);
			setTimeout(() => {
				NoteBookControlsButton[0].style.left = '7px';
				NoteBookControlsButton[1].style.left = '162px';
				NoteBookControlsButton[2].style.left = '40px';
				NoteBookControlsButton[3].style.right = '135px';
				NoteBookControlsButton[4].style.right = '7px';
				NoteBookControlsButton[5].style.right = '65px';
			}, 15000);
		}, 2000);
	}, 300);
}, 2000);

const NoteBookNeon = document.querySelector('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardTop .NeonControl #neon');
const NoteBookKeyboardNeon = document.querySelectorAll('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardTop .keyboard .line .keybtn >*:not(.kface)');
const NoteBookKeyboardFaceNeon = document.querySelectorAll('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardTop .keyboard .line .keybtn .kface');
NoteBookNeon.oninput = function() {
	for (let i = 0; i < NoteBookKeyboardNeon.length; i++) {
		NoteBookKeyboardNeon[i].style.transition = '.5s';
		NoteBookKeyboardFaceNeon.forEach(item => {
			if (this.value == 0) {
				NoteBookKeyboardNeon[i].style.background = '#222';
				item.style.boxShadow = 'none';
			} else if (this.value == 1) {
				NoteBookKeyboardNeon[i].style.background = 'red';
				item.style.boxShadow = 'inset 0px 0px 6px -1px #ff0000';
			} else if (this.value == 2) {
				NoteBookKeyboardNeon[i].style.background = '#00dcff';
				item.style.boxShadow = 'inset 0px 0px 6px -1px #00dcff';
			} else if (this.value == 3) {
				NoteBookKeyboardNeon[i].style.background = '#ef00ff';
				item.style.boxShadow = 'inset 0px 0px 6px -1px #ef00ff';
			} else if (this.value == 4) {
				NoteBookKeyboardNeon[i].style.background = '#ff4700';
				item.style.boxShadow = 'inset 0px 0px 6px -1px #ff4700';
			} else if (this.value == 5) {
				NoteBookKeyboardNeon[i].style.background = '#00ff66';
				item.style.boxShadow = 'inset 0px 0px 6px -1px #00ff66';
			} else if (this.value == 6) {
				NoteBookKeyboardNeon[i].style.background = '#5600ff';
				item.style.boxShadow = 'inset 0px 0px 6px -1px #5600ff';
			} else if (this.value == 7) {
				NoteBookKeyboardNeon[i].style.background = '#ffe200';
				item.style.boxShadow = 'inset 0px 0px 6px -1px #ffe200';
			} else if (this.value == 8) {
				NoteBookKeyboardNeon[i].style.background = '#ff006c';
				item.style.boxShadow = 'inset 0px 0px 6px -1px #ff006c';
			}
		});
	}
};

NoteBookControlsButton.forEach((item, index) => {
	item.onclick = function() {
		MegaWorkNoteBook.classList.remove('start');
		if (index == 0) {
			NoteBookControlsButton[2].disabled = true;
			MegaWorkNoteBook.className = 'noteBook';
			MegaWorkNoteBook.classList.add('rotate360');
			setTimeout(() => {
				MegaWorkNoteBook.classList.remove('rotate360');
			}, 5100);
		} else if (index == 1) {
			MegaWorkNoteBook.className = 'noteBook';
			MegaWorkNoteBook.classList.add('keyboard3d');
			NoteBookControlsButton[2].disabled = false;
		} else if (index == 2) {
			MegaWorkNoteBook.className = 'noteBook';
			MegaWorkNoteBook.classList.add('keyboardClassic');
		} else if (index == 3) {
			NoteBookControlsButton[5].disabled = false;
			MegaWorkNoteBook.className = 'noteBook';
			MegaWorkNoteBook.classList.add('writerShow');
			setTimeout(() => {
				document.querySelector('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardFrontBorder.tree .riter').classList.add('open');
				setTimeout(() => {
					MegaWorkNoteBook.classList.remove('writerShow');
					MegaWorkNoteBook.classList.add('writerHide');
					document.querySelector('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardFrontBorder.tree .riter').classList.remove('open');
				}, 3000);
			}, 1500);
		} else if (index == 4) {
			if (this.innerText == 'Փակել') {
                MegaWorkNoteBook.classList.remove('writerHide');
				MegaWorkNoteBookScreen.classList.remove('openScreen');
				MegaWorkNoteBookScreen.classList.add('closeScreen');
				this.innerText = 'Բացել';
			} else {
				MegaWorkNoteBookScreen.classList.add('openScreen');
				MegaWorkNoteBookScreen.classList.remove('closeScreen');
				this.innerText = 'Փակել';
			}
		} else if (index == 5) {
			MegaWorkNoteBook.className = 'noteBook';
			MegaWorkNoteBook.classList.add('MonitorShow');
			NoteBookControlsButton[3].disabled = false;
            NoteBookRObotButton.forEach(item => item.style.left = 0);
			setTimeout(() => {
				document.querySelector('.notebookBlock .noteBook .keyboadCube.screen .boardTop .monitor').classList.add('on');
				setTimeout(() => {
					document.querySelector('.notebookBlock .noteBook .keyboadCube.screen .boardTop .monitor .teaserAuthor h4').style.opacity = 0;
					document.querySelector('.notebookBlock .noteBook .keyboadCube.screen .boardTop .monitor .teaserAuthor h4').style.transition = '1s';
				}, 4500);
			}, 1800);
		}

	};
});
const monitorRobotTeaser = document.querySelector('.notebookBlock .noteBook .keyboadCube.screen .boardTop .monitor .teaserAuthor');
document.querySelector('.butRobot').onclick = () => {
    MegaWorkNoteBook.classList.remove('MonitorShow');
    monitorRobotTeaser.style.display = 'none';
	document.querySelector('.notebookBlock').classList.add('Robot');
	document.querySelectorAll('.notebookBlock .noteBook .keyboadCube .boardFrontBorder.tree .item')[12].style.display = 'none';
	document.querySelectorAll('.notebookBlock .noteBook .keyboadCube .boardFrontBorder.tree .item')[13].style.display = 'none';
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye.left').classList.add('active');
	}, 2000);
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye.right').classList.add('active');
		document.querySelector('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .unq').classList.add('active');
	}, 2500);
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .qit').classList.add('active');
	}, 2800);
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .beran').classList.add('active');
		document.querySelector('.notebookBlock.Robot .noteBook').style.transform = 'translateZ(-33em) translateY(-12em) translateX(0em) rotateY(-360deg) rotateX(0deg)';
	}, 3800);
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook').style.transform = 'translateZ(-63em) translateY(-15em) translateX(0em) rotateY(-360deg) rotateX(0deg)';
	}, 7000);
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .keyboadCube:not(.screen) .boardFrontBorder.tree .riter').classList.add('active');
		document.querySelector('.notebookBlock.Robot .noteBook .keyboadCube .boardFrontBorder.one').classList.add('active');
		let itemss = document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube .boardFrontBorder');
		for (let i = 0; i < itemss.length; i++) {
			itemss[i].classList.add('active');
		}
	}, 5000);
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .viz').classList.add('vizActive');
		document.querySelector('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .antenaPart').classList.add('active');
		document.querySelector('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .antenaPart.part2').classList.add('active');
		document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye').forEach(item => {
			item.classList.add('tartelAnim');
		});
		document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye .ey').forEach(item => {
			item.classList.add('tartelV');
		});
		document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .unq').forEach(item => {
			item.classList.add('sharjel');
		});
		setTimeout(() => {
			document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye').forEach(item => {
			item.classList.remove('tartelAnim');
			});
			document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye .ey').forEach(item => {
				item.classList.remove('tartelV');
			});
			document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .unq').forEach(item => {
				item.classList.remove('sharjel');
			});
		}, 800);
	}, 6000);
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq').classList.add('active');
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').classList.add('active');
	}, 7300);
	setTimeout(() => {
		let foot = document.querySelectorAll('.notebookBlock.Robot .noteBook .votq');
		for (let i = 0; i < foot.length; i++) {
			foot[i].classList.add('active');
		}
	}, 8000);
};
let robotXShrjel = 0;
document.querySelector('.mBtn.butRobot2').onclick = () => {
	if (robotXShrjel == 0) {
		document.querySelector('.notebookBlock.Robot .noteBook').style.transform = 'translateZ(-63em) translateY(-15em) translateX(0em) rotateY(0deg) rotateX(0deg)';
		document.querySelector('.notebookBlock.Robot .noteBook .votq .foot').classList.add('verev');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .foot.under').classList.add('verev');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .tat').classList.add('verev');
		setTimeout(() => {
			document.querySelector('.notebookBlock.Robot .noteBook .votq .foot').classList.remove('verev');
			document.querySelector('.notebookBlock.Robot .noteBook .votq .foot.under').classList.remove('verev');
			document.querySelector('.notebookBlock.Robot .noteBook .votq .tat').classList.remove('verev');
		}, 500);
		robotXShrjel = 1;
	} else if (robotXShrjel == 1) {
		document.querySelector('.notebookBlock.Robot .noteBook').style.transform = 'translateZ(-63em) translateY(-15em) translateX(0em) rotateY(-360deg) rotateX(0deg)';
		robotXShrjel = 0;
		document.querySelector('.notebookBlock.Robot .noteBook .votq .foot').classList.add('verev');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .foot.under').classList.add('verev');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .tat').classList.add('verev');
		setTimeout(() => {
			document.querySelector('.notebookBlock.Robot .noteBook .votq .foot').classList.remove('verev');
			document.querySelector('.notebookBlock.Robot .noteBook .votq .foot.under').classList.remove('verev');
			document.querySelector('.notebookBlock.Robot .noteBook .votq .tat').classList.remove('verev');
		}, 500);
	}
};
document.querySelector('.mBtn.butRobot3').onclick = () => {
	document.querySelector('.notebookBlock.Robot .noteBook .votq').classList.add('shpagat');
	document.querySelector('.notebookBlock.Robot .noteBook .votq.right').classList.add('shpagat');
	document.querySelector('.notebookBlock.Robot .noteBook .dzerq').classList.add('shpagat');
	document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').classList.add('shpagat');
	document.querySelector('.notebookBlock.Robot .noteBook').style.transform = 'translateZ(-63em) translateY(-2em) translateX(0em) rotateY(-360deg) rotateX(0deg)';
	document.querySelectorAll('.notebookBlock.Robot .noteBook .dzerq > .matner').forEach(item => {
		item.classList.add('shpagat');
	});
	setTimeout(() => {
		document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye').forEach(item => {
			item.classList.add('tartelAnim');
		});
		document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye .ey').forEach(item => {
			item.classList.add('tartelV');
		});
		document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .unq').forEach(item => {
			item.classList.add('sharjel');
		});
		setTimeout(() => {
			document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye').forEach(item => {
			item.classList.remove('tartelAnim');
			});
			document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye .ey').forEach(item => {
				item.classList.remove('tartelV');
			});
			document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .unq').forEach(item => {
				item.classList.remove('sharjel');
			});
		}, 800);
	}, 1500);
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .votq').classList.remove('shpagat');
		document.querySelector('.notebookBlock.Robot .noteBook .votq.right').classList.remove('shpagat');
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq').classList.remove('shpagat');
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').classList.remove('shpagat');
		document.querySelector('.notebookBlock.Robot .noteBook').style.transform = 'translateZ(-63em) translateY(-15em) translateX(0em) rotateY(-360deg) rotateX(0deg)';
		document.querySelectorAll('.notebookBlock.Robot .noteBook .dzerq > .matner').forEach(item => {
			item.classList.remove('shpagat');
		});
	}, 4000);
};
document.querySelector('.mBtn.butRobot4').onclick = () => {
	document.querySelector('.notebookBlock.Robot .noteBook .dzerq').classList.add('hello');
	setTimeout(() => {
		document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye').forEach(item => {
			item.classList.add('tartelAnim');
		});
		document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye .ey').forEach(item => {
			item.classList.add('tartelV');
		});
		document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .unq').forEach(item => {
			item.classList.add('sharjel');
		});
		setTimeout(() => {
			document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye').forEach(item => {
			item.classList.remove('tartelAnim');
			});
			document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .eye .ey').forEach(item => {
				item.classList.remove('tartelV');
			});
			document.querySelectorAll('.notebookBlock.Robot .noteBook .keyboadCube.screen .boardTop .unq').forEach(item => {
				item.classList.remove('sharjel');
			});
		}, 800);
	}, 500);
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq').classList.remove('hello');
	}, 2100);
};
document.querySelector('.mBtn.butRobot5').onclick = () => {
	document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').style.transform = 'translateZ(-185px) scaleX(-1) rotate(118deg) rotateY(-178deg)';
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right .dzer').style.transform = 'rotate(-64deg) translateZ(-12px) translateY(16px) translateX(11px)';
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right .matner').style.transform = 'rotate(-64deg) translateX(214px) translateY(160px) rotateY(-62deg)';
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right .muscle').classList.add('active');
		setTimeout(() => {
			document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right .muscle.active').classList.add('play');
			setTimeout(() => {
				document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right .muscle.active').classList.remove('play');
				setTimeout(() => {
					document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right .muscle').classList.remove('active');
					document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right .dzer').style.transform = 'rotate(0) translateZ(0) translateY(0) translateX(0)';
					document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right .matner').style.transform = 'rotate(-29deg) translateX(-2px)';
					document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').style.transform = 'translateZ(-185px) scaleX(-1)';
				}, 500);
			}, 1400);
		}, 1000);
	}, 1000);
};
let RobotParelPtuyt = 0;
document.querySelector('.mBtn.butRobot6').onclick = () => {
	if (RobotParelPtuyt == 0) {
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq').classList.add('parPtuyt');
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').classList.add('parPtuyt');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .foot').classList.add('verev');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .foot.under').classList.add('verev');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .tat').classList.add('verev');
		setTimeout(() => {
			document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(-15em) translateX(0em) rotateY(2520deg) rotateX(0deg)';
			document.querySelector('.notebookBlock .noteBook').style.transition = '5s';
			setTimeout(() => {
				document.querySelector('.notebookBlock.Robot .noteBook .dzerq').classList.remove('parPtuyt');
				document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').classList.remove('parPtuyt');
				document.querySelector('.notebookBlock.Robot .noteBook .votq .foot').classList.remove('verev');
				document.querySelector('.notebookBlock.Robot .noteBook .votq .foot.under').classList.remove('verev');
				document.querySelector('.notebookBlock.Robot .noteBook .votq .tat').classList.remove('verev');
			}, 5000);
		}, 1000);
		RobotParelPtuyt = 1;
	} else if (RobotParelPtuyt == 1) {
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq').classList.add('parPtuyt');
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').classList.add('parPtuyt');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .foot').classList.add('verev');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .foot.under').classList.add('verev');
		document.querySelector('.notebookBlock.Robot .noteBook .votq .tat').classList.add('verev');
		document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(-15em) translateX(0em) rotateY(-360deg) rotateX(0deg)';
		setTimeout(() => {
			document.querySelector('.notebookBlock.Robot .noteBook .dzerq').classList.remove('parPtuyt');
			document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').classList.remove('parPtuyt');
			document.querySelector('.notebookBlock.Robot .noteBook .votq .foot').classList.remove('verev');
			document.querySelector('.notebookBlock.Robot .noteBook .votq .foot.under').classList.remove('verev');
			document.querySelector('.notebookBlock.Robot .noteBook .votq .tat').classList.remove('verev');
		}, 5000);
		RobotParelPtuyt = 0;
	}
};
document.querySelector('.mBtn.butRobot7').onclick = () => {
	document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(-15em) translateX(0em) rotateY(-270deg) rotateX(0deg)';
	document.querySelector('.notebookBlock .noteBook').style.transition = '1s';
	setTimeout(() => {
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq').style.transform = 'translateZ(-185px) rotate(169deg) rotateX(25deg)';
		document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').style.transform = 'translateZ(-185px) scaleX(-1) rotate(169deg) rotateX(25deg)';
		setTimeout(() => {
			document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(45em) translateX(9em) rotateY(-270deg) rotateX(-105deg)';
			document.querySelector('.notebookBlock .noteBook').style.transition = '.5s';
			setTimeout(() => {
				document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(7em) translateX(9em) rotateY(-270deg) rotateX(-263deg)';
				setTimeout(() => {
					document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(-20em) translateX(55em) rotateY(-270deg) rotateX(-360deg)';
					setTimeout(() => {
						document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(7em) translateX(9em) rotateY(-270deg) rotateX(-263deg)';
						setTimeout(() => {
							document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(7em) translateX(9em) rotateY(-270deg) rotateX(-263deg)';
							setTimeout(() => {
								document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(45em) translateX(9em) rotateY(-270deg) rotateX(-105deg)';
								setTimeout(() => {
									document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').style.transform = 'translateZ(-185px) scaleX(-1) rotate(169deg) rotateX(25deg)';
									setTimeout(() => {
										document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(-15em) translateX(0em) rotateY(-270deg) rotateX(0deg)';
										document.querySelector('.notebookBlock.Robot .noteBook .dzerq').style.transform = 'translateZ(-185px)';
										document.querySelector('.notebookBlock.Robot .noteBook .dzerq.right').style.transform = 'translateZ(-185px) scaleX(-1)';
										setTimeout(() => {
											document.querySelector('.notebookBlock .noteBook').style.transform = 'translateZ(-63em) translateY(-15em) translateX(0em) rotateY(-360deg) rotateX(0deg)';
										}, 500);
									}, 80);
								}, 80);
							}, 80);
						}, 80);
					}, 1000);
				}, 150);
			},300);
		}, 1000);
	}, 1200);
};



