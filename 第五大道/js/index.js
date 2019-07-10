$(document).ready(function () {
	$(".index-famous li").each(function (){
		$(this).hover(function() {
			$(this).find(".hotmiddle").css({
				"opacity":"1"
			});
			$(this).find(".leftline").animate({
				"height": '86px',
				
			},200);
			$(this).find(".topline").animate({
				"width": '168px',
				
			},200);
			$(this).find(".rightline").animate({
				"height": '86px',
				
			},200);
			$(this).find(".bottomline").animate({
				"width": '168px',
				
			},200);
			
		}, function() {
			$(this).find(".hotmiddle").css({
				"opacity":"0"
			});
			$(this).find(".leftline").animate({
				"height": '0',
			},200);
			$(this).find(".topline").animate({
				"width": '0',
			},200);
			$(this).find(".rightline").animate({
				"height": '0',
			},200);
			$(this).find(".bottomline").animate({
				"width": '0',
			},200);
			
		});
	});
	$(".index-famous li a").hover(function(){
		$(this).css({
				"color":"rgb(178, 130, 71)"
			});

	},function(){
		$(this).css({
				"color":"#000"
			});
	})

});