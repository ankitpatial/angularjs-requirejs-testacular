/**
 * BaseService
 **/
 
define(['angular', 'services/homeService'], 
 	function (angular, HomeService) {
 		
 		var services = angular.module('services', []);

 		services.factory('homeService', HomeService);

 		return services;
 });