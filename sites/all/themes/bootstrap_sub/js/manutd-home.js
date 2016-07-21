(function($){

	$(document).ready(function() {
		// Add animation on scroll.
		var controller = new ScrollMagic.Controller();
		var image_block = new TimelineMax();

		image_block
			.to('.image-block img', 1, 
				{
					scale: 2.4, 
					ease:Power4.easeInOut, 
					onComplete: hide_block, 
					onUpdate: show_block
				}
			);

		function hide_block() {
		    $('.image-block img').addClass('scale-image-block');
		}

		function show_block() {
			$('.image-block img').removeClass('scale-image-block');
		}

		var ourScene = new ScrollMagic.Scene({
			triggerElement: '.language-block',
			triggerHook: 0.1,
			duration: '24%'
		})
		.setTween(image_block)
		.addTo(controller);
	});

})(jQuery);