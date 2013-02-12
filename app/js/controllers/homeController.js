/**
 * HomeController
 **/
 define(function () {
	'use strict';
	
	function HomeController($scope, $http) {
		console.log($scope, $http);
	}

	HomeController.$inject = ['$scope', '$http'];

	return HomeController;
});