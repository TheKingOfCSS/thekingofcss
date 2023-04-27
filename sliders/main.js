const AuthorAndCreator = document.querySelector('.AuthorAndCreator');
const pack = document.querySelectorAll('.pack');
const version = document.querySelectorAll('.AuthorAndCreator .collection .version .display');
closePack.onclick = () => (pack.forEach(item => item.style.top = '-150%'), closePack.style.top = '-100%', document.body.classList.remove('scroll'), current25Bool = false, clearInterval(vers44Start), vers51Round.classList.remove('active'));
let vers44Start;
version.forEach((item, index) => {
	const number = document['createElement']('div');
	item['append'](number);
	number['innerText'] = index+1;
	number['style'] = 'position: absolute; top: 0; left: 0; font-size: 18px; clip-path: polygon(0 0, 100% 0, 0 100%); background: #049200; padding: 5px 35px 20px 10px; line-height: 1;';
	item.onclick = () => {
		document.body.classList.add('scroll');
		closePack.style.top = 0;
		pack[index].style.top = 0;
		if (index == 25) {
			current25Bool = true;	
		} else if (index == 29) {
			setTimeout(() => window.location.replace('pizzaslide/pizza.html'), 1000);
		} else if (index == 30) {
			setTimeout(() => window.location.replace('clothingslider/clothing.html'), 1000);
		} else if (index == 31) {
			setTimeout(() => window.location.replace('perfectlist/car.html'), 1000);
		} else if (index == 35) {
			setTimeout(() => window.location.replace('albom/albom.html'), 1000);
		} else if (index == 36) {
			setTimeout(() => window.location.replace('opera/opera.html'), 1000);
		} else if (index == 39) {
			setTimeout(() => window.location.replace('home/home.html'), 1000);
		} else if (index == 40) {
			setTimeout(() => window.location.replace('eyeslider/eye.html'), 1000);
		} else if (index == 44) {
			vers44Start = setInterval(() => {
				vers44Img.forEach((item, index) => (item.style = null, item.style.setProperty('--i', vers44N[index])));
				let rand = Math.floor(Math.random() * vers44Img.length);
				while(rand == vers44Cur) rand = Math.floor(Math.random() * vers44Img.length);
				vers44Cur = rand;
				vers44Img[rand].style = `left: 0; top: 100%; width: 100%; height: ${vers44.offsetHeight - vers44.firstElementChild.offsetHeight}px; border-radius: 0; border: 0;`;
			}, 15e2);
		} else if (index == 46) {
			setTimeout(() => window.location.replace('newscrollslide/deep.html'), 1000);
		} else if (index == 51) {
			vers51Round.classList.add('active');
		} else if (index == 54) {
			setTimeout(() => window.location.replace('nintendoSlider/nintendo.html'), 1000);
		} else if (index == 55) {
			setTimeout(() => window.location.replace('nintendoSlider2/nintendo.html'), 1000);
		} else if (index == 56) {
			setTimeout(() => window.location.replace('layerSlider/layer.html'), 1000);
		} else if (index == 57) {
			setTimeout(() => window.location.replace('interestingSlider/interest.html'), 1000);
		} else if (index == 58) {
			setTimeout(() => window.location.replace('swipeSlider/swipe.html'), 1000);
		} else if (index == 59) {
			setTimeout(() => window.location.replace('interestingSlider2/interesting2.html'), 1000);
		} else if (index == 60) {
			setTimeout(() => window.location.replace('interestingSlider3/interest.html'), 1000);
		} else if (index == 61) {
			setTimeout(() => window.location.replace('deepParallax/deep.html'), 1000);
		} else if (index == 62) {
			setTimeout(() => window.location.replace('interestingSlider4/interest.html'), 1000);
		} else if (index == 63) {
			setTimeout(() => window.location.replace('interestingSlider5/interest.html'), 1000);
		} else if (index == 64) {
			setTimeout(() => window.location.replace('repeatItemSlider/repeatBrilliantCode.html'), 1000);
		} else if (index == 65) {
			setTimeout(() => window.location.replace('interestingSlider6/interest.html'), 1000);
		} else if (index == 66) {
			setTimeout(() => window.location.replace('mirrorSlider/mirror.html'), 1000);
		} else if (index == 67) {
			setTimeout(() => window.location.replace('interestingSlider7/interest.html'), 1000);
		} else if (index == 68) {
			setTimeout(() => window.location.replace('clockSlider/clock.html'), 1000);
		} else if (index == 69) {
			setTimeout(() => window.location.replace('tapeSlider/tape.html'), 1000);
		} else if (index == 70) {
			setTimeout(() => window.location.replace('rockingSlider/rocking.html'), 1000);
		} else if (index == 71) {
			setTimeout(() => window.location.replace('zoomSlider/zoom.html'), 1000);
		} else if (index == 72) {
			setTimeout(() => window.location.replace('autoScrollSlider/scroll.html'), 1000);
		} else if (index == 73) {
			setTimeout(() => window.location.replace('interestingSlider8/interest.html'), 1000);
		} else if (index == 74) {
			setTimeout(() => window.location.replace('megaNoteBook/notebook.html'), 1000);
		} else if (index == 75) {
			setTimeout(() => window.location.replace('timeSlider/time.html'), 1000);
		} else if (index == 76) {
			setTimeout(() => window.location.replace('interestingSlider9/interest.html'), 1000);
		} else if (index == 77) {
			setTimeout(() => window.location.replace('interestingSlider10/interest.html'), 1000);
		} else if (index == 78) {
			setTimeout(() => window.location.replace('interestingSlider11/interest.html'), 1000);
		} else if (index == 79) {
			setTimeout(() => window.location.replace('rangeSlider/range.html'), 1000);
		} else if (index == 42) {
			setTimeout(() => window.location.replace('megaCubeCar/mega.html'), 1000);
		} else if (index == 5) {
			setTimeout(() => window.location.replace('parallax/parallax.html'), 1000);
		} else if (index == 80) {
			setTimeout(() => window.location.replace('legendarnyOwlSlider/owlSlider.html'), 1000);
		} else if (index == 81) {
			setTimeout(() => window.location.replace('ellipseSlider/ellipse.html'), 1000);
		} else if (index == 82) {
			setTimeout(() => window.location.replace('curtainsSlider/curtains.html'), 1000);
		} else if (index == 83) {
			setTimeout(() => window.location.replace('talkerSlider/talker.html'), 1000);
		} else if (index == 84) {
			setTimeout(() => window.location.replace('dragSlider/drag.html'), 1000);
		} else if (index == 85) {
			setTimeout(() => window.location.replace('interestingSlider12/interest.html'), 1000);
		} else if (index == 86) {
			setTimeout(() => window.location.replace('stickySlider/sticky.html'), 1000);
		} else if (index == 87) {
			setTimeout(() => window.location.replace('glissEffectSlider/index.html'), 1000);
		} else if (index == 88) {
			setTimeout(() => window.location.replace('clickListSlider/index.html'), 1000);
		} else if (index == 89) {
			setTimeout(() => window.location.replace('interestingSlider13/interest.html'), 1000);
		} else if (index == 90) {
			setTimeout(() => window.location.replace('iSlider2/interest.html'), 1000);
		}
	};
});
const vers1 = document.querySelector('.version2');
const vers1Btn = document.querySelectorAll('.version2 button');
const vers1Radio = document.querySelectorAll('.version2 .radio input');
const vers1Image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.webp', 'img/5.jpg'];
let current1 = 0;
vers1Btn[1].onclick = () => {
	current1++;
	current1 == vers1Image.length ? current1 = 0 : '';
	vers1.style.backgroundImage = `url(${vers1Image[current1]})`;
	vers1Radio[current1].checked = true;
};
vers1Btn[0].onclick = () => {
	current1--;
	current1 < 0 ? current1 = vers1Image.length-1 : '';
	vers1.style.backgroundImage = `url(${vers1Image[current1]})`;
	vers1Radio[current1].checked = true;
};
vers1Radio.forEach((item, index) => {
	item.onchange = () => {
		current1 = index;
		vers1.style.backgroundImage = `url(${vers1Image[current1]})`;
	};
});	
const vers2Btn = document.querySelectorAll('.version3 button');
const vers2carousel = document.querySelector('.version3 .carousel');
const vers2Inp = document.querySelector('.version3 input');
let current2 = 0;
let current2View = 0;
let current2ViewZ = 0;
vers2Btn[1].onclick = () => {
	current2 += 45;
	vers2carousel.style.transform = `translateZ(${current2ViewZ}px) rotateX(${current2View}deg) rotateY(${current2}deg)`;
};
vers2Btn[0].onclick = () => {
	current2 -= 45;
	vers2carousel.style.transform = `translateZ(${current2ViewZ}px) rotateX(${current2View}deg) rotateY(${current2}deg)`;
};
vers2Inp.oninput = () => {
	current2View = -vers2Inp.value;
	current2ViewZ = -vers2Inp.value * 8;
	vers2carousel.style.transform = `translateZ(${current2ViewZ}px) rotateX(${current2View}deg) rotateY(${current2}deg)`;
};
const vers3Slide = document.querySelector('.version4 .slide');
const vers3Item = document.querySelectorAll('.version4 .slide .item');
const vers3Btn = document.querySelectorAll('.version4 button');
const vers3Inp = document.querySelectorAll('.version4 .radio input');
let current3 = 0;
vers3Item.forEach((item, index) => {
	item.style.backgroundImage = `url(${vers1Image[index]})`;
	vers3Inp[index].onchange = () => {
		current3 = index * -100;
		vers3Slide.style.left = current3 + '%';
	};
});
vers3Btn[1].onclick = () => {
	current3 -= 100;
	current3 / -100 == vers1Image.length ? current3 = 0 : '';
	vers3Slide.style.left = current3 + '%';
	vers3Inp[current3 / -100].checked = true;
};
vers3Btn[0].onclick = () => {
	current3 += 100;
	current3 > 0 ? current3 = (vers1Image.length-1) * -100 : '';
	vers3Slide.style.left = current3 + '%';
	vers3Inp[current3 / -100].checked = true;
};
const vers4Slie = document.querySelector('.version5 .slide');
const vers4Btn = document.querySelectorAll('.version5 button');
const vers4Inp = document.querySelectorAll('.version5 .radio input');
let current4 = -100;
let current4R = 0;
let boolVers4 = true;
vers4Btn.forEach((item, index) => {
	item.onclick = () => {
		if (boolVers4) {
			boolVers4 = false;
			if (index == 0) {
				current4 += 100;
				current4R--;
				current4R < 0 ? current4R = vers1Image.length-1 : '';
				if (current4 > 0) {
					vers4Slie.style.transition = 'none';
					current4 = -500;
					setTimeout(() => {
						current4 = -400;
						vers4Slie.style.transition = '.4s';
						vers4Slie.style.left = current4 + '%';
					}, 20);
				}
			} else {
				current4 -= 100;
				current4R++;
				current4R == vers1Image.length ? current4R = 0 : '';
				if (current4 < -500) {
					vers4Slie.style.transition = 'none';
					current4 = 0;
					setTimeout(() => {
						current4 = -100;
						vers4Slie.style.transition = '.4s';
						vers4Slie.style.left = current4 + '%';
					}, 20);
				}
			}
			vers4Slie.style.left = current4 + '%';
			setTimeout(() => boolVers4 = true, 400);
			vers4Inp[current4R].checked = true;
		}
	};
});
vers4Inp.forEach((item, index) => {
	item.onchange = () => {
		current4 = (index+1) * -100;
		current4R = index;
		vers4Slie.style.left = current4 + '%';
	};
});
const vers6Btn = document.querySelectorAll('.version7 .btn');
const vers6Item = document.querySelectorAll('.version7 .item');
let current6 = 0;
vers6Btn[1].onmouseover = () => {
	current6++;
	current6 == vers1Image.length ? current6 = 0 : '';
	vers6Item.forEach(item => item.style.backgroundImage = `url(${vers1Image[current6]})`);
};
vers6Btn[0].onmouseover = () => {
	current6--;
	current6 < 0 ? current6 = vers1Image.length-1 : '';
	vers6Item.forEach(item => item.style.backgroundImage = `url(${vers1Image[current6]})`);
};
const vers7 = document.querySelector('.version8');
const vers7Item = document.querySelectorAll('.version8 .item');
const vers7ItemTop = document.querySelectorAll('.version8 .item.top');
const vers7ItemBottom = document.querySelectorAll('.version8 .item.bottom');
const vers7Btn = document.querySelectorAll('.version8 button');
let current7 = 0;
let current7Rot = 0;
const vers8 = document.querySelector('.version9');
const vers8Item = document.querySelectorAll('.version9 .item');
const vers8ItemTop = document.querySelectorAll('.version9 .item.top');
const vers8ItemBottom = document.querySelectorAll('.version9 .item.bottom');
const vers8Btn = document.querySelectorAll('.version9 button');
const vers8Inp = document.querySelectorAll('.version9 .radio input');
let current8 = 0;
let current8Rot = 0;
(function vers7Size() {
	vers7ItemTop.forEach((item, index) => {
		item.style.backgroundSize = vers7.offsetWidth + 'px ' + vers7.offsetHeight + 'px';
		item.style.backgroundPosition = -vers7.offsetWidth / vers7ItemTop.length * index + 'px 0';
		
		vers7ItemBottom[index].style.backgroundSize = vers7.offsetWidth + 'px ' + vers7.offsetHeight + 'px';
		
		vers8ItemTop[index].style.backgroundSize = vers8.offsetWidth + 'px ' + vers8.offsetHeight + 'px';
		vers8ItemBottom[index].style.backgroundSize = vers8.offsetWidth + 'px ' + vers8.offsetHeight + 'px';
		vers8ItemTop[index].style.backgroundPosition = -vers8.offsetWidth / vers8ItemTop.length * index + 'px 0';
		
		vers8ItemBottom[index].style.backgroundPosition = -vers8.offsetWidth / vers8ItemTop.length * index + 'px 100%';
		
		vers7ItemBottom[index].style.backgroundPosition = -vers7.offsetWidth / vers7ItemTop.length * index + 'px 100%';
	});
	requestAnimationFrame(vers7Size);
})();
vers7Btn[1].onclick = () => {
	current7++;
	current7Rot += 360;
	current7 == vers1Image.length ? current7 = 0 : '';
	vers7Item.forEach((item, index) => item.style.backgroundImage = `url(${vers1Image[current7]})`);
	vers7ItemTop.forEach((item, index) => {
		item.style.transform = 'rotateX('+ -current7Rot +'deg) rotateY('+ current7Rot +'deg)';
		item.style.transitionDelay = index * .05 + 's';
		vers7ItemBottom[index].style.transform = 'rotateX('+ current7Rot +'deg) rotateY('+ current7Rot +'deg)';
		vers7ItemBottom[index].style.transitionDelay = index * .05 + 's';
	});
};
vers7Btn[0].onclick = () => {
	current7--;
	current7Rot -= 360;
	current7 < 0 ? current7 = vers1Image.length-1 : '';
	vers7Item.forEach((item, index) => item.style.backgroundImage = `url(${vers1Image[current7]})`);
	vers7ItemTop.forEach((item, index) => {
		item.style.transform = 'rotateX('+ -current7Rot +'deg) rotateY('+ current7Rot +'deg)';
		item.style.transitionDelay = (index - 6) * -1 * .05 + 's';
		vers7ItemBottom[index].style.transform = 'rotateX('+ current7Rot +'deg) rotateY('+ current7Rot +'deg)';
		vers7ItemBottom[index].style.transitionDelay = (index - 6) * -1 * .05 + 's';
	});
};
vers8Btn[1].onclick = () => {
	current8++;
	current8Rot += 360;
	current8 == vers1Image.length ? current8 = 0 : '';
	vers8Item.forEach((item, index) => item.style.backgroundImage = `url(${vers1Image[current8]})`);
	vers8Inp[current8].checked = true;
	vers8ItemTop.forEach((item, index) => {
		item.style.transform = 'rotateX('+ current8Rot +'deg) rotateY('+ -current8Rot +'deg)';
		item.style.transitionDelay = index * .05 + 's';
		vers8ItemBottom[index].style.transform = 'rotateX('+ current8Rot +'deg) rotateY('+ current8Rot +'deg)';
		vers8ItemBottom[index].style.transitionDelay = index * .05 + 's';
	});
};
vers8Btn[0].onclick = () => {
	current8--;
	current8Rot -= 360;
	current8 < 0 ? current8 = vers1Image.length-1 : '';
	vers8Item.forEach((item, index) => item.style.backgroundImage = `url(${vers1Image[current8]})`);
	vers8Inp[current8].checked = true;
	vers8ItemTop.forEach((item, index) => {
		item.style.transform = 'rotateX('+ current8Rot +'deg) rotateY('+ -current8Rot +'deg)';
		item.style.transitionDelay = (index - 7) * -1 * .05 + 's';
		vers8ItemBottom[index].style.transform = 'rotateX('+ current8Rot +'deg) rotateY('+ current8Rot +'deg)';
		vers8ItemBottom[index].style.transitionDelay = (index - 7) * -1 * .05 + 's';
	});
};
vers8Inp.forEach((item, index) => {
	item.onchange = () => {
		current8Rot += 360;
		current8 = index;
		vers8Item.forEach((item, index) => item.style.backgroundImage = `url(${vers1Image[current8]})`);
		vers8ItemTop.forEach((item, index) => {
			item.style.transform = 'rotateX('+ current8Rot +'deg) rotateY('+ -current8Rot +'deg)';
			item.style.transitionDelay = index * .05 + 's';
			vers8ItemBottom[index].style.transform = 'rotateX('+ current8Rot +'deg) rotateY('+ current8Rot +'deg)';
			vers8ItemBottom[index].style.transitionDelay = index * .05 + 's';
		});
	};
});
const vers9Vers = document.querySelector('.version10');
const vers9Slide = document.querySelector('.version10 .slide');
const vers9Item = document.querySelectorAll('.version10 .slide .item');
const vers9ItemOver = document.querySelectorAll('.version10 .over');
const vers9Inp = document.querySelectorAll('.version10 .radio input');
vers9Item.forEach((item, index) => {
	item.style.backgroundImage = `url(${vers1Image[index]})`;
	vers9ItemOver[index].style.left = vers9Vers.offsetWidth / vers9ItemOver.length * index + 'px';
	vers9ItemOver[index].onmouseover = () => {
		vers9Slide.style.left = index * -100 + '%';
		vers9Inp[index].checked = true;
	};
	vers9Inp[index].onmouseover = () => {
		vers9Slide.style.left = index * -100 + '%';
		vers9Inp[index].checked = true;
	};
});
const vers10Vers = document.querySelector('.version11');
const vers10Slide = document.querySelector('.version11 .slide');
const vers10ItemOver = document.querySelectorAll('.version11 .slide .over');
const vers10Inp = document.querySelectorAll('.version11 .radio input');
vers10ItemOver.forEach((item, index) => {
	item.style.left = vers10Vers.offsetWidth / vers10ItemOver.length * index + 'px';
	item.onmouseover = () => {
		vers10Slide.style.backgroundImage = `url(${vers1Image[index]})`;
		vers10Inp[index].checked = true;
	};
	vers10Inp[index].onmouseover = () => {
		vers10Slide.style.backgroundImage = `url(${vers1Image[index]})`;
		vers10Inp[index].checked = true;
	};
});
const vers11 = document.querySelector('.version12');
const vers11Slide = document.querySelector('.version12 .slide');
const vers11Btn = document.querySelectorAll('.version12 button');
const vers11Inp = document.querySelectorAll('.version12 .radio input');
let current11 = 0;
let vers11X;
let vers11Bool;
vers11Btn[1].onclick = () => {
	current11 -= 100;
	current11 / -100 == vers1Image.length ? current11 = 0 : '';
	vers11Slide.style.left = current11 + '%';
	vers11Inp[current11 / -100].checked = true;
};
vers11Btn[0].onclick = () => {
	current11 += 100;
	current11 > 0 ? current11 = (vers1Image.length-1) * -100 : '';
	vers11Slide.style.left = current11 + '%';
	vers11Inp[current11 / -100].checked = true;
};
vers11Inp.forEach((item, index) => {
	item.onchange = () => {
		current11 = index * -100;
		vers11Slide.style.left = current11 + '%';
	};
});
vers11Btn[1].onmousedown = e => e.stopPropagation();
vers11Btn[0].onmousedown = e => e.stopPropagation();
vers11.onmousedown = e => {
	vers11X = e.x;
	vers11Bool = true;
};
vers11.onmouseup = () => vers11Bool = false;
vers11.onmouseleave = () => vers11Bool = false;
vers11.onmousemove = e => {
	if (vers11Bool) {
		e.x < vers11X ? current11 -= 100 : e.x > vers11X ? current11 += 100 : '';
		current11 > 0 ? current11 = (vers1Image.length-1) * -100 : '';
		current11 / -100 == vers1Image.length ? current11 = 0 : '';
		vers11Slide.style.left = current11 + '%';
		vers11Bool = false;
		vers11Inp[current11 / -100].checked = true;
	}
};
const vers12 = document.querySelector('.version13');
const vers12Car = document.querySelector('.version13 .carousel');
const vers12Btn = document.querySelectorAll('.version13 button');
let current12 = 0;
vers12.onmousewheel = e => {
	e.deltaY > 0 ? current12 += 45 : current12 -= 45;
	vers12Car.style.transform = `translateZ(-200px) rotateX(${current12}deg)`;
	return false;
};
vers12Btn[1].onclick = () => {
	current12 += 45;
	vers12Car.style.transform = `translateZ(-200px) rotateX(${current12}deg)`;
};
vers12Btn[0].onclick = () => {
	current12 -= 45;
	vers12Car.style.transform = `translateZ(-200px) rotateX(${current12}deg)`;
};
const vers13Btn = document.querySelectorAll('.version14 button');
const vers13CubeB = document.querySelector('.version14 .cube');
const vers13Cube = document.querySelectorAll('.version14 .cube .row');
const vers13Inp = document.querySelector('.version14 input');
let current13 = 0;
vers13Btn[1].onclick = () => {
	current13 += 90;
	vers13Cube.forEach((item, index) => {
		item.style.transform = `rotateY(${current13}deg)`;
		item.style.transitionDelay = index * .2 + 's';
	});
};
vers13Btn[0].onclick = () => {
	current13 -= 90;
	vers13Cube.forEach((item, index) => {
		item.style.transform = `rotateY(${current13}deg)`;
		item.style.transitionDelay = (index-2) * -1 * .2 + 's';
	});
};
vers13Inp.oninput = () => vers13CubeB.style.transform = `rotateY(${vers13Inp.value - 45}deg)`;
const vers14Btn = document.querySelectorAll('.version15 button');
const vers14Item = document.querySelectorAll('.version15 .item');
const vers14Inp = document.querySelectorAll('.version15 .radio input');
let current14 = 0;
vers14Btn.forEach((item, index) => {
	item.onclick = () => {
		index == 1 ? current14++ : current14--;
		current14 == vers1Image.length ? current14 = 0 : '';
		current14 < 0 ? current14 = vers1Image.length-1 : '';
		vers14Item.forEach(item => {
			item.style.transform = `translateZ(-500px) rotateX(360deg) rotateY(720deg)`;
			let r = Math.random() * .5;
			item.style.transitionDelay = r + 's';
		});
		setTimeout(() => {
			vers14Item.forEach(item => {
				item.style.backgroundImage = `url(${vers1Image[current14]})`;
				item.style.transform = 'none';
			});
		}, 1000);
		vers14Inp[current14].checked = true;
	};
});
vers14Inp.forEach((item, index) => {
	item.onchange = () => {
		current14 = index;
		vers14Item.forEach(item => {
			item.style.transform = `translateZ(-500px) rotateX(360deg) rotateY(720deg)`;
			let r = Math.random() * .5;
			item.style.transitionDelay = r + 's';
		});
		setTimeout(() => {
			vers14Item.forEach(item => {
				item.style.backgroundImage = `url(${vers1Image[current14]})`;
				item.style.transform = 'none';
			});
		}, 1000);
	};
});
const vers15Image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.webp', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg'];
const vers15 = document.querySelector('.version16');
const vers15Slide = document.querySelector('.version16 .slide');
const vers15Item = document.querySelectorAll('.version16 .slide .item');
const vers15Inp = document.querySelectorAll('.version16 .radio input');
let current15 = 0;
let vers15X;
let vers15Bool;
vers15Item.forEach((item, index) => {
	item.style.backgroundImage = `url(${vers15Image[index]})`;
	vers15Inp[index].style.backgroundImage = `url(${vers15Image[index]})`;
	vers15Inp[index].onchange = () => {
		current15 = index * -100;
		vers15Slide.style.top = current15 + '%';
	};
});
vers15.onmousedown = e => {
	vers15X = e.y;
	vers15Bool = true;
};
vers15.onmouseup = () => vers15Bool = false;
vers15.onmouseleave = () => vers15Bool = false;
vers15.onmousemove = e => {
	if (vers15Bool) {
		e.y < vers15X ? current15 -= 100 : e.y > vers15X ? current15 += 100 : '';
		current15 > 0 ? current15 = (vers15Image.length-1) * -100 : '';
		current15 / -100 == vers15Image.length ? current15 = 0 : '';
		vers15Slide.style.top = current15 + '%';
		vers15Bool = false;
		vers15Inp[current15 / -100].checked = true;
	}
};
const vers16 = document.querySelector('.version17');
const vers16Slide = document.querySelector('.version17 .slide');
const vers16Inp = document.querySelectorAll('.version17 .radio input');
let current16 = -100;
let current16Rad = 0;
let vers16X;
let vers16Bool;
vers16Inp.forEach((item, index) => {
	item.style.backgroundImage = `url(${vers15Image[index]})`;
	item.onchange = () => {
		current16 = (index+1) * -100;
		current16Rad = index;
		vers16Slide.style.top = current16 + '%';
	};
	item.onmousedown = e => e.stopPropagation();
});
vers16.onmousedown = e => {
	if (e.button == 0) {
		vers16X = e.y;
		vers16Bool = true;
	}
};
vers16.onmouseup = () => vers16Bool = false;
vers16.onmouseleave = () => vers16Bool = false;
vers16.onmousemove = e => {
	if (vers16Bool) {
		if (e.y < vers16X) {
			current16 -= 100;
			current16Rad++;
			if (current16 < -800) {
				vers16Slide.style.transition = 'none';
				current16 = 0;
				setTimeout(() => {
					current16 = -100;
					vers16Slide.style.transition = '.3s';
					vers16Slide.style.top = current16 + '%';
				}, 20);
			}
		} else if (e.y > vers16X) {
			current16 += 100;
			current16Rad--;
			if (current16 > 0) {
				vers16Slide.style.transition = 'none';
				current16 = -800;
				setTimeout(() => {
					current16 = -700;
					vers16Slide.style.transition = '.3s';
					vers16Slide.style.top = current16 + '%';
				}, 20);
			}
		}
		current16Rad == vers15Image.length ? current16Rad = 0 : '';
		current16Rad < 0 ? current16Rad = vers15Image.length-1 : '';
		vers16Slide.style.top = current16 + '%';
		vers16Bool = false;
		vers16Inp[current16Rad].checked = true;
	}
};
const vers17Btn = document.querySelectorAll('.version18 .control button');
const vers17Slide = document.querySelector('.version18 .slide');
const vers17Item = document.querySelectorAll('.version18 .slide .item');
const vers17Inp = document.querySelectorAll('.version18 .control .radio input');
let current17 = 0;
let current17Rad = 0;
let current17Bool = true;
vers17Btn[1].onclick = () => {
	if (current17Bool) {
		vers17Inp.forEach(item => item.disabled = true);
		current17Bool = false;
		current17 -= 200;
		current17Rad++;
		current17Rad == vers1Image.length ? current17Rad = 0 : '';
		current17 < vers17Item.length * -100 ? current17 = 0 : '';
		vers17Item.forEach(item => item.style.transform = 'scale(.5) rotateX(360deg)');
		setTimeout(() => {
			vers17Slide.style.left = current17 + '%';
			setTimeout(() => vers17Item.forEach(item => item.style.transform = 'none'), 700);
		}, 800);
		vers17Inp[current17Rad].checked = true;
		setTimeout(() => {
			vers17Inp.forEach(item => item.disabled = false);
			current17Bool = true;
		}, 2200);
	}
};
vers17Btn[0].onclick = () => {
	if (current17Bool) {
		vers17Inp.forEach(item => item.disabled = true);
		current17Bool = false;
		current17 += 200;
		current17Rad--;
		current17Rad < 0 ? current17Rad = vers1Image.length-1 : '';
		current17 > 0 ? current17 = (vers17Item.length-1) * -100 : '';
		vers17Item.forEach(item => item.style.transform = 'scale(.5) rotateX(-360deg)');
		setTimeout(() => {
			vers17Slide.style.left = current17 + '%';
			setTimeout(() => vers17Item.forEach(item => item.style.transform = 'none'), 700);
		}, 800);
		vers17Inp[current17Rad].checked = true;
		setTimeout(() => {
			vers17Inp.forEach(item => item.disabled = false);
			current17Bool = true;
		}, 2200);
	}
};
vers17Inp.forEach((item, index) => {
	item.onchange = () => {
		current17Bool = false;
		vers17Inp.forEach(item => item.disabled = true);
		current17 = index * 2 * -100;
		current17Rad = index;
		vers17Item.forEach(item => item.style.transform = 'scale(.5) rotateX(-360deg)');
		setTimeout(() => {
			vers17Slide.style.left = current17 + '%';
			setTimeout(() => vers17Item.forEach(item => item.style.transform = 'none'), 700);
		}, 800);
		setTimeout(() => {
			vers17Inp.forEach(item => item.disabled = false);
			current17Bool = true;
		}, 2200);
	};
});
const vers18 = document.querySelector('.version19');
const vers18Item = document.querySelectorAll('.version19 .block .slide .item');
const vers18Slide = document.querySelector('.version19 .block .slide');
const vers18Btn = document.querySelectorAll('.version19 button');
let current18 = 3;
let current18Cur = -125;
for (let i = current18; i < vers18Item.length; i++) {
	vers18Item[i].style.transform = 'rotateY(-65deg)';
}
vers18Item[current18].style.transform = 'none';
vers18Btn[1].onclick = () => {
	current18Cur -= 50;
	current18++;
	current18 == vers18Item.length ? current18Cur = 25 : '';
	current18 == vers18Item.length ? current18 = 0 : '';
	for (let i = current18; i >= 0; i--) {
		vers18Item[i].style.transform = 'rotateY(65deg)';
	}
	for (let i = current18; i < vers18Item.length; i++) {
		vers18Item[i].style.transform = 'rotateY(-65deg)';
	}
	vers18Item[current18].style.transform = 'none';
	vers18Slide.style.left = current18Cur + '%';
};
vers18Btn[0].onclick = () => {
	current18Cur += 50;
	current18--;
	current18 < 0 ? current18Cur = -275 : '';
	current18 < 0 ? current18 = vers18Item.length-1 : '';
	for (let i = current18; i >= 0; i--) {
		vers18Item[i].style.transform = 'rotateY(65deg)';
	}
	for (let i = current18; i < vers18Item.length; i++) {
		vers18Item[i].style.transform = 'rotateY(-65deg)';
	}
	vers18Item[current18].style.transform = 'none';
	vers18Slide.style.left = current18Cur + '%';
};
const vers19Slide = document.querySelector('.version20 .slide');
const vers19Btn = document.querySelectorAll('.version20 button');
const vers19Inp = document.querySelectorAll('.version20 .radio input');
let current19 = -1;
vers19Btn.forEach((item, index) => {
	item.onclick = () => {
		index == 1 ? current19++ : current19--;
		current19 < 0 ? current19 = vers1Image.length-1 : '';
		current19 == vers1Image.length ? current19 = 0 : '';
		vers19Slide.innerHTML = 0;
		for (let i = 0; i < 300; i++) {
			let l = Math.random() * window.innerWidth - 30;
			let t = Math.random() * window.innerHeight - 30;
			let w = Math.random() * 30 + 5;
			let time = Math.random() * 2;
			vers19Slide.innerHTML += `<div class="star" style="width: ${w}px; height: ${w}px; position: absolute; top: -100px; left: ${l}px; animation: vers20Star 1s 2s forwards; transition: ${time}s;"></div>`;
			setTimeout(() => document.querySelectorAll('.version20 .slide .star')[i].style.top = t + 'px', 0);
		}	
		document.querySelectorAll('.version20 .slide .star').forEach(item => item.style.backgroundImage = `url(${vers1Image[current19]})`);
		vers19Inp[current19].checked = true;
	};
});
vers19Inp.forEach((item, index) => {
	item.onchange = () => {
		current19 = index;
		vers19Slide.innerHTML = 0;
		for (let i = 0; i < 300; i++) {
			let l = Math.random() * window.innerWidth - 30;
			let t = Math.random() * window.innerHeight - 30;
			let w = Math.random() * 30 + 5;
			let time = Math.random() * 2;
			vers19Slide.innerHTML += `<div class="star" style="width: ${w}px; height: ${w}px; position: absolute; top: -100px; left: ${l}px; animation: vers20Star 1s 2s forwards; transition: ${time}s;"></div>`;
			setTimeout(() => document.querySelectorAll('.version20 .slide .star')[i].style.top = t + 'px', 0);
		}	
		document.querySelectorAll('.version20 .slide .star').forEach(item => item.style.backgroundImage = `url(${vers1Image[current19]})`);
	};
});
const vers20 = document.querySelector('.version21');
const vers20Btn = document.querySelectorAll('.version21 button');
const vers20Slide = document.querySelector('.version21 .slide');
const vers20Rad = document.querySelectorAll('.version21 .radio input');
let current20 = 0;
let current20Z = 0;
let current20Rad = 4;
let current20X;
let current20Bool;
vers20.onmousedown = e => {
	current20Bool = true;
	current20X = e.x;
};
vers20.onmouseup = () => current20Bool = false;
vers20.onmouseleave = () => current20Bool = false;
function vers20Next() {
	current20 -= 30;
	current20Rad++;
	current20Rad > 4 ? (current20Z += 500, vers20Slide.style.transition = 'left .6s, transform 1s .6s') : (current20Z -= 500, vers20Slide.style.transition = 'transform 1s, left .6s .6s');
	current20 < -120 ? (current20 = 0, current20Z = 0, vers20Slide.style.transition = '1s') : '';
	current20Rad == vers20Rad.length ? current20Rad = 4 : '';
	vers20Slide.style.left = current20 + '%';
	vers20Slide.style.transform = `translateZ(${current20Z}px)`;
	vers20Rad[current20Rad].checked = true;
	[...vers20Slide.children].forEach(item => item.style.transform = 'translateZ(calc(var(--i) * -450px))');
	vers20Slide.children[current20Rad].style.transform = `translateZ(calc(var(--i) * -450px)) rotateY(-360deg)`;
	current20Bool = false;
}
function vers20Prev() {
	current20 += 30;
	current20Rad--;
	current20Rad < 4 ? (current20Z += 500, vers20Slide.style.transition = 'left .6s, transform 1s .6s') : (current20Z -= 500, vers20Slide.style.transition = 'transform 1s, left .6s .6s');
	current20 > 120 ? (current20 = 0, current20Z = 0, vers20Slide.style.transition = '1s') : '';
	current20Rad < 0 ? current20Rad = 4 : '';
	vers20Slide.style.left = current20 + '%';
	vers20Slide.style.transform = `translateZ(${current20Z}px)`;
	vers20Rad[current20Rad].checked = true;
	[...vers20Slide.children].forEach(item => item.style.transform = 'translateZ(calc(var(--i) * -450px))');
	vers20Slide.children[current20Rad].style.transform = `translateZ(calc(var(--i) * -450px)) rotateY(360deg)`;
	current20Bool = false;
}
vers20Btn[1].onclick = vers20Next;
vers20Btn[0].onclick = vers20Prev;
vers20Btn[1].onmousedown = e => e.stopPropagation();
vers20Btn[0].onmousedown = e => e.stopPropagation();
vers20.onmousemove = e => current20Bool ? e.x < current20X ? vers20Next() : e.x > current20X ? vers20Prev() : '' : '';
const vers21 = document.querySelector('.version22');
const vers21Slide = document.querySelector('.version22 .slide');
const vers21Range = document.querySelector('.version22 input');
const vers21Inp = document.querySelectorAll('.version22 .radio input');
let current21 = 0;
vers21Range.oninput = () => {
	vers21Range.style.background = `linear-gradient(to right, #fff ${vers21Range.value}%, #ffffff7a ${vers21Range.value}%)`;
	vers21Slide.style.top = -vers21Range.value * 5 + '%';
	current21 = Math.trunc(vers21Range.value * 5 / 100);
	vers21Inp[current21].checked = true;
};
vers21.onmouseup = () => vers21Slide.style.top = current21 * -100 + '%';
vers21Inp.forEach((item, index) => {
	item.style.backgroundImage = `url(${vers21Slide.children[index].firstElementChild.src})`;
	item.onchange = () => {
		current21 = index;
		vers21Slide.style.top = current21 * -100 + '%';
		vers21Range.value = current21 * 100 / 5;
		vers21Range.style.background = `linear-gradient(to right, #fff ${vers21Range.value}%, #ffffff7a ${vers21Range.value}%)`;
	};
});
const vers22 = document.querySelector('.version23');
const vers22Car = document.querySelector('.version23 .carousel');
let current22 = 0;
vers22.onmousewheel = e => (e.deltaY > 0 ? current22 += 45 : current22 -= 45, vers22Car.style.transform = `rotateY(${current22}deg)`);
const vers23 = document.querySelector('.version24');
const vers23Car = document.querySelector('.version24 .carousel');
const vers23Item = document.querySelectorAll('.version24 .carousel .item');
let current23 = 0;
vers23.onmousewheel = e => (e.deltaY > 0 ? current23 += 45 : current23 -= 45, vers23Car.style.transform = `translateZ(200px) rotateY(${current23}deg)`);
vers23Item.forEach(item => {
	item.onclick = () => {
		vers23Item.forEach(item => item.style.transform = 'rotateY(calc(var(--i) * 45deg)) translateZ(-450px)');
		item.style.transform = `rotateY(calc(var(--i) * 0deg)) translateZ(200px)`;
		item.style.backfaceVisibility = 'visible';
		setTimeout(() => {
			setTimeout(() => item.style.backfaceVisibility = 'hidden', 1e3);
			item.style.transform = 'rotateY(calc(var(--i) * 45deg)) translateZ(-450px)';
		}, 3e3);
	};
});
const vers24 = document.querySelector('.version25');
const vers24Slide = document.querySelector('.version25 .slide');
const vers24Btn = document.querySelectorAll('.version25 button');
let current24 = 0;
let current24Z = 30;
let current24X = 0;
let current24Y = 0;
vers24.onmousemove = e => {
	current24X = e.x;
	current24Y = e.y;
	vers24Slide.style.clipPath = `circle(${current24Z}% at ${current24X - vers24.firstElementChild.offsetWidth}px ${current24Y}px)`;
	vers24Slide.style.transition = 'none';
	e.x <= vers24.firstElementChild.offsetWidth + 10 || e.x > vers24.lastElementChild.offsetLeft - 10 ? current24Z > 0 ? current24Z -= 3 : '' : current24Z < 30 ? current24Z++ : '';
};
vers24.oncontextmenu = () => {
	current24Z != 50 ? current24Z = 50 : current24Z = 30;
	vers24Slide.style.clipPath = `circle(${current24Z}% at ${current24X - vers24.firstElementChild.offsetWidth}px ${current24Y}px)`;
	vers24Slide.style.transition = '.3s';
	setTimeout(() => vers24Slide.style.transition = 'none', 300);
	return false;
};
vers24Btn[1].onmouseover = () => {
	current24++;
	current24 == vers1Image.length ? current24 = 0 : '';
	vers24Slide.style.backgroundImage = `url(${vers1Image[current24]})`;
};
vers24Btn[0].onmouseover = () => {
	current24--;
	current24 < 0 ? current24 = vers1Image.length-1 : '';
	vers24Slide.style.backgroundImage = `url(${vers1Image[current24]})`;
};
const vers25 = document.querySelector('.version26');
const vers25Item = document.querySelectorAll('.version26 .story .time');
const vers25Image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.webp', 'img/5.jpg', 'img/6.jpg'];
let current25 = 0;
let current25Width = 0;
let current25Bool = false;
setInterval(() => {
	if (current25Bool) {
		current25Width += .3;
		if (current25Width >= 100) {
			current25Width = 0;
			current25++;
			vers25Item.forEach(item => item.style.width = 0);
		}
		if (current25 == vers25Item.length) {
			current25 = 0;
			vers25Item.forEach(item => item.style.width = 0);
		}
		current25 < 0 ? current25 = vers25Item.length-1 : '';
		vers25Item[current25].style.width = current25Width + '%';
		vers25.style.backgroundImage = `url(${vers25Image[current25]})`;
	}
}, 1);
vers25.onclick = e => {
	vers25Item.forEach(item => item.style.width = 0);
	current25Width = 0;
	e.x > vers25.offsetWidth / 2 ? current25++ : current25--;
};
vers25.onmousedown = () => current25Bool = false;
vers25.onmouseup = () => current25Bool = true;
const vers26 = document.querySelector('.version27');
const vers26Slide = document.querySelector('.version27 .slide');
let current26 = 0;
let current26X;
let current26Bool;
vers26.onmousedown = e => {
	current26Bool = true;
	current26X = e.x;
};
vers26.onmouseup = () => current26Bool = false;
vers26.onmouseleave = () => current26Bool = false;
vers26.onmousemove = e => {
	if (current26Bool) {
		e.x < current26X && current26 > -window.innerWidth - 20 ? current26 -= 20 : e.x > current26X && current26 < 20 ? current26 += 20 : '';
		vers26Slide.style.left = current26 + 'px';
		current26X = e.x;
	}
};
const vers27 = document.querySelector('.version28');
const vers27Slide = document.querySelector('.version28 .slide');
const vers27Item = document.querySelectorAll('.version28 .slide .item');
const vers27Inp = document.querySelectorAll('.version28 .radio input');
let current27 = 0;
let current27Ind = 0;
let current27X;
let current27Bool;
vers27.onmousedown = e => {
	current27Bool = true;
	current27X = e.x;
	vers27Slide.style.transition = 'none';
};
vers27.onmouseup = () => {
	current27Bool = false;
	current27 = current27Ind * -100;
	vers27Slide.style.left = current27 + '%';
	vers27Slide.style.transition = '.5s';
};
vers27.onmouseleave = () => {
	current27Bool = false;
	current27 = current27Ind * -100;
	vers27Slide.style.left = current27 + '%';
	vers27Slide.style.transition = '.5s';
};
vers27.onmousemove = e => {
	if (current27Bool) {
		e.x < current27X && current27 > - 405 ? current27 -= (e.x - current27X) * -1 / 15 : e.x > current27X && current27 < 5 ? current27 += (e.x - current27X) / 15 : '';
		vers27Slide.style.left = current27 + '%';
		current27X = e.x;
		vers27Item.forEach((item, index) => item.getBoundingClientRect().left < window.innerWidth / 2 ? current27Ind = index : '');
		vers27Inp[current27Ind].checked = true;
	}
};
vers27Inp.forEach((item, index) => {
	item.onchange = () => {
		current27 = index * -100;
		vers27Slide.style.left = current27 + '%';
	};
});
const vers28Gallery = document.querySelector('.version29 .gallery');
const vers28Chief = document.querySelector('.version29 .gallery .item .chief');
const vers28Item = document.querySelectorAll('.version29 .gallery .item:not(:first-child)');
const vers28Image = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.webp', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/1.jpg', 'img/2.jpg'];
vers28Item.forEach((item, index) => {
	item.style.backgroundImage = `url(${vers28Image[index]})`;
	item.onclick = () => {
		vers28Chief.style.backgroundImage = `url(${vers28Image[index]})`;
		vers28Item.forEach(item => item.classList.remove('active'));
		item.classList.add('active');
	};
});
vers28Chief.onmousemove = e => {
	vers28Chief.style.backgroundPosition = -(e.offsetX - vers28Chief.offsetWidth / 2) + 'px ' + -(e.offsetY - vers28Chief.offsetHeight / 2) + 'px';
	vers28Chief.style.transform = 'scale(2)';
	vers28Chief.style.transition = 'none';
};
vers28Chief.onmouseleave = e => {
	vers28Chief.style.backgroundPosition = '50% 50%';
	vers28Chief.style.transform = 'none';
	vers28Chief.style.transition = '.4s';
};
const vers32 = document.querySelector('.version33');
const vers32Inp = document.querySelector('.version33 label input');
const vers32Btn = document.querySelectorAll('.version33 button');
const vers32Radio = document.querySelector('.version33 .radio');
const vers32Image = [];
let current32 = 0;
vers32Inp.onchange = () => {
	vers32Image.length = 0;
	current32 = 0;
	[...vers32Radio.children].forEach(item => item.remove());
	[...vers32Inp.files].forEach((item, index) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(item);
		fileReader.onloadend = () => {
			vers32Image.push(fileReader.result);
			current32 = 0;
			vers32.style.backgroundImage = `url(${vers32Image[current32]})`;
			vers32Image.length > 1 ? (vers32Btn.forEach(item => item.style = 'opacity: 1; visibility: visible;'), vers32Inp.parentElement.style.opacity = .5) : vers32Btn.forEach(item => item.style = 'opacity: 0; visibility: hidden;');
			const radio = document.createElement('input');
			radio.type = 'radio';
			radio.name = 'loadSlide';
			vers32Radio.append(radio);
			vers32Radio.children[current32].checked = true;
			Array.from(vers32Radio.children).forEach((item, index) => {
				item.onchange = () => {
					current32 = index;
					vers32.style.backgroundImage = `url(${vers32Image[current32]})`;
				};
			});
		};
	});
};
vers32Btn[1].onclick = () => {
	current32++;
	current32 == vers32Image.length ? current32 = 0 : '';
	vers32.style.backgroundImage = `url(${vers32Image[current32]})`;
	vers32Radio.children[current32].checked = true;
};
vers32Btn[0].onclick = () => {
	current32--;
	current32 < 0 ? current32 = vers32Image.length-1 : '';
	vers32.style.backgroundImage = `url(${vers32Image[current32]})`;
	vers32Radio.children[current32].checked = true;
};
const vers33Slide = document.querySelector('.version34 .slide');
const vers33Btn = document.querySelectorAll('.version34 button');
const vers33Radio = document.querySelectorAll('.version34 .radio input');
let current33 = 0;
vers33Btn[1].onclick = () => {
	current33 -= 100;
	current33 / -100 == vers1Image.length ? current33 = 0 : '';
	[...vers33Slide.children].forEach(item => item.style.transform = 'none');
	vers33Slide.children[current33 / -100].style.transform = 'scale(.7) rotate(362deg)';
	vers33Slide.style = `top: ${current33}%; left: ${current33}%;`;
	vers33Slide.ontransitionend = () => [...vers33Slide.children].forEach(item => item.style.transform = 'scale(1) rotate(360deg)');
	vers33Radio[current33 / -100].checked = true;
};
vers33Btn[0].onclick = () => {
	current33 += 100;
	current33 > 0 ? current33 = (vers1Image.length-1) * -100 : '';
	[...vers33Slide.children].forEach(item => item.style.transform = 'none');
	vers33Slide.children[current33 / -100].style.transform = 'scale(.7) rotate(-362deg)';
	vers33Slide.style = `top: ${current33}%; left: ${current33}%;`;
	vers33Slide.ontransitionend = () => [...vers33Slide.children].forEach(item => item.style.transform = 'none');
	vers33Radio[current33 / -100].checked = true;
};
vers33Radio.forEach((item, index) => {
	item.onchange = () => {
		current33 = index * -100;
		[...vers33Slide.children].forEach(item => item.style.transform = 'none');
		vers33Slide.children[current33 / -100].style.transform = 'scale(.7) rotate(362deg)';
		vers33Slide.style = `top: ${current33}%; left: ${current33}%;`;
		vers33Slide.ontransitionend = () => [...vers33Slide.children].forEach(item => item.style.transform = 'scale(1) rotate(360deg)');
	};
});
const vers34 = document.querySelector('.version35');
const vers34Slide = document.querySelector('.version35 .slide');
const vers34Cars = document.querySelectorAll('.version35 .slide .car');
const vers34Item = document.querySelectorAll('.version35 .slide .car .item');
const vers34Show = document.querySelector('.version35 .show');
let current34 = 0;
let current34_1 = 0;
let current34_3 = 0;
let vers34X;
let vers34Bool;
let vers34Img = true;
vers34.onmousedown = e => (vers34X = e.x, vers34Bool = true);
vers34.onmouseup = () => (vers34Bool = false, setTimeout(() => vers34Img = true, 200));
vers34.onmouseleave = () => vers34Bool = false;
vers34.onmousemove = e => {
	if (vers34Bool) {
		setTimeout(() => vers34Img = false, 100);
		e.x < vers34X ? (current34 -= 5, current34_1 > -30 ? current34_1 -= 2 : '', current34_3 < 0 ? current34_3 += .2 : '') : e.x > vers34X ? (current34 += 5, current34_1 < 150 ? current34_1 += 2 : '', current34_3 > -30 ? current34_3 -= .2 : '') : '';
		vers34Cars[0].style.transform = `translateY(${current34_1}%) rotateX(${current34_3}deg) rotateY(${current34 / 2}deg)`;
		vers34Cars[1].style.transform = `translateY(${current34_1}%) rotateX(${current34_3}deg) rotateY(${current34 / 3}deg)`;
		vers34Cars[2].style.transform = `translateY(${current34_1}%) rotateX(${current34_3}deg) rotateY(${current34 / 2.5}deg)`;
		vers34X = e.x;
	}
};
vers34Item.forEach((item, index) => item.onclick = () => vers34Img ? vers34Show.style = `background-image: url(${item.firstElementChild.src}); opacity: 1; visibility: visible;` : '');
vers34Show.onclick = () => (vers34Show.style.opacity = 0, vers34Show.style.visibility = 'hidden');
const vers37Btn = document.querySelectorAll('.version38 .product button');
const vers37Big = document.querySelector('.version38 .product .slider .big');
const vers37Item = document.querySelectorAll('.version38 .product .slider .big .item .box');
const vers37Inp = document.querySelectorAll('.version38 .product .radio input');
const vers37Off = document.querySelector('.version38 .product .off');
let current37 = 0;
let current37Item = 0;
let current37Rad = 0;
vers37Btn[1].onclick = () => {
	current37 -= 100 / 3;
	current37Item++;
	current37Item % 3 == 0 ? current37Rad++ : '';
	current37Item > vers37Inp.length * 2 ? (current37Item = 0, current37Rad = 0, current37 = 0) : '';
	vers37Big.style.left = current37 + '%';
	vers37Inp[current37Rad].checked = true;
};
vers37Btn[0].onclick = () => {
	current37 += 100 / 3;
	current37Item--;
	current37Item < 0 ? (current37Item = vers37Inp.length * 2, current37Rad = current37Item / 2, current37 = (vers37Inp.length-1) * -100) : '';
	current37Item % 3 == 0 ? current37Rad-- : '';
	vers37Big.style.left = current37 + '%';
	vers37Inp[current37Rad].checked = true;
};
vers37Item.forEach(item => {
	item.onmouseover = () => {
		vers37Item.forEach(item => item.style.opacity = .2);
		item.style.width = '100%';	
		item.style.opacity = 1;	
	};
	item.onmouseleave = () => vers37Item.forEach(item => (item.style.opacity = 1, item.style.width = 'calc(100% / 3)'));
});
vers37Off.onclick = () => {
	if(vers37Big.style.opacity != '0') {
		vers37Big.style.opacity = 0;
		vers37Btn.forEach(item => (item.style.opacity = 0, item.style.visibility = 'hidden'));
		vers37Inp.forEach(item => (item.style.opacity = 0, item.style.visibility = 'hidden'));
	} else {
		vers37Big.style.opacity = 1;
		vers37Btn.forEach(item => (item.style.opacity = 1, item.style.visibility = 'visible'));
		vers37Inp.forEach(item => (item.style.opacity = 1, item.style.visibility = 'visible'));
	}
};
const vers38Big = document.querySelector('.version39 .big');
const vers38List = document.querySelectorAll('.version39 .big .superList');
vers38List.forEach((item, index) => (item.onmouseover = () => vers38Big.style.left = -index + '00%', item.onmouseleave = () => vers38Big.style.left = 0));
const vers41Display = document.querySelector('.version42 .display');
const vers41Img = document.querySelectorAll('.version42 .display .item');
const vers41View = document.querySelector('.version42 .view');
let vers41Item;
vers41Img.forEach(item => (item.ondragstart = () => (item.style.opacity = 0, vers41Item = item), item.ondragend = () => item.style.opacity = 1));
vers41View.ondragover = () => false;
vers41Display.ondragover = () => false;
vers41Display.ondrop = () => vers41View.innerHTML != '' ? vers41Display.append(vers41View.firstElementChild) : '';
vers41View.ondrop = () => (vers41View.innerHTML != '' ? vers41Display.append(vers41View.firstElementChild) : '', vers41View.append(vers41Item), vers41Item.style = 'scale: 0; rotate: 360deg;', setTimeout(() => vers41Item.style = null, 20));
const vers43Slide = document.querySelector('.version44 .slide');
const vers43Item = document.querySelectorAll('.version44 .slide .item');
const vers43Btn = document.querySelectorAll('.version44 button');
const vers43Inp = document.querySelectorAll('.version44 .radio input');
let current43 = 0;
vers43Item.forEach((item, index) => {
	item.style.backgroundImage = `url(${vers1Image[index]})`;
	vers43Inp[index].onchange = () => {
		current43 = index * -100;
		vers43Item.forEach(item => item.style.backgroundSize = '220%');
		vers43Item[current43 / -100].style.backgroundSize = '100%';
		vers43Slide.style.left = current43 + '%';
	};
});
vers43Btn[1].onclick = () => {
	current43 -= 100;
	current43 / -100 == vers1Image.length ? current43 = 0 : '';
	vers43Slide.style.left = current43 + '%';
	vers43Item.forEach(item => item.style.backgroundSize = '220%');
	vers43Item[current43 / -100].style.backgroundSize = '100%';
	vers43Inp[current43 / -100].checked = true;
};
vers43Btn[0].onclick = () => {
	current43 += 100;
	current43 > 0 ? current43 = (vers1Image.length-1) * -100 : '';
	vers43Item.forEach(item => item.style.backgroundSize = '220%');
	vers43Item[current43 / -100].style.backgroundSize = '100%';
	vers43Slide.style.left = current43 + '%';
	vers43Inp[current43 / -100].checked = true;
};
const vers44 = document.querySelector('.version45');
const vers44Img = document.querySelectorAll('.version45 .top img');
const vers44N = [];
vers44Img.forEach((item, index) => vers44N[index] = item.style.getPropertyValue('--i'));
let vers44Cur = Math.floor(Math.random() * vers44Img.length);
const vers45 = document.querySelectorAll('.version46, .version46 .wave');
const vers45Btn = document.querySelectorAll('.version46 button');
const vers45Inp = document.querySelectorAll('.version46 .radio input');
let vers45Cur = 0;
let vers45Bool = true;
vers45Btn[1].onclick = () => {
	if (vers45Bool) {
		vers45Bool = false;
		vers45[1].animate([{left: '-20px', offset: .33 },{left: '20px', offset: .66}], {duration: 1000});
		vers45Cur++;
		vers45Cur == vers1Image.length ? vers45Cur = 0 : '';
		vers45.forEach(item => item.style.backgroundImage = `url(${vers1Image[vers45Cur]})`);
		vers45Inp[vers45Cur].checked = true;
		setTimeout(() => vers45Bool = true, 13e2);
	}
};
vers45Btn[0].onclick = () => {
	if (vers45Bool) {
		vers45Bool = false;
		vers45[1].animate([{left: '-20px', offset: .33 },{left: '20px', offset: .66}], {duration: 1000});
		vers45Cur--;
		vers45Cur < 0 ? vers45Cur = vers1Image.length-1 : '';
		vers45.forEach(item => item.style.backgroundImage = `url(${vers1Image[vers45Cur]})`);
		vers45Inp[vers45Cur].checked = true;
		setTimeout(() => vers45Bool = true, 13e2);
	}
};
vers45Inp.forEach((item, index) => {
	item.onchange = () => {
		vers45Cur = index;
		vers45[1].animate([{left: '-20px', offset: .33 },{left: '20px', offset: .66}], {duration: 1000});
		vers45.forEach(item => item.style.backgroundImage = `url(${vers1Image[vers45Cur]})`);
	};
});
const vers47 = document.querySelector('.version48');
const vers47Item = document.querySelectorAll('.version48 .item');
const vers47Target = document.querySelector('.version48 .target');
const vers47Data = {
	bool: [],
	current: null,
	clipPath: ['15% 25%', '85% 25%', '15% 75%', '85% 75%'],
	targetBool: true
};
vers47Item.forEach((item, index) => item.onmousedown = e => (vers47Data.bool[index] = true, vers47Data.current = index, vers47Data.targetBool = true, item.style.transition = 'none'));
vers47.onmousemove = e => vers47Data.bool[vers47Data.current] ? vers47Item[vers47Data.current].style.clipPath = `circle(16% at ${e.x}px ${e.y}px)` : '';
vers47.onmouseup = () => vers47Data.bool[vers47Data.current] = false;
vers47Target.onmouseup = e => vers47Data.targetBool ? (vers47Data.targetBool = false, vers47Item.forEach((item, index) => (item.style.transition = '.5s', item.style.clipPath = `circle(16% at ${vers47Data.clipPath[index]})`, item.style.zIndex = 0, item.style.pointerEvents = 'none')), vers47Item[vers47Data.current].style.zIndex = 1, vers47Item[vers47Data.current].style.clipPath = 'circle(100%)', e.target.style = 'box-shadow: 0 0 30px #0f0, inset 0 0 60px 10px #009600; width: 100px; height: 100px; animation: targetVers47 .5s infinite;', e.target.firstElementChild.style = 'translate: -15%; color: #fff; -webkit-text-stroke: 1px #0008;') : '';
vers47Target.onmousedown = e => (e.target.style = null, e.target.firstElementChild.style = null, vers47Item.forEach((item, index) => (item.style.clipPath = `circle(16% at ${vers47Data.clipPath[index]})`, item.style.zIndex = 0, item.style.pointerEvents = 'auto', item.style.transition = '.5s')));
const vers48Item = document.querySelectorAll('.version49 .right .item');
const vers48ItemBtn = document.querySelectorAll('.version49 .right .item .btn');
const vers48Btn = document.querySelectorAll('.version49 .right .slidBtn');
const vers48ThemeBtn = document.querySelectorAll('.version49 .left .theme button');
const vers48ThemeColor = [null, '#ff0000', '#ffe200', '#17860d', '#9a9a9a'];
const vers48Data = [0,1,2,3,4,5];
let vers48Cur = 0;
vers48ThemeBtn.forEach((item, index) => {
	item.onclick = () => {
		vers48Item.forEach(item => item.style.background = index == 0 ? null : `linear-gradient(to right, transparent 14%, #c0d0e3 14% 16%, transparent 16%), linear-gradient(to left, transparent 14%, #c0d0e3 14% 16%, transparent 16%), linear-gradient(transparent 11%, #909eae 11% 12%, transparent 12%), linear-gradient(to top, transparent 11%, #909eae 11% 12%, transparent 12%), linear-gradient(to right, ${vers48ThemeColor[index]}, ${vers48ThemeColor[index]}, ${vers48ThemeColor[index]}, ${vers48ThemeColor[index]} 2% 98%, ${vers48ThemeColor[index]}, #cfd3db, ${vers48ThemeColor[index]}, #9198A5)`);
		vers48ItemBtn.forEach(item => item.style.background = '#430000');
	};
});
vers48Btn[1].onclick = () => {
	vers48Item.forEach((item, index) => (vers48Data[index]--, item.style.setProperty('--i', vers48Data[index])));
	vers48Item[vers48Cur].style.scale = 0;
	for (let i = 0; i <= vers48Cur; i++) {
		vers48Item[i].style.setProperty('--i', 0);
	}
	vers48Cur++;
	vers48Cur > 0 ? vers48Btn[0].style = 'pointer-events: auto; opacity: 1; background: #DEDEE2;' : '';
	vers48Cur == vers48Item.length-1 ? vers48Btn[1].style = 'pointer-events: none; opacity: .5; background: #ebebeb;' : '';
};
vers48Btn[0].onclick = () => {
	vers48Item.forEach((item, index) => (vers48Data[index]++, item.style.setProperty('--i', vers48Data[index])));
	vers48Cur--;
	vers48Item[vers48Cur].style.scale = 1;
	for (let i = 0; i <= vers48Cur; i++) {
		vers48Item[i].style.setProperty('--i', 0);
	}
	vers48Cur == 0 ? vers48Btn[0].style = 'pointer-events: none; opacity: .5; background: #ebebeb;' : '';
	vers48Cur < vers48Item.length-1 ? vers48Btn[1].style = 'pointer-events: auto; opacity: 1; background: #DEDEE2;' : '';
};
const vers49Btn = document.querySelectorAll('.version50 button');
const vers49Item = document.querySelectorAll('.version50 .item');
const vers49Rad = document.querySelectorAll('.version50 .radio .rad');
let vers49Cur = 0;
let vers49Bool = true;
vers49Btn[1].onclick  = () => {
	if (vers49Bool) {
		vers49Bool = false;
		vers49Cur++;
		vers49Cur == vers1Image.length ? vers49Cur = 0 : '';
		vers49Item.forEach((item, index) => {
			item.style.filter = 'brightness(2)';
			item.style.transition = `filter .5s ${(index + .5) * .3}s, background 1.2s ${(index + .3) * .4}s`;
			item.style.backgroundImage = `url(${vers1Image[vers49Cur]})`;
			setTimeout(() => item.style.filter = 'none', 1700);
		});
		setTimeout(() => vers49Bool = true, 3200);
		vers49Rad.forEach(item => item.classList.remove('active'));
		vers49Rad[vers49Cur].classList.add('active');
	}
};
vers49Btn[0].onclick  = () => {
	if (vers49Bool) {
		vers49Bool = false;
		vers49Cur--;
		vers49Cur < 0 ? vers49Cur = vers1Image.length-1 : '';
		vers49Item.forEach((item, index) => {
			item.style.filter = 'brightness(2)';
			item.style.transition = `filter .5s ${(index - 5 + .5) * -.3}s, background 1.2s ${(index - 5 + .5) * -.4}s`;
			item.style.backgroundImage = `url(${vers1Image[vers49Cur]})`;
			setTimeout(() => item.style.filter = 'none', 1700);
		});
		setTimeout(() => vers49Bool = true, 3200);
		vers49Rad.forEach(item => item.classList.remove('active'));
		vers49Rad[vers49Cur].classList.add('active');
	}
};
vers49Rad.forEach((item, index) => {
	item.onclick = () => {
		if (vers49Bool) {
			vers49Bool = false;
			vers49Rad.forEach(item => item.classList.remove('active'));
			item.classList.add('active');
			vers49Cur = index;
			vers49Item.forEach((item, index) => {
				item.style.filter = 'brightness(2)';
				item.style.transition = `filter .5s ${(index + .5) * .3}s, background 1.2s ${(index + .5) * .4}s`;
				item.style.backgroundImage = `url(${vers1Image[vers49Cur]})`;
				setTimeout(() => item.style.filter = 'none', 1700);
			});
			setTimeout(() => vers49Bool = true, 3200);
		}
	};
});
const vers50Btn = document.querySelectorAll('.version51 button');
const vers50Item = document.querySelectorAll('.version51 .item');
const vers50Rad = document.querySelectorAll('.version51 .radio input');
const vers50Data = [-3,-2,-1,0,1,2,3];
let vers50Cur = 3;
let vers50DataXMinus = 0;
let vers50DataXPlus = 0;
for (let i = 0; i < vers50Cur; i++) {
	vers50Item[i].style.transform = 'translateZ(-400px) rotateY(-45deg) scale(.3)';
}
for (let i = vers50Cur; i < vers50Item.length; i++) {
	vers50Item[i].style.transform = 'translateZ(-400px) rotateY(45deg) scale(.3)';
}
vers50Item[vers50Cur].style.transform = null;
vers50Btn[1].onclick = () => {
	vers50Item.forEach((item, index) => {
		vers50Cur < 6 ? vers50Data[index]-- : '';
		item.style.setProperty('--i', vers50Data[index]);
	});
	vers50Cur < 6 ? vers50Cur++ : '';
	vers50Cur == vers50Item.length-1 ? vers50Btn[1].classList.add('disabled') : '';
	vers50Btn[0].classList.remove('disabled');
	for (let i = 0; i < vers50Cur; i++) {
		vers50Item[i].style.transform = 'translateZ(-400px) rotateY(-45deg) scale(.3)';
	}
	for (let i = vers50Cur; i < vers50Item.length; i++) {
		vers50Item[i].style.transform = 'translateZ(-400px) rotateY(45deg) scale(.3)';
	}
	vers50Item[vers50Cur].style.transform = null;
	vers50Rad[vers50Cur].checked = true;
};
vers50Btn[0].onclick = () => {
	vers50Item.forEach((item, index) => {
		vers50Cur > 0 ? vers50Data[index]++ : '';
		item.style.setProperty('--i', vers50Data[index]);
	});
	vers50Cur > 0 ? vers50Cur-- : '';
	vers50Cur == 0 ? vers50Btn[0].classList.add('disabled') : '';
	vers50Btn[1].classList.remove('disabled');
	for (let i = 0; i < vers50Cur; i++) {
		vers50Item[i].style.transform = 'rotateY(-45deg) scale(.3)';
	}
	for (let i = vers50Cur; i < vers50Item.length; i++) {
		vers50Item[i].style.transform = 'rotateY(45deg) scale(.3)';
	}
	vers50Item[vers50Cur].style.transform = null;
	vers50Rad[vers50Cur].checked = true;
};
vers50Rad.forEach((item, index) => {
	item.onchange = () => {
		vers50Cur = index;
		for (let i = 0; i < vers50Cur; i++) {
			vers50Item[i].style.transform = 'rotateY(-45deg) scale(.3)';
		}
		for (let i = vers50Cur; i < vers50Item.length; i++) {
			vers50Item[i].style.transform = 'rotateY(45deg) scale(.3)';
		}
		vers50DataXMinus = 0;
		vers50DataXPlus = 0;
		for (let i = index; i >= 0; i--) {
			vers50Data[i] = vers50DataXMinus;
			vers50DataXMinus--;
		}
		for (let i = index; i < vers50Item.length; i++) {
			vers50Data[i] = vers50DataXPlus;
			vers50DataXPlus++;
		}
		index == 0 ? (vers50Btn[0].classList.add('disabled'), vers50Btn[1].classList.remove('disabled')) : index == vers50Item.length-1 ? (vers50Btn[1].classList.add('disabled'), vers50Btn[0].classList.remove('disabled')) : index > 0 && index < vers50Item.length-1 ? (vers50Btn[0].classList.remove('disabled'), vers50Btn[1].classList.remove('disabled')) : '';
		vers50Item[vers50Cur].style.transform = null;
		vers50Item.forEach((item, index) => item.style.setProperty('--i', vers50Data[index]));
	};
});
const vers51Block = document.querySelector('.version52');
const vers51Round = document.querySelector('.version52 .round');
const vers51Btn = document.querySelectorAll('.version52 button');
const vers51Inp = document.querySelectorAll('.version52 .radio input');
let vers51MouseY;
let vers51MouseX;
let vers51Bool;
let vers51Cur = 0;
let vers51Zoom = 1;
vers51Round.style.left = innerWidth / 2 - vers51Round.offsetWidth / 2 + 'px'
vers51Round.style.top = innerHeight / 2 - vers51Round.offsetHeight / 2 + 'px'
vers51Round.onmousedown = e => {
	if (e.button == 0) {
		vers51Bool = true;
		vers51MouseY = e.offsetY;
		vers51MouseX = e.offsetX;
	}
};
vers51Round.onmousewheel = e => {
	e.deltaY < 0 && vers51Zoom < 3 ? vers51Zoom += .05 : e.deltaY > 0 && vers51Zoom > .95 ? vers51Zoom -= .05 : '';
	vers51Round.firstElementChild.firstElementChild.style.scale = vers51Zoom;
};
vers51Block.onmousemove = e => {
	if (!vers51Bool) return false;
	vers51Round.style.top = e.y - vers51MouseY + 'px';
	vers51Round.style.left = e.x - vers51MouseX + 'px';
	vers51Round.offsetTop <= 0 ? vers51Round.style.top = 0 : '';
	vers51Round.offsetLeft <= 0 ? vers51Round.style.left = 0 : '';
	vers51Round.offsetLeft >= innerWidth - vers51Round.offsetWidth ? vers51Round.style.left = innerWidth - vers51Round.offsetWidth + 'px': '';
	vers51Round.offsetTop >= innerHeight - vers51Round.offsetHeight ? vers51Round.style.top = innerHeight - vers51Round.offsetHeight + 'px': '';
};
vers51Block.onmouseup = () => vers51Bool = false;
vers51Block.onmouseleave = () => vers51Bool = false;
vers51Btn[1].onclick = () => {
	vers51Cur++;
	vers51Cur == vers1Image.length ? vers51Cur = 0 : '';
	vers51Round.firstElementChild.firstElementChild.style.backgroundImage = `url(${vers1Image[vers51Cur]})`;
	vers51Inp[vers51Cur].checked = true;
};
vers51Btn[0].onclick = () => {
	vers51Cur--;
	vers51Cur < 0 ? vers51Cur = vers1Image.length-1 : '';
	vers51Round.firstElementChild.firstElementChild.style.backgroundImage = `url(${vers1Image[vers51Cur]})`;
	vers51Inp[vers51Cur].checked = true;
};
vers51Inp.forEach((item, index) => {
	item.onchange = () => {
		vers51Cur = index;
		vers51Round.firstElementChild.firstElementChild.style.backgroundImage = `url(${vers1Image[vers51Cur]})`;
	};
});
const vers52Block = document.querySelector('.version53');
const vers52Page = document.querySelectorAll('.version53 .page');
const vers52Item = document.querySelectorAll('.version53 .item');
const vers52Btn = document.querySelectorAll('.version53 button');
const vers52Inp = document.querySelectorAll('.version53 .radio input');
let vers52Cur = 4;
let vers52ZInd = 0;
let vers52RadioX = 0;
let vers52Set;

vers52Btn[1].onclick = () => {
	vers52Btn[0].style = 'pointer-events: none; opacity: .5;';
	vers52ZInd++;
	vers52Item[vers52Cur].style.clipPath = 'inset(0 0 0 100%)';
	vers52Item[vers52Cur].style.transition = '2s ease-out .15s';
	vers52Page[vers52Cur].style.transition = 'left 2s ease-out .2s, width 2.4s ease-in';
	vers52Page[vers52Cur].style.width = '100%';
	vers52Page[vers52Cur].style.left = '100%';
	vers52Page[vers52Cur].style.zIndex = vers52ZInd;
	vers52Cur > 0 ? vers52Cur-- : '';
	vers52Inp[Math.abs(vers52Cur - 4)].checked = true;
};
vers52Btn.forEach(item => item.onmousedown = () => clearTimeout(vers52Set));
vers52Block.onmouseup = () => vers52Set = setTimeout(() => vers52Btn.forEach(item => item.style = null), 24e2);
vers52Btn[0].onclick = () => {
	vers52Btn[1].style = 'pointer-events: none; opacity: .5;';
	vers52ZInd--;
	vers52Cur < 4 ? vers52Cur++ : '';
	vers52Item[vers52Cur].style.clipPath = 'inset(0 0 0 0)';
	vers52Item[vers52Cur].style.transition = '1.7s ease-in .15s';
	vers52Page[vers52Cur].style.transition = 'left 1.7s ease-in, width 1.85s ease-in';
	vers52Page[vers52Cur].style.width = 0;
	vers52Page[vers52Cur].style.left = 0;
	vers52Page[vers52Cur].style.zIndex = vers52ZInd;
	vers52Inp[Math.abs(vers52Cur - 4)].checked = true;
};
const vers53Block = document.querySelector('.version54');
const vers53Item = document.querySelectorAll('.version54 .item');
const vers53ItemOdd = document.querySelectorAll('.version54 .item:nth-child(odd)');
const vers53ItemEven = document.querySelectorAll('.version54 .item:nth-child(even)');
const vers53Btn = document.querySelectorAll('.version54 button');
const vers53Inp = document.querySelectorAll('.version54 .radio input');
const vers53TimeRange = document.querySelector('.version54 .time input');
const vers53TimeRangeText = document.querySelector('.version54 .time span');
vers53Item.forEach((item, index) => (item.style.left = 0, item.style.backgroundPositionY = (vers53Block.offsetHeight / vers53Item.length) * -index + 'px'));
vers53ItemOdd.forEach((item, index) => item.style.transitionDelay = index * .2 + 's');
vers53ItemEven.forEach((item, index) => item.style.transitionDelay = index * .2 + 's');
let vers53Time = 5000;
let vers53Cur = 0;
let vers53Bool = true;
let vers53Range = .2;
vers53TimeRange.oninput = () => {
	vers53Range = vers53TimeRange.value;
	vers53TimeRangeText.innerText = vers53Range;
};
vers53Btn[1].onclick = () => {
	if (vers53Bool) {
		vers53Bool = false;
		vers53Item.forEach(item => item.style.left = null);
		setTimeout(() => {
			vers53Cur++;
			vers53Cur == vers1Image.length ? vers53Cur = 0 : '';
			vers53ItemOdd.forEach((item, index) => item.style.transitionDelay = index * vers53Range + 's');
			vers53ItemEven.forEach((item, index) => item.style.transitionDelay = index * vers53Range + 's');
			vers53Item.forEach((item, index) => {
				item.style.left = 0;
				item.style.backgroundPositionY = (vers53Block.offsetHeight / vers53Item.length) * -index + 'px';
				item.style.backgroundImage = `url(${vers1Image[vers53Cur]})`;
				vers53Time = index * vers53Range * 700;
			});
			vers53Bool = true;
			vers53Inp[vers53Cur].checked = true;
		}, vers53Time);
	}
};
vers53Btn[0].onclick = () => {
	if (vers53Bool) {
		vers53Bool = false;
		vers53Item.forEach(item => item.style.left = null);
		setTimeout(() => {
			vers53Cur--;
			vers53Cur < 0 ? vers53Cur = vers1Image.length-1 : '';
			vers53ItemOdd.forEach((item, index) => item.style.transitionDelay = index * vers53Range + 's');
			vers53ItemEven.forEach((item, index) => item.style.transitionDelay = index * vers53Range + 's');
			vers53Item.forEach((item, index) => {
				item.style.left = 0;
				item.style.backgroundPositionY = (vers53Block.offsetHeight / vers53Item.length) * -index + 'px';
				item.style.backgroundImage = `url(${vers1Image[vers53Cur]})`;
				vers53Time = index * vers53Range * 700;
			});
			vers53Bool = true;
			vers53Inp[vers53Cur].checked = true;
		}, vers53Time);
	}
};
vers53Inp.forEach((item, index) => {
	item.onchange = () => {
		if (vers53Bool) {
			vers53Bool = false;
			vers53Item.forEach(item => item.style.left = null);
			setTimeout(() => {
				vers53Cur = index;
				vers53ItemOdd.forEach((item, index) => item.style.transitionDelay = index * vers53Range + 's');
				vers53ItemEven.forEach((item, index) => item.style.transitionDelay = index * vers53Range + 's');
				vers53Item.forEach((item, index) => {
					item.style.left = 0;
					item.style.backgroundPositionY = (vers53Block.offsetHeight / vers53Item.length) * -index + 'px';
					item.style.backgroundImage = `url(${vers1Image[vers53Cur]})`;
					vers53Time = index * vers53Range * 700;
				});
				vers53Bool = true;
				vers53Inp[vers53Cur].checked = true;
			}, vers53Time);
		}
	};
});
console['log']('%cAll These Sliders were Created and Coded by Hovo Vardanyan', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');
console['log']('%cThe King Of CSS3 and Perfect JavaScript Writer', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');
console['log']('%cDeveloper Hovo Vardanyan', 'font: bold 22px serif;  padding: 10px;');
