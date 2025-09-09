let toggle = document.querySelector('.header__toggle')

let toggleIf = false

const toggleStyle = () => {
	toggleIf = !toggleIf

	if (toggleIf) {
		toggle.children[0].style.display = 'none'
		toggle.children[1].classList.add('header__close')
		toggle.children[2].classList.add('header__close1')
	} else {
		toggle.children[0].style.display = 'block'
		toggle.children[1].classList.remove('header__close')
		toggle.children[2].classList.remove('header__close1')
	}
}

toggle.addEventListener('click', toggleStyle)
