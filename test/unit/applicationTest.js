define(['angular', 'app'], function (angular, module) {
	describe("Sample Project: Testing Modules", function () {
		describe("MyApp Module:", function () {

			it("should be registered", function () {
				expect(module).not.toBeUndefined();
			});

			describe("Dependencies:", function () {

				var dependencies;

				var hasModule = function (module) {
					return dependencies.indexOf(module) >= 0;
					console.log(dependencies);
				};

				beforeEach(function () {
					dependencies = module.value('myApp').requires;
				});

				it("should have app.filter as a dependency", function () {
					expect(hasModule('app.filter')).toEqual(true);
				});

				it("should have app.service as a dependency", function () {
					expect(hasModule('app.service')).toEqual(true);
				});

				it("should have app.filter as a dependency", function () {
					expect(hasModule('app.filter')).toEqual(true);
				});

				it("should have app.directives as a dependency", function () {
					expect(hasModule('app.directive')).toEqual(true);
				});

				it("should have app.provider as a dependency", function () {
					expect(hasModule('app.provider')).toEqual(true);
				});
			});
		});
	});
});