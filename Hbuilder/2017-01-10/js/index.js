$().ready(function() {
	$("#signupForm").validate({
		debug: true
	});
});
$().ready(function() {
	// 在键盘按下并释放及提交后验证提交表单
	$("form").validate({
		rules: {
			code: { //input的name值
				required: true,
				isZipCode: true, //function方法的name值
				//maxlength:6
			},
			commodityName: {
				required: true,
				minlength: 3,
				maxlength: 50
			},
			commodityPrices: {
				required: true,
				commodityPricesFn: true,
			},
			costPrice: {
				required: true,
				marketPriceFn: true,
			},
			costPrice: {

				costPriceFn: true,
			},
			commoditySellingPoint: {
				maxlength: 140
			},
			stock: {
				required: true,
				stockFn: true
			},
			inventoryWarningValue: { //库存预警值
				inventoryWarningValueFn: true
			},
			productCode: {
				minlength: 3,
				maxlength: 20
			},
			freight: {
				freightFn: true
			},
			firstname: "required",
			lastname: "required",
			username: {
				required: true,
				minlength: 2
			},

			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},

			tel: {
				required: true,
				isTel: true,
			},
			agree: "required"
		},
		//		errorPlacement: function(error, element) {
		//			error.appendTo(element.parent());			
		//			$(".error").each(function() {
		//				$(this).parent().addClass("control-group error");
		//			});
		//			
		//		},
		errorPlacement: function(error, element) {
			
			console.log(error);
			
			error.appendTo(element.parent());
//			$(".error").each(function() {
//				$(this).remove("class");
//				$(this).parent().attr("class","control-group error");
//				$(this).attr("class","control-group error");
//			});
//			error.attr("class","error")
			
			
			console.log(error.siblings("input"));
		},
		errorElement: "span",
		success: function(label) {
//			$(".error").each(function() {
////				$(this).parent().attr("class","control-group success");
////				$(this).remove("control-group error");
////				$(this).addClass("success control-group ");
//				$(this).attr("class","control-group success");
//			});
			console.log(label);
			label.siblings().attr("class","success");
		},
		messages: {

			username: {
				required: "请输入用户名",
				minlength: "用户名必需由两个字母组成"
			},
			password: {
				required: "请输入密码",
				minlength: "密码长度不能小于 5 个字母"
			},
			confirm_password: {
				required: "请输入密码",
				minlength: "密码长度不能小于 5 个字母",
				equalTo: "两次密码输入不一致"
			},
			code: {
				required: "请输入邮编",
				minlength: "长度不能小于 6个字母"
			},
			tel: {
				required: "请输入邮编",
				minlength: "请输入正确的手机号"
			},
			email: "请输入一个正确的邮箱",
			agree: "请接受我们的声明",
			topic: "请选择两个主题"
		}
	});
});
jQuery.validator.setDefaults({
	debug: true,
	errorElement: 'div',
	errorPlacement: function(error, element) {
		if($(element).parent().hasClass('datetimepicker')) {
			error.insertAfter(element.parent().find("input").addClass("control-group"));
		} else {
			error.insertAfter(element);
		}
	}
});