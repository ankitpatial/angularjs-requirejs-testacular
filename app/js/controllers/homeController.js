/**
 * HomeController
 **/
 
define(function () {
	'use strict';
	
	function HomeController($scope, $http, homeService) {

		$scope.login = function() {
			console.log('login() was called');
		};
	}

	HomeController.$inject = ['$scope', '$http', 'homeService'];

	return HomeController;
});