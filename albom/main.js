const albom = document.querySelector('.___');
const albomBlock = document.querySelector('.___ .--');
const context = document.querySelector('.___ .-_-__');
const page = document.querySelectorAll('.___ .-- .---');
const upload = document.querySelector('.___ ._-_-- input');
const faceGrid = document.querySelectorAll('.___ .-- .---.---- .____ img');
const pageImg = document.querySelectorAll('.___ .-- .---:not(.----) .e img');
let current = 0;
let deg = [0, 0, 0, 0, 0, 0];
let image = ['../img/1.jpg', '../img/2.jpg', '../img/3.jpg', '../img/4.webp', '../img/5.jpg', '../img/6.jpg', '../img/7.jpg', '../img/8.jpg', 'wingchun.jpeg'];
let mouseX;
let bool;
let z = 5;
let arrayZ = 0;
let full = ['cover', 'contain'];
Array.from(context.children).forEach((item, index) => item.onclick = () => (pageImg.forEach(img => img.style.objectFit = full[index]), Array.from(context.children).forEach(item => item.className = ''), item.className = 'active'));
albom.oncontextmenu = e => (context.style = `top: ${e.y}px; left: ${e.x}px; opacity: 1; visibility: visible;`, false);
context.firstElementChild.onmouseover = () => context.style.boxShadow = 'inset 0 40px 8px #000000cc';
context.lastElementChild.onmouseover = () => context.style.boxShadow = 'inset 0 -40px 8px #000000cc';
albom.onmousedown = e => (bool = true, mouseX = e.x, context.style.opacity = 0, context.style.visibility = 'hidden');
albom.onmouseup = () => bool = false;
albom.onmouseleave = () => bool = false;
upload.onchange = () => {
	upload.files.length > 9 ? arrayZ = 9 : arrayZ = upload.files.length;
	for (let i = 0; i < arrayZ; i++) {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(upload.files[i]);
		fileReader.onloadend = () => (image[i] = fileReader.result, pageImg.forEach((item, index) => item.src = image[index]), faceGrid.forEach((item, index) => item.src = image[index]));
	}
};
albom.onmousemove = e => {
	if (bool) {
		e.x < mouseX ? deg[current] > -180 ? deg[current] -= 3 : '' : e.x > mouseX ? deg[current] < 0 ? deg[current] += 3 : '' : '';
		for (let i = 0; i < current; i++) {
			page[i].style.rotate = `y -180deg`;
			page[i].style.transition = '.2s';
		}
		for (let i = page.length-1; i > current; i--) {
			page[i].style.rotate = `y 0deg`;
			page[i].style.transition = '.2s';
		}
		current > 0 ? albomBlock.style.left = '10%' : albomBlock.style.left = 0;
		page[current].style.rotate = `y ${deg[current]}deg`;
		page.forEach(item => item.getBoundingClientRect().right < innerWidth / 2 ? item.style.zIndex = 1 : item.style.zIndex = null);
		mouseX = e.x;
	}
};
page.forEach((item, index) => item.onmousedown = () => current = index);
console['log']('%cThe King Of CSS3 and Perfect JavaScript Writer', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');
console['log']('%cAuthor And Creator Hovo Vardanyan', 'font: bold 25px cursive;  padding: 10px; text-shadow: 0 3px 1px #ffb133, -3px 5px 4px #000;');
closePack.onclick = () => window.location.href = '../index.html';