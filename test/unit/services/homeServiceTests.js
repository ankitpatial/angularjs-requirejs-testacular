define(function () {
	'use strict';

	describe('homeService', function () {

		var backendService, utilService, $http, $httpDefer, $waitDialog, $q;

		beforeEach(function () {

			module('services', function ($provide) {
				$provide.factory('$http', function ($q) {
					$http = jasmine.createSpy();
					$httpDefer = $q.defer();
					$http.andReturn($httpDefer.promise);

					$http.get = jasmine.createSpy().andCallFake(function (url) {
						return {
							name:'ein Objekt',
							wert:'ein Wert fuer ' + url
						};
					});

					$http.put = jasmine.createSpy().andCallFake(function (url) {
						return {
							name:'ein Objekt',
							wert:'ein Wert fuer ' + url
						};
					});

					return $http;
				});

				$provide.factory('$waitDialog', function () {
					$waitDialog = {
						show:jasmine.createSpy(),
						hide:jasmine.createSpy()
					};
					return $waitDialog;
				});


			});

			inject(["backendService", "$q", "utilService", function (_backendService, _$q, _utilService) {
				backendService = _backendService;
				utilService =  _utilService;

				utilService.showWaitDialogWhile = jasmine.createSpy().andCallFake(function (promise) {
					return promise;
				});

				utilService.unpackPromiseAndHandleErrorCodes = jasmine.createSpy().andCallFake(function (promise) {
					return promise;
				});

				$q = _$q;
			}]);

		});

		describe('methode get', function () {
			it('es soll http.get aufgerufen werden', function () {
				backendService.get("irgendein/link", {withCredentials:false});
				expect($http.get).toHaveBeenCalled();
			});

			it('es soll im Erfolgsfall ein JSON-Objekt zurueckgegeben werden', function () {
				var promise;
				promise = backendService.get("irgendein/link");

				expect(promise).toEqual({
						name:'ein Objekt',
						wert:'ein Wert fuer irgendein/link'
					}
				);
			});

			it('es soll das UtilService-Fehlerhandling aufgerufen werden', function () {
				backendService.get("irgendein/link");
				expect(utilService.unpackPromiseAndHandleErrorCodes).toHaveBeenCalled();
			});

			it('es soll der Wait-Dialog aufgerufen werden', function () {
				backendService.get("irgendein/link");
				expect(utilService.showWaitDialogWhile).toHaveBeenCalled();
			});

			it('es soll http.get ohne gueltige URL einen Fehler liefern', function () {
				expect(function () {
					backendService.get(undefined, {withCredentials:true});
				}).toThrow(new Error("backendService: die URL muss angegeben werden."));
			});

		});

	});
});