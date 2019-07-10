window.onload = function () {
	copy('img1');
	copy('img2');
	function copy(parameter) {
		var oImg = document.getElementsByClassName(parameter)[0];
		console.log(oImg);
		var oA = oImg.querySelectorAll('a');
		console.log(oA);
		oImg.style.width  = oA.length*1200+'px';
		console.log(oImg.style.width);
		//定位  for循环
		for (var i = 0; i < oA.length; i++) {
//			for(var i = 0; i < j ; j++)
			oA[i].style.left = i*1200+'px';
			oA[i].style.top  = 0 +'px';
		}
		function move() {
			for (var i = 0; i < oA.length; i++) {
				if(oA[i].offsetLeft == 0){
					if (i == oA.length-1) {
						oA[0].style.left  = 0 + 'px';
					}else{
						oA[i+1].style.left  = 1200 + 'px';
					}
				}
				oA[i].style.left  =oA[i].offsetLeft-1200+'px';
			};	
		}
		setInterval(move,2000);
		}
	
}