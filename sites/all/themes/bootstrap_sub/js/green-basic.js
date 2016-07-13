(function($){

	$(document).ready(function() {
		var img = $(".page-node-1 img"),
			h2 = $(".page-node-1 h2"),
			h1 = $(".page-node-1 h1"),
			intro = $(".page-node-1 .intro"),
			listItem = $(".page-node-1 ul li"),
			buttons = $(".page-node-1 button"),
			tl = new TimelineLite();
			tl2 = new TimelineLite();

		tl
			.from(h1,0.3,{y:-15,autoAlpha:0,ease:Power1.easeOut})
			.from(intro,0.3,{y:-15,autoAlpha:0,ease:Power1.easeOut}, '-=0.15')
			.from(img,0.3,{y:-15,autoAlpha:0,ease:Power1.easeOut}, '-=0.15')
			.from(h2,0.3,{y:-15,autoAlpha:0,ease:Power1.easeOut}, '-=0.15')
			.from(listItem,0.3,{y:-15,autoAlpha:0,ease:Power1.easeOut}, '-=0.15');

		tl2
			.staggerTo(buttons, 0.2, {x:-30, ease:Power1.easeOut}, 0.1);

		tl.pause();

		$("#btnPlay").on("click",function(){
			tl.play();
		});

		$("#btnPause").on("click",function(){
			tl.pause();
		});

		$("#btnResume").on("click",function(){
			tl.resume();
		});

		$("#btnReverse").on("click",function(){
			tl.reverse();
		});

		$("#btnSpeedUp").on("click",function(){
			tl.timeScale(8);
		});

		$("#btnSlowDown").on("click",function(){
			tl.timeScale(.5);
		});

		$("#btnSeek").on("click",function(){
			tl.seek(1);
		});

		$("#btnProgress").on("click",function(){
			tl.progress(.5);
		});

		$("#btnRestart").on("click",function(){
			tl.restart();
		});
	});

})(jQuery);