(function($){

	$(document).ready(function() {
		var controller = new ScrollMagic.Controller();
		var parallaxTl = new TimelineMax();

		// Slide block.
		parallaxTl
			.to('.slide-block', 1, 
				{left: 0, ease: Power2.easeNone},
			0.4);

		var slideParallexScene = new ScrollMagic.Scene({
			triggerElement: '#section02',
			triggerHook: 1,
			duration: '100%'
		})
		.setTween(parallaxTl)
		.addTo(controller);
	});

})(jQuery);