$(document).ready(function() {
	$(".detail-head").click(function() {
		if($(this).find("i").hasClass("icon-more")) {
			$(this).find("i").removeClass("icon-more").addClass("icon-up");
			$(this).siblings(".detail-content").slideDown("slow");
		} else {
			$(this).find("i").removeClass("icon-up").addClass("icon-more");
			$(this).siblings(".detail-content").slideUp("slow");

		}

	});

	//	订单
	$(".type").click(function() {
		$(this).css("color", "#ff811a").siblings(".type").css("color", "#666");
		$(this).css("border-color", "#ff811a").siblings(".type").css("border-color", "#eee");
	});
	//	加减
	var num;
	$(".less").click(function() {
		num = parseInt($(this).siblings(".num").text());
		num--;
		if(num < 0) {
			$(this).siblings(".num").text("0");
		} else {
			$(this).siblings(".num").text(num);
		}
		order();
	});
	$(".plus").click(function() {
		num = parseInt($(this).siblings(".num").text());
		num++;
		$(this).siblings(".num").text(num);
		order();
	});
	//	是否需要发票
	$(".need>span").click(function() {
		$(this).find("i").addClass("am-icon-check-circle color-01af63").removeClass("am-icon-circle-o");
		$(this).siblings().find("i").removeClass("am-icon-check-circle color-01af63").addClass("am-icon-circle-o");
		if($(this).find(".true").hasClass("am-icon-check-circle")) {
			$(this).parent().siblings().css("display", "block");
		} else {
			$(this).parent().siblings().css("display", "none");
		}
	});
	//	发票抬头
	$(".attribute>span").click(function() {
		$(this).find("i").addClass("am-icon-check-circle color-01af63").removeClass("am-icon-circle-o");
		$(this).siblings().find("i").removeClass("am-icon-check-circle color-01af63").addClass("am-icon-circle-o");
	});

	$(".invoice-type").click(function() {
		$(this).css("color", "#01af63").siblings().css("color", "#666");
		$(this).css("border-color", "#01af63").siblings().css("border-color", "#eee");
	});
	//	条约
	$(".treaty i").click(function() {
		if($(this).hasClass("am-icon-check-square-o")){
			$(this).addClass("am-icon-square-o color-666").removeClass("am-icon-check-square-o color-01af63");
		}else{
			$(this).removeClass("am-icon-square-o color-666").addClass("am-icon-check-square-o color-01af63");
			
		}
		
	});
	//	订单总额

	function order() {
		var price;
		var total = 0;
		$(".number .num").each(function() {
			price = parseInt($(this).text()).toFixed(1) * parseInt($(this).parent().siblings("span").find("span").text()).toFixed(1);
			console.log(total)
			total = total + price;

		});
		$("#total_price").text(total);
	};
});