// parallax scroll effect
const $parallax = document.querySelector('.parallax');
window.addEventListener('scroll', e =>
	$parallax.style.backgroundPositionY = window.pageYOffset * 0.8 + 'px'
)

// adding navbar menu styles when the page is scrolled
const $navbar = $('#navbar'),
	$navbarTitle = $('#navbar h3 a'),
	$navbarLinks = $('#navbar ul li a'),
	$navbarIcon = $('#navbar label');

const addColor = (color) => {
	$navbarTitle.css('color', color)
	$navbarIcon.css('color', color)
	$navbarLinks.css('color', color)
}
window.addEventListener('scroll', e => {
	if (window.scrollY > 100) {
		$navbar.css({
			'background': '#fff',
			'box-shadow': '0px 1px 2px 2px rgba(129, 50, 209, 0.28)',
			'position': 'sticky',
			'top': 0,
			'z-index': 1
		})
		addColor('#000')
	} else {
		$navbar.removeAttr('style')
		addColor('#fff')
	}
})

// tabs to change schedule date
const $tabs = document.querySelectorAll('[data-tab-target]'),
	$tabContents = document.querySelectorAll('[data-tab-content]'),
	$btn1 = document.querySelector('#btn1');

$btn1.classList.add('active')
$tabs.forEach(tab => {
	tab.addEventListener('click', e => {
		const target = document.querySelector(tab.dataset.tabTarget)
		$tabContents.forEach(tabContent =>
			tabContent.classList.remove('active')
		)
		$tabs.forEach(tab => tab.classList.remove('active'))
		setTimeout(() => {
			tab.classList.add('active')
			target.classList.add('active')
		}, 200);
	})
})

// Countdown Timer
// targetDate is 20 Dec 2020 at 09:00
const targetDate = new Date(2020, 12, 20, 9, 0, 0, 0);
const format = (num) => {
	str = num.toString(); // convert number to string
	return str.length > 1 ? str : '0' + str;
}

setInterval(() => {
	const remainingTime = targetDate - new Date(),
		dayRemaing = Math.floor(remainingTime / 1000 / 60 / 60 / 24),
		hourRemaing = Math.floor(remainingTime / 1000 / 60 / 60) % 24,
		minRemaing = Math.floor(remainingTime / 1000 / 60) % 60,
		secRemaing = Math.floor(remainingTime / 1000) % 60;

	$('.day').text(format(dayRemaing))
	$('.hour').text(format(hourRemaing))
	$('.minute').text(format(minRemaing))
	$('.second').text(format(secRemaing))
}, 10);