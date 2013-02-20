define(['angular', 'mocks'], function () {
	'use strict';

	describe('homeService', function () {
		var homeService, resource, host;

		beforeEach(function () {
			module('services', function ($provide) {
				$provide.factory('ngResource', function ($resource) {

				});

				$provide.factory('REST_HOST', function () {
					host = 'http://locahost:8080/web';

					return host;
				});
			});

			inject(['homeService', '$resource', 'REST_HOST'], function (_homeService, _$resource, _host) {
				homeService = _homeService;
				resource = _$resource;
			});
		});

		describe('verifying get method', function () {
			it('should call the get method', function () {
				homeService.get();
			});
		});
	});
});