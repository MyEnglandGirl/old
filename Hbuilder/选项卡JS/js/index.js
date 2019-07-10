window.onload = function() {
	var oLi = document.getElementsByTagName("li");
	console.log(oLi);
	var txtArea = document.getElementsByClassName("classOne");
	console.log(txtArea);
	for(i = 0; i < oLi.length; i++) {
		oLi[i].index = i; 
		oLi[0].className = "one";
		oLi[i].className = "two";
		txtArea[0].style.display = "block";
		txtArea[i].style.display = "none";
		oLi[i].onclick = function () {
			for (var i = 0;i<oLi.length;i++) {
				oLi[i].className='two';
				txtArea[i].style.display="none";
			}
			this.className ="one";
			txtArea[this.index].style.display='block';
		}
	}
}