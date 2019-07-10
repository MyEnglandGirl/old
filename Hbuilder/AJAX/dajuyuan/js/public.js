$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
	console.log(options);
	options.headers = {
		code: 'par'
	}
});

$.ajaxSetup({
	
});