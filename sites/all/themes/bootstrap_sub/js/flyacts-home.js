(function($) {

	$(window).scroll(function() {
		if ($('.section2').length) {
			if ($(window).scrollTop() > $('.section2').offset().top-250) {
				$('.page-node-6 .section2').addClass('show');
			}
		}

		if ($('.section3').length) {
			if ($(window).scrollTop() > $('.section3').offset().top-250) {
				$('.page-node-6 .section3').addClass('show');
			}
		}

		if ($('.section3 .bubble-block').length) {
			if ($(window).scrollTop() > $('.section3 .bubble-block').offset().top-320) {
				if ($('.device-block .phone').css('opacity') == 1) {
					$('.section3 .bubble-block').addClass('bubble');
				}
			}
		}
	});

})(jQuery);