window.onload = function () {
	var oImg = document.getElementById('imgBox');
	console.log(oImg);
	var oA = document.querySelectorAll('.imgBox a');
	console.dir(oA);
	oImg.style.width  = oA.length*1200+'px';
	console.log(oImg.style.width);
	
	function move() {
		if(oImg.offsetLeft <= -oA.length*1200){
			oImg.style.left  =oImg.offsetLeft-1200+'px';
		}
		else{
			oImg.style.left = 0;
		}
	};
	
	setInterval(move,30);

}