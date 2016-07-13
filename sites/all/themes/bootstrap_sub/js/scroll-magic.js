(function($){

	$(document).ready(function() {
		var controller = new ScrollMagic.Controller();

		// Pin intro.
		var pinIntroScene = new ScrollMagic.Scene({
			triggerElement: '#intro',
			triggerHook: 0,
			duration: '20%'
		})
		.setPin('#intro', {pushFollowers: false})
		.addTo(controller);

		// Again pin intro.
		var pinIntroScene2 = new ScrollMagic.Scene({
			triggerElement: '#project01',
			triggerHook: 0.5
		})
		.setPin('#intro', {pushFollowers: false})
		.addTo(controller);

		// Parallex scene.
		var parallaxTl = new TimelineMax();
		parallaxTl
			.from('.content-wrapper', 1, {autoAlpha: 0, ease: Power0.easeNone})
			.from('.bcg', 1, {y: '-50%', ease: Power0.easeNone}, 0);

		var slideParallexScene = new ScrollMagic.Scene({
			triggerElement: '.bcg-parallax',
			triggerHook: 1,
			duration: '100%'
		})
		.setTween(parallaxTl)
		.addTo(controller);

		// Fade in projects during scroll.
		$('.project').each(function() {
			var ourScene = new ScrollMagic.Scene({
				triggerElement: this.children[0],
				triggerHook: 0.75
			})
			.setClassToggle(this, 'fade-in')
			.addIndicators({
				name: 'fade scene',
				colorTrigger: 'blue',
				colorStart: 'black',
				colorEnd: 'red'
			})
			.addTo(controller);
		});
	});

})(jQuery);