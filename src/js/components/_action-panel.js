document.addEventListener('DOMContentLoaded', () => {
	const actionButtonList = document.querySelectorAll('.action-panel__button')
	if(!actionButtonList.length) return

	actionButtonList.forEach((btn)=>{
		btn.addEventListener('click', () =>{
			btn.classList.toggle('action-panel__button--active')
		})
	})
})
