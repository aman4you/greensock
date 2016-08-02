(function($){

	$(document).ready(function() {
		var controller = new ScrollMagic.Controller();

		// Slide natural.
		var slides = $(".slide-natural").toArray();

		for(var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
				triggerElement: slides[i],
				triggerHook: 0,
			})
			.setPin(slides[i])
			.addTo(controller);
		}

		// Slide manual.
		var wipeAnimation = new TimelineMax();

		wipeAnimation
			.fromTo(".slide-manual.second", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
			.fromTo(".slide-manual.first", 1, {x: "0%"}, {x: "100%", ease: Linear.easeNone}, 0)
			.fromTo(".slide-manual.second", 1, {y: "0%"}, {y: "-100%", ease: Linear.easeNone}, 1)
			.fromTo(".slide-manual.third", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}, 1)
			.fromTo(".slide-manual.fourth", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone});

		new ScrollMagic.Scene({
			triggerElement: '#pinContainer',
			triggerHook: "onLeave",
			duration: '300%'
		})
		.setPin('#pinContainer')
		.setTween(wipeAnimation)
		.addTo(controller);
	});

})(jQuery);