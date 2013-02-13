define(['angular', 'mocks'], function(angular, mocks) {
	describe('Controller section:', function() {
		describe('homeController', function() {
			var service, controllerScope, Controller;

			beforeEach(function () {
				var app = angular.module('myApp');
				console.log(app.requires)			
			});

			beforeEach(function () {
				angular.module('services', function ($provide) {

					$provide.factory('homeService', function () {
						service = 'blub';
						return service;
					});
				});

				inject(['$rootScope', '$controller',
					function ($rootScope, $controller) {
						scope = $rootScope.$new();
						$controller('homeController', {
							scope : $scope
						});
					}
				]);
			});

			
			it('should have a list() function', function() {				
				expect(true).not.toBe(null);
			});
		});
	});
});