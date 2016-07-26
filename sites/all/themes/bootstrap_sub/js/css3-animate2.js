(function($) {

	// $(window).scroll(function() {
	// 	$('.internet-area-main .slide-right').each(function() {
	// 		if ($(window).scrollTop() == $(this).offset().top - 400) {
	// 			console.log($('.internet-area-main .row').attr('class'));
	// 		}
	// 	})
	// });

	$(document).ready(function() {
		var controller = new ScrollMagic.Controller();

		$('.internet-area-main .slide-right').each(function() {
			var ourScene = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0.75
			})
			.on('start', callback)
			.addTo(controller);
		});

		function callback(event) {
			var triggerItem = this.triggerElement().className;
		}
	});

})(jQuery);