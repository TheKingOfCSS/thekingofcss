const gameMenu = document.querySelector('.gameMenu');
const menuLoading = document.querySelector('.gameMenu .loading-block .loading');
const menuLoadingValue = document.querySelector('.gameMenu .loading-block .progress-value');
const continueGame = document.querySelector('.gameMenu .control .continue');
const description = document.querySelector('.description');
const closeDescr = document.querySelector('.description .closeDescr');
const aboutInfo = document.querySelector('.gameMenu .control .about');

closeDescr.onclick = () => {
    description.style.display = 'none';  
};
aboutInfo.onclick = () => {
    description.style.display = 'block';  
};
window.onload = () => {
    if (localStorage.getItem('gameLevel') != null) {
        continueGame.style.display = 'block';
    }
};
continueGame.onclick = () => {
    let value = localStorage.getItem('gameLevel');
    window.location.href = `code/code${value}.html`;
};

let loadGame = setInterval(function() {
    let randValue = Math.round(Math.random() * 5);
    menuLoading.value += randValue;
    menuLoadingValue.childNodes[1].innerText = menuLoading.value + '%';
    if (menuLoading.value == 100) {
        gameMenu.classList.add('start');
        clearInterval(loadGame);
    }
}, 100);

const startButton = document.querySelector('.gameMenu .control .start');
startButton.onclick = function() {
    gameMenu.classList.add('hide');
};
const backMenu = document.querySelector('.levelsMenu .backMenu');
backMenu.onclick = function() {
    gameMenu.classList.remove('hide');
};
const effectPlayGame = document.querySelector('.effectPlayGame');
const levelsPlayButton = document.querySelectorAll('.levelsMenu .levels .item');
levelsPlayButton[0].onclick = function() {
    effectPlayGame.classList.add('active');
    setTimeout(() => {
        window.location.href = 'code/code1.html';
    }, 500);
};