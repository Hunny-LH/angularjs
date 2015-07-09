'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('DefaultCtrl', function ($scope) {
    
  }).
config(['$stateProvider', function ($stateProvider) {
  	$stateProvider
    .state('index.content.default', {
      url: "/default",
      templateUrl: "views/home/default.html",
      controller: 'DefaultCtrl'
    })
  }])
