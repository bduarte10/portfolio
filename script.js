let menu = document.getElementById('menu-hamburguer');
let toggle = document.querySelector('.menu-toggle');

menu.addEventListener('click', () => {
	menu.classList.toggle('fa-xmark');
	toggle.classList.toggle('active');
});

window.onscroll = () => {
	menu.classList.remove('fa-xmark');
	toggle.classList.remove('active');
};
