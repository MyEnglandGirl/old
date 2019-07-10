//导航栏动画
$(".nav-con .container ul li a").hover(function() {
	$(this).css("background-color", "#e80808");
}, function() {
	$(this).css("background-color", "");
});
$(".nav-con .container ul li").hover(function() {
	$(this).find("div").stop(true).slideDown();
}, function() {

	$(this).find("div").stop(true).slideUp();
});

$(".subnav div a").hover(function() {
	$(this).css("background-color", "#e80808");
}, function() {
	$(this).css("background-color", "");
});

//风尚堂摄影作品展示
$(".product-con-left a").hover(function() {
	$(this).find(".small").stop(true).animate({
		'top': "0px"
	}, "slow");
}, function() {
	$(this).find(".small").stop(true).animate({
		'top': "352px"
	}, "slow");
});
$(".product-con-right a").hover(function() {
	$(this).find(".small").stop(true).animate({
		'top': "0px"
	}, "slow");
}, function() {
	$(this).find(".small").stop(true).animate({
		'top': "352px"
	}, "slow");
});
$(".product-con-center a").hover(function() {
	$(this).find(".big").stop(true).animate({
		'top': "0"
	}, "slow");
}, function() {
	$(this).find(".big").stop(true).animate({
		'top': "716px"
	}, "slow");
});

//唯美场景
$(".style-show-Con ul li").hover(function() {
	$(this).siblings().find("img").stop(true).animate({"opacity":"0.3"});
}, function() {
	$(this).siblings().find("img").stop(true).animate({"opacity":"1"});
});

//新闻资讯
$(".news-con .relative a").hover(function () {
	$(this).find("div").stop(true).animate({"opacity":"0"});
},function () {
	$(this).find("div").stop(true).animate({"opacity":"1"});
});
