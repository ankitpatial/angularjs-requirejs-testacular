define(['angular'], function(angular) { 
    describe("Sample Project: Testing Modules", function() {
    describe("MyApp Module:", function() {
      var module, dependencies;
      
      beforeEach(function () {
        module = angular.module("myApp");
        dependencies = module.requires;
      });
      
      it("should be registered", function() {    
        expect(module).not.toBeUndefined();
      });

      describe("Dependencies:", function() {

        var hasModule = function(module) {
          return dependencies.indexOf(module) >= 0;
        };

        it("should have filters as a dependency", function() {
          expect(hasModule('filters')).toEqual(true);
        });

        it("should have services as a dependency", function() {
          expect(hasModule('services')).toEqual(true);
        });

        it("should have controllers as a dependency", function() {
          expect(hasModule('controllers')).toEqual(true);
        });

        it("should have directives as a dependency", function() {
          expect(hasModule('directives')).toEqual(true);
        });
      });
    });
  });
});