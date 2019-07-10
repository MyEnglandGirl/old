$(document).ready(function() {
	var flag = true;
	$("#navCon").click(function() {
		if(flag) {
			flag = false;
			$(this).animate({
				"right": "-40px"
			}, 500);
			$(".navRight").animate({
				"right": "0"
			}, 1000);
			$("#navCon i").attr("class", " icon-remove icon-white trans5");
			$(this).animate({
				"right": "20px"
			}, 1000);
		}else{
			flag = true;
			$(this).animate({
				"right": "-40px"
			}, 500);
			$(".navRight").animate({
				"right": "-400px"
			}, 1000);
			$("#navCon i").attr("class", "icon-align-justify icon-white trans5");
			$(this).animate({
				"right": "20px"
			}, 1000);
		}
	});
	
	$("#about").hover(function () {
		$(".navRight ol").animate({
			"right":"400px"
		},100);
	},function () {
			$(".navRight ol").animate({
			"right":"-325px"
		},100);
	});
	
	
});