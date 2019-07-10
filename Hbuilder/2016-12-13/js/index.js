window.onload = function () {
	function tab(wrap) {
		var oWrap = document.getElementsByClassName(wrap)[0];
		var oBtn = oWrap.getElementsByTagName('button');
		var oClass = oWrap.querySelectorAll('.classOne');
		for (var i = 0; i < oBtn.length; i++) {//循环每个按钮
		oBtn[i].index = i;
		//oBTn[i]是指定button的第i个按钮;为该按钮添加一个index属性，并将index的值设置为i
		oBtn[i].onclick = function () {//按钮的第i个点击事件
			for (var i = 0; i < oBtn.length; i++) {//循环去掉button的样式，把div隐藏
				oClass[i].style.display = 'none';//隐藏div
				oBtn[i].className = 'titlePublic ';//清空样式
			};
			this.className = 'one';//自身添加样式
			oClass[this.index].style.display='block';//this.index是当前div 
		}
	}
	
	}
	tab('tab1');
	tab('tab2');
}
