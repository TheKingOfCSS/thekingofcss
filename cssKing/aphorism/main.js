const doorGlass = document.querySelector('.glassHome .home .door');
const GlassHome = document.querySelector('.glassHome .home');
const GlassHomeFrontNow = document.querySelector('.glassHome .home .face.front');
const GlassHomeButtons = document.querySelector('.glassHomeButtons');
const GlassHomeButtonsItem = document.querySelectorAll('.glassHomeButtons button');
const GlassVs = document.querySelectorAll('.glassHome .home video');
let currentVideo = 1;
let vidBool = true;
doorGlass.addEventListener('click', function() {
	doorGlass.classList.add('open');
	GlassHome.classList.add('active');
	GlassHome.classList.remove('activeExit');
	doorGlass.classList.remove('close');
	GlassHomeButtonsItem[5].disabled = true;
	GlassHomeButtonsItem[5].style.opacity = '.3';
	setTimeout(() => {
		GlassHome.classList.add('show');
		GlassHome.classList.add('bottomText');
		GlassHomeButtons.classList.add('show');
		GlassVs[1].play();
		GlassVs[1].currentTime = 0;
		vidBool = true;
		GlassVs.forEach(item => {
			item.onended = () => {
				if (vidBool) {
					currentVideo++;
					currentVideo == GlassVs.length ? currentVideo = 0 : '';
					GlassVs[currentVideo].play();
				}
			};
		});
	}, 3000);
	setTimeout(() => {
		doorGlass.classList.remove('open');
		GlassHomeFrontNow.classList.remove('now');
	}, 3500);
});
GlassVs.forEach(item => {
	item.onclick = () => {
		vidBool = false;
		GlassVs.forEach(item => item.pause());
		item.currentTime = 0;
		item.play();
	};
});
for (let i = 0; i < GlassHomeButtonsItem.length; i++) {
	GlassHomeButtonsItem[i].addEventListener('click', function() {
		if (i == 0) {
			GlassHome.classList.remove('active');
			GlassHome.classList.add('activeLeft');
			GlassHome.classList.remove('activeRight');
			GlassHome.classList.remove('activeBack');
			GlassHome.classList.remove('activeFront');
		}
		if (i == 1) {
			GlassHome.classList.remove('active');
			GlassHome.classList.remove('activeLeft');
			GlassHome.classList.add('activeRight');
			GlassHome.classList.remove('activeBack');
			GlassHome.classList.remove('activeFront');
		}
		if (i == 3) {
			GlassHome.classList.remove('active');
			GlassHome.classList.remove('activeLeft');
			GlassHome.classList.remove('activeRight');
			GlassHome.classList.remove('activeFront');
			GlassHome.classList.add('activeBack');
		}
		if (i == 2) {
			GlassHome.classList.remove('active');
			GlassHome.classList.remove('activeLeft');
			GlassHome.classList.remove('activeRight');
			GlassHome.classList.remove('activeBack');
			GlassHome.classList.add('activeFront');
		}
		if (i == 4) {
			GlassHome.classList.remove('active');
			GlassHome.classList.remove('activeLeft');
			GlassHome.classList.remove('activeRight');
			GlassHome.classList.remove('activeBack');
			GlassHome.classList.remove('activeFront');
			GlassHome.classList.add('activeWorld');
			GlassHome.classList.remove('activeExit');
			GlassHome.classList.toggle('activeWorldGalaxy');
			GlassHomeButtonsItem[4].classList.toggle('active');
			GlassHomeButtonsItem[0].disabled = true;
			GlassHomeButtonsItem[0].style.opacity = '.3';
			GlassHomeButtonsItem[1].disabled = true;
			GlassHomeButtonsItem[1].style.opacity = '.3';
			GlassHomeButtonsItem[2].disabled = true;
			GlassHomeButtonsItem[2].style.opacity = '.3';
			GlassHomeButtonsItem[3].disabled = true;
			GlassHomeButtonsItem[3].style.opacity = '.3';
			GlassHomeButtonsItem[5].disabled = false;
			GlassHomeButtonsItem[5].style.opacity = '1';
		}
		if (i == 5) {
			GlassHome.classList.remove('active');
			GlassHome.classList.remove('activeLeft');
			GlassHome.classList.remove('activeRight');
			GlassHome.classList.remove('activeBack');
			GlassHome.classList.remove('activeFront');
			GlassHome.classList.remove('activeWorld');
			GlassHome.classList.add('activeExit');
			GlassHome.classList.remove('activeWorldGalaxy');
			GlassHomeButtonsItem[4].classList.remove('active');
			GlassHomeButtonsItem[0].disabled = false;
			GlassHomeButtonsItem[0].style.opacity = '1';
			GlassHomeButtonsItem[1].disabled = false;
			GlassHomeButtonsItem[1].style.opacity = '1';
			GlassHomeButtonsItem[2].disabled = false;
			GlassHomeButtonsItem[2].style.opacity = '1';
			GlassHomeButtonsItem[3].disabled = false;
			GlassHomeButtonsItem[3].style.opacity = '1';
			doorGlass.classList.add('open');
			GlassHomeButtons.classList.remove('show');
			GlassHomeFrontNow.classList.add('now');
			setTimeout(() => {
				doorGlass.classList.remove('open');
				doorGlass.classList.add('close');
				GlassHome.classList.remove('activeWorldGalaxy');
			}, 3000);
			setTimeout(() => {
				GlassVs.forEach(item => item.pause());
			}, 4600);
		}
	});
}
console['log']('%cAuthor and Creator Senior Developer Hovo Vardanyan', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');
console['log']('%cThe King Of CSS', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');