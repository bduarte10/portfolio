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

function shrinkMenu(outOfTop = true) {
	outOfTop = (typeof outOfTop != "boolean") ? true : outOfTop;

	let menuContainer = document.querySelector('header > div.container');

	if (!menuContainer) {
		return
	}

	if (outOfTop) {
		menuContainer.classList.add('p-0')
		return
	}

	menuContainer.classList.remove('p-0')
}

function shrinkValidate(percentage = 30) {
	let screenBased = (window.screen.height / 100) * percentage;
	shrinkMenu(reachedTheLimit(screenBased))
}

window.onscroll = () => {
	menu.classList.remove('fa-xmark');
	toggle.classList.remove('active');

	shrinkValidate()
};
