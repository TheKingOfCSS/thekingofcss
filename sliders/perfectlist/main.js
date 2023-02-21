const slider = document.querySelectorAll('.slider .item .display');
const slideImg = document.querySelectorAll('.slider .item .display img');
const overlay = document.querySelector('.overlay');
const overlayImg = document.querySelector('.overlay .img');
const btnPrev = document.querySelector('.overlay .previous');
const btnNext = document.querySelector('.overlay .next');
const overlayClose = document.querySelector('.overlay .close');
const overlayInp = document.querySelectorAll('.overlay .radio input');
let cur;
let x;
let data = [];
slider.forEach((item, index) => {
    item.style.backgroundImage = `url(${item.firstElementChild.src})`;
    item.onclick = e => {
		cur = index;
		overlay.classList.add('open');
		overlayImg.style.backgroundImage = `url(${item.children[x = data[index] || 0].src})`;
		overlayInp[x].checked = true;
    };
    item.onmouseleave = () => {
        slideImg.forEach(item => item.style.opacity = 1);
        Array.from(item.children).forEach(item => item.style.opacity = 0);
    };
    item.onmouseover = () => Array.from(item.children).forEach(item => item.style.opacity = 1);
	Array.from(item.children).forEach((img, i) => {
		img.onclick = e => {
			data[index] = i;
			img.parentElement.style.backgroundImage = `url(${img.src})`;
			e.stopPropagation();
		};
	});
});
overlayClose.onclick = () => overlay.classList.remove('open');
btnNext.onclick = () => {
	x++;
	x == slider[cur].children.length ? x = 0 : '';
	data[cur] = x;
	overlayImg.style.backgroundImage = `url(${slider[cur].children[x].src})`;
	slider[cur].style.backgroundImage = `url(${slider[cur].children[x].src})`;
	overlayInp[x].checked = true;
};
btnPrev.onclick = () => {
    x--;
	x < 0 ? x = slider[cur].children.length-1 : '';
	data[cur] = x;
	overlayImg.style.backgroundImage = `url(${slider[cur].children[x].src})`;
	slider[cur].style.backgroundImage = `url(${slider[cur].children[x].src})`;
	overlayInp[x].checked = true;
};
overlayInp.forEach((item, index) => {
	item.onchange = () => {
		x = data[cur] = index;
		slider[cur].style.backgroundImage = `url(${slider[cur].children[x].src})`;
		overlayImg.style.backgroundImage = `url(${slider[cur].children[x].src})`;
	};
});
console['log']('%cAuthor and Creator Senior Developer Hovo Vardanyan', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');
closePack.onclick = () => window.location.href = '../index.html';