/**
 * bootstrap.js
 **/

define(['require', 'angular', 'app'], function(require, angular) {

  'use strict';
  
  return require(['domReady!'], function(document) {
  	console.log(document)
    return angular.bootstrap(document, ['myApp']);
  });
});