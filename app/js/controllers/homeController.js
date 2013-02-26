/**
 * HomeController
 **/
 
define(function () {
	'use strict';
	
	function HomeController($scope, homeService, home) {
		$scope.variable = 'empty';

		$scope.init = function () {
			console.log(home);
		};

		$scope.login = function() {			
			console.log(homeService);
			console.log('login() was called');
		};
	}

	HomeController.$inject = ['$scope', 'homeService', 'home'];

	return HomeController;
});