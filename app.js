const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const btn1 = document.querySelector('#btn1')
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



