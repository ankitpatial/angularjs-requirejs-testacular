/**
 * HomeController
 **/
 
define(function () {
	'use strict';
	
	function HomeController($scope, $http) {
		$scope.variable = 'empty';

		$scope.login = function() {
			console.log('login() was called');
		};
	}

	HomeController.$inject = ['$scope', '$http'];

	return HomeController;
});