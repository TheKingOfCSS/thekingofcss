const ParentBlockAllControlsNewClassSlidBack = document.querySelector('.ParentBlockAllControls .newClassSlid');
const ParentBlockAllControlsNewClassSlid = document.querySelector('.ParentBlockAllControls .newClassSlid .toggleCarus');
const ParentBlockAllControlsNewClassSlidCarr = document.querySelector('.ParentBlockAllControls .newClassSlid .toggleCarus .carClass');
const ParentBlockAllControlsNewClassSlidItems = document.querySelectorAll('.ParentBlockAllControls .newClassSlid .toggleCarus .carClass .item');
const ParentBlockAllControlsBtn = document.querySelectorAll('.ParentBlockAllControls .wordClassBtn');
const ParentBlockWorldClassWorkImage = document.querySelector('.ParentBlockAllControls .newClassSlid .toggleCarus .include');

ParentBlockAllControlsBtn[0].onclick = () => {
	ParentBlockAllControlsNewClassSlid.classList.add('author');
	setTimeout(() => {
		setTimeout(() => {
			document.querySelector('.ParentBlockAllControls .newClassSlid .toggleCarus .carClass .street').style.opacity = 0;
			setTimeout(() => {
				document.querySelector('.ParentBlockAllControls .newClassSlid .toggleCarus .carClass .street').style.opacity = 1;
			}, 12000);
		}, 2000);
		ParentBlockAllControlsBtn.forEach(items => {
			items.style.opacity = 0;
		});
		setTimeout(() => {
			ParentBlockAllControlsBtn.forEach(items => {
				items.style.opacity = 1;
				ParentBlockAllControlsBtn[0].style.visibility = 'hidden';
				ParentBlockAllControlsBtn[0].style.opacity = 0;
				ParentBlockAllControlsBtn[1].style.visibility = 'visible';
				ParentBlockAllControlsBtn[1].style.opacity = 1;
			});
		}, 17000);
	}, 1500);
};
ParentBlockAllControlsBtn[1].onclick = () => {
	ParentBlockAllControlsNewClassSlid.classList.remove('author');
	setTimeout(() => {
		ParentBlockAllControlsNewClassSlidBack.style.background = '#000';
		ParentBlockAllControlsNewClassSlidItems.forEach(items => {
			document.querySelector('.ParentBlockAllControls .carClass h4').style.visibility = 'hidden';
			ParentBlockAllControlsNewClassSlid.style.transform = 'translateZ(0em) translateY(20em) rotateX(0deg)';
			ParentBlockAllControlsNewClassSlidCarr.style.animationDuration = '15s';
			items.classList.add('changeImg');
			setTimeout(() => {
				items.classList.add('mode2');
			}, 1000);
		});
	}, 1000);
	ParentBlockAllControlsBtn[1].style.visibility = 'hidden';
	ParentBlockAllControlsBtn[1].style.opacity = 0;
	ParentBlockAllControlsBtn[2].style.visibility = 'visible';
	ParentBlockAllControlsBtn[2].style.opacity = 1;
};
ParentBlockAllControlsBtn[2].onclick = () => {
    ParentBlockAllControlsNewClassSlid.classList.remove('skyMode6');
	ParentBlockAllControlsNewClassSlid.classList.add('SecretMode');
    document.querySelector('.ParentBlockAllControls').classList.remove('bef');
    ParentBlockAllControlsNewClassSlid.classList.remove('stat');
	setTimeout(() => {
		ParentBlockAllControlsNewClassSlidCarr.style.animationDuration = '0s';
	}, 10);
	ParentBlockAllControlsBtn[2].style.visibility = 'hidden';
	ParentBlockAllControlsBtn[2].style.opacity = 0;
};

for (let i = 0; i < ParentBlockAllControlsNewClassSlidItems.length; i++) {
	ParentBlockAllControlsNewClassSlidItems[i].onmousedown = () => {
		document.querySelectorAll('.ParentBlockAllControls .newClassSlid .toggleCarus .carClass .item.changeImg.mode2')[i].style.backgroundPosition = '0 -23%';
		document.querySelectorAll('.ParentBlockAllControls .newClassSlid .toggleCarus .carClass .item.changeImg.mode2')[i].style.transition = '.3s';
		setTimeout(() => {
			document.querySelectorAll('.ParentBlockAllControls .newClassSlid .toggleCarus .carClass .item.changeImg.mode2')[i].style.backgroundPosition = '0 0';
		}, 300);
		ParentBlockWorldClassWorkImage.classList.add('flat');
		setTimeout(() => {
			ParentBlockWorldClassWorkImage.classList.remove('flat');
		}, 500);
		i == 0 ? ParentBlockWorldClassWorkImage.src = 'worldClass/1.jpg' : '';
		i == 1 ? ParentBlockWorldClassWorkImage.src = 'worldClass/2.jpg' : '';
		i == 2 ? ParentBlockWorldClassWorkImage.src = 'worldClass/3.jpg' : '';
		i == 3 ? ParentBlockWorldClassWorkImage.src = 'worldClass/4.jpg' : '';
		i == 4 ? ParentBlockWorldClassWorkImage.src = 'worldClass/5.jpg' : '';
		i == 5 ? ParentBlockWorldClassWorkImage.src = 'worldClass/6.jpg' : '';
		i == 6 ? ParentBlockWorldClassWorkImage.src = 'worldClass/7.jpg' : '';
		i == 7 ? ParentBlockWorldClassWorkImage.src = 'worldClass/8.jpg' : '';
		i == 8 ? ParentBlockWorldClassWorkImage.src = 'worldClass/9.jpg' : '';
		i == 9 ? ParentBlockWorldClassWorkImage.src = 'worldClass/10.jpg' : '';
		i == 10 ? ParentBlockWorldClassWorkImage.src = 'worldClass/11.jpg' : '';
		i == 11 ? ParentBlockWorldClassWorkImage.src = 'worldClass/12.jpg' : '';
		i == 12 ? ParentBlockWorldClassWorkImage.src = 'worldClass/13.jpg' : '';
		i == 13 ? ParentBlockWorldClassWorkImage.src = 'worldClass/14.jpg' : '';
		i == 14 ? ParentBlockWorldClassWorkImage.src = 'worldClass/15.jpg' : '';
		i == 15 ? ParentBlockWorldClassWorkImage.src = 'worldClass/16.jpg' : '';
	};
}
const WorldSliderunderSlider = document.querySelector('.ParentBlockAllControls .newClassSlid .toggleCarus .underSlider');
document.querySelector('.ParentBlockAllControls .newClassSlid .toggleCarus .carClass .street .hatch').onclick = function() {
	this.classList.add('open');
	setTimeout(() => {
		WorldSliderunderSlider.style.display = 'block';
		ParentBlockAllControlsNewClassSlid.classList.remove('SecretMode');	
		ParentBlockAllControlsNewClassSlid.classList.add('SecretModeOpen');
		setTimeout(() => {
			document.querySelector('.ParentBlockAllControls .newClassSlid .toggleCarus .carClass .starsBlock').classList.add('start');
		}, 2000);
	}, 900);
};

const WorldSliderunderSliderItems = document.querySelectorAll('.ParentBlockAllControls .newClassSlid .toggleCarus .underSlider .UItem');
const WorldSliderunderSliderItemsImg = document.querySelectorAll('.ParentBlockAllControls .newClassSlid .toggleCarus .underSlider .UItem img');
const WorldSliderunderSliderAll = document.querySelector('.ParentBlockAllControls .newClassSlid .toggleCarus .underAll');
let WorldSliderunderSliderX = 0;
WorldSliderunderSlider.onmousewheel = function(event) {
	let l = event.deltaY;
	WorldSliderunderSliderX += 0.2 * l;
	this.style.transform = 'translateZ(0) translateY(51.8em) translateX(-50%) rotateY('+ WorldSliderunderSliderX + 'deg)';
	return false;
};
for (let i = 0; i < WorldSliderunderSliderItems.length; i++) {
	WorldSliderunderSliderItems[i].onclick = function() {
		WorldSliderunderSliderAll.style.backgroundImage = `url(${WorldSliderunderSliderItemsImg[i].src})`;
		WorldSliderunderSliderAll.style.opacity = 1;
		WorldSliderunderSliderAll.style.visibility = 'visible';
		setTimeout(() => {
			WorldSliderunderSliderAll.style.opacity = 0;
			WorldSliderunderSliderAll.style.visibility = 'hidden';
		}, 1000);
	}
}

ParentBlockAllControlsBtn[3].onclick = () => {
	ParentBlockAllControlsNewClassSlid.classList.add('skyMode');
    ParentBlockAllControlsNewClassSlidBack.style.background = '#fff';
    ParentBlockAllControlsNewClassSlidBack.style.transition = '.5s';
	setTimeout(() => {
		ParentBlockAllControlsNewClassSlid.classList.remove('skyMode');
		ParentBlockAllControlsNewClassSlid.classList.add('skyMode2');
		setTimeout(() => {
			ParentBlockAllControlsNewClassSlid.classList.remove('skyMode2');
			ParentBlockAllControlsNewClassSlid.classList.add('skyMode3');
			setTimeout(() => {
				ParentBlockAllControlsNewClassSlid.classList.remove('skyMode3');
				ParentBlockAllControlsNewClassSlid.classList.add('skyMode4');
				document.querySelector('.newClassSlid .toggleCarus .prentTunel .heaven').style.display = 'block';
					document.querySelector('.newClassSlid .toggleCarus .prentTunel .heavenBlockup1').style.display = 'block';
					document.querySelector('.newClassSlid .toggleCarus .prentTunel .heavenBlockup2').style.display = 'block';
					document.querySelector('.newClassSlid .toggleCarus .prentTunel .column1').style.display = 'block';
					document.querySelector('.newClassSlid .toggleCarus .prentTunel .column2').style.display = 'block';
					document.querySelector('.newClassSlid .toggleCarus .prentTunel .column1 .angel').style.display = 'block';
					document.querySelector('.newClassSlid .toggleCarus .prentTunel .column2 .angel').style.display = 'block';
					document.querySelector('.newClassSlid .toggleCarus .prentTunel .Jesus').style.opacity = 1;
                setTimeout(() => {
                    ParentBlockAllControlsNewClassSlid.classList.remove('skyMode4');
                    ParentBlockAllControlsNewClassSlid.classList.add('skyMode5');
                    setTimeout(() => {
                        ParentBlockAllControlsNewClassSlid.classList.remove('skyMode5');
                        ParentBlockAllControlsNewClassSlid.classList.add('skyMode6');
                        document.querySelector('.ParentBlockAllControls').classList.add('bef');
						ParentBlockAllControlsNewClassSlid.classList.add('stat');
                    }, 10000);
                }, 15000);
			}, 10000);
		}, 15000);
	}, 20000);
};
