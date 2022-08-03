let menu = document.getElementById('menu-hamburguer');
console.log(menu);
let toggle = document.querySelector('.menu-toggle');

menu.addEventListener('click', () => {
	menu.classList.toggle('fa-xmark');
	toggle.classList.toggle('active');
});

function reachedTheLimit(minHeight = null) {
	minHeight = !minHeight || (typeof minHeight != "number") ? 150 : minHeight;

	// window.pageYOffset || document.documentElement.scrollTop // Alternativa?
	if (document.body.scrollTop >= minHeight || document.documentElement.scrollTop >= minHeight) {
		return true
	}

	return false
}

function srinkMenu(toTop = true) {
	toTop = (typeof toTop != "boolean") ? true : toTop;

	let menuContainer = document.querySelector('header > div.container');

	if (!menuContainer) {
		return
	}

	if (toTop) {
		menuContainer.classList.remove('p-0')
		return
	}

	menuContainer.classList.add('p-0')
}

window.onscroll = () => {
	menu.classList.remove('fa-xmark');
	toggle.classList.remove('active');

	let screenBased = (window.screen.height / 100) * 30;
	srinkMenu(reachedTheLimit(screenBased))
};
