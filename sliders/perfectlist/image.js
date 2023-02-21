const blockSlider = document.querySelector('.slider');
const AC = Q => document.createElement(Q);
let listImage = [
    [
        'img/17.jpg',
        'img/18.jpg',
        'img/19.jpg',
        'img/20.jpg'
    ],
    [
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg'
    ],
    [
        'img/21.jpg',
        'img/22.jpg',
        'img/23.jpg',
        'img/24.jpg'
    ],
    [
        'img/27.jpg',
        'img/26.jpg',
        'img/25.jpg',
        'img/28.jpg'
    ],
    [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg'
    ],
    [
        'img/13.jpg',
        'img/14.png',
        'img/15.jpg',
        'img/16.jpg'
    ],
    [
        'img/32.jpg',
        'img/29.jpg',
        'img/30.jpg',
        'img/31.jpg'
    ],
    [
        'img/34.jpeg',
        'img/33.jpg',
        'img/35.jpg',
        'img/36.jpg'
    ],
    [
        'img/37.jpg',
        'img/38.jpg',
        'img/39.jpg',
        'img/40.jpg'
    ],
    [
        'img/44.jpg',
        'img/42.jpg',
        'img/41.jpg',
        'img/43.webp'
    ],
    [
        'img/45.jpg',
        'img/46.jpg',
        'img/47.png',
        'img/48.jpg'
    ],
    [
        'img/9.jpg',
        'img/10.jpg',
        'img/11.jpg',
        'img/12.jpg'
    ],
    [
        'img/17.jpg',
        'img/18.jpg',
        'img/19.jpg',
        'img/20.jpg'
    ],
    [
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg'
    ],
    [
        'img/21.jpg',
        'img/22.jpg',
        'img/23.jpg',
        'img/24.jpg'
    ],
    [
        'img/27.jpg',
        'img/26.jpg',
        'img/25.jpg',
        'img/28.jpg'
    ],
    [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg'
    ],
    [
        'img/13.jpg',
        'img/14.png',
        'img/15.jpg',
        'img/16.jpg'
    ],
    [
        'img/32.jpg',
        'img/29.jpg',
        'img/30.jpg',
        'img/31.jpg'
    ],
    [
        'img/34.jpeg',
        'img/33.jpg',
        'img/35.jpg',
        'img/36.jpg'
    ],
    [
        'img/37.jpg',
        'img/38.jpg',
        'img/39.jpg',
        'img/40.jpg'
    ],
    [
        'img/44.jpg',
        'img/42.jpg',
        'img/41.jpg',
        'img/43.webp'
    ],
    [
        'img/45.jpg',
        'img/46.jpg',
        'img/47.png',
        'img/48.jpg'
    ],
    [
        'img/9.jpg',
        'img/10.jpg',
        'img/11.jpg',
        'img/12.jpg'
    ],
];

let listText = [
    'McLaren GT',
    'Audi TT',
    'Lamborghini Huracan',
    'BMW X6',
    'BMW X5',
    'Nissan GTR33',
    'Nissan GTR35',
    'Lexus RX',
    'Bugatti Veyron',
    'Tesla Roadster',
    'Toyota Fortuner',
    'Nissan Teana',
	'McLaren GT',
    'Audi TT',
    'Lamborghini Huracan',
    'BMW X6',
    'BMW X5',
    'Nissan GTR33',
    'Nissan GTR35',
    'Lexus RX',
    'Bugatti Veyron',
    'Tesla Roadster',
    'Toyota Fortuner',
    'Nissan Teana',
];

listImage.forEach((list, index) => {
    const item = AC('div');
    item.className = 'item';
    blockSlider.appendChild(item);
    const display = AC('div');
    item.appendChild(display);
    display.className = 'display';
    listImage[index].forEach((item, index) => {
        const img = AC('img');
        display.appendChild(img);
        img.src = item;
    });
    const textParent = AC('div');
    item.appendChild(textParent);
    textParent.className = 'nameParent';
    const text = AC('h2');
    textParent.appendChild(text);
    text.className = 'name';
    text.innerText = listText[index];
});
