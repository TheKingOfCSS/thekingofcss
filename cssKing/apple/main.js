const headLink = document.querySelectorAll('header .top nav .menu .menu-item > a');
const headSub = document.querySelectorAll('header .top nav .menu .menu-item .sub-menu');
const fixedMenu = document.querySelector('header .fixedMenu');
const overlay = document.querySelector('header .overlay');
headLink.forEach(item => {
	item.onmouseover = () => overlay.style.opacity = 1;
	item.nextElementSibling.onmouseover = () => overlay.style.opacity = 1;
	item.onmouseleave = () => overlay.style.opacity = 0;
	item.nextElementSibling.onmouseleave = () => overlay.style.opacity = 0;
});
const leftH2 = document.querySelector('.presentation .display .left h2');
const rightH2 = document.querySelector('.presentation .display .right h2');
const headH1 = document.querySelector('header .head h1');
const specs = document.querySelectorAll('.presentation .display .specs');
const battery = document.querySelector('.presentation .display .battery');
const photos = document.querySelector('.photos');
const wonderfull = document.querySelector('.wonderfull');
const wonderPhones = document.querySelectorAll('.wonderfull .block .phones img');
const selfies = document.querySelector('.selfies');
const wonderData = [70, 45, 0, 20, 60];
const wonderData2 = [2.9, 2.5, 5, 4, 2.6];
const iphoneColor1 = document.querySelector('.iphoneColor .item:nth-child(1) .slide');
const iphoneColor2 = document.querySelector('.iphoneColor .item:nth-child(2) .slide');
const iphoneColor3 = document.querySelector('.iphoneColor .item:nth-child(3) .slide');
const iphoneColor5 = document.querySelector('.iphoneColor .item:nth-child(5) .slide');
const iphoneColor6 = document.querySelector('.iphoneColor .item:nth-child(6) .name');
const iphoneColor7 = document.querySelector('.iphoneColor .item:nth-child(7) .slide');
const iphoneColorInp = document.querySelectorAll('.iphoneColor .item:nth-child(4) .radio input');
const iphoneColorName = document.querySelector('.iphoneColor .item:nth-child(4) h3');
const iphoneColorChief = document.querySelector('.iphoneColor .item:nth-child(4) h2');
const iphoneColorItems = document.querySelectorAll('.iphoneColor .item');
const iphoneLock = document.querySelector('.slider .lockBlock .lock');
const iphoneLock2 = document.querySelector('.epic .lockBlock .lock');
const calls = document.querySelector('.calls h2');
const gridInfo = document.querySelector('.gridSlider .gridInfo p');
const gridInfoMore = document.querySelector('.gridSlider .gridInfo .severe .severeClick h4');
let ColorCur = 0;
let ColorCur2 = 0;
let colorTarget = 0;
let colorBool = true;
const colorImage = ['img/gt1.jpg', 'img/gt2.jpg', 'img/gt3.jpg', 'img/gt4.jpg', 'img/gt5.jpg'];
const colorImage2 = ['img/gr1.jpg', 'img/gr2.jpg', 'img/gr3.jpg', 'img/gr4.jpg', 'img/gr5.jpg'];
const colorImage3 = ['img/gl1.jpg', 'img/gl2.jpg', 'img/gl3.jpg', 'img/gl4.jpg', 'img/gl5.jpg'];
const colorImage4 = ['img/gs1.jpg', 'img/gs2.jpg', 'img/gs3.jpg', 'img/gs4.jpg', 'img/gs5.jpg'];
const colorImage5 = ['img/gb1.jpg', 'img/gb2.jpg', 'img/gb3.jpg', 'img/gb4.jpg', 'img/gb5.jpg'];
const colorImage6 = ['img/gn1.jpg', 'img/gn2.jpg', 'img/gn3.jpg', 'img/gn4.jpg', 'img/gn5.jpg'];
const colorNames = ['Blue', 'Purple', 'Midnight', 'Starlight', '<img src="img/n1.png" alt="Img">'];
let colorNameRot = '35deg';
const homeSlideItem = document.querySelectorAll('.slider .homeSlider .big img');
const homeSlideBtn = document.querySelectorAll('.slider .homeSlider .control button');
let homeData = [0, 1, 2, 3, 4, 5];
let homeCur = 0;
const homeSlideText = document.querySelectorAll('.slider .text h2');
const homeSlideDescr = document.querySelector('.slider .text p');
const fixedSec = document.querySelector('.fixedSec .sec');
const scroll2 = document.querySelector('.scroll');
const gridSlider = document.querySelector('.gridSlider');
const fixedClose = document.querySelector('.scroll .closeFixed button');
const fixedProgress = document.querySelector('.scroll .closeFixed .progress');
const power = document.querySelector('.power');
const powerItem = document.querySelectorAll('.power .safe .item');
const XDRdisplayName = document.querySelectorAll('.XDRdisplay :is(h2, h3, h5)');
const XDRpicture = document.querySelector('.XDRdisplay .picture');
const packed = document.querySelector('.packed img:nth-of-type(1)');
const XDRtechnology = document.querySelectorAll('.XDRdisplay :is(.technology p, .sun .sunBlock)');
const epic = document.querySelectorAll('.epic .textSlider .tSlide .item');
const epicImg = document.querySelectorAll('.epic .cp img');
const epicInfo = document.querySelectorAll('.epic .better :is(p, .block)');
const epicMore = document.querySelector('.epic .twoAr .severeClick h4');
const threeAr = document.querySelector('.selfies .threeAr .severeClick h4');
const fixedSec2 = document.querySelector('.fixedSec2 .sec');
const scroll3 = document.querySelector('.scroll2');
const fixedProgress2 = document.querySelector('.scroll2 .closeFixed .progress');
const steady = document.querySelectorAll('.steady h2 span');
const steadyHand = document.querySelector('.steady .hand');
const steadyPlayPause = document.querySelector('.steady .controls .playPause');
const movie = document.querySelector('.movie');
const natureBlock = document.querySelector('.movie .nature .natureBlock');
const natureRight = document.querySelectorAll('.movie .natureInfo .natureRight');
const snapInfo = document.querySelectorAll('.selfies .snap :is(p, .snapInfo)');
const asyncControl = time => new Promise(resolve => setTimeout(resolve, time));
iphoneColorInp.forEach((item, index) => {
	item.onchange = () => {
		if (colorBool) {
			colorBool = false;
			iphoneColorInp.forEach(item => item.style.pointerEvents = 'none');
			if (index > colorTarget) {
				void async function() {
					colorNameRot = '35deg';
					ColorCur = -100;
					ColorCur2 = -200;
					iphoneColor1.style.transition = null;
					iphoneColor2.style.transition = null;
					iphoneColor3.style.transition = null;
					iphoneColor5.style.transition = null;
					iphoneColor7.style.transition = null;
					iphoneColor1.firstElementChild.firstElementChild.style.transition = null;
					iphoneColor2.firstElementChild.firstElementChild.style.transition = null;
					iphoneColor3.firstElementChild.style.transition = null;
					iphoneColor5.firstElementChild.firstElementChild.style.transition = null;
					iphoneColor7.firstElementChild.firstElementChild.style.transition = null;
					iphoneColor3.lastElementChild.style.transition = null;
					iphoneColor1.lastElementChild.firstElementChild.style.transition = null;
					iphoneColor2.lastElementChild.firstElementChild.style.transition = null;
					iphoneColor5.lastElementChild.lastElementChild.style.transition = null;
					iphoneColor7.lastElementChild.lastElementChild.style.transition = null;
					iphoneColor1.style.left = ColorCur + '%';
					iphoneColor2.style.left = ColorCur + '%';
					iphoneColor3.style.left = ColorCur + '%';
					iphoneColor5.style.left = ColorCur2 + '%';
					iphoneColor7.style.left = ColorCur + '%';
					iphoneColor1.firstElementChild.firstElementChild.style.opacity = 0;
					iphoneColor2.firstElementChild.firstElementChild.style.opacity = 0;
					iphoneColor3.firstElementChild.style.opacity = 0;
					iphoneColor5.firstElementChild.firstElementChild.style.opacity = 0;
					iphoneColor7.firstElementChild.firstElementChild.style.opacity = 0;
					iphoneColor1.lastElementChild.firstElementChild.style.opacity = 1;
					iphoneColor2.lastElementChild.firstElementChild.style.opacity = 1;
					iphoneColor3.lastElementChild.style.opacity = 1;
					iphoneColor5.lastElementChild.lastElementChild.style.opacity = 1;
					iphoneColor7.lastElementChild.lastElementChild.style.opacity = 1;
					iphoneColor1.lastElementChild.firstElementChild.src = colorImage4[index];
					iphoneColor2.lastElementChild.firstElementChild.src = colorImage3[index];
					iphoneColor3.lastElementChild.src = colorImage[index];
					iphoneColor5.lastElementChild.lastElementChild.src = colorImage2[index];
					iphoneColor7.lastElementChild.lastElementChild.src = colorImage5[index];
					await asyncControl(7e2);
					iphoneColor1.firstElementChild.firstElementChild.src = colorImage4[index];
					iphoneColor2.firstElementChild.firstElementChild.src = colorImage3[index];
					iphoneColor3.firstElementChild.src = colorImage[index];
					iphoneColor5.firstElementChild.firstElementChild.src = colorImage2[index];
					iphoneColor7.firstElementChild.firstElementChild.src = colorImage5[index];
					ColorCur = 0;
					ColorCur2 = 0;
					iphoneColor1.firstElementChild.firstElementChild.style.transition = 'none';
					iphoneColor2.firstElementChild.firstElementChild.style.transition = 'none';
					iphoneColor3.firstElementChild.style.transition = 'none';
					iphoneColor5.firstElementChild.firstElementChild.style.transition = 'none';
					iphoneColor7.firstElementChild.firstElementChild.style.transition = 'none';
					iphoneColor1.lastElementChild.firstElementChild.style.transition = 'none';
					iphoneColor2.lastElementChild.firstElementChild.style.transition = 'none';
					iphoneColor3.lastElementChild.style.transition = 'none';
					iphoneColor5.lastElementChild.lastElementChild.style.transition = 'none';
					iphoneColor7.lastElementChild.lastElementChild.style.transition = 'none';
					iphoneColor1.style.transition = 'none';
					iphoneColor2.style.transition = 'none';
					iphoneColor3.style.transition = 'none';
					iphoneColor5.style.transition = 'none';
					iphoneColor7.style.transition = 'none';
					iphoneColor1.style.left = ColorCur + '%';
					iphoneColor2.style.left = ColorCur + '%';
					iphoneColor3.style.left = ColorCur + '%';
					iphoneColor5.style.left = ColorCur2 + '%';
					iphoneColor7.style.left = ColorCur + '%';
					iphoneColor1.firstElementChild.firstElementChild.style.opacity = 1;
					iphoneColor2.firstElementChild.firstElementChild.style.opacity = 1;
					iphoneColor3.firstElementChild.style.opacity = 1;
					iphoneColor5.firstElementChild.firstElementChild.style.opacity = 1;
					iphoneColor7.firstElementChild.firstElementChild.style.opacity = 1;
					iphoneColor3.lastElementChild.style.opacity = 0;
					iphoneColor1.lastElementChild.firstElementChild.style.opacity = 0;
					iphoneColor2.lastElementChild.firstElementChild.style.opacity = 0;
					iphoneColor5.lastElementChild.lastElementChild.style.opacity = 0;
					iphoneColor7.lastElementChild.lastElementChild.style.opacity = 0;
				}();
			} else {
				void async function() {
					colorNameRot = '-35deg';
					ColorCur = -100;
					ColorCur2 = -200;
					iphoneColor1.style.transition = 'none';
					iphoneColor2.style.transition = 'none';
					iphoneColor3.style.transition = 'none';
					iphoneColor5.style.transition = 'none';
					iphoneColor7.style.transition = 'none';
					iphoneColor1.style.left = ColorCur + '%';
					iphoneColor2.style.left = ColorCur + '%';
					iphoneColor3.style.left = ColorCur + '%';
					iphoneColor5.style.left = ColorCur2 + '%';
					iphoneColor7.style.left = ColorCur + '%';
					iphoneColor1.firstElementChild.firstElementChild.src = colorImage4[index];
					iphoneColor2.firstElementChild.firstElementChild.src = colorImage3[index];
					iphoneColor3.firstElementChild.src = colorImage[index];
					iphoneColor5.firstElementChild.firstElementChild.src = colorImage2[index];
					iphoneColor7.firstElementChild.firstElementChild.src = colorImage5[index];
					iphoneColor1.lastElementChild.firstElementChild.style.opacity = 1;
					iphoneColor2.lastElementChild.firstElementChild.style.opacity = 1;
					iphoneColor3.lastElementChild.style.opacity = 1;
					iphoneColor5.lastElementChild.lastElementChild.style.opacity = 1;
					iphoneColor7.lastElementChild.lastElementChild.style.opacity = 1;
					iphoneColor1.firstElementChild.firstElementChild.style.opacity = 0;
					iphoneColor2.firstElementChild.firstElementChild.style.opacity = 0;
					iphoneColor3.firstElementChild.style.opacity = 0;
					iphoneColor5.firstElementChild.firstElementChild.style.opacity = 0;
					iphoneColor7.firstElementChild.firstElementChild.style.opacity = 0;
					iphoneColor1.firstElementChild.firstElementChild.style.transition = 'none';
					iphoneColor2.firstElementChild.firstElementChild.style.transition = 'none';
					iphoneColor3.firstElementChild.style.transition = 'none';
					iphoneColor5.firstElementChild.firstElementChild.style.transition = 'none';
					iphoneColor7.firstElementChild.firstElementChild.style.transition = 'none';
					iphoneColor1.lastElementChild.firstElementChild.style.transition = 'none';
					iphoneColor2.lastElementChild.firstElementChild.style.transition = 'none';
					iphoneColor3.lastElementChild.style.transition = 'none';
					iphoneColor5.lastElementChild.lastElementChild.style.transition = 'none';
					iphoneColor7.lastElementChild.lastElementChild.style.transition = 'none';
					await asyncControl(40);
					ColorCur = 0;
					ColorCur2 = 0;
					iphoneColor1.style.transition = null;
					iphoneColor2.style.transition = null;
					iphoneColor3.style.transition = null;
					iphoneColor5.style.transition = null;
					iphoneColor7.style.transition = null;
					iphoneColor1.style.left = ColorCur + '%';
					iphoneColor2.style.left = ColorCur + '%';
					iphoneColor3.style.left = ColorCur + '%';
					iphoneColor5.style.left = ColorCur2 + '%';
					iphoneColor7.style.left = ColorCur + '%';
					iphoneColor1.lastElementChild.firstElementChild.style.opacity = 0;
					iphoneColor2.lastElementChild.firstElementChild.style.opacity = 0;
					iphoneColor3.lastElementChild.style.opacity = 0;
					iphoneColor5.lastElementChild.lastElementChild.style.opacity = 0;
					iphoneColor7.lastElementChild.lastElementChild.style.opacity = 0;
					iphoneColor1.firstElementChild.firstElementChild.style.opacity = 1;
					iphoneColor2.firstElementChild.firstElementChild.style.opacity = 1;
					iphoneColor3.firstElementChild.style.opacity = 1;
					iphoneColor5.firstElementChild.firstElementChild.style.opacity = 1;
					iphoneColor7.firstElementChild.firstElementChild.style.opacity = 1;
					iphoneColor1.firstElementChild.firstElementChild.style.transition = null;
					iphoneColor2.firstElementChild.firstElementChild.style.transition = null;
					iphoneColor3.firstElementChild.style.transition = null;
					iphoneColor5.firstElementChild.firstElementChild.style.transition = null;
					iphoneColor7.firstElementChild.firstElementChild.style.transition = null;
					iphoneColor1.lastElementChild.firstElementChild.style.transition = null;
					iphoneColor2.lastElementChild.firstElementChild.style.transition = null;
					iphoneColor3.lastElementChild.style.transition = null;
					iphoneColor5.lastElementChild.lastElementChild.style.transition = null;
					iphoneColor7.lastElementChild.lastElementChild.style.transition = null;
					await asyncControl(7e2);
					iphoneColor1.lastElementChild.firstElementChild.src = colorImage4[index];
					iphoneColor2.lastElementChild.firstElementChild.src = colorImage3[index];
					iphoneColor3.lastElementChild.src = colorImage[index];
					iphoneColor5.lastElementChild.lastElementChild.src = colorImage2[index];
					iphoneColor7.lastElementChild.lastElementChild.src = colorImage5[index];
				}();
			}
			iphoneColor6.style.opacity = .8;
			iphoneColor6.style.backgroundImage = `url(${colorImage6[index]})`;
			setTimeout(() => iphoneColor6.style.opacity = null, 5e2);
			iphoneColorName.style.rotate = 'y ' + colorNameRot;
			iphoneColorChief.style.rotate = 'y ' + colorNameRot;
			iphoneColorName.style.transition = '.3s';
			void async function() {
				await asyncControl(3e2);
				iphoneColorName.style.rotate = null;
				iphoneColorChief.style.opacity = 0;
				iphoneColorChief.style.transition = '.15s';
				iphoneColorName.style.transition = '1.2s';
				await asyncControl(15e1);
				iphoneColorChief.innerHTML = colorNames[index];
				iphoneColorChief.style.opacity = 1;
				iphoneColorChief.style.transition = '1s';
				iphoneColorChief.style.rotate = null;
			}();
			colorTarget = index;
			setTimeout(() => {
				colorBool = true;
				iphoneColorInp.forEach(item => item.style.pointerEvents = null);
			}, 74e1);
		}
	};
});
homeSlideBtn[1].onclick = () => {
	homeSlideBtn[0].disabled = false;
	homeSlideItem.forEach((item, index) => {
		homeData[index]--;
		item.style.setProperty('--i', homeData[index]);
	});
	homeSlideItem[homeCur].style.scale = .9;
	homeSlideItem[homeCur].style.opacity = 0;
	homeCur++;
	homeCur == homeData.length-1 ? homeSlideBtn[1].disabled = true : '';
	for (let i = 0; i < homeCur; i++) {
		homeSlideItem[i].style.setProperty('--i', 0);
	}
};
homeSlideBtn[0].onclick = () => {
	homeSlideBtn[1].disabled = false;
	homeSlideItem.forEach((item, index) => {
		homeData[index]++;
		item.style.setProperty('--i', homeData[index]);
	});
	homeCur--;
	homeCur == 0 ? homeSlideBtn[0].disabled = true : '';
	homeSlideItem[homeCur].style.scale = null;
	homeSlideItem[homeCur].style.opacity = null;
	for (let i = 0; i < homeCur; i++) {
		homeSlideItem[i].style.setProperty('--i', 0);
	}
};
window.onscroll = () => {
	fixedMenu.style.top = -scrollY / 5 + 'px';
	fixedMenu.style.setProperty('--border', Math.min(scrollY / 20 + 72, 100) + '%');
	scrollY / 5 >= fixedMenu.lastElementChild.offsetTop ? (fixedMenu.style.top = '-48px', overlay.style.opacity = 0, headSub.forEach(item => item.style = 'clip-path: inset(0 0 100% 0); opacity: 0; visibility: hidden;')) : headSub.forEach(item => item.style = null);
	headH1.style.opacity = Math.min(Math.max((headH1.getBoundingClientRect().top - scrollY) / 400 + 1, 0), 1);
	scrollY <= innerHeight ? (leftH2.style = null, rightH2.style = null, specs.forEach(item => (item.style = null, item.nextElementSibling.style = 'transition: .3s;'))) : specs.forEach(item => item.nextElementSibling.style.transition = null);
	scrollY >= headH1.getBoundingClientRect().top && scrollY <= rightH2.parentElement.getBoundingClientRect().top + 550 ? (leftH2.style.transform = `translateY(${Math.max((headH1.getBoundingClientRect().top - scrollY) / 15 + 40, -10)}px) rotateY(-45deg) scale(${Math.min(Math.abs(headH1.getBoundingClientRect().top - scrollY) / 650, 1.7)})`, rightH2.style.transform = `translateY(${Math.max(titleYRight = (headH1.getBoundingClientRect().top - scrollY) / 15 + 40, 5)}px) rotateY(45deg) scale(${Math.min(titleScaleRight = Math.abs(headH1.getBoundingClientRect().top - scrollY) / 800, 1.3)})`) : '';
	scrollY > rightH2.parentElement.getBoundingClientRect().top + 550 ? leftH2.style.transform = `translateY(${Math.min((scrollY - (rightH2.parentElement.getBoundingClientRect().top + 550)) / 5 - 10, 40)}px) rotateY(-45deg) scale(${Math.max(-(scrollY - (rightH2.parentElement.getBoundingClientRect().top + 550)) / 200 + 1.7, 0)})` : '';
	scrollY > rightH2.parentElement.getBoundingClientRect().top + 550 ? rightH2.style.transform = `translateY(${Math.min((scrollY - (rightH2.parentElement.getBoundingClientRect().top + 550)) / 5 + 5, 40)}px) rotateY(45deg) scale(${Math.max(-(scrollY - (rightH2.parentElement.getBoundingClientRect().top + 550)) / 200 + 1.3, 0)})` : '';
	scrollY > rightH2.parentElement.getBoundingClientRect().top + 750 && scrollY < rightH2.parentElement.getBoundingClientRect().top + 1e3 ? (specs[0].style.right = scrollY - rightH2.parentElement.getBoundingClientRect().top - 650 + 'px', specs[1].style.left = scrollY - rightH2.parentElement.getBoundingClientRect().top - 650 + 'px') : '';
	scrollY >= rightH2.parentElement.getBoundingClientRect().top + 1e3 ? (specs[0].style.right = Math.max(-scrollY + rightH2.parentElement.getBoundingClientRect().top + 970 + 380, 1e2) + 'px', specs[1].style.left = Math.max(-scrollY + rightH2.parentElement.getBoundingClientRect().top + 970 + 380, 1e2) + 'px', specs[0].nextElementSibling.style.translate = (-scrollY + rightH2.parentElement.getBoundingClientRect().top + 1e3) / 1.3 + 'px', specs[1].nextElementSibling.style.translate = (scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 1.3 + 'px', scrollY >= rightH2.parentElement.getBoundingClientRect().top + 1130 ? (specs[0].style.display = 'none', specs[1].style.display = 'none') : (specs[0].style.display = null, specs[1].style.display = null), battery.style.opacity = (scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 2e2, battery.style.scale = Math.min((scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 5e2, 1), batteryWidth = Math.min((scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 7, 1e2), battery.firstElementChild.firstElementChild.style.width = batteryWidth + '%', battery.style.transform = `rotateY(${Math.max(-(scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 17, -42)}deg) rotateX(${Math.min((scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 15, 22)}deg) rotate(${Math.max(-(scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 40, -18.5)}deg)`, batteryWidth == 1e2 ? battery.style.transform = `translateY(${-(scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) + 700}px) rotateY(${(scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 10 - 111}deg) rotateX(${-(scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 10 + 92}deg) rotate(${(scrollY - rightH2.parentElement.getBoundingClientRect().top - 1e3) / 20 - 52}deg)` : '') : (battery.style.opacity = null, battery.style.scale = null, battery.firstElementChild.firstElementChild.style.width = null, battery.style.transform = null);
	scrollY >= photos.offsetTop - innerHeight / 1.2 ? (photos.firstElementChild.style.transform = `rotateY(${Math.max(-(scrollY - (photos.offsetTop - innerHeight / 1.2)) / 20 + 15, 0)}deg)`, photos.lastElementChild.style.translate = `20% ${Math.max(-(scrollY - (photos.offsetTop - innerHeight / 1.2)) / 2 + 300, 0)}px`) : (photos.firstElementChild.style.transform = null, photos.lastElementChild.style.translate = null);
	wonderfullScale = Math.min((scrollY - (wonderfull.offsetTop - innerHeight)) / 250 + 1, 2.3);
	scrollY >= wonderfull.offsetTop - innerHeight && wonderfullScale < 2.3 ? (wonderfull.firstElementChild.firstElementChild.children[1].style.transform = `rotateX(${Math.min((scrollY - (wonderfull.offsetTop - innerHeight)) / 3 - 150, -40)}deg)`, wonderfull.firstElementChild.firstElementChild.children[1].style.scale = Math.min((scrollY - (wonderfull.offsetTop - innerHeight)) / 250 + 1, 2.3), wonderfull.firstElementChild.firstElementChild.children[1].style.translate = `0 ${(scrollY - (wonderfull.offsetTop - innerHeight)) / 5}px`) : '';
	wonderfullScale >= 2.3 ? (wonderfull.firstElementChild.firstElementChild.children[1].style.transform = `rotateX(${Math.min((scrollY - (wonderfull.offsetTop - innerHeight)) / 3 - 150, 0)}deg)`, wonderfull.firstElementChild.firstElementChild.children[1].style.scale = Math.max(-(scrollY - (wonderfull.offsetTop - innerHeight)) / 2e2 + 3.92, 1), wonderfull.firstElementChild.firstElementChild.firstElementChild.style.opacity = (scrollY - (wonderfull.offsetTop - innerHeight) - 344) / 3e2, wonderfull.firstElementChild.firstElementChild.children[1].style.translate = `0 ${Math.max(-(scrollY - (wonderfull.offsetTop - innerHeight)) / 5 + 130, -10)}px`) : '';
	wonderfullScale > 1 ? wonderPhones.forEach((item, index) => item.style.translate = `0 ${Math.max(-(scrollY - (wonderfull.offsetTop - 300)) / wonderData2[index] + wonderData[index], 0)}vh`) : '';
	iphoneColorItems.forEach((item, index) => scrollY >= item.parentElement.offsetTop - innerHeight / 2 ? (item.style.translate = `0 ${Math.max(-(scrollY - (item.parentElement.offsetTop - innerHeight / 2)) / 1.3 + 1e2 * (index + .5), 0)}px`, item.style.opacity = Math.min((scrollY - (item.parentElement.offsetTop - innerHeight / 2)) / 1e2 + .8 - (index * .8), 1)) : item.style.translate = null);
	homeSlideText.forEach((item, index) => scrollY >= item.parentElement.parentElement.parentElement.parentElement.offsetTop - innerHeight / 2 + index * 1e2 ? item.style = 'opacity: 1; transform: none;' : item.style = null);
	scrollY >= homeSlideDescr.parentElement.parentElement.parentElement.parentElement.offsetTop - innerHeight / 2 + 4 * 1e2 ? homeSlideDescr.style = 'opacity: 1; transform: none;' : homeSlideDescr.style = null;
	scrollY >= iphoneLock.parentElement.parentElement.offsetTop - iphoneLock.parentElement.parentElement.parentElement.offsetHeight / 1.9 ? iphoneLock.style.animation = 'lock 1.5s steps(11) forwards' : scrollY < iphoneLock.parentElement.parentElement.offsetTop - innerHeight ? iphoneLock.style.animation = '' : '';
	scrollY >= iphoneLock2.parentElement.parentElement.offsetTop - iphoneLock2.parentElement.parentElement.parentElement.offsetHeight / 1.9 ? iphoneLock2.style.animation = 'lock 1.5s steps(11) forwards' : scrollY < iphoneLock2.parentElement.parentElement.offsetTop - innerHeight ? iphoneLock2.style.animation = '' : '';
	scrollY >= calls.parentElement.offsetTop - innerHeight / 2 ? (calls.style.opacity = Math.min((scrollY - (calls.parentElement.offsetTop - innerHeight / 2)) / 3e2, 1), calls.style.translate = `0 ${-(scrollY - (calls.parentElement.offsetTop - innerHeight / 2)) / 3 + 1e2}px`) : '';
	scrollY >= gridInfo.parentElement.parentElement.offsetTop - fixedMenu.lastElementChild.offsetHeight + innerHeight / 4 ? (gridInfo.style = 'opacity: 1; translate: 0;', gridInfoMore.style.backgroundPositionX = Math.max(-(scrollY - (gridInfo.parentElement.parentElement.offsetTop - fixedMenu.lastElementChild.offsetHeight + innerHeight / 4)) + 3e2, 0) + '%', gridInfoMore.nextElementSibling.style.translate = Math.min((scrollY - (gridInfo.parentElement.parentElement.offsetTop - fixedMenu.lastElementChild.offsetHeight + innerHeight / 4)) / 10 - 25, 0) + 'vw', gridInfoMore.nextElementSibling.firstElementChild.style.rotate = Math.min((scrollY - (gridInfo.parentElement.parentElement.offsetTop - fixedMenu.lastElementChild.offsetHeight + innerHeight / 4)) / 1.5, 180) + 'deg', gridInfoMore.nextElementSibling.firstElementChild.style.rotate == '180deg' ? (gridInfoMore.parentElement.onmouseover = () => gridInfoMore.parentElement.style.scale = 1.1, gridInfoMore.parentElement.onmouseleave = () => gridInfoMore.parentElement.style.scale = null) : (gridInfoMore.parentElement.onmouseover = null, gridInfoMore.parentElement.onmouseleave = null, gridInfoMore.parentElement.style.scale = null)) : (gridInfo.style = null, gridInfoMore.style = null, gridInfoMore.nextElementSibling.style = null, gridInfoMore.nextElementSibling.firstElementChild.style = null);
	scrollY >= power.offsetTop - innerHeight / 2 ? power.children[0].style.translate = Math.min((scrollY - (power.offsetTop - innerHeight / 2)) / 2 - 150, 0) + 'px' : power.children[0].style.translate = null;
	scrollY >= power.offsetTop - innerHeight / 2.5 ? power.children[1].style.backgroundImage = `linear-gradient(to right, #00D959 ${Math.min((scrollY - (power.offsetTop - innerHeight / 2.5)) / 4.5, 1e2)}%, #1D1D1F 0)` : power.children[1].style.backgroundImage = null;
	scrollY >= power.offsetTop ? (power.children[2].lastElementChild.firstElementChild.style.background = `linear-gradient(to right, #00D959 ${Math.min((scrollY - (power.offsetTop + 5)) / 2, 1e2)}%, #1D1D1F 0)`, power.children[2].lastElementChild.firstElementChild.firstElementChild.style.background = `linear-gradient(to right, #00D959 ${Math.min((scrollY - (power.offsetTop + 16)) / 1.8, 1e2)}%, #fff 0)`, power.children[2].lastElementChild.style.setProperty('--lin', Math.min((scrollY - (power.offsetTop + power.children[2].lastElementChild.firstElementChild.offsetWidth / 1.8)) * 2, 1e2) + '%'), power.children[2].firstElementChild.style.opacity = Math.min((scrollY - power.offsetTop) / 1e2, 1)) : (power.children[2].lastElementChild.firstElementChild.style.background = null, power.children[2].lastElementChild.firstElementChild.firstElementChild.style.background = null, power.children[2].lastElementChild.style.setProperty('--lin', 0), power.children[2].firstElementChild.style.translate = null);
	scrollY >= power.offsetTop + innerHeight / 2.7 ? (power.children[3].style.opacity = Math.min((scrollY - (power.offsetTop + innerHeight / 2.7)) / 1e2, 1), power.children[3].style.translate = `0 ${Math.max(-(scrollY - (power.offsetTop + innerHeight)) / 2 - 150, 0)}px`) : power.children[3].style = null;
	powerItem.forEach((item, index) => scrollY >= item.parentElement.parentElement.offsetTop + innerHeight / 1.4 + 60 * index ? (item.style.translate = 0, item.style.opacity = 1) : item.style = null);
	XDRdisplayName.forEach((item, index) => scrollY >= item.parentElement.offsetTop - innerHeight / 2 + index * 80 ? (item.style.translate = 0, item.style.opacity = 1) : item.style = null);
    scrollY >= XDRpicture.parentElement.offsetTop + innerHeight / 2 ? (XDRpicture.style = `--one: ${(scrollY - (XDRpicture.parentElement.offsetTop + innerHeight / 2)) / 10 - 20}%; --two: ${(scrollY - (XDRpicture.parentElement.offsetTop + innerHeight / 2)) / 10 + 20}%;`, XDRtechnology[3].firstElementChild.style.rotate = (scrollY - (XDRpicture.parentElement.offsetTop + innerHeight / 2)) / 2 + 'deg') : XDRpicture.style = null;
    XDRtechnology.forEach((item, index) => scrollY > XDRpicture.parentElement.offsetTop + innerWidth / 1.2 + index * 1e2 ? (item.style.translate = 0, item.style.opacity = 1) : item.style = null);
    scrollY >= packed.parentElement.offsetTop ? packed.style.translate = `-75% ${Math.max(-(scrollY - packed.parentElement.offsetTop) / 10 + 50, 0)}%` : packed.style.translate = null;
    scrollY >= epic[0].parentElement.parentElement.parentElement.offsetTop - innerHeight / 2 ? (epic[0].parentElement.style.animation = 'textSlider 6s forwards', epic[0].style.animation = 'textSliderBlur 1s forwards, textSliderOpacity 1s 1.3s forwards', epic[1].style = 'animation: textSliderOpacity2 2.5s 1.5s forwards; --anim: textSliderColor 1s 1.8s forwards;', epic[2].style.animation = 'textSliderScale .7s 3s forwards, textSliderOpacity3 2.5s 3s forwards') : scrollY < epic[0].parentElement.parentElement.parentElement.offsetTop - innerHeight ? (epic[0].parentElement.style = null, epic.forEach(item => item.style = null)) : '';
	scrollY >= epicImg[0].parentElement.parentElement.offsetTop ? (epicImg[0].style.rotate = Math.min((scrollY - epicImg[0].parentElement.parentElement.offsetTop) / 10 - 15, 0) + 'deg', epicImg[1].style.rotate = Math.max(-(scrollY - epicImg[0].parentElement.parentElement.offsetTop) / 10 + 15, 0) + 'deg') : '';
	epicInfo.forEach((item, index) => scrollY >= item.parentElement.offsetTop - innerHeight / 1.7 + index * 70 ? (item.style.translate = 0, item.style.opacity = 1) : item.style = null);
	scrollY >= epicInfo[0].parentElement.offsetTop - innerHeight / 1.5 ? (epicMore.style.backgroundPositionX = Math.max(-(scrollY - (epicInfo[0].parentElement.offsetTop - innerHeight / 1.5)) + 5e2, 0) + '%', epicMore.nextElementSibling.style.translate = Math.min((scrollY - (epicInfo[0].parentElement.offsetTop - innerHeight / 1.5)) / 13 - 35, 0) + 'vw', epicMore.nextElementSibling.style.rotate = Math.max(-(scrollY - (epicInfo[0].parentElement.offsetTop - innerHeight / 1.5)) / 2.5, -180) + 'deg', epicMore.nextElementSibling.style.rotate == '-180deg' ? (epicMore.parentElement.onmouseover = () => epicMore.parentElement.style.scale = 1.1, epicMore.parentElement.onmouseleave = () => epicMore.parentElement.style.scale = null) : (epicMore.parentElement.onmouseover = null, epicMore.parentElement.style.scale = null)) : '';
	scrollY >= threeAr.parentElement.parentElement.parentElement.offsetTop + innerHeight / 1.5 ? (threeAr.style.backgroundPositionX = Math.max(-(scrollY - (threeAr.parentElement.parentElement.parentElement.offsetTop + innerHeight / 1.5)) + 450, 0) + '%', threeAr.nextElementSibling.style.translate = Math.min((scrollY - (threeAr.parentElement.parentElement.parentElement.offsetTop + innerHeight / 1.5)) / 12 - 35, 0) + 'vw', threeAr.nextElementSibling.style.rotate = Math.min((scrollY - (threeAr.parentElement.parentElement.parentElement.offsetTop + innerHeight / 1.5)) / 1.7 - 60, 180) + 'deg', threeAr.nextElementSibling.style.rotate == '180deg' ? (threeAr.parentElement.onmouseover = () => threeAr.parentElement.style.scale = 1.1, threeAr.parentElement.onmouseleave = () => threeAr.parentElement.style.scale = null) : (threeAr.parentElement.onmouseover = null, threeAr.parentElement.style.scale = null)) : '';
	scrollY >= steady[0].parentElement.parentElement.offsetTop - innerHeight / 1.2 ? steady.forEach(item => item.style.animation = 'letterDance 1s cubic-bezier(0.5,0,0.5,1) calc(var(--i) * .07s) 3') : scrollY < steady[0].parentElement.parentElement.offsetTop - innerHeight ? steady.forEach(item => item.style.animation = null) : '';
	scrollY >= steadyHand.parentElement.offsetTop && scrollY < steadyHand.parentElement.offsetTop + innerHeight / 3 ? (steadyHand.firstElementChild.play(), steadyPlayPause.lastElementChild.className = 'btnC pause', steadyPlayPause.firstElementChild.innerText = 'Play Action-Mode Video', playerBool = true) : playerBool ? (steadyHand.firstElementChild.pause(), steadyPlayPause.lastElementChild.className = 'btnC play', steadyPlayPause.firstElementChild.innerText = 'Pause Action-Mode Video') : '';
	scrollY >= steadyHand.parentElement.offsetTop + innerHeight / 2.5 ? steadyHand.nextElementSibling.nextElementSibling.style = 'opacity: 1; translate: -50%;' : steadyHand.nextElementSibling.nextElementSibling.style = null;
	scrollY >= movie.offsetTop - innerHeight / 2 ? movie.querySelectorAll('.mov .hollywood .round').forEach(item => (item.style.animation = 'hollywood 4s', Array.from(item.children).forEach(item => item.style.animation = 'hollywoodLight 3s infinite'))) : movie.querySelectorAll('.mov .hollywood .round').forEach(item => (item.style.animation = null, Array.from(item.children).forEach(item => item.style.animation = null)));
	scrollY >= natureBlock.offsetTop - innerHeight ? (natureBlock.style.width = Math.min((scrollY - (natureBlock.offsetTop - innerHeight)) / 20 + 80, 100) + '%', movBool ? (natureBlock.firstElementChild.play(), natureBlock.lastElementChild.innerHTML = `<svg viewBox="0 0 20 20" fill="#1D1D1F"><g><rect class="cls-1" x="3.75" y="3" width="4.5" height="14" rx="1.5"/><rect class="cls-1" x="11.75" y="3" width="4.5" height="14" rx="1.5"/></g></svg>`) : '') : (natureBlock.style.width = null, natureBlock.firstElementChild.pause(), movBool = true);
	natureRight.forEach((item, index) => scrollY > item.parentElement.offsetTop - innerHeight / 1.3 + index * 50 ? item.style = 'opacity: 1; translate: 0;' : item.style = null);
	scrollY >= selfies.offsetTop - innerHeight / 1.5 ? (selfies.firstElementChild.style.animation = 'selfies .5s', selfies.firstElementChild.style.rotate = (scrollY - (selfies.offsetTop - innerHeight / 1.5)) / 3 + 'deg', selfies.children[1].style.transform = 'perspective(850px)') : (selfies.firstElementChild.style.animation = null, selfies.children[1].style.transform = null, selfies.firstElementChild.style.rotate = null);
	scrollY >= selfies.children[2].children[1].offsetTop - innerHeight / 1.2 ? selfies.children[2].children[1].currentTime = (scrollY - (selfies.children[2].children[1].offsetTop - innerHeight / 1.2)) / 1e3 : selfies.children[2].children[1].currentTime = 0;
	snapInfo.forEach((item, index) => scrollY > item.parentElement.offsetTop - innerHeight / 2 + index * 150 ? item.style = 'opacity: 1; translate: 0;' : item.style = null);
};
scroll2.onscroll = () => (fixedSec.style.translate = -scroll2.scrollTop * 2e2 / scroll2.scrollHeight + 'vw', fixedProgress.style.background = `linear-gradient(to right, #000 ${scroll2.scrollTop * 1e2 / (scroll2.scrollHeight - scroll2.clientHeight)}%, #D2D2D7 ${scroll2.scrollTop * 1e2 / (scroll2.scrollHeight - scroll2.clientHeight)}%)`);
scroll3.onscroll = () => (fixedSec2.style.translate = -scroll3.scrollTop * 380 / scroll3.scrollHeight + 'vw', fixedProgress2.style.background = `linear-gradient(to right, #000 ${scroll3.scrollTop * 1e2 / (scroll3.scrollHeight - scroll3.clientHeight)}%, #D2D2D7 ${scroll3.scrollTop * 1e2 / (scroll3.scrollHeight - scroll3.clientHeight)}%)`);
let fixedTime;
let fixedTime2;
gridInfoMore.parentElement.onclick = () => {
	scroll2.style.left = 0;
	fixedSec.parentElement.style.left = 0;
	gridSlider.style.translate = '-100vw';
	document.body.style.overflow = 'hidden';
	clearTimeout(fixedTime);
};
fixedClose.onclick = () => {
	scroll2.style.left = null;
	fixedSec.parentElement.style.left = null;
	gridSlider.style.translate = null;
	document.body.style.overflow = null;
	fixedTime = setTimeout(() => scroll2.scrollTop = 0, 11e2);
};
epicMore.parentElement.onclick = () => {
	fixedSec2.parentElement.style.left = 0;
	scroll3.style.left = 0;
	epicImg[0].parentElement.parentElement.style.translate = '-100vw';
	document.body.style.overflow = 'hidden';
	clearTimeout(fixedTime2);
};
fixedProgress2.previousElementSibling.onclick = () => {
	fixedSec2.parentElement.style.left = null;
	scroll3.style.left = null;
	epicImg[0].parentElement.parentElement.style.translate = null;
	document.body.style.overflow = null;
	fixedTime2 = setTimeout(() => scroll3.scrollTop = 0, 11e2);
};
let repRot = 0;
let playerBool = true;
steadyPlayPause.onclick = () => {
	repRot += 360;
	playerBool = false;
	steadyPlayPause.firstElementChild.style.translate = '-3vw';
	steadyPlayPause.lastElementChild.style.transform = `rotate(${repRot}deg)`;
	if (steadyHand.firstElementChild.paused) {
		steadyHand.firstElementChild.play();
		steadyPlayPause.lastElementChild.className = 'btnC pause';
		setTimeout(() => {
			steadyPlayPause.firstElementChild.innerText = 'Play Action-Mode Video';
			steadyPlayPause.firstElementChild.style.translate = null;
		}, 130);
	} else {
		steadyHand.firstElementChild.pause();
		steadyPlayPause.lastElementChild.className = 'btnC play';
		setTimeout(() => {
			steadyPlayPause.firstElementChild.innerText = 'Pause Action-Mode Video';
			steadyPlayPause.firstElementChild.style.translate = null;
		}, 130);
	}
};
steadyHand.firstElementChild.onended = () => {
	repRot += 360;
	steadyPlayPause.firstElementChild.style.translate = '-3vw';
	steadyPlayPause.lastElementChild.style.transform = `rotate(${repRot}deg)`;
	steadyPlayPause.lastElementChild.className = 'btnC Replay';
	setTimeout(() => {
		steadyPlayPause.firstElementChild.innerText = steadyPlayPause.lastElementChild.classList[1] + ' Action-Mode Video';
		steadyPlayPause.firstElementChild.style.translate = null;
	}, 130);
};
let svgRot = 0;
let movBool = true;
natureBlock.lastElementChild.onclick = () => {
	svgRot += 360;
	natureBlock.lastElementChild.style.rotate = svgRot + 'deg';
	if (natureBlock.firstElementChild.paused) {
		natureBlock.firstElementChild.play();
		natureBlock.lastElementChild.innerHTML = `
			<svg viewBox="0 0 20 20" fill="#1D1D1F">
				<g>
					<rect class="cls-1" x="3.75" y="3" width="4.5" height="14" rx="1.5"/>
					<rect class="cls-1" x="11.75" y="3" width="4.5" height="14" rx="1.5"/>
				</g>
			</svg>
		`;
	} else {
		natureBlock.firstElementChild.pause();
		natureBlock.lastElementChild.innerHTML = `
			<svg viewBox="0 0 20 20" fill="#1D1D1F">
				<path d="M5 15.25V4.77a1.44 1.44 0 011.44-1.62 1.86 1.86 0 011.11.31l8.53 5c.76.44 1.17.8 1.17 1.51s-.41 1.07-1.17 1.51l-8.53 5a1.86 1.86 0 01-1.11.31A1.42 1.42 0 015 15.25z"/>
			</svg>
		`;
		movBool = false;
	}
};
natureBlock.firstElementChild.onended = () => {
	svgRot += 360;
	natureBlock.lastElementChild.style.rotate = svgRot + 'deg';
	natureBlock.lastElementChild.innerHTML = `
		<svg viewBox="0 0 20 20" fill="#1D1D1F">
			<path d="M16.75 9.4a1.5 1.5 0 00-1.5 1.5A4.88 4.88 0 1110.38 6h.2L9.31 7.32a1.5 1.5 0 001.06 2.56 1.45 1.45 0 001.06-.44L15 5.88a1.52 1.52 0 00.44-1.06A1.54 1.54 0 0015 3.75L11.43.19a1.49 1.49 0 00-2.12 0 1.51 1.51 0 000 2.12l.75.75a7.85 7.85 0 108.19 7.84 1.5 1.5 0 00-1.5-1.5z"/>
		</svg>
	`;
};
document.oncontextmenu = () => false;
document.addEventListener('keydown', e => e.ctrlKey ? e.preventDefault() : e.which == 123 ? e.preventDefault() : '');
console['log']('%cBy The King Of CSS3', 'color: #000000; font: bold 2rem sans-serif; text-shadow: 0 3px 3px #fff, -4px 7px 7px #000; padding: 20px;');