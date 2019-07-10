var UI = {
	name:'UI设计201632班',
	man:10,
	woman:8,
};
var Andriod ={
	name:'安卓开发201608班',
	man:11,
	woman: 0,
};
var IOS = {
	name:'iOS开发201612班',
	man: 9,
	woman:5,
};
var school = UI.man+Andriod.man+IOS.man;
console.log(school);
var school = UI.woman+Andriod.woman+IOS.woman;
console.log(school);
///////////////////////////////////////////////////////////////////////////////////////////////////
var sbData ={
	name:'黄小米',
	sex:0,
	age:26,
	yangLao:{
		base:2018,
		companyPercent:0.12,
		personPercent:0.08,
	},
	yiLiao:{
		base:2725,
		companyPercent:0.08,
		personPercent:0.02,
	},
	gongShang:{
		base:1300,
		companyPercent:0.005,
		personPercent:0,
	},
	shiYe:{
		base:1300,
		companyPercent:0.02,
		personPercent:0.01,
		
		
	},
	shengYu:{
		base:2725,
		companyPercent:0.0085,
		personPercent:0,
	},
};
var money = sbData.yangLao.base*sbData.yangLao.personPercent+
sbData.yiLiao.base*sbData.yiLiao.personPercent+
sbData.gongShang.base*sbData.gongShang.personPercent+
sbData.shiYe.base*sbData.shiYe.personPercent+
sbData.shengYu.base*sbData.shengYu.personPercent;
console.log("该职工每月每个人缴纳数是"+money)
