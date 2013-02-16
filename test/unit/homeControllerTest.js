define(function () {
	"use strict";

	describe('HomeController', function () {
		var homeService, urlService, serviceThenSpy, baseScope;

		beforeEach(function () {
			module('services', function ($provide) {
				$provide.factory('homeService', function () {
					homeService = jasmine.createSpy('backendService');

					serviceThenSpy = jasmine.createSpy('then').andCallFake(function () {
						return {
							then : serviceThenSpy
						};
					});

					homeService.get = jasmine.createSpy().andCallFake(function (url) {
						return {
							name : 'blub',
							pass : 'blob'
						};
					});

					return homeService;
				});

				$provide.factory('urlService', function() {
					urlService = jasmine.createSpy('urlService');

					urlService.url = jasmine.createSpy().andReturn(undefined);

					return urlService;
				});
			});

			module('controllers', function ($provide) {
				$provide.factory('location', function () {
					return jasmine.createSpy();
				});
			});

			inject(['homeService', 'urlService', '$rootScope', '$controller',
				function(_homeService, _urlService, $rootScope, $controller) {
					homeService = _homeService;
					urlService = _urlService;
					baseScope = $rootScope.$new();
					$controller('homeController', {
						$scope : baseScope
					});
				}
			]);			
		});

		describe('HomeController', function () {
			it('$scope.variable should be "empty"', function () {				
				expect(baseScope.variable).toEqual('empty');
			});
		});
	});
})