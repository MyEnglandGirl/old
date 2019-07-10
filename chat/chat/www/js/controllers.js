angular.module('starter.controllers', ["ngCookies"])
	//====================================

//	==================================
.controller('MessageCtrl', function($scope, $state, $ionicModal, $cookies) {
		$scope.cookie = function() {
			if(!$cookies.get("phone")) {
				$state.go("main");
			}
		};
		$scope.cookie();
		$ionicModal.fromTemplateUrl('templates/search.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$scope.openModal = function() {
			$scope.modal.show();
		};
		$scope.closeModal = function() {
			$scope.modal.hide();
		};
		$ionicModal.fromTemplateUrl('templates/add.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(add) {
			$scope.add = add;
		});
		$scope.openModal = function() {
			$scope.add.show();
		};
		$scope.closeModal = function() {
			$scope.add.hide();
		};

	})
	.controller('UserCtrl', function($scope, $ionicModal, $http, $cookies, ApiEndpoint) {
		$ionicModal.fromTemplateUrl('templates/search.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$scope.openModal = function() {
			$scope.modal.show();
		};
		$scope.closeModal = function() {
			$scope.modal.hide();
		};
		$ionicModal.fromTemplateUrl('templates/add.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(add) {
			$scope.add = add;
		});
		$scope.openModal = function() {
			$scope.add.show();
		};
		$scope.closeModal = function() {
			$scope.add.hide();
		};
		$scope.userData = {
			img: "",
		};
		$http({
				method: "GET",
				url: ApiEndpoint.url + '/chat/user/?phone=' + $cookies.get("phone"),
				cache: false,
			}).then(function successCallback(res) {
				if(res.data.status) {
					//					console.log(res.data.message);
					//					console.log(res.data.usersData);
					$scope.userData.img = res.data.usersData.img;
					//					console.log($scope.userData.img)
					if($scope.userData.img) {
						console.log("true")
					} else {
						console.log("false")
					}
				}
				return
			}),
			function function_name(argument) {
				console.log(argument);
				console.log("请求失败,服务器")
			};
	})
	//===========================================
	.controller('SearchCtrl', function($scope) {})
	.controller('AddCtrl', function($scope, $http, $cookies, ApiEndpoint) {
		//搜索添加好友
		$scope.master = {
			selfPhone: $cookies.get("phone"),
			phone: "",
			name: "",
			autograph: "",
			address: "",
			img: "",
			friend: "",
			show: false,
			hide: false,
			send: false,
			myfriend: false,
			addfriend: false,
		};
		$scope.searchPhone = function() {
			$http({
					method: "GET",
					url: ApiEndpoint.url + '/chat/user/?phone=' + $scope.master.phone + "&selfPhone=" + $cookies.get("phone"),

				}).then(function successCallback(res) {
					console.log(res.data)
					$scope.master.show = false;
					$scope.master.hide = false;
					$scope.master.send = false;
					$scope.master.myfriend = false;
					$scope.master.addfriend = false;
					if(res.data.status) {
						$scope.master.phone = res.data.usersData.phone;
						$scope.master.name = res.data.usersData.name;
						$scope.master.autograph = res.data.usersData.autograph;
						$scope.master.address = res.data.usersData.address;
						$scope.master.img = res.data.usersData.img;
						if(res.data.myfriend) {
							$scope.master.myfriend = res.data.myfriend;
						} else if(res.data.send) {
							$scope.master.send = res.data.send;
						} else if(res.data.addfriend) {
							$scope.master.addfriend = res.data.addfriend;
						}

					} else {
						$scope.master.hide = true;
					}
					console.log(res.data.message)
					$scope.master.show = res.data.status;
					console.log($scope.master.hide, $scope.master.myfriend, $scope.master.send, $scope.master.addfriend)

				}),
				function function_name(argument) {
					console.log(argument);
				};
		}

		$scope.add = function() {

			$scope.master.send = true;
			$scope.master.addfriend = false;
			$http({
					method: "POST",
					url: ApiEndpoint.url + '/chat/user/friend/',
					data: {
						phone: $scope.master.phone,
						selfPhone: $cookies.get("phone")
					}
				}).then(function successCallback(res) {
					console.log(res.data.message);

				}),
				function function_name(argument) {
					console.log(argument);
				};
		}
	})
	.controller('privateChat', function($scope, $ionicHistory, $cookies, ApiEndpoint) {
		
	})
	.controller('messageChat', function($scope, $ionicHistory, $cookies, ApiEndpoint) {
		//
		$scope.back = function() {
				$ionicHistory.goBack();
			}
			//群聊
		function getCookie(cname) {
			var arr = document.cookie.split(';');
			for(var i = 0; i < arr.length; i++) {
				var c = arr[i].trim(); //去空格
				var arrC = c.split("=");
				if(arrC[0] == cname) {
					return arrC[1];
				}
			}
			return "";
		}
		var cooks = getCookie('phone');
		var socket = io(ApiEndpoint.url);
		$scope.cool = cooks
		$scope.kk = {
			send_content: ''
		};
		$scope.fa = function() {
				//发送
				socket.emit('broadcast', {
					data: {
						s: $scope.kk.send_content,
						c: cooks
					}
				});
				$scope.kk.send_content = "";
			}
			//接
		var arr = [];
		socket.on('broadcast', function(res) {
			$scope.$apply(function() {
				arr.push(res.data);
				$scope.faxin = arr;
				console.log(arr);
			})

		});
	})
	.controller('ZoneCtrl', function($scope, $http, ApiEndpoint, $cookies, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		};
		$scope.userData = {
			img: "",
		};
		$http({
				method: "GET",
				url: ApiEndpoint.url + '/chat/user/?phone=' + $cookies.get("phone"),
				cache: false,
			}).then(function successCallback(res) {
				if(res.data.status) {
					console.log(res.data.message);
					console.log(res.data.usersData);
					$scope.userData.img = res.data.usersData.img;
				}
				return
			}),
			function function_name(argument) {
				console.log(argument);
				console.log("请求失败,服务器")
			};

	})
	.controller('PhotoCtrl', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userInformation', ["$scope", "$rootScope", "$ionicHistory", "$ionicActionSheet", "$location", "$http", "$cookies", "ApiEndpoint", function($scope, $rootScope, $ionicHistory, $ionicActionSheet, $location, $http, $cookies, ApiEndpoint) {
		//个人信息
		$scope.back = function() {
			$rootScope.$ionicGoBack();
		}

		$scope.userData = {
			name: "",
			phone: "",
			sex: "保密",
			autograph: "",
			img: "",
			address: "",
			test: "test"
		};
		$http({
				method: "GET",
				url: ApiEndpoint.url + '/chat/user/?phone=' + $cookies.get("phone"),
				cache: false,
			}).then(function successCallback(res) {
				if(res.data.status) {
					console.log(res.data.message);
					console.log(res.data.usersData);
					$scope.userData.name = res.data.usersData.name;
					$scope.userData.phone = res.data.usersData.phone;
					$scope.userData.sex = res.data.usersData.sex;
					$scope.userData.autograph = res.data.usersData.autograph;
					$scope.userData.img = res.data.usersData.img;
					$scope.userData.address = res.data.usersData.address;
				}
				return
			}),
			function function_name(argument) {
				console.log(argument);
				console.log("请求失败,服务器")
			};
		$scope.sexShow = function() {
			//性别	
			$ionicActionSheet.show({
				title: '请选择你的性别',
				buttons: [{
					text: '男'
				}, {
					text: '女'
				}, {
					text: '保密'
				}, ],
				cancelText: '取消',
				buttonClicked: function(index, item) {
					$scope.userData.sex = item.text;
					$http({
							method: "POST",
							url: ApiEndpoint.url + '/chat/user/sex/',
							data: {
								phone: $cookies.get("phone"),
								sex: $scope.userData.sex
							}
						}).then(function successCallback(res) {
							if(res.data.status) {
								console.log(res.data.message);
							}
						}),
						function function_name(argument) {
							console.log(argument);
							console.log("请求失败,服务器")
						}

					return true;
				}
			});

		}

	}])
	.controller('userInformationImg', ["$scope", "$ionicHistory", "$location", "$state", "$http", "$cookies", "ApiEndpoint", function($scope, $ionicHistory, $location, $state, $http, $cookies, ApiEndpoint) {

		//		头像上传
		$scope.back = function() {
			$ionicHistory.goBack();
		}
		$scope.reader = new FileReader(); //创建一个FileReader接口
		$scope.form = { //用于绑定提交内容，图片或其他数据
			image: {},
		};
		//	$scope.thumb = {}; //用于存放图片的base64
		//	$scope.thumb_default = { //用于循环默认的‘加号’添加图片的框
		//		1111: {}
		//	};
		$scope.img_upload = function(files) { //单次提交图片的函数
			//		$scope.guid = (new Date()).valueOf(); //通过时间戳创建一个随机数，作为键名使用
			$scope.reader.readAsDataURL(files[0]); //FileReader的方法，把图片转成base64
			$scope.reader.onload = function(ev) {
				$scope.$apply(function() {
					$scope.thumb = {
						imgSrc: ev.target.result, //接收base64
					}
				});
			};

			var data = new FormData(); //以下为像后台提交图片数据
			data.append('img', files[0]);
			//		data.append('guid', $scope.guid);
			$http({
				method: 'post',
				url: ApiEndpoint.url + '/chat/user/img/update',
				data: data,
				headers: {
					'Content-Type': undefined
				},
				cache: false,
				transformRequest: angular.identity
			}).success(function(result) {
				console.log(result.data)
				$scope.imgs = result.data
			})
		};
		//修改头像
		$scope.submit_form = function() { //图片选择完毕后的提交，这个提交并没有提交前面的图片数据，只是提交用户操作完毕后，
			//　　　　　　　　　　　　　　　　　　　　　　　　到底要上传哪些，通过提交键名或者链接，后台来判断最终用户的选择,整个思路也是如此
			$http({
				method: 'POST',
				url: ApiEndpoint.url + '/chat/user/img/save/',
				data: {
					phone: $cookies.get("phone"),
					img: $scope.imgs
				},
				cache: false,
			}).success(function(data) {
				$state.go("user-information");
			})
		};
	}])
	.controller('userInformationAutograph', ["$scope", "$ionicHistory", "$location", "$state", "$http", "$cookies", "ApiEndpoint", function($scope, $ionicHistory, $location, $state, $http, $cookies, ApiEndpoint) {
		//个性签名
		$scope.back = function() {
			$ionicHistory.goBack();
		}
		$scope.master = {
			autograph: ""
		};
		$scope.user = angular.copy($scope.master);
		$scope.save = function() {
			console.log($scope.user.autograph)
			$http({
					method: "POST",
					url: ApiEndpoint.url + '/chat/user/autograph/',
					data: {
						phone: $cookies.get("phone"),
						autograph: $scope.user.autograph
					},
					cache: false,
				}).then(function successCallback(res) {
					if(res.data.status) {
						alert(res.data.message);
						//						$state.go();
						$state.go("user-information");
					}
				}),
				function function_name(argument) {
					console.log(argument);
					console.log("请求失败,服务器")
				};
		}
	}])
	.controller('userInformationName', ["$scope", "$ionicHistory", "$location", "$state", "$http", "$cookies", "ApiEndpoint", function($scope, $ionicHistory, $location, $state, $http, $cookies, ApiEndpoint) {
		//昵称
		$scope.back = function() {
			$ionicHistory.goBack();
		}
		$scope.master = {
			name: ""
		};
		$scope.user = angular.copy($scope.master);
		$scope.save = function() {
			console.log($scope.user.name)
			$http({
					method: "POST",
					url: ApiEndpoint.url + '/chat/user/name/',
					data: {
						phone: $cookies.get("phone"),
						name: $scope.user.name
					}
				}).then(function successCallback(res) {
					if(res.data.status) {
						alert(res.data.message);
						$state.go("user-information");
					}
				}),
				function function_name(argument) {
					console.log(argument);
					console.log("请求失败,服务器")
				};
		}
	}])
	.controller('userInformationAddress', ["$scope", "$ionicHistory", "$location", "$state", "$http", "$cookies", "ApiEndpoint", function($scope, $ionicHistory, $location, $state, $http, $cookies, ApiEndpoint) {
		//地址
		$scope.back = function() {
			$ionicHistory.goBack();
		}
		$scope.master = {
			address: ""
		};
		$scope.user = angular.copy($scope.master);
		$scope.save = function() {
			console.log($scope.user.address)
			$http({
					method: "POST",
					url: ApiEndpoint.url + '/chat/user/address/',
					data: {
						phone: $cookies.get("phone"),
						address: $scope.user.address
					}
				}).then(function successCallback(res) {
					if(res.data.status) {
						alert(res.data.message);
						$state.go("user-information");
					}
				}),
				function function_name(argument) {
					console.log(argument);
					console.log("请求失败,服务器")
				};
		}
	}])

.controller('userInformationRQcode', function($scope, $ionicHistory, $http, $cookies, ApiEndpoint) {
		//二维码头像获取
		$scope.back = function() {
			$ionicHistory.goBack();
		}
		$scope.userData = {
			img: "",
		}
		$http({
				method: "GET",
				url: ApiEndpoint.url + '/chat/user/?phone=' + $cookies.get("phone"),
				cache: false,
			}).then(function successCallback(res) {
				if(res.data.status) {
					console.log(res.data.message);
					console.log(res.data.usersData);
					$scope.userData.img = res.data.usersData.img;
				}
				return
			}),
			function function_name(argument) {
				console.log(argument);
				console.log("请求失败,服务器")
			};
	})
	.controller('userCollect', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userSetting', function($scope, $ionicHistory, $state, $cookies) {
		$scope.back = function() {
			$ionicHistory.goBack();
		};
		$scope.exit = function() {
			$cookies.remove("phone");
			$state.go("main");
		}
	})
	.controller('userSettingNew', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userSettingChat', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userSettingSafe', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userSettingPrivacy', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userSettingGeneral', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userSettingDisturb', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userCard', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userCardCoupon', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userCardBills', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('userCardVip', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('main', function($scope, $state, $cookies, $location, $ionicHistory) {
		$scope.cookie = function() {
			if($cookies.get("phone")) {
				$state.go("tab.message");
			}
		};
		$scope.cookie();
	})
	.controller('login', ["$scope", "$ionicHistory", "$cookies", "$state", "$http", "$location", "ApiEndpoint", function($scope, $ionicHistory, $cookies, $state, $http, $location, ApiEndpoint) {
		//登录
		$scope.back = function() {
			$ionicHistory.goBack();
		}

		$scope.master = {
			phone: "",
			password: ""
		};
		$scope.user = angular.copy($scope.master);
		$scope.goToIndex = function() {
			$location.path("/tab/message");
		};
		$scope.login = function() {
			console.log($scope.user.phone);
			console.log($scope.user.password);
			$http({
					method: 'POST',
					url: ApiEndpoint.url + '/chat/login/',
					data: {
						phone: $scope.user.phone,
						password: $scope.user.password
					}
				}).then(function successCallback(res) {
					console.log(res)
					if(res.data.status) {
						console.log(res.data.status)
						$cookies.put('phone', res.config.data.phone);
						$state.go("tab.message");
					} else {
						alert(res.data.message);
					}
				}),
				function function_name(argument) {
					// 请求失败执行的代码
					console.log("请求失败,服务器错了吧")
				};
		};

	}])

.controller('loginM', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('loginSms', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})
	.controller('register', ["$scope", "$ionicHistory", "$http", "ApiEndpoint", function($scope, $ionicHistory, $http, ApiEndpoint) {
		//注册
		$scope.back = function() {
			$ionicHistory.goBack();
		}
		$scope.master = {
			phone: "",
			password: ""
		};
		$scope.user = angular.copy($scope.master);
		$scope.register = function() {
			console.log($scope.user.phone);
			console.log($scope.user.password);
			$http({
					method: 'POST',
					url: ApiEndpoint.url + '/chat/register/',
					data: {
						test: "test",
						phone: $scope.user.phone,
						password: $scope.user.password,
						sex: "保密",
						name: "未设置",
						autograph: "请设置个性签名",
						friend: [],
						toVerifyFriend: [],
						img: {},
						address: "山东 青岛",
					}
				}).then(function successCallback(res) {
					console.log(res.data.message);
					if(res.data.status) {
						alert(res.data.message);
					} else {
						alert(res.data.message);

					}

				}),
				function function_name(argument) {
					// 请求失败执行的代码
				};
		};

	}])
	.controller('find', function($scope, $ionicHistory) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}
	})

//============================================
.controller('FriendsCtrl', function($scope, $http, $cookies, ApiEndpoint, Chats, $ionicModal) {
		$http({
				method: "GET",
				url: ApiEndpoint.url + '/chat/friendlist/?phone=' + $cookies.get("phone"),
				cache: false,
			}).then(function successCallback(res) {
				var arr = res.data.usersData;
				$http({
					method: "POST",
					url: ApiEndpoint.url + '/chat/addfriend/',
					data: arr,
					cache: false,
				}).then(function successCallback(user) {

					$scope.userArr = user.data.userData
					console.log($scope.userArr)
				})
			}),
			function function_name(argument) {
				console.log(argument);
			};
		$scope.chats = Chats.all();
		$scope.remove = function(chat) {
			Chats.remove(chat);
		};
		$ionicModal.fromTemplateUrl('templates/search.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$scope.openModal = function() {
			$scope.modal.show();
		};
		$scope.closeModal = function() {
			$scope.modal.hide();
		};
		$ionicModal.fromTemplateUrl('templates/add.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(add) {
			$scope.add = add;
		});
		$scope.openModal = function() {
			$scope.add.show();
		};
		$scope.closeModal = function() {
			$scope.add.hide();
		};
	})
	.controller('toVerifyFriend', function($scope, $state, ApiEndpoint, $cookies, $stateParams, $ionicHistory, $http) {
		$scope.back = function() {
			$ionicHistory.goBack();
		}

		$http({
				method: "GET",
				url: ApiEndpoint.url + '/chat/toverifyfriend/?phone=' + $cookies.get("phone"),
				cache: false,
			}).then(function successCallback(res) {
				var arr = res.data.usersData;
				$http({
					method: "POST",
					url: ApiEndpoint.url + '/chat/addfriend/',
					data: arr,
					cache: false,
				}).then(function successCallback(user) {
					console.log(user.data.userData)
					$scope.userArr = user.data.userData
					console.log($scope.userArr)
				})
			}),
			function function_name(argument) {
				console.log(argument);
			};
		$scope.agree = function(i) {

			$http({
				method: "POST",
				url: ApiEndpoint.url + '/chat/agree/',
				data: {
					phone: i,
					selfPhone: $cookies.get("phone")
				},
				cache: false,
			}).then(function successCallback(user) {
				console.log(user.data)
				if(user.data.status) {
					location.reload([true]);
				}
			})
		}
	})
	.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
		$scope.chat = Chats.get($stateParams.chatId);
	})
	.controller('FindCtrl', function($scope, $ionicModal, $http, $cookies, ApiEndpoint) {
		$scope.settings = {
			enableFriends: true
		};
		$ionicModal.fromTemplateUrl('templates/search.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$scope.openModal = function() {
			$scope.modal.show();
		};
		$scope.closeModal = function() {
			$scope.modal.hide();
		};
		$ionicModal.fromTemplateUrl('templates/add.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(add) {
			$scope.add = add;
		});
		$scope.openModal = function() {
			$scope.add.show();
		};
		$scope.closeModal = function() {
			$scope.add.hide();
		};
		$scope.userData = {
			img: "",
		}
		$http({
				method: "GET",
				url: ApiEndpoint.url + '/chat/user/?phone=' + $cookies.get("phone"),
				cache: false,
			}).then(function successCallback(res) {
				if(res.data.status) {
					//				console.log(res.data.message);
					//				console.log(res.data.usersData);
					$scope.userData.img = res.data.usersData.img;
				}
				return
			}),
			function function_name(argument) {
				console.log(argument);
				console.log("请求失败,服务器")
			};
	});

//var app = angular.module('starter', []);
//app.controller('TestCtrl', function($scope, $http) {
//
//});