const pizzaSliderBlock = document.querySelector('.Pizza .pizzaBlock');
const pizzaSlider = document.querySelector('.Pizza .pizzaBlock .pizzaSlide');
const pizzaSliderItems = document.querySelectorAll('.Pizza .pizzaBlock .pizzaSlide .item');
const pizzaSlidPrev = document.querySelector('.Pizza .pizzaBlock .btn.prev');
const pizzaSlidNext = document.querySelector('.Pizza .pizzaBlock .btn.next');
const pizzaSlidPlate = document.querySelector('.Pizza .pizzaBlock .plate');
const pizzaSlidName = document.querySelector('.Pizza .name');
const pizzaSlidPrice = document.querySelector('.Pizza .price span');
const pizzaSlidSizeBlock = document.querySelector('.Pizza');
const pizzaSlidSize = document.querySelectorAll('.Pizza .size button');
const pizzaSlidSizeHover = document.querySelector('.Pizza .size .hover');
const pizzaSlidSpeciesBlock = document.querySelector('.Pizza .spices');
const pizzaSlidSpeciesSlide = document.querySelector('.Pizza .spices .spicesSlide');
const pizzaSlidSpeciesSlideItems = document.querySelectorAll('.Pizza .spices .spicesSlide .item');
const pizzaSlidSpeciesAddItems = document.querySelectorAll('.Pizza .pizzaBlock .spec');
let pizzaCurrent = 0;
let pizzaBool = false;
let pizzaX;
let pizzaPlate = 0;
let pizzaSpeciesBool = false;
let pizzaSpeciesCurrent = -2;
let pizzaSpeciesX;

const pizzaData = {
	pizzaName: ['Monaco', 'Pepperoni', 'Bufalina', 'Tomato pie'],
	pizzaChords: [0, 60, 120],
	pizzaSizes: [.9, 1, 1.2],
	pizzaSizesPlate: [.95, 1, 1.15],
	pizzaSaveAs: [1,1,1,1],
	pizzaHoverSaveAs: [60,60,60,60],
	pizzaPrice: [1800, 2000, 2400, 3000],
	pizzaAllPrice: [
		[1700, 1800, 2000],
		[1800, 2000, 2200],
		[2200, 2400, 2600],
		[2800, 3000, 3200]
	],
	pizzaSpeciesZ: [
		[0,1,2,3,4],
		[1,0,1,2,3],
		[2,1,0,1,2],
		[3,2,1,0,1],
		[4,3,2,1,0]
	],
	pizzaZindex: 5,
	pizzaSaveSpecies: [
		[5,5,5,5,5],
		[5,5,5,5,5],
		[5,5,5,5,5],
		[5,5,5,5,5],
		[5,5,5,5,5],
	],
	pizzaSpeciesOpac: [
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],	
	],
};



pizzaSlidNext.onclick = () => {
	pizzaCurrent -= 1;
	pizzaCurrent < -3 ? pizzaCurrent = 0 : '';
	pizzaSlider.style.left = pizzaCurrent + '00%';
	pizzaPlate += 15;
	pizzaSlidPlate.style.transform = `translate(-50%, -50%) rotate(${pizzaPlate}deg) scale(${pizzaData.pizzaSaveAs[Math.abs(pizzaCurrent)]})`;
	pizzaSlidSizeHover.style.left = pizzaData.pizzaHoverSaveAs[Math.abs(pizzaCurrent)] + 'px';
	pizzaSlidName.innerText = pizzaData.pizzaName[Math.abs(pizzaCurrent)];
	pizzaSlidSpeciesAddItems.forEach((item, index) => {
		item.style = `transform: translate(-50%, -50%) scale(${pizzaData.pizzaSaveSpecies[Math.abs(pizzaCurrent)][index]}); opacity: ${pizzaData.pizzaSpeciesOpac[Math.abs(pizzaCurrent)][index]}; z-index: ${pizzaData.pizzaZindex}`;
	});
	let set = setInterval(() => {
		if (pizzaSlidPrice.innerText < pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
			pizzaSlidPrice.innerText = ++pizzaSlidPrice.innerText;
			if (pizzaSlidPrice.innerText == pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
				clearInterval(set);
			}
		} else {
			pizzaSlidPrice.innerText = --pizzaSlidPrice.innerText;
			if (pizzaSlidPrice.innerText == pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
				clearInterval(set);
			}
		}
	}, 5);
};

pizzaSlidPrev.onclick = () => {
	pizzaCurrent += 1;
	pizzaCurrent > 0 ? pizzaCurrent = -3 : '';
	pizzaSlider.style.left = pizzaCurrent + '00%';
	pizzaPlate -= 15;
	pizzaSlidPlate.style.transform = `translate(-50%, -50%) rotate(${pizzaPlate}deg) scale(${pizzaData.pizzaSaveAs[Math.abs(pizzaCurrent)]})`;
	pizzaSlidSizeHover.style.left = pizzaData.pizzaHoverSaveAs[Math.abs(pizzaCurrent)] + 'px';
	pizzaSlidName.innerText = pizzaData.pizzaName[Math.abs(pizzaCurrent)];
	pizzaSlidSpeciesAddItems.forEach((item, index) => {
		item.style = `transform: translate(-50%, -50%) scale(${pizzaData.pizzaSaveSpecies[Math.abs(pizzaCurrent)][index]}); opacity: ${pizzaData.pizzaSpeciesOpac[Math.abs(pizzaCurrent)][index]}; z-index: ${pizzaData.pizzaZindex}`;
	});
	let set = setInterval(() => {
		if (pizzaSlidPrice.innerText < pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
			pizzaSlidPrice.innerText = ++pizzaSlidPrice.innerText;
			if (pizzaSlidPrice.innerText == pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
				clearInterval(set);
			}
		} else {
			pizzaSlidPrice.innerText = --pizzaSlidPrice.innerText;
			if (pizzaSlidPrice.innerText == pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
				clearInterval(set);
			}
		}
	}, 5);
};

pizzaSliderBlock.onmousedown = e => {
	pizzaX = e.x;
	pizzaBool = true;
};
pizzaSliderBlock.onmouseup = () => pizzaBool = false;
pizzaSliderBlock.onmouseleave = () => pizzaBool = false;
pizzaSliderBlock.onmousemove = e => {
	if (pizzaBool) {
		if (e.x < pizzaX) {
			pizzaCurrent -= 1;
			pizzaCurrent < -3 ? pizzaCurrent = 0 : '';
			pizzaSlider.style.left = pizzaCurrent + '00%';
			pizzaBool = false;
			pizzaPlate += 15;
			pizzaSlidPlate.style.transform = `translate(-50%, -50%) rotate(${pizzaPlate}deg) scale(${pizzaData.pizzaSaveAs[Math.abs(pizzaCurrent)]})`;
			pizzaSlidName.innerText = pizzaData.pizzaName[pizzaCurrent * -1];
			pizzaSlidSizeHover.style.left = pizzaData.pizzaHoverSaveAs[Math.abs(pizzaCurrent)] + 'px';
			pizzaSlidSpeciesAddItems.forEach((item, index) => {
				item.style = `transform: translate(-50%, -50%) scale(${pizzaData.pizzaSaveSpecies[Math.abs(pizzaCurrent)][index]}); opacity: ${pizzaData.pizzaSpeciesOpac[Math.abs(pizzaCurrent)][index]}; z-index: ${pizzaData.pizzaZindex}`;
			});
			let set = setInterval(() => {
				if (pizzaSlidPrice.innerText < pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
					pizzaSlidPrice.innerText = ++pizzaSlidPrice.innerText;
					if (pizzaSlidPrice.innerText == pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
						clearInterval(set);
					}
				} else {
					pizzaSlidPrice.innerText = --pizzaSlidPrice.innerText;
					if (pizzaSlidPrice.innerText == pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
						clearInterval(set);
					}
				}
			}, 5);
		} else if (e.x > pizzaX) {
			pizzaCurrent += 1;
			pizzaCurrent > 0 ? pizzaCurrent = -3 : '';
			pizzaSlider.style.left = pizzaCurrent + '00%';
			pizzaBool = false;
			pizzaPlate -= 15;
			pizzaSlidPlate.style.transform = `translate(-50%, -50%) rotate(${pizzaPlate}deg) scale(${pizzaData.pizzaSaveAs[Math.abs(pizzaCurrent)]})`;
			pizzaSlidName.innerText = pizzaData.pizzaName[pizzaCurrent * -1];
			pizzaSlidSizeHover.style.left = pizzaData.pizzaHoverSaveAs[Math.abs(pizzaCurrent)] + 'px';
			pizzaSlidSpeciesAddItems.forEach((item, index) => {
				item.style = `transform: translate(-50%, -50%) scale(${pizzaData.pizzaSaveSpecies[Math.abs(pizzaCurrent)][index]}); opacity: ${pizzaData.pizzaSpeciesOpac[Math.abs(pizzaCurrent)][index]}; z-index: ${pizzaData.pizzaZindex}`;
			});
			let set = setInterval(() => {
				if (pizzaSlidPrice.innerText < pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
					pizzaSlidPrice.innerText = ++pizzaSlidPrice.innerText;
					if (pizzaSlidPrice.innerText == pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
						clearInterval(set);
					}
				} else {
					pizzaSlidPrice.innerText = --pizzaSlidPrice.innerText;
					if (pizzaSlidPrice.innerText == pizzaData.pizzaPrice[Math.abs(pizzaCurrent)]) {
						clearInterval(set);
					}
				}
			}, 5);
		}
	}
};


pizzaSlidSize.forEach((item, index) => {
    item.onclick = () => {
		pizzaData.pizzaHoverSaveAs[Math.abs(pizzaCurrent)] = pizzaData.pizzaChords[index];
        pizzaSlidSizeHover.style.left = pizzaData.pizzaChords[index] + 'px';
		pizzaSliderItems[Math.abs(pizzaCurrent)].firstElementChild.style.transform = `scale(${pizzaData.pizzaSizes[index]})`;
		pizzaData.pizzaSaveAs[Math.abs(pizzaCurrent)] = pizzaData.pizzaSizesPlate[index];
		pizzaSlidPlate.style.transform = `translate(-50%, -50%) rotate(${pizzaPlate}deg) scale(${pizzaData.pizzaSizesPlate[index]})`;
		pizzaData.pizzaPrice[Math.abs(pizzaCurrent)] = pizzaData.pizzaAllPrice[Math.abs(pizzaCurrent)][index];
		pizzaSlidPrice.innerText = pizzaData.pizzaAllPrice[Math.abs(pizzaCurrent)][index];
    };
	item.onmouseover = () => {
		pizzaSlidSizeHover.style.left = pizzaData.pizzaChords[index] + 'px';
		pizzaSlidSizeHover.style.transform = 'translateY(3px)';
	};
	item.onmouseleave = () => {
		pizzaSlidSizeHover.style.left = pizzaData.pizzaChords[index] + 'px';
		pizzaSlidSizeHover.style.transform = 'none';
	};
});
pizzaSlidSizeBlock.onmouseout = () => {
	pizzaSlidSizeHover.style.left = pizzaData.pizzaHoverSaveAs[Math.abs(pizzaCurrent)] + 'px';
};

pizzaSlidSpeciesBlock.onmousedown = e => {
    pizzaSpeciesX = e.x;
    pizzaSpeciesBool = true;
};

pizzaSlidSpeciesSlideItems[Math.abs(pizzaSpeciesCurrent)].style.filter = 'drop-shadow(0 16px 4px rgba(0,0,0,.5)) brightness(1)';
pizzaSlidSpeciesBlock.onmouseup = () => pizzaSpeciesBool = false;
pizzaSlidSpeciesBlock.onmouseleave = () => pizzaSpeciesBool = false;
pizzaSlidSpeciesBlock.onmousemove = e => {
    if (pizzaSpeciesBool) {
        if (e.x < pizzaSpeciesX) {
            pizzaSpeciesCurrent -= 1;
			pizzaSpeciesCurrent < -4 ? pizzaSpeciesCurrent = -2 : '';
            pizzaSlidSpeciesSlide.style.left = pizzaSpeciesCurrent + '00%';
			pizzaSlidSpeciesSlideItems.forEach((item, index) => {
				item.style = `--i:${pizzaData.pizzaSpeciesZ[Math.abs(pizzaSpeciesCurrent)][index]};`;
			});
			pizzaSlidSpeciesSlideItems[Math.abs(pizzaSpeciesCurrent)].style.filter = 'drop-shadow(0 16px 4px rgba(0,0,0,.5)) brightness(1)';
            pizzaSpeciesBool = false;
        } else if (e.x > pizzaSpeciesX) {
            pizzaSpeciesCurrent += 1;
			pizzaSpeciesCurrent > 0 ? pizzaSpeciesCurrent = -2 : '';
            pizzaSlidSpeciesSlide.style.left = pizzaSpeciesCurrent + '00%';
			pizzaSlidSpeciesSlideItems.forEach((item, index) => {
				item.style = `--i:${pizzaData.pizzaSpeciesZ[Math.abs(pizzaSpeciesCurrent)][index]};`;
			});
			pizzaSlidSpeciesSlideItems[Math.abs(pizzaSpeciesCurrent)].style.filter = 'drop-shadow(0 16px 4px rgba(0,0,0,.5)) brightness(1)';
            pizzaSpeciesBool = false;
        }
    }
};

pizzaSlidSpeciesSlideItems.forEach((item, index) => {
    item.onclick = () => {
		if (pizzaSlidSpeciesAddItems[index].style.transform != 'translate(-50%, -50%) scale(1)') {
			pizzaData.pizzaZindex++;
            pizzaSlidSpeciesAddItems[index].style = `transform: translate(-50%, -50%) scale(${pizzaData.pizzaSaveSpecies[Math.abs(pizzaCurrent)][index] = 1}); opacity: ${pizzaData.pizzaSpeciesOpac[Math.abs(pizzaCurrent)][index] = 1}; z-index: ${pizzaData.pizzaZindex}`;
			pizzaData.pizzaPrice[Math.abs(pizzaCurrent)] += 50;
			pizzaSlidPrice.innerText = pizzaData.pizzaPrice[Math.abs(pizzaCurrent)];
			pizzaData.pizzaAllPrice[Math.abs(pizzaCurrent)] = pizzaData.pizzaAllPrice[Math.abs(pizzaCurrent)].map(item => item += 50);
		} else {
			pizzaSlidSpeciesAddItems[index].style = `transform: translate(-50%, -50%) scale(5); opacity: ${pizzaData.pizzaSpeciesOpac[Math.abs(pizzaCurrent)][index] = 0};`;
			pizzaData.pizzaSaveSpecies[Math.abs(pizzaCurrent)][index] = 5;
			pizzaData.pizzaPrice[Math.abs(pizzaCurrent)] -= 50;
			pizzaSlidPrice.innerText = pizzaData.pizzaPrice[Math.abs(pizzaCurrent)];
			pizzaData.pizzaAllPrice[Math.abs(pizzaCurrent)] = pizzaData.pizzaAllPrice[Math.abs(pizzaCurrent)].map(item => item -= 50);
		}
    };
});
console.log('Senior Developer Hovo Vardanyan');
closePack.onclick = () => window.location.href = '../index.html';
