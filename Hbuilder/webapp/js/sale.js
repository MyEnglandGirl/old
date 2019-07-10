$(document).ready(function() {
	var $sale = $(".sale-none");
	console.log($sale);
	var i = 0;
	$(window).on('scroll', function() {
		if($(window).scrollTop() >= $(document).height() - $(window).height()) {
			//$(".loading").css("display", "none");
			//$('.loading').delay(6000).hide(0);
			setTimeout(function() {
				$(".loading").show();
				$sale.eq(i).css("display", "block");
				$(".loading").insertAfter($sale.eq(i));
				i++;
				$(".loading").css("display", "block");
				if(i >= $sale.length) {
					$(".loading i").remove();
					$(".loading span").html("加载完成");
					$(".loading").addClass("am-padding-vertical-sm");
				}
			}, 1000);

		}
	});
	//	倒计时
	var intDiff = parseInt(100006); //倒计时总秒数量
	function timer(intDiff) {
		window.setInterval(function() {
			var day = 0,
				hour = 0,
				minute = 0,
				second = 0; //时间默认值        
			if(intDiff > 0) {
				day = Math.floor(intDiff / (60 * 60 * 24));
				hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if(minute <= 9) minute = '0' + minute;
			if(second <= 9) second = '0' + second;
			$('#day_show').html(day + "天");
			$('#hour_show').html('<s id="h"></s>' + hour + ':');
			$('#minute_show').html('<s></s>' + minute + ':');
			$('#second_show').html('<s></s>' + second);
			intDiff--;
		}, 1000);
	}
	$(function() {
		timer(intDiff);
	});
});