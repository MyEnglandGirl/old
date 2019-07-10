$(document).ready(function() {
	$("#copy").click(function(e) {
		e.preventDefault();
		$.getJSON("js/enent.json", function(data) {
			console.log(data);
			var html = "";
			console.log(data.status);
			console.log(data.events.image);
			html += '<div class="poster">';
			html += '<a href="' + data.events.image + '">';
			html += '<img id="poster_img" itemprop="image" src="' + data.events.image + '" title="点击查看大图" width="175" height="260">';
			html += '</a>';
			html += '</div>';
			html +='<div id="event-info">';
			html+='<div class="event-info">'
			html+='<h1 itemprop="summary">'+data.events.title;
			html+='<span class="start">即将开始</span>';
			html+='<span class="event-title-badge">豆瓣95折售票</span>';
			html+='</h1>';
			html+='<div class="event-detail">';
			html+='<span class="pl">时间:&nbsp;&nbsp;</span>';
			html+='<ul class="calendar-strs ">';
			html+='<li class="calendar-str-item">'+data.events.begin_time+'</li>';
			html+='<li class="calendar-str-item">'+data.events.end_time+'</li>';
			
			html+='</ul>';
			html+='</div>';
			html+='<div class="event-detail" itemprop="location" itemscope="" itemtype="http://data-vocabulary.org/Organization">';
			html+='<span class="pl">地点:&nbsp;</span>';
			html+='<span itemprop="address" itemscope="" itemtype="http://data-vocabulary.org/Address" class="micro-address">';
			html+='<span itemprop="region" class="micro-address">'+data.events.address+'</span>';
			html+='<span itemprop="geo" itemscope="" itemtype="http://data-vocabulary.org/Geo" class="micro-address">';
				var geo = data.events.geo;//左边字符串转数组，分成经纬度
				console.log(geo);
				var geoArray = geo.split(" ");
				console.log(geoArray);
				console.log(geoArray[1],geoArray[0]);
			html+='<meta itemprop="latitude" content="'+geoArray[1]+'">';//纬度
			html+='<meta itemprop="longitude" content="'+geoArray[0]+'">';//经度
			html+='</span>';
			html+='</div>';
			html+='<div class="event-detail">';
			html+='<span class="pl" itemprop="ticketAggregate" itemscope="" itemtype="http://data-vocabulary.org/Offer-aggregate">费用:&nbsp;&nbsp;</span> '+data.events.price_range+'元';
			html+='</div>';
			html+='<div class="event-detail">';
			html+='<span class="pl">类型:&nbsp;&nbsp;</span>';
			html+='<a href="https://beijing.douban.com/events/future-music" itemprop="eventType">'+data.events.category_name+'-'+data.events.subcategory_name+'</a>';
			html+='</div>';
			html+='<div class="event-detail" itemscope="" itemtype="http://data-vocabulary.org/Organization">';
			html+='<span class="pl">主办方:&nbsp;&nbsp;</span>';
			html+='<a href="'+data.events.owner.alt+'" target="_blank" itemprop="name">'+data.events.owner.name+'</a>'
			html+='</div>';
		
			html+='</div>';
			$("#this").html(html);
		});
	});
});



//					<div class="event-detail">
//						<span class="pl">类型:&nbsp;&nbsp;</span>
//						<a href="https://beijing.douban.com/events/future-music" itemprop="eventType">音乐-音乐会</a>
//					</div>
//					<div class="event-detail" itemscope="" itemtype="http://data-vocabulary.org/Organization">
//						<span class="pl">主办方:&nbsp;&nbsp;</span>
//						<a href="https://site.douban.com/211035/" target="_blank" itemprop="name">卓越百年</a>
//					</div>
//				</div>
//			</div>
//		</div>