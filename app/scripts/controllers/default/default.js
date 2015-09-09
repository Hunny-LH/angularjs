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
    .controller('DefaultCtrl',['$scope','$state','weatherService',
        function ($scope,$state,weatherService) {
          weatherService.get({cityname:"成都"},
              function(data){
                   console.log(data); 
                   if(data.errNum==0){
                       $scope.msg = false;
                       $scope.weather = data.retData;
                   }else{
                       $scope.msg = data.errMsg;
                   }
              });
            
    }]);