'use strict';

require.config({
	paths: {		   
		angular: '../libs/angular/angular',
		angularResource: '../libs/angular/angular-resource',
		angularCookies: '../libs/angular/angular-cookies',
		text: '../libs/require/text',
		moment: '../libs/moment/moment.min'
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
	'angularCookies',
	'moment',
	'app',
	'routes',
	'controllers/baseController'
	'controllers/homeController'

	'directives/baseDirective',

	'filter/baseFilter',

	'provider/baseProvider',

	'services/baseService'
], function(angular) {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
  });
});
