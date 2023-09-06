import Swiper from "swiper"
document.addEventListener('DOMContentLoaded', () => {
	const photoSlider = document.querySelector('.page-tariffs__slider')
	if(!photoSlider) return

	new Swiper(photoSlider, {
		slidesPerView: 2,
		centeredSlides: true,
		initialSlide: 1,
		slideActiveClass: 'page-tariffs__slide-box--active'
	});
})
