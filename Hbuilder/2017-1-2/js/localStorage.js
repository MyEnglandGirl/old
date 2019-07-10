$(document).ready(function() {
	function local() {
		newValue = [];
//		console.log(newValue);
		//默认缓存
		var deskValue = [{
			"id": "garbage",
			"top": "10px",
			"iClass": "icon garbage",
			"pText": "回收站"
		}, {
			"id": "music",
			"top": "110px",
			"iClass": "icon music",
			"pText": "音乐"
		}, {
			"id": "picture",
			"top": "210px",
			"iClass": "icon picture",
			"pText": "照片墙"
		}, {
			"id": "kalendar",
			"top": "310px",
			"iClass": "icon kalendar",
			"pText": "日历"
		}];

		var deskValue = JSON.stringify(deskValue);
		localStorage.setItem("deskDate", deskValue);
		var deskValue = JSON.parse(deskValue);
		//		创建桌面图标
		console.log(deskValue)
		
		console.log(newValue)
		
//		if
		
		if(newValue.length == 0) {
			console.log("true")
			for(var i = 0; i < deskValue.length; i++) {
				var $div = $("<div></div>");
				
				$div.attr("id", deskValue[i].id);
				$div.css("top", deskValue[i].top);
				$div.attr("class", "file");
				$div.css("left", "10px");
				var $i = $('<i></i>');
				$i.attr("class", deskValue[i].iClass);
				$i.appendTo($div);
				var $p = $('<p></p>');
				$p.text(deskValue[i].pText);
				$p.appendTo($div);

				$div.appendTo($(".desk-continer"));
			}
		} else {
			console.log("1")
			for(var i = 0; i < newValueFn().length; i++) {
				var $div = $('<div></div>');
				$div.attr("id", newValueFn()[i].id);
				$div.css("top", newValueFn()[i].top);
				$div.attr("class", "file");
				$div.css("left", "10px");
				var $i = $('<i></i>');
				$i.attr("class", newValueFn()[i].iClass);
				$i.appendTo($div);
				var $p = $('<p></p>');
				$p.text(newValueFn()[i].pText);
				$p.appendTo($div);

				$div.appendTo($(".desk-continer"));
			}
		}

		//新缓存

	}
	local();

});