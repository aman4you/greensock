(function($) {

	$(document).ready(function() {
		if($('.right-slider').length) {
			$('.right-slider').slick({
				slidesToShow:1,
				slidesToScroll:1,
				autoplay: true,
				dots:true,
				arrows:false,
				autoplaySpeed:2000
			});
		}
	});

})(jQuery);