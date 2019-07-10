window.onload = function() {
	var yyj = new dusk('box1');
	yyj.init();
}

function dusk(parameter) { //获取
	this.box = document.getElementsByClassName(parameter)[0];
	console.log(this.box);
	this.ulBox = this.box.getElementsByTagName('ul')[0];
	this.li = this.box.getElementsByTagName('li');
	console.log(this.li)
	this.step = this.box.offsetWidth; //定义宽度
	this.left = this.box.getElementsByClassName('left')[0];
	console.log(this.left);
	this.right = this.box.getElementsByClassName('right')[0];
	console.log(this.right);

//	this.nav = this.box.getElementsByTagName('ul')[1];
//	this.nav.style.position = 'absolute';
//	this.nav.style.bottom = '10px';
//	this.nav.style.left = '50%';
//	this.nav.style.width = '260px'
//	this.nav.style.marginLeft = '-130px';
//	var index = 1;
}
dusk.prototype = { //对象
	constructor: dusk, //键值对
	init: function() { //初始化、、设置属性
		//		console.log(this);
		var self = this;
		this.ulBox.style.width = (this.li.length * this.step) + 'px';
		console.log(this.ulBox.style.width);
		for(i = 0; i < this.li.length; i++) {
			this.li[i].getElementsByTagName('img')[0].style.width = this.step + 'px';
			this.li[i].getElementsByTagName('img')[0].style.height = 500 + 'px';
		}
		this.left.onclick = function() {
			self.move(1200);
		};
		this.right.onclick = function() {
			self.move(-1200);
		};
//		for(var i = 0; i < this.li.length; i++) {
//			var iImg = document.createElement('li');
//			iImg.innerHTML = '<img src="img/before.png" />'
//			iImg.setAttribute('class', 'fl');
//			iImg.style.marginRight = '10px';
//			this.nav.appendChild(iImg);
//		};
//		var clear = document.createElement('div');
//		this.nav.appendChild(clear);
//		var lImg = this.nav.getElementsByTagName('li'); //给下部块和图片关联
//		for(var i = 0; i < lImg.length; i++) {
//			lImg[i].index = i;
//			lImg[i].onclick = function() {
//				for(var i = 0; i < lImg.length; i++) {
//					lImg[i].innerHTML = '<img src="img/before.png" />';
//				}
//				this.innerHTML = '<img src="img/after.png" />';
//				self.li[i].style.display = 'block';
//			}
//		};
		stop = setInterval(function() {
			self.fun();
		}, 2000);
	},
	move: function(offset) {
		var newLeft = parseInt(this.ulBox.style.left) + offset;
		this.ulBox.style.left = newLeft + 'px';
		if(newLeft > -1200) {
			this.ulBox.style.left = -4800 + 'px';
		}
		if(newLeft < -4800) {
			this.ulBox.style.left = -1200 + 'px';
		}
	},
	fun: function() { //定时器
		if(this.ulBox.offsetLeft > (1 - this.li.length) * this.step) {
			this.ulBox.style.left = (this.ulBox.offsetLeft - this.step) + 'px';

		} else {
			this.ulBox.style.left = 0;
		}
	},

	stop: function() {
		clearInterval(stop);
	}

}