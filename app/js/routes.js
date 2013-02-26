
define(['app'], function (app) {
	return app.config(['$routeProvider', function($routeProvider) {
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
});
