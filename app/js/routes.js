/**
 *  route.js
 **/
define(['app'], ['ui.compat', function (app) {
	return app.config(['$stateProvider', '$routeProvider', '$urlRouterProvider', 
		function($stateProvider, $routeProvider, $urlRouterProvider) {
		console.log('route was called');
		$routeProvider.
			when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'homeController',
				resolve: {
					'home' : ['$q',
						function ($q) {
						var customer = { 'name' : 'value'};

						return customer;
					}]
				}	 
			}).
			otherwise({redirectTo:'/'});
	}]);
}]);
