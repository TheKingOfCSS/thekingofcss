document.documentElement.style.background = '#000';
document.body.style.opacity = 0;
window.onload = () => {
	let index = globalData.langIndex = localStorage.getItem('RollsRoyceHovoVardanyanInstructor') || 0;
	changeLangName(index);
	languageName.innerText = globalData.language[index].languageName;
	document.querySelectorAll('.langName').forEach((item, index) => item.innerText = globalData.language[globalData.langIndex].langItem[index]);
	setTimeout(() => {
		document.body.style.opacity = 1;
		document.body.style.transition = '2s';
	}, 1e2);
};
const changeLangName = index => {
	chiefTitle.innerText = globalData.language[index].chief;
	burgerName.innerText = globalData.language[index].burgerName;
	searchName.innerText = globalData.language[index].search;
	headerButton.firstElementChild.innerText = globalData.language[index].chiefBtn;
	cloneBlock2.firstElementChild.innerText = globalData.language[index].sec2Btn;
	cloneBlock2.children[1].firstElementChild.innerText = globalData.language[index].chiefBtn;
	bottomTitle.innerText = globalData.language[index].bottomTitleName;
	bottomSecond.innerText = globalData.language[index].bottomSecondName;
	document.querySelectorAll('.productName').forEach((item, index) => item.innerText = globalData.language[globalData.langIndex].bottomProduct[index]);
	document.querySelectorAll('.productDescr').forEach((item, index) => item.innerText = globalData.language[globalData.langIndex].bottomDescr[index]);
	document.querySelectorAll('.footList').forEach((item, Uindex) => item.querySelectorAll('li a').forEach((item, i) => !item.firstElementChild ? item.innerText = globalData.language[globalData.langIndex].footerInfo[Uindex][i] : (item.firstElementChild.innerText = globalData.language[globalData.langIndex].footerInfo[Uindex][i], item.lastElementChild.style.backgroundImage = globalData.flagFace[index])));
	Instructor.innerText = globalData.language[globalData.langIndex].Ins;
	document.querySelectorAll('.asideLink').forEach((item, index) => item.innerText = globalData.language[globalData.langIndex].navName[index]);
	findTitle.innerText = globalData.language[index].findName;
	findDescr.innerText = globalData.language[index].findDescr;
	document.querySelectorAll('.findPlace').forEach((item, index) => item.innerText = globalData.language[globalData.langIndex].findInp[index]);
	findButton.firstElementChild.innerText = globalData.language[index].findButton;
	Instructor.innerText = '';
	globalData.language[globalData.langIndex].Ins.forEach((item, index) => {
		const letter = AC('span');
		Instructor.append(letter);
		letter.innerHTML = globalData.language[globalData.langIndex].Ins[index];
		letter.className = 'letter';
	});
};
const AC = x => document.createElement(x);
const style = AC('style');
const awesome = AC('link');
awesome.rel = 'stylesheet';
awesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
const siteLogo = AC('link');
siteLogo.rel = 'shortcut icon';
siteLogo.href = 'img/icon.webp';
document.head.append(awesome, siteLogo, style);
style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        outline: 0;
        user-select: none;
        box-sizing: border-box;
    }
    html, a, button {
        cursor: none;
    }
    .ctBtn::after {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #fff;
    }
    .headerLine::after {
        content: '';
        position: absolute;
        top: -50%;
        left: 0;
        width: 2px;
        height: 50%;
        background: #fff;
        animation: line .8s linear infinite;
        transform-origin: bottom;
    }
    @keyframes line {
        to { top: 100%; scale: 0 .5; }
    }
	.letter {
		transition: .3s .3s;
	}
	.letter:hover {
		scale: 2;
		transition: none;
	}
`;
document.documentElement.style.scrollBehavior = 'smooth';
const globalData = Object.seal({
    language: Object.freeze([
        {
            burgerName: 'MENU',
            search: 'Find a dealer',
            chief: 'SPECTRE',
            chiefBtn: 'DISCOVER NOW',
            sec2Btn: 'BESPOKE IS ROLLS-ROYCE',
            bottomTitleName: 'EXPLORE FURTHER',
            bottomSecondName: 'CONTINUE YOUR JOURNEY',
            bottomProduct: ['SPECTRE VISUALISER', 'Boutique', 'Whispers'],
            bottomDescr: [
                'Begin the process of personally designing your all-electric motor car.',
                'Enhance your motor car with impressive finishing touches.',
                'Whispers gives Rolls-Royce owners access to a world beyond.'
            ],
            footerInfo: [
                [
                    'PRE-OWNED',
                    'FIND A DEALER',
                    'CAREERS'
                ],
                [
                    'COOKIES',
                    'EU TYRE LABELS',
                    'SITE MAP'
                ],
                [
                    'PRESSCLUB',
                    'FAQS',
                    'WHISPERS'
                ],
                [
                    'LEGAL',
                    'CONTACT',
                    'LANGUAGE'
                ],
                [
                    'COMPLAINTS',
                    'PRIVACY'
                ]
            ],
            languageName: 'LANGUAGE & LOCALE',
            langItem: ['English USA', 'Armenian', 'Russian'],
			navName: ['INSPIRING GREATNESS','MODELS','BESPOKE','OWNERSHIP','PROVENANCE','BOUTIQUE','MUSE ARTS PROGRAMME'],
			findName: 'FIND A DEALER',
			findDescr: 'You will be directed to the page of our authorised dealers. Rolls‑Royce Motor Cars Limited accepts no liability or responsibility for the information, views, or opinions contained therein.',
			findInp: ['City', 'Country'],
			findButton: 'SEARCH',
			Ins: ['I','n','s','t','r','u','c','t','o','r','&nbsp;','H','o','v','o','&nbsp;','V','a','r','d','a','n','y','a','n']
        },
        {
            burgerName: 'ՄԵՆՈՒ',
            search: 'Գտեք դիլեր',
            chief: 'Ուրվական',
            chiefBtn: 'ԲԱՑԱՀԱՅՏԵՔ ՀԻՄԱ',
            sec2Btn: 'ՊԱՏՎԻՐՎԱԾ Է ROLLS-ROYCE',
            bottomTitleName: 'ՈՒՍՈՒՄՆԱՍԻՐԵԼ ԱՅԼ',
            bottomSecondName: 'ՇԱՐՈՒՆԱԿԵ՛Ք ՁԵՐ ՃԱՆԱՊԱՐՀԸ',
            bottomProduct: ['ԴԻՏԵԼՈՎ ՍՊԵԿՏՐԸ', 'Բուտիկ', 'Շշուկներ'],
            bottomDescr: [
                'Սկսեք անձամբ նախագծել ձեր ամբողջովին էլեկտրական շարժիչով ավտոմեքենան:',
                'Ընդլայնեք ձեր շարժիչ մեքենան տպավորիչ ավարտական շոշափումներով:',
                'Whispers-ը Rolls-Royce-ի սեփականատերերին հնարավորություն է տալիս մուտք գործել մի աշխարհ այն կողմ:'
            ],
            footerInfo: [
                [
                    'ՆԱԽԱՊԱՏՎԱԾ Է',
                    'ԳՏԵՔ ԴԻԼԵՐ',
                    'ԿԱՐԻԵՐԱՆԵՐ'
                ],
                [
                    'Թխվածքաբլիթներ',
                    'Դողերի ՊԻՏԱԿՆԵՐ',
                    'ԿԱՅՔԻ ՔԱՐՏԵԶ'
                ],
                [
                    'ՊՐԵՍՍԿԼՈՒՄԲ',
                    'ՀՏՀ-ներ',
                    'Շշուկներ'
                ],
                [
                    'ԻՐԱՎԱԿԱՆ',
                    'ԿԱՊ',
                    'ԼԵԶՈՒ'
                ],
                [
                    'ԲՈՂՈՔՆԵՐ',
                    'ԳԱՂՏՆԻՈՒԹՅՈՒՆ'
                ]
            ],
            languageName: 'ԼԵԶՈՒ ԵՎ ՏԱՐԱԾԱՇՐՋԱՆ',
            langItem: ['Անգլերեն ԱՄՆ', 'Հայերեն', 'Ռուսերեն'],
			navName: ['ՈԳԵՇՆՉԻ ՄԵԾՈՒԹՅՈՒՆ','ՄՈԴԵԼՆԵՐ','ՊԱՏՎԻՐԱԾ','ՍԵՓԱԿԱՆՈՒԹՅՈՒՆ','ԾԱՂՈՒՄ','ԲՈՒՏԻԿ','MUSE ARTS ԾՐԱԳԻՐ'],
			findName: 'ԳՏԵՔ ԴԻԼԵՐ',
			findDescr: 'Դուք կուղղորդվեք մեր լիազորված դիլերների էջ: Rolls-Royce Motor Cars Limited-ը պատասխանատվություն կամ պատասխանատվություն չի կրում դրանում պարունակվող տեղեկատվության, տեսակետների կամ կարծիքների համար:',
			findInp: ['Քաղաք', 'Երկիր'],
			findButton: 'ՈՐՈՆՈՒՄ',
			Ins: ['Հ','ր','ա','հ','ա','ն','գ','ի','չ','&nbsp;','Հ','ո','վ','ո','&nbsp;','Վ','ա','ր','դ','ա','ն','յ','ա','ն']
        },
        {
            burgerName: 'МЕНЮ',
            search: 'Найти дилера',
            chief: 'Призрак',
            chiefBtn: 'УЗНАТЬ СЕЙЧАС',
            sec2Btn: 'ИНДИВИДУАЛЬНЫЙ ЗАКАЗ',
            bottomTitleName: 'УЗНАЙТЕ ДАЛЬШЕ',
            bottomSecondName: 'ПРОДОЛЖАЙТЕ СВОЕ ПУТЕШЕСТВИЕ',
            bottomProduct: ['ПРОСМОТР СПЕКТРА', 'Бутик', 'Шепот'],
            bottomDescr: [
                'Начните процесс индивидуального проектирования вашего полностью электрического автомобиля.',
                'Украсьте свой автомобиль впечатляющими штрихами.',
                'Whispers открывает владельцам Rolls-Royce доступ к запредельному миру.'
            ],
            footerInfo: [
                [
                    'ЗАКАЗАН',
                    'НАЙТИ ДИЛЕРА',
                    'КАРЬЕРА'
                ],
                [
                    'ПЕЧЕНЬЕ',
                    'ЭТИКЕТКИ',
                    'КАРТА САЙТА'
                ],
                [
                    'ПРЕСС-КЛУБ',
                    'вопросы',
                    'ШЕПОТ'
                ],
                [
                    'ЮРИДИЧЕСКИЙ',
                    'КОНТАКТ',
                    'ЯЗЫК'
                ],
                [
                    'ЖАЛОБЫ',
                    'КОНФИДЕНЦИАЛЬНОСТЬ'
                ]
            ],
            languageName: 'ЯЗЫК И РЕГИОН',
            langItem: ['Английский США', 'Армянский', 'Русский'],
			navName: ['ВДОХНОВЛЯЯ ВЕЛИЧИЕ','МОДЕЛИ','НА ЗАКАЗ','ВЛАДЕНИЕ','ПРОИСХОЖДЕНИЕ','БУТИК','ПРОГРАММА МУЗА ИСКУССТВА'],
			findName: 'НАЙТИ ДИЛЕРА',
			findDescr: 'Вы будете перенаправлены на страницу наших официальных дилеров. Rolls‑Royce Motor Cars Limited не несет ответственности за содержащуюся в нем информацию, взгляды или мнения.',
			findInp: ['Город', 'Страна'],
			findButton: 'ПОИСК',
			Ins: ['И','н','с','т','р','у','к','т','о','р','&nbsp;','Х','о','в','о','&nbsp;','В','а','р','д','а','н','я','н']
        }
    ]),
    burgerBool: true,
    searchDeg: 0,
    searchBool: true,
    langIndex: 0,
    productImage: ['img/p1.jpg', 'img/p2.jpg', 'img/p3.webp'],
    awesome: [
        'fa-brands fa-youtube',
        'fa-brands fa-square-facebook',
        'fa-brands fa-instagram',
        'fa-brands fa-linkedin',
        'fa-brands fa-twitter'
    ],
    flagFace: [
        'url(img/british.png)',
        'linear-gradient(#f00 33.3%, #00f 33.3% 66.6%, #fa0 66.6%)',
        'linear-gradient(#fff 33.3%, #00f 33.3% 66.6%, #f00 66.6%)'
    ],
    langBool: true,
    lineSize: [200, 150, 155]
});
const header = AC('header');
const headerTo = AC('div');
headerTo.className = 'headerLine';
header.append(headerTo);
headerTo.style = 'position: absolute; bottom: 0; left: 50%; translate: -50%; width: 3px; height: 130px; background: #fff3; overflow: hidden; transition: .3s;';
document.body.prepend(header);
const headerVideo = AC('video');
headerVideo.autoplay = true;
headerVideo.muted = true;
headerVideo.src = 'img/video1.mp4';
headerVideo.currentTime = 10;
header.setAttribute('style', 'height: 100vh; position: relative;');
headerVideo.setAttribute('style', 'width: 100%; height: 100%; object-fit: cover;');
headerVideo.onended = () => (headerVideo.play(), headerVideo.currentTime = 10);
const headerTop = AC('div');
headerTop.setAttribute('style', 'width: 100%; padding: 36px 10vw; position: fixed; top: 0; left: 50%; translate: -50%; border-bottom: 1px solid; border-image: linear-gradient(to right, transparent 10vw, #fff5 10vw 90vw, transparent 90vw) 1; display: flex; justify-content: space-between; align-items: center; z-index: 10; transition: .4s;');
header.append(headerVideo, headerTop);
const burgerMenu = AC('div');
burgerMenu.setAttribute('style', 'display: flex; align-items: center; column-gap: 12px; z-index: 11;');
burgerMenu.className = 'cursorActive';
headerTop.append(burgerMenu);
const burger = AC('div');
burger.setAttribute('style', 'width: 19px; height: 16px; display: flex; flex-wrap: wrap; align-content: space-between; overflow: hidden; transition: .3s;');
for (let i = 0; i < 3; i++) {
    const burgerLine = AC('span');
    burger.append(burgerLine);
    burgerLine.style = 'width: 100%; height: 2px; background: #fff; will-change: transform;';
    i == 0 ? burgerLine.style.background = 'linear-gradient(to right, #fff 55%, transparent 55% 73%, #fff 73%)' : '';
}
const burgerName = AC('b');
burgerMenu.append(burger, burgerName);
burgerName.innerText = globalData.language[globalData.langIndex].burgerName;
burgerName.style = 'color: #fff; font: 14px verdana;';
burgerMenu.onmouseenter = () => {
    if (globalData.burgerBool && burgerOpen && burgerActivate) {
        globalData.burgerBool = false;
        [...burger.children].forEach((item, index) => {
            item.style.translate = '-120%';
            item.style.transition = '.3s ' + index * .08 + 's';
            setTimeout(() => {
                if (burgerActivate) {
					item.style.translate = '100%';
					item.style.transition = 'none';
					setTimeout(() => {
						item.style.translate = 0;
						item.style.transition = '.3s ' + index * .08 + 's';
					}, 30);
				}
            }, (index + 80) * 5);
        });
        setTimeout(() => globalData.burgerBool = true, 800);
    }
};
let burgerOpen = true;
let burgerActivate = true;
burgerMenu.onclick = () => {
	if (burgerActivate) {
		burgerActivate = false;
		aside.style.height = innerHeight - header.children[2].offsetHeight + 'px';
		asideOverlay.style.background = `linear-gradient(transparent ${header.children[2].offsetHeight}px, #0005 ${header.children[2].offsetHeight}px)`;
		burger.style.scale = .8;
		setTimeout(() => burger.style.scale = null, 4e2);
		if (burgerOpen) {
			document.body.style.overflow = 'hidden';
			aside.style.left = 0;
			aside.style.transition = '.8s';
			document.querySelectorAll('.asideLink').forEach((item, index) => {
				item.style.translate = 0;
				item.style.transition = 'translate 1s ' + (index - globalData.language[globalData.langIndex].navName.length) * -.1 + 's, opacity .8s, color .8s';
				item.style.opacity = 1;
			});
			burger.children[1].style.opacity = 0;
			burger.children[0].style.rotate = '-45deg';
			burger.children[0].style.translate = '0 7px';
			burger.children[2].style.rotate = '45deg';
			burger.children[2].style.translate = '0 -7px';
			asideOverlay.style.opacity = 1;
			asideOverlay.style.visibility = 'visible';
		} else {
			aside.style.left = '-40%';
			aside.style.transition = '.9s .6s';
			document.body.style.overflow = null;
			document.querySelectorAll('.asideLink').forEach((item, index) => {
				item.style.translate = '-50vw';
				item.style.transition = 'translate 1s ' + index * .1 + 's, opacity .8s .4s, color .8s';
				item.style.opacity = 0;
			});
			asideOverlay.style.opacity = 0;
			asideOverlay.style.visibility = 'hidden';
			setTimeout(() => {
				burger.children[1].style.opacity = null;
				burger.children[0].style.rotate = null;
				burger.children[0].style.translate = null;
				burger.children[1].style.translate = null;
				burger.children[2].style.rotate = null;
				burger.children[2].style.translate = null;
			}, 15e2);
		}
		burgerOpen = !burgerOpen;
		setTimeout(() => burgerActivate = true, 17e2);
	}
};
const aside = AC('aside');
const asideOverlay = AC('div');
header.after(aside);
aside.after(asideOverlay);
aside.style = 'position: fixed; bottom: 0; left: -40%; width: 40%; backdrop-filter: blur(8px); z-index: 10; background: #0006; transition: left .7s; display: flex; flex-flow: column nowrap; align-items: flex-end; padding: 5% 7% 2% 0;';
asideOverlay.style = 'position: fixed; top: 0; right: 0; width: 60%; height: 100%; background: #0005; z-index: 12; transition: .8s .7s; opacity: 0; visibility: hidden;';
asideOverlay.onclick = () => {
	if (burgerActivate) {
		aside.style.left = '-40%';
		aside.style.transition = '.9s .6s';
		document.body.style.overflow = null;
		document.querySelectorAll('.asideLink').forEach((item, index) => {
			item.style.translate = '-50vw';
			item.style.transition = 'translate 1s ' + index * .1 + 's, opacity .8s .4s, color .8s';
			item.style.opacity = 0;
		});
		asideOverlay.style.opacity = 0;
		asideOverlay.style.visibility = 'hidden';
		setTimeout(() => {
			burger.children[1].style.opacity = null;
			burger.children[0].style.rotate = null;
			burger.children[0].style.translate = null;
			burger.children[1].style.translate = null;
			burger.children[2].style.rotate = null;
			burger.children[2].style.translate = null;
		}, 15e2);
		burgerOpen = true;
		setTimeout(() => burgerActivate = true, 17e2);
	}
};
globalData.language[globalData.langIndex].navName.forEach((item, index) => {
	const asideLink = AC('a');
	asideLink.href = '#';
	asideLink.innerText = item;
	aside.append(asideLink);
	asideLink.style = 'color: #a0a7b2; font: bold 1.2vw sans-serif; letter-spacing: 2px; translate: -50vw; opacity: 0; white-space: nowrap; margin-bottom: 8%;';
	asideLink.className = 'asideLink cursorActive';
	asideLink.onmouseover = () => asideLink.style.color = '#fff';
	asideLink.onmouseleave = () => asideLink.style.color = '#a0a7b2';
});
const logo = AC('a');
logo.className = 'cursorActive';
logo.href = 'index.html';
logo.title = 'Rolls-Royce';
burgerMenu.after(logo);
logo.setAttribute('style', 'background: url(img/logo.svg) no-repeat center / contain; width: 48px; height: 50px; transition: .5s;');
const searchBlock = AC('div');
searchBlock.onclick = () => findDealer.style.top = 0;
searchBlock.className = 'cursorActive';
searchBlock.style = 'display: flex; column-gap: 10px;';
logo.after(searchBlock);
const search = AC('div');
search.style = 'position: relative';
const searchRound = AC('div');
const searchLine = AC('div');
search.append(searchRound, searchLine);
searchRound.setAttribute('style', 'width: 14px; height: 14px; border: 2px solid #fff; border-radius: 50%; transition: .3s; clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 62%, 72% 62%, 72% 100%); will-change: transform;');
const searchName = AC('h3');
searchName.innerText = globalData.language[globalData.langIndex].search;
searchName.setAttribute('style', 'font: 14px verdana; color: #fff; text-transform: uppercase;');
searchLine.setAttribute('style', 'width: 2px; height: 8px; background: #fff; position: absolute; bottom: -3px; right: 3px; rotate: -40deg; transform-origin: top; transition: .3s;');
searchBlock.append(search, searchName);
searchBlock.onmouseenter = () => {
    if (globalData.searchBool) {
        globalData.searchBool = false;
        searchLine.style.scale = '1 0';
        globalData.searchDeg += 360;
        setTimeout(() => {
            searchRound.style.rotate = globalData.searchDeg + 'deg';
            searchRound.style.scale = .7;
            setTimeout(() => {
                searchRound.style.scale = null;
                searchLine.style.scale = null;
            }, 150);
        }, 1e2);
        setTimeout(() => globalData.searchBool = true, 600);
    }
};
const titleBlock = AC('div');
header.append(titleBlock);
const chiefTitle = AC('h1');
chiefTitle.innerText = globalData.language[globalData.langIndex].chief;
titleBlock.append(chiefTitle);
titleBlock.style = 'position: absolute; top: 50%; left: 50%; translate: -50% -50%;';
chiefTitle.style = 'color: #fff; font: 4.5rem verdana; text-shadow: 0 5px 4px #000;';
const headerButton = AC('button');
titleBlock.append(headerButton);
headerButton.innerHTML = `
    <span style="transition: .3s;">${globalData.language[globalData.langIndex].chiefBtn}</span>
    <svg width="16" height="16" style="scale: -1 1; translate: -10px; opacity: 0; transition: .3s;" viewBox="0 0 16 16">
        <path d="M13 9V7h3v2h-3zM7.03233022 1l1.43859292 1.43076034-4.58011387 4.55637467H10v2.02471813H3.89080927l4.58011387 4.55637466L7.03233022 15 0 8l.71777145-.71538017.71878813-.71639202L7.03233022 1z"></path>
    </svg>
`;
headerButton.style = 'padding: 15px 80px; border-radius: 30px; border: 0; display: flex; align-items: center; font: 14px verdana; letter-spacing: 2px; margin: 40px auto 0;';
headerButton.className = 'cursorActive';
headerButton.onmouseenter = e => {
    e.target.firstElementChild.style.translate = '-10px';
    e.target.lastElementChild.style.opacity = null;
    e.target.lastElementChild.style.translate = 0;
};
headerButton.onmouseleave = e => {
    e.target.firstElementChild.style.translate = 0;
    e.target.lastElementChild.style.opacity = 0;
    e.target.lastElementChild.style.translate = '-10px';
};
const section = AC('section');
header.after(section);
section.style = 'height: 100vh; background: url(img/rollsLogo.webp) no-repeat center / cover; position: relative;';
section.id = 'part2';
const cloneBlock2 = titleBlock.cloneNode(true);
section.append(cloneBlock2);
cloneBlock2.firstElementChild.innerText = globalData.language[globalData.langIndex].sec2Btn;
cloneBlock2.firstElementChild.style.whiteSpace = 'nowrap';
cloneBlock2.lastElementChild.onmouseenter = e => {
    e.target.firstElementChild.style.translate = '-10px';
    e.target.lastElementChild.style.opacity = null;
    e.target.lastElementChild.style.translate = 0;
};
cloneBlock2.lastElementChild.onmouseleave = e => {
    e.target.firstElementChild.style.translate = 0;
    e.target.lastElementChild.style.opacity = 0;
    e.target.lastElementChild.style.translate = '-10px';
};

const section2 = AC('section');
section.after(section2);
section2.style = 'height: 100vh;';
section2.id = 'part3';
const secVid = AC('video');
secVid.src = 'img/video2.mp4';
section2.append(secVid);
secVid.style = 'width: 100%; height: 100%; object-fit: cover;';
secVid.muted = true;
secVid.autoplay = true;
secVid.onended = () => secVid.play();
const SectionData = [header, section, section2];

const control = AC('div');
document.body.prepend(control);
control.style = 'position: fixed; top: 50%; translate: 0 -50%; left: 2%; transition: .4s; z-index: 10;';
for (let i = 0; i < 3; i++) {
    const ctBtn = AC('div');
    control.append(ctBtn);
    ctBtn.style = 'width: 25px; height: 25px; position: relative; display: grid; place-items: center; margin: 10px 0;';
    ctBtn.className = 'ctBtn cursorActive';
    ctBtn.innerHTML += `
        <svg width="30" height="30" style="position: absolute; top: -3px; left: -3px; rotate: -180deg; transition: .7s;">
            <circle cx="14.5" cy="14.5" r="8" fill="none" stroke="#fff" stroke-width="1" style="stroke-dasharray: 100; stroke-dashoffset: 100;"/>
        </svg>
    `;
    ctBtn.onclick = () => {
        svg.forEach(item => item.style.scale = 0);
        svgOffset = 100;
        current = i;
        svg[current].style.scale = null;
        svg[current].firstElementChild.style.strokeDasharray = 150;
		scrollTo(0, SectionData[current].offsetTop);
    };
}
const svg = document.querySelectorAll('.ctBtn svg');
let current = 0;
let svgOffset = 100;
let boolWheel = true;
let svgNext = setInterval(() => {
	if (burgerOpen) {
		if (boolWheel) {
			svg[current].firstElementChild.style.strokeDasharray = svgOffset;
			svgOffset += .1;
		}
		if (svgOffset >= 150) {
			current < 2 ? svg[current].style.scale = 0 : '';
			svgOffset = 100;
			current++;
			current == 3 ? (clearInterval(svgNext), svg.forEach(item => item.firstElementChild.style.strokeDasharray = 150)) : '';
			current < 3 ? scrollTo(0, SectionData[current].offsetTop) : '';
		}
	}
}, 10);

header.onwheel = e => {
 	if (boolWheel && burgerOpen) {
		svg.forEach(item => item.style.scale = 0);
		if (e.deltaY > 0) {
			current < 1 ? current++ : '';
		}
		svg[current].style.scale = null;
		svgOffset = 100;
		scrollTo(0, SectionData[current].offsetTop);
	}
	return false;
};
section.onwheel = e => {
 	if (boolWheel && burgerOpen) {
		svg.forEach(item => item.style.scale = 0);
		if (e.deltaY < 0) {
			current > 0 ? current-- : '';
		} else {
			current < 2 ? current++ : '';
		}
		svg[current].style.scale = null;
		svgOffset = 100;
		scrollTo(0, SectionData[current].offsetTop);
	}
	return false;
};
section2.onwheel = e => {
	if (e.deltaY < 0 && scrollY <= section2.offsetTop && burgerOpen) {
		svg.forEach(item => item.style.scale = 0);
		current > 1 ? current-- : '';
		scrollTo(0, SectionData[current].offsetTop);
		svg[current].style.scale = null;
		svgOffset = 100;
		return false;
	}
};
setInterval(() => boolWheel && scrollY <= section2.offsetTop && burgerOpen ? current < 3 ? scrollTo(0, SectionData[current].offsetTop) : '' : '', 800);
let set;
let pos;
let y = 0;
document.onmouseup = () => {
	if (burgerOpen) {
		svg.forEach(item => item.style.scale = 0);
		boolWheel = true;
		svg[current].style.scale = null;
		svgOffset = 100;
	}
};
document.onscroll = () => {
 	scrollY > y ? pos = true : pos = false;
 	y = scrollY;
 	SectionData.forEach((item, index) => scrollY + innerHeight > item.offsetTop && pos ? current = index : scrollY >= item.offsetTop && scrollY < item.offsetTop + item.offsetHeight && !pos ? current = index : '');
 	boolWheel = false;
	clearTimeout(set);
	set = setTimeout(() => boolWheel = true, 500);
    if (scrollY >= innerHeight / 2) {
        headerTop.style.padding = '5px 10vw';
        headerTop.style.backdropFilter = 'blur(10px)';
        headerTop.style.background = '#0005';
        logo.style.backgroundImage = 'url(img/logo2.svg)';
        logo.style.scale = .7;
        headerTo.style.opacity = 0;
        headerTop.style.border = 0;
    } else {
        headerTop.style.padding = '36px 10vw';
        logo.style.backgroundImage = 'url(img/logo.svg)';
        headerTop.style.backdropFilter = 'none';
        headerTop.style.background = null;
        logo.style.scale = null;
        headerTo.style.opacity = null;
        headerTop.style.border = '1px solid';
        headerTop.style.borderImage = 'linear-gradient(to right, transparent 10vw, #fff5 10vw 90vw, transparent 90vw) 1';
    }
    if (scrollY >= section2.offsetTop + section2.offsetHeight / 2) {
        control.style.opacity = 0;
        control.style.pointerEvents = 'none';
		clearInterval(svgNext);
		setTimeout(() => svg.forEach(item => item.firstElementChild.style.strokeDasharray = 150), 4e2);
    } else {
        control.style.opacity = 1;
        control.style.pointerEvents = 'auto';
    }
};
const cursor = AC('div');
document.body.prepend(cursor);
cursor.style = 'width: 14px; height: 14px; border: 1px solid #e3dede; position: fixed; top: -15px; left: -15px; border-radius: 50%; pointer-events: none; z-index: 11; transition: scale .2s; mix-blend-mode: difference;';
document.onmousemove = e => {
    cursor.style.top = e.y + 'px';
    cursor.style.left = e.x + 'px';
};
const bottomSection = AC('section');
section2.after(bottomSection);
bottomSection.style = 'background: #222; text-align: center; padding: 20vh 0 40px;';
const bottomTitle = AC('h2');
bottomTitle.style = 'color: #fff; font: 24px verdana;';
bottomTitle.innerText = globalData.language[globalData.langIndex].bottomTitleName;
const bottomSecond = AC('h3');
bottomSecond.style = 'color: #fff; font: 14px verdana; margin-top: 20px;';
bottomSecond.innerText = globalData.language[globalData.langIndex].bottomSecondName;
const bottomProduct = AC('div');
bottomSection.append(bottomTitle, bottomSecond, bottomProduct);
bottomProduct.style = 'margin: 4rem 10vw; display: flex;';
globalData.productImage.forEach((item, index) => {
    const pro = AC('div');
    pro.className = 'cursorActive';
    bottomProduct.append(pro);
    pro.style = 'width: calc(100% / 3); padding-right: 15px;';
    const imgParent = AC('div');
    imgParent.style = 'overflow: hidden; height: 400px;';
    const img = AC('img');
    img.alt = 'Img';
    img.src = item;
    img.style = 'width: 100%; height: 100%; object-fit: cover; transition: .5s;';
    imgParent.append(img);
    const textBlock = AC('div');
    textBlock.style = 'border-left: 1px solid #7C7C7C; padding: 20px; height: 150px; text-align: left;';
    pro.append(imgParent, textBlock);
    const productName = AC('h3');
    productName.className = 'productName';
    productName.style = 'color: #fff; font: 18px verdana; text-transform: uppercase;';
    productName.innerText = globalData.language[globalData.langIndex].bottomProduct[index];
    const descr = AC('p');
    descr.className = 'productDescr';
    descr.style = 'color: #c9c9c9; font: 14px verdana; margin-top: 15px;';
    textBlock.append(productName, descr);
    descr.innerText = globalData.language[globalData.langIndex].bottomDescr[index];
    pro.onmouseover = () => (img.style.scale = 1.05, img.style.filter = 'contrast(.9)');  
    pro.onmouseleave = () => (img.style.scale = 1, img.style.filter = null);  
});
const footer = AC('footer');
bottomSection.after(footer);
footer.style = 'position: fixed; bottom: 0; left: 0; width: 100%; background: #151515; z-index: -1; text-align: center; padding-top: 50px;';
const footerLogo = AC('img');
footerLogo.className = 'cursorActive';
footerLogo.alt = 'Img';
footerLogo.src = 'img/logo3.svg';
footer.append(footerLogo);
const footBlock = AC('div');
footerLogo.after(footBlock);
footBlock.style = 'border-top: 1px solid #3B3B3B; border-bottom: 1px solid #3B3B3B; margin: 40px 10vw 10px; padding: 15px 0; display: flex; justify-content: space-between; align-items: center; text-align: left;';
globalData.language[globalData.langIndex].footerInfo.forEach(item => {
    const list = AC('ul');
    list.className = 'footList';
    footBlock.append(list);
    item.forEach(item => {
        const listItem = AC('li');
        list.append(listItem);
        const footLink = AC('a');
        footLink.className = 'cursorActive';
        footLink.href = '#';
        footLink.innerText = item;
        listItem.append(footLink);
        listItem.onmouseover = () => footLink.style.color = '#bfbfbf';
        listItem.onmouseleave = () => footLink.style.color = '#fff';
        footLink.style = 'color: #fff; font: 12px/2.8 verdana; letter-spacing: 2px; text-transform: uppercase; padding: 2px 0; display: flex; align-items: center; transition: .3s;';
        if (footLink.innerText.toLowerCase().startsWith('language')) {
            footLink.removeAttribute('href');
            const langName = AC('span');
			langName.innerText = item;
            const langImg = AC('div');
            langImg.style = `background: ${globalData.flagFace[0]} no-repeat center / cover; width: 23px; height: 10px; margin-left: 10px;`;
			footLink.innerText = '';
            footLink.append(langName, langImg);
            footLink.onclick = () => {
                languageOverlay.style.top = 0;
                document.body.style.overflow = 'hidden';
            };
        }
    });
});
const InstructorName = AC('div');
InstructorName.style = 'display: flex; justify-content: center;';
const Instructor = AC('p');
footBlock.after(InstructorName);
InstructorName.append(Instructor);
globalData.language[globalData.langIndex].Ins.forEach((item, index) => {
	const letter = AC('span');
	Instructor.append(letter);
	letter.innerHTML = globalData.language[globalData.langIndex].Ins[index];
	letter.className = 'letter';
});
Instructor.style = 'color: #fff; font: 15px verdana; margin-bottom: 10px; letter-spacing: 3px; display: flex;';
Instructor.className = 'cursorActive';
const socialMedia = AC('div');
footBlock.append(socialMedia);
globalData.awesome.forEach(item => {
    const mediaLink = AC('a');
    mediaLink.href = '';
    mediaLink.className = item + ' cursorActive';
    socialMedia.append(mediaLink);
    mediaLink.style = 'color: #696969; transition: .2s; margin: 0 12px; font-size: 20px;';
    mediaLink.onmouseover = () => mediaLink.style.color = '#fff';
    mediaLink.onmouseleave = () => mediaLink.style.color = '#696969';
});
bottomSection.style.marginBottom = footer.offsetHeight + 'px';
const languageOverlay = AC('div');
document.body.append(languageOverlay);
languageOverlay.style = 'position: fixed; top: 100%; left: 0; width: 100%; height: 100%; background: #281432; z-index: 10; text-align: center; transition: 1s;';
const overlayTop = AC('div');
languageOverlay.append(overlayTop);
overlayTop.style = 'height: 85px; background: #1B0D2E; display: flex; justify-content: center; align-items: center;';
const closeOverlay = AC('div');
overlayTop.append(closeOverlay);
closeOverlay.style = 'width: 50px; height: 50px; border-radius: 50%; position: relative; display: flex; justify-content: space-between; flex-direction: column; align-items: center;';
closeOverlay.className = 'cursorActive';
closeOverlay.innerHTML = `
    <svg style="width: 50px; height: 50px; rotate: -90deg; position: absolute;">
        <circle cx="24" cy="24" r="23.5" fill="none" stroke="#6D30A6" stroke-width="1" style="stroke-dasharray: 150; stroke-dashoffset: 0;"/>
    </svg>
`;
let closeTime;
closeOverlay.onmouseenter = () => {
    closeOverlay.firstElementChild.firstElementChild.style.strokeDashoffset = 150;
    closeTime = setTimeout(() => {
        closeOverlay.firstElementChild.firstElementChild.style.transition = '.5s';
        closeOverlay.firstElementChild.firstElementChild.style.strokeDashoffset = 0;
    }, 100);
};
closeOverlay.onmouseleave = () => (closeOverlay.firstElementChild.firstElementChild.style.transition = 'none', clearTimeout(closeTime), closeOverlay.firstElementChild.firstElementChild.style.strokeDashoffset = 0);
const closeLine1 = AC('span');
const closeLine2 = AC('span');
closeOverlay.append(closeLine1, closeLine2);
closeLine1.style = 'width: 20px; height: 2px; background: #fff; transition: .5s; rotate: 45deg; translate: -1px 25px;';
closeLine2.style = 'width: 20px; height: 2px; background: linear-gradient(to right, #fff 50%, transparent 50% 73%, #fff 73%); transition: .5s; rotate: -45deg; translate: -1px -23px;';
closeOverlay.onclick = () => (languageOverlay.style.top = '100%', document.body.style.overflow = 'auto');
const languageName = AC('h2');
languageName.innerText = globalData.language[globalData.langIndex].languageName;
languageName.style = 'color: #fff; font: 30px verdana; letter-spacing: 1px; margin-top: 5%; transition: .5s;';
const langBlock = AC('div');
langBlock.style = 'display: flex; column-gap: 4rem; justify-content: center; margin-top: 5%;';
languageOverlay.append(languageName, langBlock);
globalData.language[globalData.langIndex].langItem.forEach((item, index) => {
    const line = AC('div');
    line.style = 'display: flex; align-items: center; column-gap: 15px; padding: 10px 0; white-space: nowrap; width: ' + globalData.lineSize[index] + 'px;';
    line.className = 'cursorActive';
    langBlock.append(line);
    const flag = AC('div');
    flag.style = `width: 25px; height: 15px; background: ${globalData.flagFace[index]} no-repeat center / cover;`;
    const name = AC('h3');
    name.innerText = item;
    name.style = 'color: #fff; font: 18px verdana; transition: .5s;';
    name.className = 'langName';
    line.append(flag, name);
    line.onclick = () => {
		localStorage.setItem('RollsRoyceHovoVardanyanInstructor', index);
        globalData.langIndex = index;
        changeLangName(index);
        if (globalData.langBool) {
            globalData.langBool = false;
            languageName.style.opacity = 0;
            document.querySelectorAll('.langName').forEach(item => item.style.opacity = 0);
            setTimeout(() => {
                languageName.style.opacity = 1;
                languageName.innerText = globalData.language[index].languageName;
                document.querySelectorAll('.langName').forEach((item, index) => (item.style.opacity = 1, item.innerText = globalData.language[globalData.langIndex].langItem[index]));
                setTimeout(() => globalData.langBool = true, 5e2);
            }, 5e2);
        }
    };
});
const findDealer = AC('div');
findDealer.style = 'position: fixed; top: 100%; left: 0; width: 100%; height: 100%; background: #281432; z-index: 10; text-align: center; transition: 1s;';
document.body.append(findDealer);
const findTop = overlayTop.cloneNode(true);
findDealer.append(findTop);
let closeFind;
findTop.firstElementChild.onmouseenter = () => {
    findTop.firstElementChild.firstElementChild.firstElementChild.style.strokeDashoffset = 150;
    closeFind = setTimeout(() => {
        findTop.firstElementChild.firstElementChild.firstElementChild.style.transition = '.5s';
        findTop.firstElementChild.firstElementChild.firstElementChild.style.strokeDashoffset = 0;
    }, 100);
};
findTop.firstElementChild.onmouseleave = () => (findTop.firstElementChild.firstElementChild.firstElementChild.style.transition = 'none', clearTimeout(closeFind), findTop.firstElementChild.firstElementChild.firstElementChild.style.strokeDashoffset = 0);
findTop.firstElementChild.onclick = () => findDealer.style.top = '100%';
const findTitle = AC('h2');
findTop.after(findTitle);
findTitle.innerText = globalData.language[globalData.langIndex].findName;
findTitle.style = 'color: #fff; margin: 5% 0 0; font: 36px sans-serif; letter-spacing: 1px;';
const findDescr = AC('p');
findTitle.after(findDescr);
findDescr.innerText = globalData.language[globalData.langIndex].findDescr;
findDescr.style = 'color: #fff; margin: 25px auto 50px; font: 12px/1.5 sans-serif; letter-spacing: 1px; width: 30%;';
const findForm = AC('form');
findForm.action = '#';
findForm.method = 'post';
findDescr.after(findForm);
globalData.language[globalData.langIndex].findInp.forEach(item => {
	const findRow = AC('div');
	findRow.style = 'position: relative; width: 31%; margin: 0 auto 50px;';
	const findInp = AC('input');
	const findPlace = AC('span');
	findPlace.className = 'findPlace';
	findRow.append(findInp, findPlace);
	findInp.name = 'f';
	findPlace.innerText = item;
	findForm.append(findRow);
	findInp.style = 'width: 100%; height: 52px; background: #1B0D2E; border: 0; border-bottom: 2px solid #676776; text-indent: 15px; color: #fff; font: 16px sans-serif; padding-top: 12px; cursor: none;';
	findPlace.style = 'position: absolute; left: 20px; top: 16px; color: #fff; font: 15px sans-serif; transition: .4s; pointer-events: none; will-change: transform;';
	findInp.onfocus = () => (findPlace.style.left = '3px', findPlace.style.top = '5px', findPlace.style.scale = '.8');
	findInp.onblur = () => findInp.value == '' ? (findPlace.style.left = '20px', findPlace.style.top = '16px', findPlace.style.scale = null) : '';
});
const findButton = headerButton.cloneNode(true);
findForm.after(findButton);
findButton.firstElementChild.innerText = globalData.language[globalData.langIndex].findButton;
findButton.style.background = '#6D30A7';
findButton.style.color = '#fff';
findButton.style.padding = '15px 100px';
findButton.style.transition = '.4s';
findButton.lastElementChild.style.fill = '#fff';
findButton.className = 'cursorActive';
findButton.onmouseenter = e => {
    e.target.firstElementChild.style.translate = '-10px';
    e.target.lastElementChild.style.opacity = null;
    e.target.lastElementChild.style.translate = 0;
	e.target.style.background = '#5d2196';
};
findButton.onmouseleave = e => {
    e.target.firstElementChild.style.translate = 0;
    e.target.lastElementChild.style.opacity = 0;
    e.target.lastElementChild.style.translate = '-10px';
	e.target.style.background = '#6D30A7';
};
document.querySelectorAll('.cursorActive').forEach(item => {
    item.addEventListener('mouseover', () => cursor.style.scale = 2.5);
    item.addEventListener('mouseleave', () => cursor.style.scale = null);
});
document.oncontextmenu = () => false;
document.addEventListener('keydown', e => e.ctrlKey || e.which == 123 ? e.preventDefault() : '');
console['log']('%cCreator Senior Developer Hovo Vardanyan', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');
console['log']('%cThe King Of CSS', 'font: bold 25px sans-serif; text-shadow: 0 3px 1px #33ff3b, -3px 5px 4px #000; padding: 10px;');
