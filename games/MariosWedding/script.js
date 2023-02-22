const audio = new Audio('sound/theme.mp3');
const audio2 = new Audio('sound/theme2.mp3');
const audioJump = new Audio('sound/jump.mp3');
const audioKick = new Audio('sound/kick.mp3');
const audioCoin = new Audio('sound/coin.mp3');
const audioOver = new Audio('sound/gameover.mp3');
const audioSlide = new Audio('sound/slide.mp3');
const audioDown = new Audio('sound/down.mp3');
audio['volume'] = .6;
audio2['volume'] = .4;
audioOver['volume'] = .5;
audioCoin['volume'] = .15;
audioJump['volume'] = .15;
document['querySelector']('.menu .record span')['innerText'] = localStorage['getItem']('MarioYoshi') || 0;

class Tools {
    constructor(_ToolsData) {
        this['point'] = _ToolsData.point;
        this['meter'] = _ToolsData.meter;
        this['hero'] = _ToolsData.hero;
		this['enemy'] = _ToolsData.enemy;
		this['bat'] = _ToolsData.bat;
		this['cursor'] = _ToolsData.cursor;
		this['path'] = _ToolsData.path;
		this['mission'] = _ToolsData.mission;
		this['km'] = _ToolsData.km;
        this['recordElem'] = _ToolsData.recordElem;
    }
}

class ControlPanel {
	constructor(img, imgSize, imgPos) {
		this['img'] = img;
		this['imgSize'] = imgSize;
		this['imgPos'] = imgPos;
	}
}

class YourGame extends Tools {
    constructor(_ToolsData, _Basic) {
        super(_ToolsData);
        this['bg'] = _Basic.bg;
        this['gameBlock'] = _Basic.gameBlock;
		this['floor'] = _Basic.floor;
		this['gameOver'] = _Basic.gameOver;
		this['coin'] = _Basic.coin;
		this['pointText'] = _Basic.pointDisplay;
        this['hint'] = _Basic.hint;
        this['goodBat'] = _Basic.goodBat;
		this['castle'] = _Basic.castle;
    }
	jump(speed) {
        this['animBool'] = false;
		this['hero']['style']['animation'] = 'dinoJump '['concat'](speed, 's');
		this['hero']['onanimationend'] = () => (this['hero']['style']['animation'] = null, this['animBool'] = true);
	}
    slide(speed) {
        this['animBool'] = false;
		this['life'] ? (this['hero']['style']['animation'] = 'slide '['concat'](speed, 's'), audioSlide['play']()) : (this['hero']['style']['animation'] = 'slide2 '['concat'](speed, 's'), audioDown['play']());
		this['hero']['onanimationend'] = () =>(this['hero']['style']['animation'] = null, this['animBool'] = true);
	}
	#_event = ['onkeydown', 'oncontextmenu', 'onmousedown']
	check = null
	life = true
	coinBool = true
    animBool = true
    batBool = true
    mouth = null
    bullet = true
    plusCoin = 10
	pabloGoodBat = true
	pathBool = false
	endGame(...x) {
		if (this['life']) {
			setTimeout(() => this['life'] = false, 1500);
            audio['pause']();
            audio2['currentTime'] = .6;
            audio2['play']();
            this['bullet'] = false;
			this['hero']['style']['backgroundImage'] = 'url(img/yoshi.gif)';
			this['hero']['style']['borderRadius'] = '135px 113px 185px 42px';
			this['hero']['style']['width'] = '89px';
			this['hero']['style']['height'] = '94px';
			this['hero']['style']['backgroundSize'] = '100px 127px';
			this['hero']['style']['backgroundPosition'] = '-9px -19px';
			this['hero']['style']['transition'] = '.2s';
            this['coin']['forEach'](item => item['style']['animation'] = 'coin 14s linear infinite');
            this['coin'][1]['style']['animationDelay'] = '2s';
            this['coin'][2]['style']['animationDelay'] = '4.5s';
            this['coin'][3]['style']['animationDelay'] = '6.5s';
            this['hint'][0]['children'][1]['innerText'] = this['plusCoin'];
			this['pathBool'] = false;
            setTimeout(() => this['hint']['forEach'](item => {
                item['style']['opacity'] = 1;
                setTimeout(() => item['style']['opacity'] = 0, 2500);
            }),1000);
			this['cursor']['style']['background'] = '#000';
			this['cursor']['style']['boxShadow'] = 'inset 0 0 12px #7c7c7c, 0 0 8px #7b7b7b, 0 0 8px #3b3b3b';
			linkIcon['href'] = 'img/sad-mario.png';
		} else {
			clearInterval(this['check']);
            audio2['pause']();
            audioOver['play']();
			this['floor']['style']['animationPlayState'] = 'paused';
			this['gameBlock']['style']['animationPlayState'] = 'paused';
			this['enemy']['style']['animationPlayState'] = 'paused';
			this['coin']['forEach'](item => item['style']['animationPlayState'] = 'paused');
			this.#_event['forEach'](item => document[item] = null);
			this['hero']['style']['backgroundImage'] = 'url(img/deathYoshi.png)';
			this['hero']['style']['transform'] = 'translateY(40px) rotate(-140deg)';
			this['hero']['style']['transition'] = '.5s';
			this['hero']['ontransitionend'] = function() {
				this['style']['transform'] = 'translateY(400px) rotate(-140deg)';
			};
			this['gameOver']['style'] = 'opacity: 1; top: 28%;';
			setTimeout(() => location['reload'](), 3e3);
		}
	}
    create(obj) {
        this.hero.style = `
         background-image: url(${obj.img});
         background-size: ${obj.imgSize};
         background-position: ${obj.imgPos};
        `;
           this.gameBlock.style = `
         background-image: url(${this.bg});
         background-size: cover;
         background-position: 0 100%;
        `;
		this.enemy.style = `
		 background-image: url(${obj.enemyImg});
         background-size: ${obj.enemyImgSize};
         background-position: ${obj.enemyImgPos};
		`;
		const live = () => {
			this['hero']['style']['top'] = this['floor']['offsetTop'] - this['hero']['offsetHeight'] / 1.07 + 'px';
			this['enemy']['style']['top'] = this['floor']['offsetTop'] - this['enemy']['offsetHeight'] / 1.07 + 'px';
            this['life'] ? this['hero']['style']['setProperty']('--down', this['floor']['offsetTop'] - this['hero']['offsetHeight'] + 50 + 'px') : this['hero']['style']['setProperty']('--down', this['floor']['offsetTop'] - this['hero']['offsetHeight'] + 200 + 'px');
			this['hero']['style']['setProperty']('--jump', this['enemy']['offsetTop'] - 200 + 'px');
			window['requestAnimationFrame'](live);
		};
		live();
		this['check'] = setInterval(() => {
            this['meter'] > this['recordElem']['innerText'] ? localStorage['setItem']('MarioYoshi', Math['floor'](this['meter'])) : '';
			if (this['enemy']['offsetLeft'] < this['hero']['offsetLeft'] + this['hero']['offsetWidth'] - 10 && this['hero']['offsetTop'] + this['hero']['offsetHeight'] > this['enemy']['offsetTop'] && this['enemy']['offsetLeft'] + this['enemy']['offsetWidth'] > this['hero']['offsetLeft'] && this['hero']['offsetTop'] < this['enemy']['offsetTop'] + this['enemy']['offsetHeight']) {
				this['endGame']();
			}
			if (this['pathBool']) {
				this['meter'] += .02;
				this['path']['innerText'] = Math['floor'](this['meter']) + ' Meter';
				if (this['meter'] % 1e3 == 0) {
					this['mission']['innerText'] = --this['km'] + 'km';
				}
			}
			if (this['km'] == 0) {
				clearInterval(this['check']);
				this['bat']['style']['animation'] = 'new';
				this['enemy']['style']['animation'] = 'new';
				this['goodBat']['style']['animation'] = 'new';
				this['castle']['style']['right'] = '-80px';
				this.#_event['forEach'](item => document[item] = null);
				setTimeout(() => {
					this['floor']['style']['animationPlayState'] = 'paused';
					this['gameBlock']['style']['animationPlayState'] = 'paused';
					this['hero']['style']['left'] = '100%';
					this['hero']['style']['transition'] = 'left 4s linear';
					this['gameOver']['style'] = 'opacity: 1; top: 28%;';
					this['gameOver']['innerHTML'] = 'You Won <span style="color: #f00;">Mario</span>';
					setTimeout(() => location['href'] = 'end.html', 4e3);
				}, 4e3);
			}
			this['coin']['forEach'](item => {
				if (item['offsetLeft'] < this['hero']['offsetLeft'] + this['hero']['offsetWidth'] && item['offsetLeft'] + item['offsetWidth'] > this['hero']['offsetLeft'] && this['hero']['offsetTop'] + this['hero']['offsetHeight'] > item['offsetTop'] && this['coinBool']) {
					this['point']++;
                    audioCoin['currentTime'] = .3;
                    audioCoin['play']();
                    if(this['point'] % 5 == 0) {
                        this['goodBat']['style']['filter'] = 'hue-rotate(210deg)';
						this['goodBat']['style']['animation'] = 'enemy 8s linear 10s infinite, jumpBat 1s infinite';
						this['pabloGoodBat'] = false;
                    }
					item['style']['opacity'] = 0;
					this['coinBool'] = false;
					setTimeout(() => item['style']['opacity'] = 1, 15e2);
                       if(this['point'] == this['plusCoin']) {
                        this['life'] = true;
                        this['bullet'] = true;
                        this['hero']['style']['backgroundImage'] = 'url(img/mario.gif)';
                        this['hero']['style']['borderRadius'] = '52px 80px 82px 42px';
                        this['hero']['style']['width'] = '90px';
                        this['hero']['style']['height'] = '122px';
                        this['hero']['style']['backgroundSize'] = '128px 127px';
                        this['hero']['style']['backgroundPosition'] = '-18px -2px';
                        this['hero']['style']['transition'] = '.2s';
                        this['point'] = 0;
                        this['plusCoin'] += 5;
                        this['coinBool'] = true;
                        this['coin']['forEach'](item => item['style']['animation'] = 'coin 14s linear infinite');
						this['pabloGoodBat'] = true;
						this['goodBat']['style']['filter'] = 'none';
						this['goodBat']['style']['animation'] = 'enemy 8s linear 10s infinite';
                        this['cursor']['style']['background'] = null;
						this['cursor']['style']['boxShadow'] = null;
						linkIcon['href'] = 'img/mario.gif';
						this['pathBool'] = true;
                        audio['play']();
                        audio2['pause']();
                    }
					this['pointText']['innerText'] = this['point'];
				}
				if (this['hero']['offsetLeft'] > item['offsetLeft'] + item['offsetWidth']) {
					this['coinBool'] = true;
				}
			});
			if (this['bat']['offsetLeft'] < this['enemy']['offsetLeft'] + this['enemy']['offsetWidth'] && this['bat']['offsetLeft'] + this['bat']['offsetWidth'] > this['enemy']['offsetLeft'] && this['batBool']) {
                this['bat']['style']['bottom'] = '500px';
            }else {
                if(this['batBool']) {
                   this['bat']['style']['bottom'] = null;
                }
            }
            if(this['bat']['offsetLeft'] < this['hero']['offsetLeft'] + this['hero']['offsetWidth'] && this['bat']['offsetLeft'] + this['bat']['offsetWidth'] > this['hero']['offsetLeft'] && this['hero']['offsetTop'] < this['bat']['offsetTop'] + this['bat']['offsetHeight']){
                this['endGame']();
            };
			if(this['goodBat']['offsetLeft'] < this['hero']['offsetLeft'] + this['hero']['offsetWidth'] && this['hero']['offsetTop'] < this['goodBat']['offsetTop'] + this['goodBat']['offsetHeight'] && this['hero']['offsetTop'] + this['hero']['offsetHeight'] && this['goodBat']['offsetLeft'] + this['goodBat']['offsetWidth'] > this['hero']['offsetLeft'] && !this['pabloGoodBat']) {
				this['endGame']();
			}
		}, 1);
		document['onkeydown'] = ({which: up}) => {
			(up == 38 || up == 32) && this['animBool'] ? (this['jump'](1.5), audioJump['currentTime'] = .4, audioJump['play']()) : '';
            up == 40 && this['animBool'] ? this['slide'](1.5) : '';
		};
		document['oncontextmenu'] = () => {
			this['jump'](1.5);
            audioJump['currentTime'] = .4;
            audioJump['play']();
			return false;  
		};
		document['onmousedown'] = e => {
			if (e['button'] == 0 && this['bullet']) {
                audioKick['currentTime'] = 0;
                audioKick['play']();
                clearTimeout(this['mouth']);
				this['hero']['style']['clipPath'] = 'polygon(0 0, 0 100%, 100% 100%, 100% 66%, 75% 48%, 100% 24%, 100% 0)';
				const bullet = document['createElement']('div');
				this['gameBlock']['append'](bullet);
				bullet['style'] = `width: 17px; height: 17px; background: #f00; border-radius: 50%; box-shadow: inset 0 0 12px #ffb721, 0 0 8px #f00, 0 0 8px #f00; position: absolute; top: ${this['hero']['offsetTop'] + 50}px; left: ${this['hero']['offsetLeft'] + this['hero']['offsetWidth'] - 35}px; `;
				bullet['animate']([
					{ left: '110%', top: e['y'] + 'px', offset: 1, },
				], {
					duration: 1300,
					fill: 'forwards',
					easing: 'linear',
					direction: 'normal',
					delay: 0,
					iterations: 1
				});
                setInterval(() => {
                    bullet['offsetLeft'] >= window['innerWidth'] ? bullet['remove']() : '';
                    if(bullet['offsetLeft'] + bullet['offsetWidth'] > this['bat']['offsetLeft'] && bullet['offsetTop'] + bullet['offsetHeight'] > this['bat']['offsetTop'] && bullet['offsetTop'] < this['bat']['offsetTop'] + this['bat']['offsetHeight'] && bullet['offsetLeft'] < this['bat']['offsetLeft'] + this['bat']['offsetWidth']){
                        this['batBool'] = false;
                        this['bat']['style']['rotate'] = '90deg';
                        this['bat']['style']['bottom'] = '-520px';
                        this['bat']['style']['animationPlayState'] = 'paused';
                        this['bat']['ontransitionend'] = () => {
                            this['bat']['style']['animation'] = 'none';
                            setTimeout(() => {
                                this['bat']['style']['animation'] = 'enemy 8s linear infinite';
                                this['bat']['style']['rotate'] = '0deg';
                                this['bat']['style']['bottom'] = '300px';
                                this['bat']['style']['animationPlayState'] = 'running';
                            }, 200);
                        }
                    }
                },1);
			}
		};
		document['onmousemove'] = _ => {
			this['cursor']['style']['top'] = _['y'] - 7 + 'px';
			this['cursor']['style']['left'] = _['x'] - 8.5 + 'px';
		};
        document['onmouseup'] = e => {
          if(e['button'] == 0 && this['bullet']) {
           	this['mouth'] = setTimeout(() => {
				this['hero']['style']['clipPath'] = 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 75% 48%, 100% 52%, 100% 0)';
			}, 600);
		  }  
        };
    }
}
const dino = new YourGame({
	point: 0,
	meter: 0,
	hero: document['querySelector']('.dino'),
	enemy: document['querySelector']('.cactus'),
	bat: document['querySelector']('.batEnemy'),
	cursor: document['querySelector']('.game .cursor'),
	path: document['querySelector']('.game .path'),
	mission: document['querySelector']('.game .pointBlock .mission strong'),
	km: 100,
    recordElem: document['querySelector']('.menu .record span')
}, {
	bg: 'img/bg.jpg',
	gameBlock: document['querySelector']('.game'),
	floor: document['querySelector']('.game .floor'),
	gameOver: document['querySelector']('.game .gameOver'),
	coin: document['querySelectorAll']('.game .coin'),
	pointDisplay: document['querySelector']('.game .pointBlock b'),
    hint: document['querySelectorAll']('.game .hint .it'),
    goodBat: document['querySelector']('.game .dinoEnemy'),
    castle: document['querySelector']('.game .castle')
});
const dinoData = Reflect.construct(ControlPanel, ['img/mario.gif', '128px 127px', '-18px -2px']);
const enemyData = Reflect.construct(ControlPanel, ['img/cactus.png', '100px 130px', '-4px -1px']);
dino.create({
	"img": dinoData.img,
	"imgSize": dinoData.imgSize,
	"imgPos": dinoData.imgPos,
	"enemyImg": enemyData.img,
	"enemyImgSize": enemyData.imgSize,
	"enemyImgPos": enemyData.imgPos
});
let autoRotateBool = true;
(function autoRotate() {
	if (autoRotateBool) {
		const recordNameGame = document['querySelector']('.menu h3');
		let recordRotate = -10;
		let set = setInterval(() => {
			recordRotate += .1;	
			if (recordRotate >= 10) {
				clearInterval(set);
				let set2 = setInterval(() => {
					recordRotate -= .1;
					if (recordRotate <= -10) {
						clearInterval(set2);
						autoRotate();
					}
					recordNameGame['style']['backgroundImage'] = `linear-gradient(${recordRotate}deg, #f00 42%, #49ff6d 42%)`;
				}, 1);
			}
			recordNameGame['style']['backgroundImage'] = `linear-gradient(${recordRotate}deg, #f00 42%, #49ff6d 42%)`;
		}, 1);
	}
})();
const playGameStart = document['querySelector']('.menu .play');
playGameStart['onclick'] = () => {
	playGameStart['parentElement']['style']['clipPath'] = 'circle(0)';
    audio['play']();  
	document['querySelector']('.game .cactus')['style']['animation'] = 'enemy 10s linear infinite';
	document['querySelector']('.game .batEnemy')['style']['animation'] = 'enemy 8s linear 5s infinite';
	autoRotateBool = false;
	dino['pathBool'] = true;
};
playGameStart['parentElement']['onmousedown'] = e => e['stopPropagation']();
console['log']('%cBy The King Of CSS3', 'color: #000000; font: bold 2rem sans-serif; text-shadow: 0 3px 3px #fff, -4px 7px 7px #000; padding: 20px;');