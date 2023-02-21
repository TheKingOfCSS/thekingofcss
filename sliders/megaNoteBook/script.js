const MegaWorkNoteBook = document.querySelector('.notebookBlock .noteBook');
const NoteBookTrailer = document.querySelector('.notebookBlock .noteBook .keyboadCube.screen .boardBottom');
const MegaWorkNoteBookScreen = document.querySelector('.notebookBlock .noteBook .keyboadCube.screen');
const controlBtn = document.querySelectorAll('.notebookBlock .control .mBtn');
const riter = document.querySelector('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardFrontBorder.tree .riter');
const riterDisc = document.querySelector('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardFrontBorder.tree .riter .rDisc .dblock');
const slideBig = document.querySelector('.notebookBlock .noteBook .keyboadCube.screen .boardTop .monitor .big');
const slideItem = document.querySelectorAll('.notebookBlock .noteBook .keyboadCube.screen .boardTop .monitor .big .item');
let cur = -100;
let slideBool = false;
const image = [
	[],
	['../img/1.jpg','../img/2.jpg','../img/3.jpg','../img/4.webp','../img/5.jpg','../img/1.jpg'],
	['../perfectlist/img/23.jpg','../perfectlist/img/21.jpg','../perfectlist/img/29.jpg','../perfectlist/img/44.jpg','../perfectlist/img/42.jpg','../perfectlist/img/23.jpg']
]
let openClose = true;
let discBool = true;
MegaWorkNoteBook.style.animation = 'NoteBookTrailer 15s ease forwards';
setTimeout(() => MegaWorkNoteBookScreen.classList.add('openScreen'), 9000);
const NoteBookKeyboardNeon = document.querySelectorAll('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardTop .keyboard .line .keybtn .kbottom');
const faceNeon = document.querySelectorAll('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardTop .keyboard .line .keybtn .kface');
const neonColor = ['transparent','#ff0000','#00dcff','#ef00ff','#ff4700','#00ff66','#5600ff','#ffe200','#ff006c'];
const filter = ['brightness(.5)','brightness(1)','brightness(1.5)','brightness(2)','contrast(1.5)','contrast(.5)','grayscale(.5)','grayscale(1)','hue-rotate(45deg)','hue-rotate(125deg)','hue-rotate(235deg)','hue-rotate(0)','invert(1)','saturate(2)','saturate(3)','saturate(4)','saturate(5)','saturate(10)','saturate(35)','saturate(1)','sepia(1)','brightness(3)','brightness(5)'];
const filterBtn = document.querySelectorAll('.k81, .k87, .k82, .k84, .k89, .k85, .k73, .k79, .k80, .k83, .k70, .k71, .k72, .k74, .k75, .k76, .k90, .k88, .k67, .k86, .k66, .k78, .k77');
const filterShiftLeft = document.querySelector('.ShiftLeft');
const filterShiftRight = document.querySelector('.ShiftRight');
const touch = document.querySelector('.notebookBlock .noteBook .keyboadCube:not(.screen) .boardTop .touch');
const scaleData = [.8, 'none'];
const scaleZoom = document.querySelectorAll('.k38, .k40');
let filterCur = 0;
let touchX;
let touchBool = false;
let neonCur = 0;
scaleZoom.forEach((item, index) => item.onclick = () => slideItem.forEach(item => item.style.scale = scaleData[index]));
neon.oninput = e => (neonCur = neon.value, neonChange(e.target.value));
const neonChange = val => (NoteBookKeyboardNeon.forEach((item, index) => (item.style.background = neonColor[val], item.style.transition = '.5s')), faceNeon.forEach((item, index) => item.style.boxShadow = 'inset 0px 0px 6px -1px ' + neonColor[val]));
const neonMain = () => (neonCur++, neonCur > 8 ? neonCur = 0 : '', neon.value = neonCur, neonChange(neon.value));
document.onkeydown = e => (faceNeon.forEach(item => (item.classList[1] && item.classList[1].slice(1) == e.which || item.classList[1] && item.classList[1] == e.code ? (item.style.background = 'linear-gradient(308deg, #cf0000, #000000de)', document.onkeyup = () => faceNeon.forEach(item => item.style.background = null)) : '', e.which == 65 || e.which == 37 ? prevSlide() : e.which == 68 || e.which == 39 ? nextSlide() : '')), filterBtn.forEach((item, index) => item.classList[1].slice(1) == e.which ? slideBig.style.filter = filter[index] : ''), scaleZoom.forEach((item, index) => item.classList[1].slice(1) == e.which ? slideItem.forEach(item => item.style.scale = scaleData[index]) : ''), e.code == 'ShiftLeft' ? filterPrevNext(1) : e.code == 'ShiftRight' ? filterPrevNext(-1) : '', !e.repeat && e.which == 32 ? neonMain() : '', loadBtn.forEach(item => !e.repeat && item.classList[1] == e.code || !e.repeat && item.classList[1].slice(1) == e.which ? loadMy() : ''), e.code == 'AltLeft' || e.code == 'AltRight' ? (sizeBtn.forEach(item => !e.repeat && item.classList[1] == e.code ? sizeChange() : ''), e.preventDefault()) : '');
faceNeon[71].onclick = neonMain;
const filterPrevNext = numeric => (filterCur += numeric, filterCur < 0 ? filterCur = filter.length-1 : filterCur == filter.length ? filterCur = 0 : '', slideBig.style.filter = filter[filterCur]);	
filterShiftLeft.onclick = () => filterPrevNext(1);
filterShiftRight.onclick = () => filterPrevNext(-1);
const loadMy = () => {
	slideBool = true;
	const inpData = new Array(5).fill(0);
	const inpL = document.createElement('input');
	inpL.type = 'file';
	inpL.multiple = true;
	inpL.accept = 'image/*';
	inpL.click();
	inpL.onchange = () => {
		inpData.forEach((item, index) => {
			const reader = new FileReader();
			inpL.files[index] ? reader.readAsDataURL(inpL.files[index]) : '';
			reader.onload = () => (slideItem[index].style.backgroundImage = `url(${reader.result})`, index == 0 ? slideItem[5].style.backgroundImage = `url(${reader.result})` : '');
		});
	};
};
let firstDisc = true;
touch.onmousedown = e => (touchBool = true, touchX = e.x);
controlBtn.forEach((item, index) => item.onclick = () => index != 0 && discBool ? (discBool = false, slideBool = true, rotateBtn.style = 'pointer-events: none; opacity: .5', controlBtn.forEach(item => item.style.background = null), item.style.background = '#00740b', MegaWorkNoteBook.style.animation = 'noteBookOpenDisc 1.5s forwards', riter.style.animation = 'kingOfCSS 1.5s forwards 1.5s', setTimeout(() => (riterDisc.style = firstDisc ? 'transform: translateX(15em) translateY(-30em); transition: none;' : 'transform: translateX(15em) translateY(-30em); transition: 1s;', setTimeout(() => (riterDisc.style = 'transform: translateX(.1em) translateY(.7em); opacity: 1;', setTimeout(() => (riter.style.animation = 'kingOfCSS2 1.5s forwards', setTimeout(() => (MegaWorkNoteBook.style.animation = 'noteBookOpenDisc2 1.5s forwards', slideItem.forEach((item, img) => item.style.backgroundImage = `url(${image[index][img]})`), setTimeout(() => (discBool = true, rotateBtn.style = null), 20e2)), 15e2)), 1e3)), 800)), 3e3), firstDisc = false) : '');
controlBtn[0].onclick = () => (openClose ? (MegaWorkNoteBookScreen.style.animation = 'MegaWorkNoteBookCloseScreen 1s linear forwards', controlBtn[0]['innerText'] = 'Բացել') : (MegaWorkNoteBookScreen.style.animation = 'MegaWorkNoteBookOpenScreen 1s linear forwards', controlBtn[0]['innerText'] = 'Փակել'), MegaWorkNoteBookScreen.onanimationend = () => openClose = !openClose);
touch.onmousemove = e => touchBool ? (e.x < touchX ? nextSlide() : e.x > touchX ? prevSlide() : '', touchX = e.x) : '';
const slideBtnPrev = document.querySelectorAll('.k39, .k68');
const slideBtnNext = document.querySelectorAll('.k37, .k65');
const nextSlide = () => slideBool ? (slideBool = false, cur -= 100, cur < -500 ? (slideBig.style.transition = 'none', cur = 0, setTimeout(() => (cur = -100, slideBig.style.left = cur + '%', slideBig.style.transition = '.4s'), 100)) : '', slideBig.style.left = cur + '%', setTimeout(() => slideBool = true, 4e2)) : '';
const prevSlide = () => slideBool ? (slideBool = false, cur += 100, cur > 0 ? (slideBig.style.transition = 'none', cur = -500, setTimeout(() => (cur = -400, slideBig.style.left = cur + '%', slideBig.style.transition = '.4s'), 100)) : '', slideBig.style.left = cur + '%', setTimeout(() => slideBool = true, 4e2)) : '';
slideBtnNext.forEach(item => item.onclick = () => prevSlide());
slideBtnPrev.forEach(item => item.onclick = () => nextSlide());
document.onmouseup = _ => touchBool = false;
const loadBtn = document.querySelectorAll('.ControlLeft, .ControlRight, .k13');
const sizeBtn = document.querySelectorAll('.AltLeft, .AltRight');
const sizeChange = () => slideItem.forEach(item => item.style.backgroundSize = item.style.backgroundSize != 'contain' ? 'contain' : 'cover');
sizeBtn.forEach(item => item.onclick = sizeChange);
filterBtn.forEach((item, index) => item.onclick = () => slideBig.style.filter = filter[index]);
loadBtn.forEach(item => item.onclick = loadMy);
const rotateBtn = document.querySelector('.notebookBlock .rotateBtn');
rotateBtn.onclick = () => {
	rotateBtn.style = 'pointer-events: none; opacity: .5';
	MegaWorkNoteBook.style.animation = 'kingOfCSS3 10s linear forwards';
	controlBtn.forEach((item, index) => index != 0 ? (item.style.pointerEvents = 'none', item.style.opacity = .5, setTimeout(() => (item.style.pointerEvents = 'auto', item.style.opacity = 1), 1e4)) : '');
};
console['log']('%cAuthor and Creator Senior Developer Hovo Vardanyan', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');
console['log']('%cThe King Of CSS', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');
closePack.onclick = () => window.location.href = '../index.html';