(function (require) {
	'use strict';

	require.config({
		paths: {	
			underscore: '../libs/underscore/underscore',	   
			angular: '../libs/angular/angular',
			angularResource: '../libs/angular/angular-resource',
			text: '../libs/require/text'
	    },
		shim: {
			'angular' : {'exports' : 'angular'},
			'angular-resource' : {deps:['angular']}
		},
		priority: [
			"angular"
		],
		urlArgs: 'v=0.1'
	});

	require([			
		'angular', 		
		'angularResource',
		'app',
		'routes'
	], function(angular) {
	  angular.element(document).ready(function () {
	    angular.bootstrap(document, ['myApp']);
	  });
	});

}(require));
