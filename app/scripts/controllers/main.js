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
    .controller('MainCtrl', ['$scope', '$state', 'Menu',
        function($scope, $state) {
            $scope.submit = function() {
                var user = $scope.user;
                if (user.username === "393803588@qq.com" && user.password === "123") {
                    $state.go("index.default");
                }
            };

            $scope.hasLogin = function() {
                console.log($state.current.name);
                if ($state.current.name !== "index.login") {
                    return true;
                }
                return false;
            }

            //图片轮播
            $scope.myInterval = 4000;

            var slides = $scope.slides = [];
            slides.push({
                image: 'images/bg1.jpg',
                text: 'This is the first picture'
            });
            slides.push({
                image: 'images/bg2.jpg',
                text: 'This is the second picture'
            });
            slides.push({
                image: 'images/bg3.jpg',
                text: 'This is the thrid picture'
            });

        }
    ]).
factory('Menu', ['$http', 'HTTP_API', function($http, HTTP_API) {
    return {
        query: function(pid) {
            return $http.get(HTTP_API + "/menu/list/" + pid + ".json")
                .then(function(response) {
                    var result = [];
                    // console.log(response.data);
                    angular.forEach(response.data.menuList, function(value, key) {
                        result[key] = value;
                    });
                    // console.log(result);
                    return result;
                });
        }
    };
}]).
config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('index', {
            url: "/index",
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
        .state('index.content', {
            url: "/content",
            templateUrl: "views/content.html",
            controller: 'ContentCtrl'
        })
        .state('index.publish', {
            url: "/publish",
            templateUrl: "views/publish.html",
            controller: 'PublishCtrl'
        });

}]);