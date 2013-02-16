/**
 * Base Controller
 **/ 

define(['angular', 'controllers/homeController'], 
 	function (angular, HomeController) {
 		
 		var controllers = angular.module('controllers', ['services']);

 		controllers.controller('homeController', HomeController);

 		return controllers;
});