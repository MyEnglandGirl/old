//var a = 3.14;
//var b= "$12.23";
//var c = {};
//var d =[12,34,56,78];
//var e= undefined;
//var f  = null;
//var result = typeof a;
//var result = parseFloat(a);
//console.log(result);

//function turn (i,j){
//	var x = i;
//	var y = j;
//	var result = x+y;
//	if (typeof x==Number&&typeof y==Number){
//		var z = x+y;
//	}else if (typeof x == String||typeof y == String){
//		x = parseFloat(x);
//		y = parseFloat(y);
//		var z = x+y;
//	}else{
//		
//	}
//}
//console.log(turn);


//function plus(i){
//	var flag = isNaN(i);
//	//如果不是数字，返回true
//	//如果是可转数字，返回flast
//	if (flag) {
//		console.log(i+"不是可转数字");
//	} else{
//		var result = parseFloat(i)+1000;
//		console.log(result);
//	}
//	return plus;
//console.log(flag);
//	
//}
//plus('333');

//function plus(i){
//	var flag = i%2;
//	if (flag == 0) {
//		console.log('偶数');
//	} else{
//		console.log('奇数');
//	}
//}
//plus(7);

//function grade(score){
//	switch (score){
//		case 'D':
//		console.log('及格');
//			break;
//		case 'C':
//			console.log('良好');
//			break;
//		case 'B':
//			console.log('优秀');
//			break;
//		case 'A':
//			console.log('满分');
//			break;
//		default:
//			console.log('不及格');
//			break;
//	}
//}
//grade('A');

//
//var num = ['1','2','3','4','5'];
//for(var i =0 ;i<num.length; i++){
//	document.write('num'+[i]+':'+num[i]+'<br />');
//	console.log('num'+[i]+':'+num[i]+'<br />');
//	console.log(i+1);
//}

//var person={
//	name:'name',
//	age:'age',
//	sex:'sex',
//}
//for (item in person) {
//	console.log(item+':'+person[item]);
//}


var num = [1,2,3,4,5];
var x=0;
for (i=0;i<num.length;i++) {
//	x= x+parseFloat(num[i]);
	x=x+num[i];
	console.log(x);
}