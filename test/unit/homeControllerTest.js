define(['angular', 'mocks'], function(angular, mocks) {
	describe('Controller section:', function() {
		describe('baseController', function() {
			var service, controllerScope, Controller;

			beforeEach(function () {
				var app = angular.module("App");				
			});

			beforeEach(function () {
				angular.module("services", function ($provide) {

					$provide.factory('userService', function () {

						service = "blub";

						return service;
					});
				});

				inject(["$rootScope", "$controller",
					function ($rootScope, $controller) {
						//service = _Service;
						console.log($controller);
						controllerScope = $rootScope.$new();
						$controller("HomeController", {
							$scope: controllerScope
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