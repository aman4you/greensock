(function($) {

	$(window).scroll(function() {
		if ($(window).scrollTop() > $('.section2').offset().top-250) {
			$('.section2').addClass('show');
		}

		if ($(window).scrollTop() > $('.section3').offset().top-250) {
			$('.section3').addClass('show');
		}

		if ($(window).scrollTop() > $('.section3 .bubble-block').offset().top-320) {
			if ($('.device-block .phone').css('opacity') == 1) {
				$('.section3 .bubble-block').addClass('bubble');
			}
		}
	});

})(jQuery);