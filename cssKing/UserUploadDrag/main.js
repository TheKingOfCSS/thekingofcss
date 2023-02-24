
const image = ['Cristiano Ronaldo.jpg', 'Jason Statham.jpg', 'Danna Garcia.jpg', 'Jackie Chan.jpg', 'Ximena Duque.jpg'];
const upload = document.querySelectorAll('.container .cell .card label input');
const cell = document.querySelectorAll('.container .cell');
const card = document.querySelectorAll('.container .cell .card');
const user = document.querySelectorAll('.container .cell .card .user');
const userName = document.querySelectorAll('.container .cell .card h3');
const deleteUser = document.querySelectorAll('.container .cell .card .close');
let curDrag = 0;

upload.forEach((item, index) => {
	item.oninput = () => {
		const reader = new FileReader();
		reader.readAsDataURL(item.files[0]);
		let name = item.files[0].name.slice(0, -4);
		reader.onload = () => {
			setTimeout(() => {
				user[index].style.backgroundImage = `url(${reader.result})`;
				userName[index].innerText = name;
				userName[index].classList.add('active');
				deleteUser[index].classList.add('active');
				user[index].style.marginBottom = '50px';
			}, 2000);
		};
		reader.onloadstart = () => {
			user[index].classList.add('active');
		};
		reader.onloadend = () => {
			setTimeout(() => {
				user[index].classList.remove('active');
			}, 2000);	
		};
	};
});

deleteUser.forEach((item, index) => {
	item.onclick = () => {
		deleteUser[index].classList.remove('active');
		user[index].style.backgroundImage = 'url(img/user.jpg)';
		user[index].style.marginBottom = '25px';
		userName[index].classList.remove('active');
	};
});


cell.forEach(item => {
	item.ondragover = e => {
		item.style.background = '#ccc';
		e.preventDefault();	
	};
	item.ondragleave = () => item.style.background = '#fff';
	item.ondrop = () => {
		item.style.background = '#fff';
		if (item.innerText == '') {
			item.append(card[curDrag]);
		}
	};
});

card.forEach((item, index) => {
	item.ondragstart = () => {
		item.style.opacity = 0;
		curDrag = index;
	};
	item.ondragend = () => {
		item.style.opacity = 1;
	};
});




