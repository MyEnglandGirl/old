$(document).ready(function() {
	// $.getJSON("/getEventList", function(data) {
	$.ajax({
		url: "http://192.168.1.148:3000/getEventList",
		type: "get",
		// data: {
		//     acid: "id"
		// },
		async: true,
		// headers:{
		// 	code:3.14
		// },
		dataType: 'JSONP', //here跨域处理，地址栏加192.168.1.149：3000
		success: function(data) {
			console.log(data);
			var html = "";
			$.each(data.events, function(i, item) {
				console.log(data.events);
				html += '<li class="clearfix">'
				html += '<a href="" class="fl"><img src="' + item.image + '" width="110" /></a>';
				html += '<div class="fl">';
				html += '<div class="title">';
				html += '<a href="http://192.168.1.133:3000/ajax/JY/AjAXtest/dajuyuan2.html?acid=' + item.id + '" target="_blank">' + item.title + '</a>';
				html += '</div>';
				html += '<div class="event-cate-tag">';
				html += '<a href="">' + item.subcategory_name + '</a>';
				html += '<a href="">国际</a>';
				html += '</div>';
				html += '<div class="">';
				html += '<span>时间:</span>';
				html += '<span>' + item.begin_time + '</span>';
				html += '</div>';
				html += '<div class="">';
				html += '<span>地点:</span>';
				html += '<span>' + item.address + '</span>';
				html += '</div>';
				html += '<div class="">';
				html += '<span>费用:</span>';
				html += '<span>' + item.price_range + '</span>';
				html += '</div>';
				html += '<div class="">';
				html += '<span发起:</span>';
				html += '<span><a href="">' + item.ownername + '</a></span>';
				html += '</div>';
				html += '<div class="">';
				html += '<span>451人参加| 456人感兴趣| 164人投票</span>';
				html += '</div>';
				html += '</div>';
				html += '</li>';
				$("ul").html(html);
			});
		}
	});
});