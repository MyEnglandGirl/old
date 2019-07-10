$(".nav").hover(function () {
	$(this).css("background","url(img/navLink.gif)")
},function () {
	$(this).css("background","rgb(140,157,181)")
});
$(".menu li").hover(function () {
	$(this).find("a").css("text-decoration","underline");
},function () {
	$(this).find("a").css("text-decoration","none")
});
//$(".nav").click(function() {//css:line26
//	var $li = $(this).siblings(".menu").children("li");
//	var flag = $li.is(":hidden");
//	if(flag) {
//		$li.parents("li").siblings("li").find("li").slideUp();
//		$li.slideDown();
//	} else {
//		$li.slideUp();
// 	}
//});

$(".nav").click(function() {//css:line35
	var $ul = $(this).siblings(".menu");
	var flag = $ul.is(":hidden");
	if(flag) {
		$ul.parents("li").siblings("li").find("ul").slideUp();
		$ul.slideDown();
	} else {
		$ul.slideUp();
   	}
});