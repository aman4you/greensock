(function($){

	$(document).ready(function() {
		var controller = new ScrollMagic.Controller();
		var parallaxTl = new TimelineMax();
		var parallaxTl2 = new TimelineMax();

		// Text block.
		parallaxTl
			.fromTo('.text-block', 1, 
				{y: -44, ease: Power2.easeNone}, 
				{y: 40, ease: Power2.easeNone},
			0.4);

		var slideParallexScene = new ScrollMagic.Scene({
			triggerElement: '#section02',
			triggerHook: 1,
			duration: '100%'
		})
		.setTween(parallaxTl)
		.addTo(controller);

		// Slide block.
		parallaxTl2
			.to('.slide-block', 1, 
				{right: 38, ease: Power2.easeNone},
			0.4);

		var slideParallexScene2 = new ScrollMagic.Scene({
			triggerElement: '#section02',
			triggerHook: 1,
			duration: '100%'
		})
		.setTween(parallaxTl2)
		.addTo(controller);
	});

})(jQuery);