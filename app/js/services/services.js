/**
 * BaseService
 **/
 
define(['angular', 'services/homeService', 'resource'], 
 	function (angular, HomeService) {
		console.log(angular);
		var services = angular.module('services', ['ngResource']);

 		services.factory('homeService', HomeService);

 		return services;
 });