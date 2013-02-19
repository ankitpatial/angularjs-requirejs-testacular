
define(['app'], function (app) {
	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'homeController'
			}).
			otherwise({redirectTo:'/'});
	}]);
});
