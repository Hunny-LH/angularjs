/*global angular*/
'use strict';

/**
 * @ngdoc overview
 * @name angularjsApp
 * @description
 * # angularjsApp
 *
 * Main module of the application.
 */
angular.module('angularjsApp', [
    // 'ngAnimate',
    'ui.router',
    
    'ui.bootstrap'
]).
config(function($urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.when("", "/index/default")
        .otherwise("/index/default"); 
})
.constant('HTTP_API', "http://localhost:8089/rest/api")
.constant('BASE_DATA', "data");
