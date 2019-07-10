window.onload = function() {
		//日期，倒计时
		var oSmallData = document.querySelectorAll('.smallData')[0];

		var oMouth = document.querySelector('.mouth');
		var oDay = document.querySelector(".day");
		var oTime = document.querySelector(".time");
		var oData = document.querySelector(".data");
		var oWeek = document.querySelector(".week");
		// console.log(oMouth);
		// console.log(oSmallData);

		setTime();

		setInterval(setTime, 1000);

		function setTime() {
			var now = new Date();
			var mouth = now.getMonth() + 1;
			var year = now.getFullYear();
			var day = now.getDate();
			var hours = now.getHours();
			var minutes = now.getMinutes();
			var seconds = now.getSeconds();
			var week = now.getDay();
			oMouth.innerText = formatDay(mouth);
			oDay.innerText = formatData(day);
			oTime.innerText = formatData(hours) + ':' + formatData(minutes) + ':' + formatData(seconds);
			oData.innerText = formatData(year) + '年' + formatData(mouth) + '月' + formatData(day) + '日';
			oWeek.innerText = '星期' + formatDay(week);
		};

		function formatData(num) {
			return num < 10 ? '0' + num : num;
		};

		function formatDay(num) {
			switch(num) {
				case 0:
					return "日";
					break;
				case 1:
					return "一";
					break;
				case 2:
					return "二";
					break;
				case 3:
					return "三";
					break;
				case 4:
					return "四";
					break;
				case 5:
					return "五";
					break;
				case 6:
					return "六";
					break;
				case 7:
					return "七";
					break;
				case 8:
					return "八";
					break;
				case 9:
					return "九";
					break;
				case 10:
					return "十";
					break;
				case 11:
					return "十一";
					break;
				case 12:
					return "十二";
					break;
			}
		};

		//日历上的时间

		var $time = $(".calendarConTime .time");
		var $data = $(".calendarConTime .data");
		var $week = $(".calendarConTime .week");
//		console.log($time);
//		setCalendarTime();
		setInterval(setCalendarTime, 1000);

		function setCalendarTime() {
			var now = new Date();
			var mouth = now.getMonth() + 1;
			var year = now.getFullYear();
			var day = now.getDate();
			var hours = now.getHours();
			var minutes = now.getMinutes();
			var seconds = now.getSeconds();
			var week = now.getDay();

			$time.text(formatData(hours) + ':' + formatData(minutes) + ':' + formatData(seconds));
			$data.text(formatData(year) + '年' + formatData(mouth) + '月' + formatData(day) + '日');
			$week.text('星期' + formatDay(week));
			};
			//鼠标拖动
			//	oSmallData.onmousedown = function(ev) {
			//		var oEvent = ev || event;
			//		var disX = oEvent.clientX - oSmallData.offsetLeft; //x坐标
			//		var disY = oEvent.clientY - oSmallData.offsetTop; //y坐标
			//
			//		document.onmousemove = function(ev) {
			//			var oEvent = ev || event; //处理兼容性
			//			var l = oEvent.clientX - disX; //移动x坐标位置
			//			var t = oEvent.clientY - disY; //移动y坐标位置
			//			console.log(l, t);
			//			//限制范围
			////			if(l < 0) {
			////				l = 0;
			////			} else if(l > document.documentElement.clientWidth - oSmallData.offsetWidth) {
			////				l = document.documentElement.clientWidth - oSmallData.offsetWidth;
			////			}
			////
			////			if(t < 0) {
			////				t = 0;
			////			} else if(t > document.documentElement.clientHeight - oSmallData.offsetHeight) {
			////				t = document.documentElement.clientHeight - oSmallData.offsetHeight;
			////			}
			//
			//			oSmallData.style.left = l + 'px';
			//			oSmallData.style.top = t + 'px';
			//		};
			//
			//		document.onmouseup = function() { //鼠标离开时,设置值为空
			//			document.onmousemove = null;
			//			document.onmouseup = null;
			//		};
			//	};

		};