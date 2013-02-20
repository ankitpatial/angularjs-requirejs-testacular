require({
	paths: {
		domReady : '../lib/require/domReady',
		angular : '../lib/angular/angular',
		resource : '../lib/angular/angular-resource'
    },
	shim: {
		'angular' : {'exports' : 'angular'}
	},
	priority: [
		'angular'
	],
	urlArgs: 'v=0.1'
}, ['app', 'routes', 'bootstrap', 'services/services', 'directives/directives', 'providers/providers',
	'filters/filters', 'controllers/controllers'], function (app) {
	return app.run();
});

