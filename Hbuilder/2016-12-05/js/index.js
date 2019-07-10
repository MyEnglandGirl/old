//var num = 3.1415926;
//var m = 2016;
//alert(num);
//console.log(num);
//alert(m);
//console.log("hello word");
//console.log("3.1415926");
////			console.warn（警告);
//var str = "3.1415926";
//var name = "字符串";
//var html = '<a href= "http://www.baidu.com/"></a>';
//console.log(html);
//var xiaomi = {
//	price: 1499,
//	name: '小米5 16G 电信版',
//	cpu: '高通骁龙820',
//}
//var xiaomi4s = {
//	price: 1499,
//	name: '小米4s 64G',
//	cpu: '骁龙',
//	size: '5.0',
//}
//alert(xiaomi4s);
//console.log(xiaomi4s);
//var a = [22, 4, 32, 64, 23];
////			var arr = {
////				0: 22,
////				1: 4,
////				2: 32,
////				3: 64,
////				4: 23,
////			}
//var arrStr = ['李小龙', '成龙'];
//var arrObj = [{
//	name: '李小龙',
//	age: 30
//}, {
//	name: '成龙',
//	age: 60
//}];
//alert(a);
//console.log(a);
//alert(arrStr);
//console.log(arrStr);
//alert(arrObj);
//console.log(arrObj);
//
//function stop() {
//	findPosition();
//	turnBack();
//}
//
//function findPosition() {
//
//}
//
//function turnBack() {
//
//}
//stop();
//turnBack();
//var call120 = "拨打120中......";
//
//function call() {
//	console.log("拨打911中......");
//	console.log(call120);
//}
//call();
////			function传参
//function call(num) {
//	console.log(num)
//}
//call("110");
//call("120");
//
//function call(num, msg, time) {
//	//				console.log(num,msg,time)
//	console.log(num);
//	console.log(msg);
//	console.log(time);
//}
//call(120, '', '2016-12-05');
var xiaomi4s = {
	price: 1499,
	name: '小米4s 64G',
	cpu: '骁龙',
	size: '5.0',
	stock: 20,
	//	库存
	call: function() {

	},
	message: function(msg) {
		//console.log(msg);
	},
	size: [125, 34, 10],
	camera: {
		front: '500w',
		back: '1300',
	},
	"first-Rom": '8G',
	"Sec-Rom": '16G',
	Thr_Rom:'32G'
}
var n="Sec-Rom";
//console.log('小米4 cpu：' + xiaomi4s.cpu);
//console.log('小米后置摄像头:' + xiaomi4s.camera.back);
//console.log('小米手机尺寸：' + xiaomi4s.size);
//console.log(xiaomi4s.price * xiaomi4s.stock);
//xiaomi4s.price = xiaomi4s.price - 200;
//console.log(xiaomi4s.price);
//console.log(xiaomi4s["first-Rom"]);
////console.log(xiaomi4s.Sec-Rom);
//console.log(xiaomi4s.Thr_Rom);
//console.log(xiaomi4s[n]);
//xiaomi4s.color = 'white';
//console.log(xiaomi4s);
//delete xiaomi4s.color;
//console.log(xiaomi4s);



//var software = ["QQ","HBuilder","photoshop","sublimetext","tgp","axure"]
//console.log(software);
//console.log(software.length);
//console.log(software[2]);
////增
//software[6]="DW";
////改
//software[0]="YY";
//console.log(software);
//software[2];
//console.log(software);


function printFun(i,j,m,n){
	var arr= ["i","j","m","n"];
	return arr;
//	var result = (i * j)/n>m;
//	return i+j;
}
console.log(printFun(12,13,14,35));
//arr[0]=1;
//arr[1]=2;
//arr[2]=3;
//
//console.log(arr);
