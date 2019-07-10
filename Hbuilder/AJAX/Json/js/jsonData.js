$(document).ready(function() {
	$.getJSON("js/enent.json", function(data) {
		console.log(data);
		var html = "";
		console.log(data.status);
		html+='<a href="" class="fl"><img src="'+data.events.image+'" width="110" /></a>'
		html+='<div class="fl">';
		html+='<div class="title">';
		html+='<a href="">'+data.events.title+'</a>';
		html+='</div>';
		html+='<div class="event-cate-tag">';
		html+='<a href="">'+data.events.subcategory_name+'</a>';
		html+='<a href="">国际</a>';
		html+='</div>';
		html+='<div class="">';
		html+='<span>时间:</span>';
		html+='<span>'+data.events.begin_time+'</span>';
		html+='</div>';
		html+='<div class="">';
		html+='<span>地点:</span>';
		html+='<span>'+data.events.address+'</span>';
		html+='</div>';
		
		html+='<div class="">';
		html+='<span>费用:</span>';
		html+='<span>'+data.events.price_range+'</span>';
		html+='</div>';
		html+='<div class="">';
		html+='<span发起:</span>';
		html+='<span><a href="">'+data.events.owner.name+'</a></span>';
		html+='</div>';
		html+='<div class="">';
		html+='<span>451人参加| 456人感兴趣| 164人投票</span>';
		html+='</div>';
		html+='</div>';
		$(".test").html(html);
	});

});
