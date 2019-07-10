$(".img-wrap").hover(function() {
	$(this).find(".left-border").stop(true).animate({
		"top": "0"
	});
	$(this).find(".right-border").stop(true).animate({
		"top": "0"
	});
	$(this).find(".top-border").stop(true).animate({
		"left": "0"
	});
	$(this).find(".bottom-border").stop(true).animate({
		"left": "0"
	});
}, function() {
	$(this).find(".left-border").stop(true).animate({
		"top": "-180px"
	});
	$(this).find(".right-border").stop(true).animate({
		"top": "180px"
	});
	$(this).find(".top-border").stop(true).animate({
		"left": "-270px"
	});
	$(this).find(".bottom-border").stop(true).animate({
		"left": "270px"
	});
});
//二
$(".open-project").hover(function () {
	$(this).find(".open-old").stop(true).animate({
		"top":"-42px"
	});
	$(this).find(".open-con").stop(true).animate({
		"top":"0px"
	},function () {
		$(this).parent().css("border","1px solid red");
	});
	
	
},function () {
	$(this).find(".open-con").stop(true).animate({
		"top":"40px"
	});
	$(this).find(".open-old").stop(true).animate({
		"top":"0px"
	});
	$(this).css("border","1px solid #666")
});
//三
$(".send").hover(function () {
	$(this).children(".send-top").stop(true).animate({
		"top":"-22"
	});
	$(this).children(".send-bottom").stop(true).animate({
		"top":"42"
	});
	$(this).animate({
		"font-size":"20px"
	});
},function () {
	$(this).children(".send-top").stop(true).animate({
		"top":"0"
	});
	$(this).children(".send-bottom").stop(true).animate({
		"top":"20"
	});
	$(this).animate({
		"font-size":"1px"
	});
});

function outerFn() {
	console.log('Outer function');
	function innerFn() {
		console.log('Inner Function');
	}
}
console.log('innerFn():');
outerFn();
