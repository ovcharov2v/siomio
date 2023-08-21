import Swiper from "swiper"
document.addEventListener('DOMContentLoaded', () => {
	const photoSlider = document.querySelector('.user__slider')
	if(!photoSlider) return

	new Swiper(photoSlider, {
		slidesPerView: 1,
		loop: true,
	});
})
