const timeText = document.querySelector('.game .displey .time');
const starBlock = document.querySelector('.game .displey .starBlock');
const star = document.querySelectorAll('.game .displey .starBlock .star');
const letters = document.querySelectorAll('.game .letterBlock .letters h3');
const lettersBlock = document.querySelector('.game .letterBlock .letters ');
const GameOver = document.querySelector('.game .GameOver');
const repley = document.querySelector('.game .GameOver button');
const room = document.querySelector('.game .room');
const repley2 = document.querySelector('.game .room .repley');
const nextLevel = document.querySelector('.game .room .next');
const effect = document.querySelector('.game .effect');
const backMenu = document.querySelector('.game .displey .backMenu');
backMenu.onclick = () => window.location.href = 'index.html';

setTimeout(() => effect.style.clipPath = 'circle(0)' , 10);

let time = 0 ;
let rand =  Math.floor(Math.random() * letters.length);
letters[rand].innerText = 'q';
let rainting = 3;

let set = setInterval(function(){
    time++;
    timeText.innerText = time;
    if (time == 1){
        star[2].style = 'background: #fff; width: 30px; height: 30px;'
        rainting--;
    }else if (time == 3) {
        star[1].style = 'background: #fff; width: 30px; height: 30px;'
        rainting--;

    }else if (time == 5){
        star[0].style = 'background: #fff; width: 30px; height: 30px;'
        rainting--;

    }
    if(time == 15){
        clearInterval(set);
		letters[rand].style.color = '#f00';
		letters.forEach(item => item.style.pointerEvents = 'none');
        setTimeout(() => GameOver.style.top = 0, 800);
    }

},1e3);

letters.forEach(item => {
    item.onclick = () => {
        if(item.innerText == 'q'){
            clearInterval(set);
            starBlock.style.animation = 'stars 1s forwards';
            lettersBlock.style.opacity = 0;
            lettersBlock.style.visibility = 'hidden';
            localStorage.setItem('letLev1', rainting);
            room.style = 'opacity: 1; visibility: visible; bottom: 30%;';
        }
    }
});
repley.onclick = () => location.reload();
repley2.onclick = () => location.reload();

nextLevel.onclick = () => {
    effect.style.clipPath = 'circle(100%)';
    effect.ontransitionend = () => location.href = 'levels/lev2.html';
}
