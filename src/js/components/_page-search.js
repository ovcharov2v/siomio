import Swiper from "swiper"
document.addEventListener('DOMContentLoaded', () => {
	const photoSliderList = document.querySelectorAll('.user__slider')
	if(!photoSliderList.length) return

	photoSliderList.forEach((photoSlider)=>{
		new Swiper(photoSlider, {
			slidesPerView: 1,
			loop: true,
		});
	})
})
