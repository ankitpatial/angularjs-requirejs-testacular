define(['angular', 'mocks'], function () {
	"use strict";

	describe('HomeController', function () {
		var homeService, serviceThenSpy, baseScope;

		beforeEach(function () {			
			module('services', function ($provide) {
				$provide.factory('homeService', function () {
					console.log('creating homeService...');

					homeService = jasmine.createSpy('homeService');

					serviceThenSpy = jasmine.createSpy("then").andCallFake(function () {
                        return {
                            then:serviceThenSpy
                        };
                    });

					homeService.get = jasmine.createSpy().andCallFake(function (url) {
						return {
							name : 'blub',
							pass : 'blob' + url,
							then: serviceThenSpy
						};
					});

					console.log('home service created', homeService);

					return homeService;
				});

			});

			module('controllers', function ($provide) {
				$provide.factory('location', function () {
					var location = jasmine.createSpy();

					console.log('location spy', location);

					return location;
				});
			});

			inject(['homeService', '$rootScope', '$controller',
				function(_homeService, $rootScope, $controller) {
					homeService = _homeService;
					console.log(_homeService);					
					baseScope = $rootScope.$new();
					$controller('homeController', {
						$scope : baseScope,
						homeService : homeService
					});
				}
			]);			
		});

		describe('Testing variables', function () {
			it('should have a variable $scope.variable which is "empty"', function () {				
				expect(baseScope.variable).toEqual('empty');
			});
		});

		describe('Testing functions', function () {
			it('should have a function called login', function () {
				expect(baseScope.login()).not.toBe(null);
			});
		});
	});
})