import Hammer from 'hammerjs'

document.addEventListener('DOMContentLoaded', () => {
	const containerList = document.querySelectorAll('.page-notification__swipe-container')
	if(!containerList.length) return

	containerList.forEach((container)=>{
		const manager = new Hammer.Manager(container)
		const Swipe = new Hammer.Swipe()
		manager.add(Swipe)

		manager.on('swipe', function (e) {
			const direction = e.offsetDirection
			const elems = container.querySelectorAll('.page-notification__swipe-elem:not(.page-notification__swipe-elem--like):not(.page-notification__swipe-elem--dislike)')
			if (elems.length) {
				const el = elems[elems.length - 1]
				if (direction === 4) {
					el.classList.add('page-notification__swipe-elem--like')
					setTimeout(() => {
						el.classList.remove('page-notification__swipe-elem--like')
					}, 400)
				} else if (direction === 2) {
					el.classList.add('page-notification__swipe-elem--dislike')
					setTimeout(() => {
						el.classList.remove('page-notification__swipe-elem--dislike')
					}, 400)
				}
			}
		});
	})

})
