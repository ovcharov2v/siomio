document.addEventListener('DOMContentLoaded', () => {
	const infoBoxList = document.querySelectorAll('.user__info-box')
	if(!infoBoxList.length) return

	infoBoxList.forEach((infoBox) => {
		infoBox.addEventListener('click', () => {
			infoBox.classList.toggle('user__info-box--expanded')
		})
	})
})
