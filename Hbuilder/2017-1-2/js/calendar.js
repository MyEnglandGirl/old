$(document).ready(function() {

	$('#ca').calendar({
		width: 320,
		height: 320,
		data: [{
			date: '2015/12/24',
			value: 'Christmas Eve'
		}, {
			date: '2015/12/25',
			value: 'Merry Christmas'
		}, {
			date: '2016/01/01',
			value: 'Happy New Year'
		}],
		onSelected: function(view, date, data) {
			console.log('view:' + view)
			alert('date:' + date)
			console.log('data:' + (data || 'None'));
		}
	});

	
	$(".calendarConTime>span").hover(function () {
		$(this).css({
			"background": "#FFF",
			"color": "#e15671"
		});
	},function () {
		$(this).css({
			"background": "",
			"color": ""
		});
	});
	
	
	$("#kalendar").dblclick(function() {
		$("#calendarCon").animate({
			height: '432px'
		}, "slow");
	});
	$("#close").click(function() {
		$("#calendarCon").animate({
			height: '0px'
		}, "slow");
	});

});