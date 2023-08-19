import IMask from 'imask'
document.addEventListener('DOMContentLoaded', () => {
	const birthdayInput = document.querySelector('.page-birthday__input')
	if(!birthdayInput) return

	IMask(birthdayInput, {
		mask: 'mm/dd/yyyy',
		definitions: {
			d: {
				mask: '0',
				placeholderChar: '0',
			},
			m: {
				mask: '0',
				placeholderChar: '0',
			},
			y: {
				mask: '0',
				placeholderChar: '0',
			},
		},
		lazy: false,
	})
})
