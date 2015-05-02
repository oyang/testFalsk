angular.module('app', [
		'ui.router',
		'ngResource'
	])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('hello', {
				url: '/hello',
				template: 'hello'
			});
	});
