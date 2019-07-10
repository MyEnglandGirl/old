//获取可见区域 高度
var e = e || event;
$("#deskContiner div").each(function() {
	g($(this));
});

//var $height = e.pageY;
//禁用系统自带的右键菜单
$('body').bind('contextmenu', function() {
	return false;
});
//鼠标右键
$("body").mousedown(function(e) {
	// console.log(e.which);
	if(e.which == 3) {
		mouseX = e.pageX; //鼠标当前的位置，鼠标在页面中的坐标
		mouseY = e.pageY;
		// console.log(mouseX);
		$(".menu").css({
			"display": "block",
			"top": mouseY + 'px',
			"left": mouseX + 'px'
		});
	}
});
//鼠标单击，取消右键菜单
$("body").click(function() {
	$(".menu").css({
		"display": "none",
	});
	$("#deskContiner div").each(function() {
		g($(this));
	});
});

//刷新
$(".menuList li").eq(2).click(function() {
	window.location.reload();
});

//新建文件夹
var i = 0;
var $height = $(window).height();
$(".menuList li").eq(3).click(function() {
	$(".menu").css({
		"display": "none",
	});
	var $lastDiv = $("#deskContiner").find("div:last-child");
	var top = $lastDiv.offset().top + 100;
	var left = 10;
	// console.log($lastDiv);
	// console.log($top);
	i++;
	// if($(".menuList").val()*100 < $height){
	$("#deskContiner").append('<div class="file" id="" style="left: ' + left + 'px; top:' + top + 'px;"><i class="icon fileIcon"></i><p class="fileName">新建文件夹' + i + '</p></div>');
	// }else{
	//  var top = 10;
	//  var left = $lastDiv.offset().top+100;
	//   $("#deskContiner").append('<div class="file" id="" style="left: '+left+'px; top:'+top+'px;"><i class="icon fileIcon"></i><p class="fileName">新建文件夹'+i+'</p></div>');
	// }

	newValueFn();
	console.log(newValueFn())

	function newValueFn() {
		newValue = [];
		$(".desk-continer div").each(function() {
			newValue.push({
				"id": $(this).attr('id'),
				"top": $(this).css('top'),
				"iClass": $(this).find("i").attr("class"),
				"pText": $(this).find("p").text()
			});
		});
		
		var newValue = JSON.stringify(newValue);
		localStorage.setItem("deskDate", newValue);
		var newValue = JSON.parse(newValue);
		
//		console.log(newValue)
		return newValue
	}
});