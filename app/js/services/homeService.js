/**
 * HomeService
 **/
define(['angular'], function (angular) {
	"use strict";

	var service = function ($resource, REST_HOST) {

		return $resource(REST_HOST + '/home/:id/:property', {}, {
			update: {method:'PUT'},
			query: {method:'GET', isArray:false},
			relation: {method: 'GET', isArray: true}
		});

	};
	service.$inject = ['$resource', 'REST_HOST'];

	return service;
});

