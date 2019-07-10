window.onload = function() {
	//添加

	var oAddName = document.getElementById('addName');
	var oAddAge = document.getElementById('addAge');
	var oAdd = document.getElementById('add');
	var oTBody = document.getElementsByTagName('tbody')[0];

	function getTr() {
		var oTr = document.querySelectorAll('tbody tr');
		return oTr;
	};
	oAdd.onclick = function() {
		if(oAddName.value != '' && oAddAge.value != '') {

			var tr = document.createElement('tr');
			console.log(tr);
			tr.innerHTML = '<td>' + (getTr().length + 1) + '</td>' + '<td>' + oAddName.value + '</td>' + '<td>' + oAddAge.value + '</td><td><a href="javascript:;">删除</a></td>';
			oTBody.appendChild(tr);
		} else {
			alert('请输入姓名，年龄！');
		}
	};
	//变色
	var oChangeBg = document.getElementById('changeBg');
	oChangeBg.onclick = function() {
		if(oChangeBg.value == '开启移入变色') {
			oChangeBg.value = '关闭移入变色';
			oChangeBg.style.background = 'red';
			for(var i = 0; i < getTr().length; i++) {
				getTr()[i].onmouseover = function() {
					this.style.background = 'gray';
				}
				getTr()[i].onmouseout = function() {
					this.style.background = 'white';
				}
			}
		} else if(oChangeBg.value == '关闭移入变色') {
			oChangeBg.value = '开启移入变色';
			oChangeBg.style.background = '';
			for(var i = 0; i < getTr().length; i++) {
				getTr()[i].onmouseover = function() {
					this.style.background = '';
				}
			}
		}
	};
	//搜索
	var oTable = document.querySelectorAll('table')[0];
	var oSearch = document.getElementById('search');
	var oSearchTxt = document.getElementById('searchTxt');
	oSearch.onclick = function() {
		if(oSearchTxt == '') {
			alert('请输入搜索内容');
		} else {
			for(var i = 0; i < getTr().length; i++) {
				getTr()[i].style.background = '';
				var searchDate = getTr()[i].querySelectorAll('td')[1].innerHTML;
				if(oSearchTxt.value == searchDate) {
					getTr()[i].style.background = 'yellow';
				}
			}
		}
	};
	//删除
	oTBody.onclick = function(o) {
		if(o.target.innerHTML == '删除') {
			oTBody.removeChild(o.target.parentNode.parentNode);
		}
	};
	//排序
	var oAgeId = document.getElementById('ageId');
	console.log(oAgeId);
	oAgeId.onclick = function() {
		//		if (oAgeId.value == '年龄从小排序'){
		//			oAgeId.value = '恢复默认排序';
		//			oAgeId.style.background = 'red';
		var trArray = [];
		for(var i = 0; i < getTr().length; i++) {
			trArray[i] = getTr()[i];

		}
		//			console.log(trArray);
		trArray.sort(function(a, b) {
			var a = a.getElementsByTagName('td')[2].innerText;
			var b = b.getElementsByTagName('td')[2].innerText;
			console.log(a);
			console.log(b);
			if(a > b) {
				return a - b;
			}
		});
		console.log(trArray);
		var html = '';
		for(var i = 0; i < trArray.length; i++) {
//			html += '<tr>' + trArray[i].innerHTML + '</tr>';
			html = html +  trArray[i];
			oTBody.innerHTML = html;
		}

		//		}else if(oAgeId.value == '恢复默认排序'){
		//				oAgeId.value = '年龄从小排序';
		//				oAgeId.style.background = '';
		//			}
	}

}