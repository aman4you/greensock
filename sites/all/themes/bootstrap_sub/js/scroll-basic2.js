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

		// Wipe content.
		var wipeContent = new TimelineMax();

		wipeContent
			.fromTo(".slide-natural.second h2", 1, {marginTop: "-526px"}, {marginTop: "120px", ease: Linear.easeNone});

		new ScrollMagic.Scene({
			triggerElement: '.slide-natural.first',
			triggerHook: 0,
			duration: '100%'
		})
		.setTween(wipeContent)
		.addTo(controller);

		// Move content.
		var moveContent = new TimelineMax();

		moveContent
			.to(".slide-natural.third h2", 1, {left: "26%", ease: Linear.easeNone})
			.to(".slide-natural.third h2", 1, {top: "50%", ease: Linear.easeNone})
			.to(".slide-natural.third h2", 1, {left: "-26%", ease: Linear.easeNone})
			.to(".slide-natural.third h2", 1, {top: "0%", ease: Linear.easeNone});

		new ScrollMagic.Scene({
			triggerElement: '.slide-natural.third',
			triggerHook: 0,
			duration: '400%'
		})
		.setTween(moveContent)
		.addTo(controller);

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