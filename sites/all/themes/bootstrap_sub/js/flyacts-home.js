(function($) {

	$(window).scroll(function() {
		if ($(window).scrollTop() > $('.section2').offset().top-250) {
			$('.section2').addClass('show');
		}
	});

})(jQuery);