$(document).ready(function() {

//	setInterval(judge, 1000);
	//	var flag = false;
	$(".check").click(function() {
		if($(this).hasClass("am-icon-circle-o")) {
			$(this).removeClass("am-icon-circle-o");
			$(this).addClass("am-icon-dot-circle-o");
			judge();
		} else if($(this).hasClass("am-icon-dot-circle-o")) {
			$(this).addClass("am-icon-circle-o");
			$(this).removeClass("am-icon-dot-circle-o");
			//			flag = false;
			judge();
		}
	});
	//	减
	$(".amount-minus").click(function() {
		var $value = $(this).siblings("input").val();
		$value--;
		$(this).siblings("input").val($value);
		if($value <= 0) {
			$(this).siblings("input").val("0");
		}
		judge();
	});
	//	加
	$(".amount-plus").click(function() {
		var $value = $(this).siblings("input").val();
		$value++;
		$(this).siblings("input").val($value);
		if($value <= 0) {
			$(this).siblings("input").val("0");
		}
		judge();
	});
//		鼠标失去焦点计算
		$("input").on("input",judge);
	//	全选
	$(".check-all").click(function() {
		if($(this).hasClass("am-icon-circle-o")) {
			$(this).removeClass("am-icon-circle-o");
			$(this).addClass("am-icon-dot-circle-o");
			$(".check").removeClass("am-icon-circle-o");
			$(".check").addClass("am-icon-dot-circle-o");

		} else if($(this).hasClass("am-icon-dot-circle-o")) {
			$(this).addClass("am-icon-circle-o");
			$(this).removeClass("am-icon-dot-circle-o");
			$(".check").addClass("am-icon-circle-o");
			$(".check").removeClass("am-icon-dot-circle-o");
		}
		judge();
	});

	//	全选判断
	function judge() {
		var str = "";
		$(".check").each(function() {
			if($(this).hasClass("am-icon-circle-o")) {
				str = str + "1";

			} else if($(this).hasClass("am-icon-dot-circle-o")) {
				str = str + "2";
			}
			return str;
		});
		//		console.log(str);
		if(str.indexOf("1") >= 0) { //只要有1，取消全选str != "222"
			$(".check-all").addClass("am-icon-circle-o");
			$(".check-all").removeClass("am-icon-dot-circle-o");
		} else if(str.indexOf("1") == -1) { //全部是2，没有1， 全选
			//			没有1,str.indexOf()值是-1；
			$(".check-all").addClass("am-icon-dot-circle-o");
			$(".check-all").removeClass("am-icon-circle-o");
		}
//		jquery判断字符串中是否存在某个的字符串
		//		$(function(){
		//　　var str="sunny,woo";
		//　　var sear=new RegExp(',');
		//　　if(sear.test(str)){
		//  　　alert('Yes');
		//　　}
		//　　var tag=',';
		//　　if(str.indexOf(tag)!=-1){
		//  　　alert('Yes');
		//　　}
		//　　});

	
		//	总计
		var $check = $(".check");
		console.log($check);
		//				console.log($(".total"));	
		total = 0;
		number = 0;
		for(var i = 0; i < str.length; i++) {
			if(str.charAt(i) == 2) {
				console.log($check.eq(i));
				num = $check.eq(i).parents(".shop-con").find(".shop-number input").val();
				price = $check.eq(i).parents(".shop-con").find(".price").html();
				total += parseFloat(num).toFixed(1) * parseFloat(price).toFixed(1);

				number += parseFloat(num);

				console.log(total, number);

			}
		}
		total = parseFloat(total).toFixed(1);
		$(".total span").text(total);
		$(".balance span").text(number);
	};

	//	console.log(judge());
	//	删除
	$(".del-cart").click(function() {
		$(this).parents(".shop-con").remove();
		judge();
	});

	//	总计
	//	function total() {
	//		var $check = $(".check");
	//				console.log($check);
	//				
	//				total = 0;
	//				for(var i = 0; i < judge().length; i++) {
	//					if(judge().charAt(i) == 2) {
	//		
	//						console.log($check.eq(i));
	//						num = $check.eq(i).parents(".shop-con").find(".shop-number input").val();
	//						price = $check.eq(i).parents(".shop-con").find(".price").html();
	//						total += parseFloat(num) * parseFloat(price);
	//						console.log(total);
	//					}
	//				}
	//	};
	//	total();
});