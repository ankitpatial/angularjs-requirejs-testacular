'use strict';

define(['app'], function (app) {
	return app.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {		
		$routeProvider.
		otherwise({redirectTo:'/'});
		//$locationProvider.html5Mode(true);        	
	}]);
});
