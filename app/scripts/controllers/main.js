/*global angular*/
'use strict';


/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
    .controller('MainCtrl', ['$scope', '$state', 'weatherService',
        function($scope, $state, weatherService) {
           
            weatherService.getWeather("成都");
        }
    ]).
config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('index', {
            url: "/index",
            templateUrl: "views/main.html",
            controller: 'MainCtrl'
        })
        .state('index.default', {
            url: "/default",
            templateUrl: "views/default/default.html",
            controller: 'MainCtrl'
        })
        .state('index.publish', {
            url: "/publish",
            templateUrl: "views/publish/publish.html",
            controller: 'PublishCtrl'
        });
}]);