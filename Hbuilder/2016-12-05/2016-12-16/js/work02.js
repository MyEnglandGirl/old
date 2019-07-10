window.onload = function () {
	var oImg = document.getElementById('imgBox');
	console.log(oImg);
	var oA = document.querySelectorAll('.imgBox a');
	console.dir(oA);
	oImg.style.width  = oA.length*1200+'px';
	console.log(oImg.style.width);
	
	function move() {
		oImg.style.left  =oA[i].offsetLeft-1200+'px';
	}
}