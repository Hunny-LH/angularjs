'use strict';

angular.module('angularjsApp')
.controller('ContentCtrl', ['$scope','$state','Menu',
	 function ($scope,$state,Menu) {
	 	
      Menu.query(4).then(function(submenus){
        $scope.submenus = submenus;
      });
}])
.config(['$stateProvider',function ($stateProvider) {
	
}]);
