'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('MainCtrl', ['$scope','$state','Menu',
    function ($scope,$state,Menu) {

    

    $scope.hasLogin = false;


    $('.carousel').carousel({
      interval: 5000
    });

    $scope.prev = function(){
      $('.carousel').carousel('prev');
    }
    $scope.next = function(){
      $('.carousel').carousel('next');
    }

    $scope.submit = function(){
      var user = $scope.user;

      // if(user.username=="393803588@qq.com"&&user.password=="123"){
      //   $scope.hasLogin = true;
        $state.go("index.default");
      // }

    }

    if($scope.hasLogin){
      $state.go("index.default");
    }else{
      $state.go("index.login");
    }

    // Menu.query(0).then(function(menus){
    //    $scope.menus = menus;
    // });

  }]).
factory('Menu', ['$http','HTTP_API',function ($http,HTTP_API) {
  return {
    query : function(pid){
      return $http.get(HTTP_API+"/menu/list/"+pid+".json")
          .then(function(response){
            var result = [];
            // console.log(response.data);
            angular.forEach(response.data.menuList, function(value,key){
              result[key] = value;
            });
            // console.log(result);
            return result;
          });
    }
  }
}]).
config(['$stateProvider', function ($stateProvider) {
  	$stateProvider
    .state('index', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    })
    .state('index.default', {
      url: "/default",
      templateUrl: "views/home/default.html",
      controller: 'MainCtrl'
    })
    .state('index.login', {
      url: "/login",
      templateUrl: "views/home/login.html",
      controller: 'MainCtrl'
    })
    .state('index.content',{
      url:"/content",
      templateUrl:"views/content.html",
      controller: 'ContentCtrl'
    });
    
  }])
