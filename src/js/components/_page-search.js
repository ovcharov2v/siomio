import Swiper from "swiper"
document.addEventListener('DOMContentLoaded', () => {
	const photoSliderList = document.querySelectorAll('.user__slider')
	if(!photoSliderList.length) return

	photoSliderList.forEach((photoSlider)=>{
		const slider = new Swiper(photoSlider, {
			slidesPerView: 1,
			loop: true,
		})

		const prevButton = photoSlider.parentNode.querySelector('.user__slider-nav-btn--prev')
		const nextButton = photoSlider.parentNode.querySelector('.user__slider-nav-btn--next')

		if(prevButton) {
			prevButton.addEventListener('click', () => {
				slider.slidePrev()
			})
		}

		if(nextButton) {
			nextButton.addEventListener('click', () => {
				slider.slideNext()
			})
		}
	})
})
