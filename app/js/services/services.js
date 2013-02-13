/**
 * BaseService
 **/
 
define(['angular', 'services/homeService'], 
 	function (angular, HomeService) {
 		
 		var services = angular.module('services', ['ngResource']);

 		services.factory('homeService', HomeService);
 });