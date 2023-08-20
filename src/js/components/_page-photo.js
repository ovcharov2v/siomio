import Swiper from "swiper"
document.addEventListener('DOMContentLoaded', () => {
	const photoSlider = document.querySelector('.page-photo__slider')
	if(!photoSlider) return

	new Swiper(photoSlider, {
		slidesPerView: 2,
		spaceBetween: 16,
		centeredSlides: true,
		initialSlide: 1,
		slideActiveClass: 'page-photo__slide--active'
	});
})
