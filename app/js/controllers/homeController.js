/**
 * HomeController
 **/
 
define(function () {
	'use strict';
	
	function HomeController($scope, homeService) {
		$scope.variable = 'empty';

		$scope.login = function() {
			console.log(homeService);
			console.log('login() was called');
		};
	}

	HomeController.$inject = ['$scope', 'homeService'];

	return HomeController;
});