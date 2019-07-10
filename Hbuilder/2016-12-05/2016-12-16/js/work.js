window.onload = function () {
	var oImg = document.getElementById('img');
	console.log(oImg);
	var oA = document.querySelectorAll('.img a');
	console.dir(oA);
	oImg.style.width  = oA.length*1200+'px';
	console.log(oImg.style.width);
	//定位  for循环
	for (var i = 0; i < oA.length; i++) {
//		for(var i = 0; i < j ; j++)
		oA[i].style.left = i*1200+'px';
		oA[i].style.top  = 0 +'px';

	}
//	oA[0].style.left  = 0 + 'px';
//	oA[0].style.top  = 0 +'px';
//	oA[1].style.left  = 1200 + 'px';
//	oA[1].style.top  = 0 +'px';
//	oA[2].style.left  = 2400 + 'px';
//	oA[2].style.top  = 0 +'px';
	
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
//			clearInterval(stop);
		};
//		if (oA[0].offsetLeft == 0) {
//			oA[1].style.left  = 1200 + 'px';
//		}
//		if (oA[1].offsetLeft == 0) {
//			oA[2].style.left  = 1200 + 'px';
//		}
//		if (oA[2].offsetLeft == 0) {
//			oA[0].style.left  = 1200 + 'px';
//		}
	}
	stop = setInterval(move,2000);
	
}