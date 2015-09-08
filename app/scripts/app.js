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
    'ngResource',
    'ui.router',
    'app.services',
    'app.directives'
]).
config(function($urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.when("", "/index/default")
        .otherwise("/index/default"); 
});

