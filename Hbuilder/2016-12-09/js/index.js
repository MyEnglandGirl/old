$(document).ready(function() {
	$("#title").css({
		"text-align": "center",
		"display": "block",
		"boolean ": "true"
	});
	var $title = ("#title");
	var $img = $("img");
	$("img").width("600px");
	$("img").height("300px");
	//	$($title.click(function() {
	//		console.log($title.css("boolean"));
	//		if($title.css("boolean") == "true") {
	//			$img.css({
	//				"display": "none",
	//				"boolean": "flase"
	//			});
	//		} else {
	//			$img.css({
	//				"display": "block",
	//				"boolean": "true"
	//			});
	//		}
	//	});

	//	$("#title").click(function () {//写法一
	//	var flag =$img.css("display");
	//		if (flag == "inline") {
	//			$img.css("display","none");
	//		}else{
	//			$img.css("display","inline");
	//		}
	//	});
	//
	//	$("#title").click(clickFun) //写法二
	//	function clickFun() {
	//		var flag = $img.css("display");
	//		if(flag == "inline") {
	//			$img.css("display", "none");
	//		} else {
	//			$img.css("display", "inline");
	//		}
	//	};
	//	//hover
	//	$("#result p").hover(function () {
	//		$(this).css("background-color","#d1d1d1");
	//	},function () {
	//		$(this).css("background-color","#fff");
	//	});

	$("#result p").hover(mouseenter, mouseleave);

	function mouseenter() {
		$(this).css("background-color", "#d1d1d1");
	};

	function mouseleave() {
		$(this).css("background-color", "#fff");
	};

	//
	$(window).keydown(function(e) {
		console.log(e.which);
		//不要用e.keyCode
	});

	//	$("#result").click(function (e) {//事件委托
	//		console.log(e.target);//e.target  js对象
	//		var $item = $(e.target).parent();//$(e.target)  jQary对象
	//		console.log($item);
	//		var flag = $(e.target).is("b");
	//		console.log(flag);
	//		if (flag) {
	//			$item.remove();
	//		}
	//	});

	$("#title").on("click", function() { //写法三
		var flag = $img.css("display");
		if(flag == "inline") {
			$img.css("display", "none");
			//			$img.show();
		} else {
			$img.css("display", "inline");
		}
	});
	//移除事件
	$("#remove").click(function() {
		$("#title").off("click");
	});

	//trigger
	setTimeout(function() {
		$("#result").trigger("click");
	}, 5000);
	//事件委托，简写版
	$("#result").on("click", "b", function() {
		$(this).parent().remove();
	});

	//自定义动画
	$("#btn").click(function() {
		$(this).animate({
			"width": "80px",
			"height": "60px",
			"padding": "10px",
			"margin-left": "40px",
			"font-size": "30px",
			"border-width": "4px",
			"opacity": "0.7"
		})
	});
	var $img = $("#content img");
	var $txt = $("#txt");
	var $btn = $("#btn");
	var $result = $("#result");
	$btn.click(function() {
		var comments = $txt.val();
		if(comments) {
			//创建元素
			var $comment = $("<p>" + comments + "<b>X</b></p>");
			$result.append($comment);
//			$result.prepend($comment);
		} else {
			alert("请填写评论")
		}
	});
});