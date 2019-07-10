//获取元素对象
function g(id) {
	var object = document.getElementById(id);
	console.dir(object);
	var mouseOffsetX = 0;
	var mouseOffsetY = 0;
	var isDraging = false; // 是否可拖拽的标记
	// console.log(object);
	// 鼠标按下  （计算鼠标相对拖拽元素的坐上角的坐标，并标记可拖拽）
	object.onmousedown =function(e) {

			var e = e || window.event;
			mouseOffsetX = e.clientX - this.offsetLeft; //鼠标在div中的坐标
			mouseOffsetY = e.clientY - this.offsetTop;

			isDraging = true;

			//	e.pageX  鼠标到可视区域的水平距离
	};
		//鼠标移动时（检测元素是否标记为可移动，如果是，更新元素位置，到当前鼠标位置）：要减去第一步中获得的偏移值
	document.onmousemove = function(e) {

			var e = e || window.event;
			//	console.log(mouseOffsetX,mouseOffsetY);

			var mouseX = e.clientX; //鼠标当前的位置，鼠标在页面中的坐标
			var mouseY = e.clientY;

			var moveX = 0; //浮层原始的新位置
			var moveY = 0;

			if(isDraging == true) {
				moveX = mouseX - mouseOffsetX; //div边框到页面左边的距离，设置定位的left值
				moveY = mouseY - mouseOffsetY;

				var pageWidth = document.documentElement.clientWidth; //页面的宽度
				var pageHeight = document.documentElement.clientHeight;

				var smallDataWidth = this.offsetWidth; //div的宽度
				var smallDataHeight = this.offsetHeight;

				var MaxX = pageWidth - smallDataWidth; //最大的移动宽度
				var MaxY = pageHeight - smallDataHeight;

				moveX = Math.min(MaxX, Math.max(0, moveX));
				moveY = Math.min(MaxY, Math.max(0, moveY));

				//范围限定  moveX>0&&moveX<(页面最大宽度-浮层的宽度)
				this.style.left = moveX + 'px';
				this.style.top = moveY + 'px';

			}
		}
		//鼠标送开始，标记元素为不可移动
	document.onmouseup = function() {

		isDraging = false; // 是否可拖拽的标记

	}
};

g('smallData');
//g('garbage');
//g('music');
//g('picture');
//g('kalendar');


