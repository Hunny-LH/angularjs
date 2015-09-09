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
    .controller('MainCtrl', ['$scope','$state','ipService',
        function($scope,$state,ipService) {
            ipService.get(function(data){
                console.log(data);
                $scope.ip = data;
            })
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
            controller: 'DefaultCtrl'
        })
        .state('index.publish', {
            url: "/publish",
            templateUrl: "views/publish/publish.html",
            controller: 'PublishCtrl'
        });
}]);


function jsonp_callback(data){
    console.log(data);
}