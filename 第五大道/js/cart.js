$(document).ready(function() {

	setInterval(num,500);
	setInterval(pricesum,500);

	//	全选  选择
	var flag = false;
	$(".check-all").click(function() {
		if(flag == false) {
			flag = true;
			flag1 = true;
			flag2 = true;
			$(".cart-table-th i").css({
				"background-position": "0 -20px"
			});
		} else {
			flag = false;
			flag2 = false;
			flag2 = false;
			$(".cart-table-th i").css({
				"background-position": "0 0"
			});
		}

	});

	var flag1 = false;
	$(".shop-one i").click(function() {
		if(flag1 == false) {
			flag1 = true;
			$(".shop-one i").css({
				"background-position": "0 -20px"
			});
		} else {
			flag1 = false;
			$(".shop-one i").css({
				"background-position": "0 0"
			});
		}
	});
	var flag2 = false;
	$(".shop-two i").click(function() {
		if(flag2 == false) {
			flag2 = true;
			$(".shop-two i").css({
				"background-position": "0 -20px"
			});
		} else {
			flag2 = false;
			$(".shop-two i").css({
				"background-position": "0 0"
			});
		}
	});
//	 $(".cart-checkbox>i").click(function () {
//	 	$(".shop-info").each(function () {
//	 		console.log($(this).find("i").attr("class"));
//	 		if($(this).find("i").attr("class") == "i-false"){
//	 			$(this).find("i").attr("class","i-true");
//	 		}else{
//	 			$(this).find("i").attr("class","i-false");
//	 		}
//			
//	 	});
//	 });
	//数量
	//	减
	$(".amount-minus").click(function() {
		var $input = $(this).siblings("input");
		var minus = $input.val();
		minus--;
		if(minus <= 0) {
			minus = 0;
			$input.val("0");
			$(this).parent(".shop-info").find("i").css({
				"background-position": "0 0"
			});
		} else {
			$input.val(minus);
			$(this).parent(".shop-info").find("i").css({
				"background-position": "0 0"
			});
		}

		var price = parseInt($(this).parent().siblings(".cart-price").find("span").text());

		var Osum = minus * price;
		Osum = Osum.toFixed(2);
		$(this).parent().siblings(".cart-sum").find("span").text(Osum);

		pricesum();
		num ();
	});
	//	加
	$(".amount-plus").click(function() {
		var $input = $(this).siblings("input");
		var minus = $input.val();
		minus++;
		if(minus <= 0) {
			minus = 0;
			$input.val("0");
		} else {
			$input.val(minus);
		}

		var price = parseInt($(this).parent().siblings(".cart-price").find("span").text());

		var Osum = minus * price;
		Osum = Osum.toFixed(2);
		$(this).parent().siblings(".cart-sum").find("span").text(Osum);

		pricesum(minus,price);
		num ();
	});

	//	总计
	function pricesum(minus,price) {
		
		var Osum = minus * price;
		Osum = Osum.toFixed(2);
		$(this).parent().siblings(".cart-sum").find("span").text(Osum);
		
		var pricesum = 0;
		$(".shop-info").each(function() {
			var price= parseInt($(this).find(".cart-price span").text());
			var minus = parseInt($(this).find(".cart-amount input").val());
			price = price*minus;
			price = price.toFixed(2);
			parseInt($(this).find(".cart-sum span").text(price));
			price = parseInt(price);
			pricesum = pricesum + price;
		});
		pricesum = pricesum.toFixed(2);
		$(".float-bar-wrapper .price-sum").text(pricesum);
	};
	pricesum();
	
	function num () {
		var num = 0;
		$(".shop-info").each(function() {
			price = parseInt($(this).find(".cart-amount input").val());
			num = num + price;
		});
		$(".float-bar-wrapper .num").text(num);
		$(".cart-filter ul .num").text(num);
	};
	num ();
//	删除
	$(".cart-op span").click(function () {
		console.log($(this).parents(".shop-info"));
		$(this).parents(".shop-info").remove();
	});
});