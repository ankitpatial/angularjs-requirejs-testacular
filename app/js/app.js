define(['angular'], function () {
	'use strict';

	var app = angular.module('App', [
		'app.controller',
		'app.directive',
		'app.filter',
		'app.provider',
		'app.service'
	]);

	return app;
});
