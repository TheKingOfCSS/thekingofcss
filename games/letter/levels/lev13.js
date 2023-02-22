const timeText = document.querySelector('.game .displey .time');
const starBlock = document.querySelector('.game .displey .starBlock');
const star = document.querySelectorAll('.game .displey .starBlock .star');
const letters = document.querySelectorAll('.game .letterBlock .letters h3');
const lettersBlock = document.querySelector('.game .letterBlock .letters ');
const GameOver = document.querySelector('.game .GameOver');
const repley = document.querySelector('.game .GameOver button');
const room = document.querySelector('.game .room');
const repley2 = document.querySelector('.game .room .repley');
const effect = document.querySelector('.game .effect');
const nextLevel = document.querySelector('.game .room .next');
const backLevel = document.querySelector('.game .room .back');
const backMenu = document.querySelector('.game .displey .backMenu');
const letterColumn = document.querySelectorAll('.game .letterBlock .letters .column');
backMenu.onclick = () => window.location.href = '../index.html';

setTimeout(() => effect.style.clipPath = 'circle(0)' , 1);

let time = 0;
let rand =  Math.floor(Math.random() * letters.length);
letters[rand].innerText = 'F';
let rainting = 3;
let current = 0;

let set = setInterval(function(){
    time++;
    timeText.innerText = time;
    if (time == 30){
        star[2].style = 'background: #fff; width: 30px; height: 30px;'
        rainting--;
    }else if (time == 45) {
        star[1].style = 'background: #fff; width: 30px; height: 30px;'
        rainting--;

    }else if (time == 60){
        star[0].style = 'background: #fff; width: 30px; height: 30px;'
        rainting--;

    }
    if(time == 70){
        clearInterval(set);
        clearInterval(opac);
		letters.forEach(item => item.style = 'pointer-events: none; color: #000; text-shadow: none;');
        letters[rand].style.color = '#f00';
		letterColumn.forEach(item => item.style = 'opacity: 1; transition: .5s;');
        setTimeout(() => GameOver.style.top = 0, 800);
    }

},1e3);


letters.forEach(item => {
    item.onclick = () => {
        if(item.innerText == 'F'){
            clearInterval(set);
            clearInterval(opac);
			letterColumn.forEach(item => item.style = 'opacity: 1; pointer-events: none; transition: .5s;');
			letters[rand].style = 'color: #0f0; text-shadow: 0 3px 5px #000;';
            localStorage.setItem('letLev13', rainting);
            setTimeout(() => {
				starBlock.style.animation = 'stars 1s forwards';
            	room.style = 'opacity: 1; visibility: visible; bottom: 30%;';
			}, 1000);
        }
    }
});
repley.onclick = () => location.reload();
repley2.onclick = () => location.reload();
nextLevel.onclick = () => {
    effect.style.clipPath = 'circle(100%)';
    effect.ontransitionend = () => location.href = 'lev14.html';
}
backLevel.onclick = () =>{
    effect.style.clipPath = 'circle(100%)';
    effect.ontransitionend = () => location.href = 'lev12.html';
};

let opac = setInterval(() => {
	letters.forEach(item => {
		let r = Math.random() * 255;
		let g = Math.random() * 255;
		let b = Math.random() * 255;
		item.style.color = `rgb(${r}, ${g}, ${b})`;
	});
	letterColumn.forEach(item => item.style.opacity = 0);
	letterColumn[current].style.opacity = 1;
	current++;
	current == letterColumn.length ? current = 0 : '';
}, 800);