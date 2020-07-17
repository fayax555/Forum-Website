const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const btn1 = document.querySelector('#btn1')
const parallax = document.querySelector('.parallax');

// parallax scroll effect
window.addEventListener('scroll', e =>
	parallax.style.backgroundPositionY = window.pageYOffset * 0.8 + 'px'
)

// tabs to change schedule date
btn1.classList.add('active')
tabs.forEach(tab => {
	tab.addEventListener('click', e => {
		const target = document.querySelector(tab.dataset.tabTarget)
		tabContents.forEach(tabContent =>
			tabContent.classList.remove('active')
		)
		tabs.forEach(tab =>
			tab.classList.remove('active')
		)
		setTimeout(() => {
			tab.classList.add('active')
			target.classList.add('active')
		}, 200);
	})
})

// Countdown Timer
// targetDate is 20 Dec 2020 at 00:00
const targetDate = new Date(2020, 12, 20, 9, 0, 0, 0);

const $day = document.querySelector('.day'),
	$hour = document.querySelector('.hour'),
	$min = document.querySelector('.minute'),
	$sec = document.querySelector('.second');

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

	$day.textContent = format(dayRemaing)
	$hour.textContent = format(hourRemaing)
	$min.textContent = format(minRemaing)
	$sec.textContent = format(secRemaing)
}, 10);


