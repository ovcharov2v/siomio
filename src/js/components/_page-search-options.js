import noUiSlider from 'nouislider'
document.addEventListener('DOMContentLoaded', () => {
	const ageSlider = document.querySelector('.range--age .range__slider')
	if(ageSlider) {
		noUiSlider.create(ageSlider, {
			range: {
				'min': 14,
				'max': 50
			},
			start: [20, 38],
			step: 1,
			behaviour: 'tap-drag',
			connect: true,
		})

		const ageMinValue = document.querySelector('.range--age .range__value-min')
		const ageMaxValue = document.querySelector('.range--age .range__value-max')
		ageSlider.noUiSlider.on('update', function (values, handle) {
			ageMinValue.innerText = Math.trunc(values[0])
			ageMaxValue.innerText = Math.trunc(values[1])
		});
	}

	const distanceSlider = document.querySelector('.range--distance .range__slider')
	if(distanceSlider) {
		noUiSlider.create(distanceSlider, {
			range: {
				'min': 1,
				'max': 200
			},
			start: 10,
			step: 1,
			behaviour: 'tap-drag',
			connect: true,
		})

		const distanceValue = document.querySelector('.range--distance .range__value')
		distanceSlider.noUiSlider.on('update', function (values, handle) {
			distanceValue.innerText = Math.trunc(values[0])
		});
	}
})
