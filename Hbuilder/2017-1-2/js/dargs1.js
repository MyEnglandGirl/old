function g(id) {
	var $object = $(id);

	var isDranging = false;

	$object.click(function() {}).mousedown(function(e) {
		isDranging = true;

		var e = e || event;
		//鼠标在div中的坐标
		moveOffsetX = e.pageX - parseInt($object.css("left"));
		moveOffsetY = e.pageY - parseInt($object.css("top"));

	});

	$(document).mousemove(function(e) {
		if(isDranging === true) {
			var moveX = e.pageX - moveOffsetX;
			var moveY = e.pageY - moveOffsetY;
//			console.log($object.width());
//			console.log($(window).height());
//			console.log($object.outerwidth);
			var MaxX = $(window).width() - parseInt($object.outerWidth(true)); //最大的移动宽度
			var MaxY = $(window).height() - parseInt($object.outerHeight(true));
//			console.log($(document).height());
//			console.log(parseInt($object.height()));
//			console.log(MaxX);

			moveX = Math.min(MaxX, Math.max(0, moveX));
			moveY = Math.min(MaxY, Math.max(0, moveY));

			$object.css({
				top: moveY,
				left: moveX
			});
		}
	}).mouseup(function() {
		isDranging = false;
		$object.fadeTo("fast", 1);
	});
};

g("#smallData");
