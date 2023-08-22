import Hammer from 'hammerjs'

document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.page-notification__swipe-container')
	if(!container) return
	const manager = new Hammer.Manager(container)
	const Swipe = new Hammer.Swipe()
	manager.add(Swipe)

	manager.on('swipe', function (e) {
		const direction = e.offsetDirection
		const elems = container.querySelectorAll('.page-notification__swipe-elem:not(.page-notification__swipe-elem--like):not(.page-notification__swipe-elem--dislike)')
		if (elems.length) {
			const el = elems[elems.length - 1]
			if (direction === 8) {
				el.classList.add('page-notification__swipe-elem--like')
				setTimeout(() => {
					el.remove()
				}, 400)
			} else if (direction === 16) {
				el.classList.add('page-notification__swipe-elem--dislike')
				setTimeout(() => {
					el.remove()
				}, 400)
			}
		}
	});
})
