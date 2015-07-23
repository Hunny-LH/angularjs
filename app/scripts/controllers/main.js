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
    .controller('MainCtrl', ['$scope', '$state',
        function($scope, $state) {
            $scope.submit = function() {
                var user = $scope.user;
                if (user.username === "393803588@qq.com" && user.password === "123") {
                    $state.go("index.default");
                }
            };

            $scope.hasLogin = function() {
                // console.log($state.current.name);
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
        .state('index.login', {
            url: "/login",
            templateUrl: "views/login/login.html",
            controller: 'MainCtrl'
        })
        .state('index.article', {
            url: "/article",
            templateUrl: "views/article/article.html",
            controller: 'ArticleCtrl'
        })
        .state('index.publish', {
            url: "/publish",
            templateUrl: "views/publish/publish.html",
            controller: 'PublishCtrl'
        })
        .state("index.chat", {
            url: "/chat",
            templateUrl: "views/chat/chat.html",
            controller: 'ChatCtrl'
        });

}]);