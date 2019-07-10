<!--
<script type="text/javascript">
	$.fn.tab = function(options) {
		var defaults = {
			i: 0,
			callback: function() {
				alert(i);
			}
		}
		var opt = $.extend(true, {}, defaults, options);

		this.each(function() {
			var $btn = $(this).find('.container button');
			var $txt = $(this).find('.container .textarea');
			$txt.fadeOut();
			$txt.eq(opt.i).fadeIn();
			$btn.attr('class', 'before');
			$btn.eq(opt.i).attr('class', 'after');
			$btn.click(function() {
				var index = $(this).index();
				$(this).attr('class', 'after').siblings('button').attr('class', 'before');
				$txt.eq(index).fadeIn(function() {
					opt.callback(index);
				}).siblings('.textarea').fadeOut();
			});
		});
		return this;
	};
	//			$('#tab1').tab();
	//			$('#tab2').tab();
	$('.tab').tab({
		i: 2,
		callback: function(i) {
			console.log(i);
		}
	}).css({
		width: '100%'
	});
	<!--
</script>-->