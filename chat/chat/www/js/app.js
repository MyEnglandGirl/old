// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.position('standard');

	$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
	$ionicConfigProvider.platform.android.navBar.alignTitle('');

	$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
	$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

	$ionicConfigProvider.platform.ios.views.transition('ios');
	$ionicConfigProvider.platform.android.views.transition('android');

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
		.state('tab', {
			url: '/tab',
			abstract: true,
			templateUrl: 'templates/tabs.html'
		})
		.state('search', {
			url: '/search',
			//  abstract: true,
			templateUrl: 'templates/search.html',
			controller: 'SearchCtrl'
		})
		.state('add', {
			url: '/add',
			//  abstract: true,
			templateUrl: 'templates/add.html',
			controller: 'AddCtrl'
		})

	// Each tab has its own nav history stack:
	//	微信(1)
	.state('tab.message', {
			url: '/message',
			views: {
				'tab-message': {
					templateUrl: 'templates/tab-message.html',
					controller: 'MessageCtrl'
				}
			}
		})
		//==========================================
		.state('tab.user', {
			url: '/user',
			views: {
				'tab-user': {
					templateUrl: 'templates/tab-user.html',
					controller: 'UserCtrl'
				}
			},
			cache: false
		})
		//	=============================================
		.state('tab.friends', {
			url: '/friends',
			views: {
				'tab-friends': {
					templateUrl: 'templates/tab-friends.html',
					controller: 'FriendsCtrl'
				}
			},
			cache: false
		})
		.state('toVerifyFriend', {
			url: '/tab/find/message/toVerifyFriend',
			templateUrl: 'templates/toVerifyFriend.html',
			controller: 'toVerifyFriend',
			cache: false
		})
		.state('tab.chat-detail', {
			url: '/chats/:chatId',
			views: {
				'tab-chats': {
					templateUrl: 'templates/chat-detail.html',
					controller: 'ChatDetailCtrl'
				}
			}
		})
		.state('message-chat', {
			url: '/tab/find/message/chat',
			templateUrl: 'templates/message-chat.html',
			controller: 'messageChat'
		})
		.state('private-chat', {
			url: '/tab/find/private/chat',
			templateUrl: 'templates/private-chat.html',
			controller: 'privateChat'
		})
		.state('tab.find', {
			url: '/find',
			views: {
				'tab-find': {
					templateUrl: 'templates/tab-find.html',
					controller: 'FindCtrl'
				}
			},
			cache: false
		})
		.state('zone', {
			url: '/tab/find/zone',
			templateUrl: 'templates/zone.html',
			controller: 'ZoneCtrl'
		})
		.state('user-photo', {
			url: '/tab/user/photo',
			templateUrl: 'templates/user-photo.html',
			controller: 'PhotoCtrl'
		})
		.state('user-information', {
			url: '/tab/user/information',
			templateUrl: 'templates/user-information.html',
			controller: 'userInformation',
			cache: false
		})
		.state('user-information-img', {
			url: '/tab/user/information/img',
			templateUrl: 'templates/user-information-img.html',
			controller: 'userInformationImg'
		})
		.state('user-information-autograph', {
			url: '/tab/user/information/autograph',
			templateUrl: 'templates/user-information-autograph.html',
			controller: 'userInformationAutograph'
		})
		.state('user-information-name', {
			url: '/tab/user/information/name',
			templateUrl: 'templates/user-information-name.html',
			controller: 'userInformationName'
		})
		.state('user-information-address', {
			url: '/tab/user/information/address',
			templateUrl: 'templates/user-information-address.html',
			controller: 'userInformationAddress'
		})
		.state('user-information-RQcode', {
			url: '/tab/user/information/RQcode',
			templateUrl: 'templates/user-information-RQcode.html',
			controller: 'userInformationRQcode'
		})
		.state('user-collect', {
			url: '/tab/user/collect',
			templateUrl: 'templates/user-collect.html',
			controller: 'userCollect'
		})
		.state('user-setting', {
			url: '/tab/user/setting',
			templateUrl: 'templates/user-setting.html',
			controller: 'userSetting'
		})
		.state('user-setting-new', {
			url: '/tab/user/setting/new',
			templateUrl: 'templates/user-setting-new.html',
			controller: 'userSettingNew'
		})
		.state('user-setting-chat', {
			url: '/tab/user/setting/chat',
			templateUrl: 'templates/user-setting-chat.html',
			controller: 'userSettingChat'
		})
		.state('user-setting-safe', {
			url: '/tab/user/setting/safe',
			templateUrl: 'templates/user-setting-safe.html',
			controller: 'userSettingSafe'
		})
		.state('user-setting-privacy', {
			url: '/tab/user/setting/privacy',
			templateUrl: 'templates/user-setting-privacy.html',
			controller: 'userSettingPrivacy'
		})
		.state('user-setting-general', {
			url: '/tab/user/setting/general',
			templateUrl: 'templates/user-setting-general.html',
			controller: 'userSettingGeneral'
		})
		.state('user-setting-disturb', {
			url: '/tab/user/setting/disturb',
			templateUrl: 'templates/user-setting-disturb.html',
			controller: 'userSettingDisturb'
		})
		.state('user-card', {
			url: '/tab/user/card',
			templateUrl: 'templates/user-card.html',
			controller: 'userCard'
		}).state('user-card-coupon', {
			url: '/tab/user/card/coupon',
			templateUrl: 'templates/user-card-coupon.html',
			controller: 'userCardCoupon'

		}).state('user-card-bills', {
			url: '/tab/user/card/bills',
			templateUrl: 'templates/user-card-bills.html',
			controller: 'userCardBills'

		}).state('user-card-vip', {
			url: '/tab/user/card/vip',
			templateUrl: 'templates/user-card-vip.html',
			controller: 'userCardVip'
		})
		.state('main', {
			url: '/main',
			templateUrl: 'templates/main.html',
			controller: 'main'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'templates/login.html',
			controller: 'login'
		})
		.state('login-m', {
			url: '/login-m',
			templateUrl: 'templates/login-m.html',
			controller: 'loginM'
		})
		.state('login-sms', {
			url: '/login-sms',
			templateUrl: 'templates/login-sms.html',
			controller: 'loginSms'
		})
		.state('register', {
			url: '/register',
			templateUrl: 'templates/register.html',
			controller: 'register'
		})
		.state('find', {
			url: '/find',
			templateUrl: 'templates/find.html',
			controller: 'find'
		});

	// if none of the above states are matched, use this as the fallback
	//	$urlRouterProvider.otherwise('/main');
	$urlRouterProvider.otherwise('/tab/message');

});