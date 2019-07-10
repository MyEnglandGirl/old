//var arr = [];
//var j = 0;
//for(i = 0; i <= 1024; i++) {
//	if(i % 11 == 0 && i % 7 == 0) {
//		arr[j] = i + '';
//		j++;
//	}
//}
//
//console.log(arr);
function push() {
	var arr = [];
	for(i = 0; i <= 1024; i++) {
		if(i % 11 == 0 && i % 7 == 0) {
			arr.push(i);
		}
	}
	console.log(arr);
	console.log(arr.join('|'));
}
push();

//var str = '';
//for(i = 0; i <= 1024; i++) {
//	if(i % 11 == 0 && i % 7 == 0) {
//		str =str +i +' ' ;
//		
//	}
//}
//
//console.log(str);

//var price = 'Microsoft';
//console.log("slice(price.length[32])");

var price = "0,77,34''',74,23,98,55";
//price.push(5);
////字符串没法push（）；

var arr = price.split(",");
//字符串转换成数组
console.log(price.split(","));
console.log(price.split(",").join('++'));
//字符串转换成数组，在转换成字符串，，更改字符串的链接符号
console.log(arr.join('|'));
var arr = [0, 3, 3, 4];
console.log(arr.join(','));

var arrTest = ['234', '46', '94', '32', '31', '44'];
//console.log(arrTest.sort());
arrTest.sort(function(a, b) {
	if(a > b) {
		return a - b;
	}
});
console.log(arrTest);

var now = new Date();
console.log(now);
//获取当前的时间

var year = now.getFullYear();
console.log(year);

var month = now.getMonth();
console.log(month);

//var day = now.getDay();
//console.log(day);

var date = now.getDate();
console.log(date);

var minutes = now.getMinutes();
console.log(minutes);

var seconds = now.getSeconds();
console.log(seconds);

var time = now.getTime();
console.log(time);
var value = now.valueOf();
console.log(value);

var birthday = new Date(1996, 6, 12);
console.log(birthday);

var x = now - birthday;
console.log(x);

console.log(x / (24 * 60 * 60 * 1000));
console.log(Math.PI);

console.log(Math.random());
//返回0~1之间随机数    抽奖
function clock() {
	var oNow = new Date();
	var h = oNow.getHours();
	var m = oNow.getMinutes();
	var s = oNow.getSeconds();
	m = convert(m);
	s = convert(s);
	document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
};

function convert(n) {
	if(n < 10) {
		n = "0" + n;
	}
	return n;
};
var time = setInterval(clock,1000);
window.onload =  function () {
	setInterval(clock,1000);
	var oBtn = document.getElementById('button');
	oBtn.onclick = function () {

		clearInterval(time);
	};
};

