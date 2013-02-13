define(['app'], function (app) {
	return app.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.
				when('/home', {
					templateUrl: 'partials/home.html',
					controller: 'homeController'
				}).
				otherwise({redirectTo:'/'});
		}]);
});
