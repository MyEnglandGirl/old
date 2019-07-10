$(document).ready(function() {

	
		$("li").hover(function() {
		var $index = $(this).index();
		$(this).css({
			"top": "-25px",
		});
//		console.log($(this).prevUntil(0, $index));
		$(this).prevUntil(0, $index).css({
			"top": "-25px",
		});
	}, function() {
		var $index = $(this).index();
		//	console.log($index);
		$(this).css({
			"top": "-0",
		});
		$(this).prevUntil(0, $index).css({
			"top": "0px",
		});
	});
	$("li").click(function () {
		var $index = $(this).index();
		$(this).parent().children("li").css({
			"top": "0px",
		});
		$(this).css({
			"top": "-25px",
		});
//		console.log($(this).prevUntil(0, $index));
		$(this).prevUntil(0, $index).css({
			"top": "-25px",
		});
		$(this).unbind('mouseleave');
	});
});