"use strict";angular.module("angularjsApp",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.when("","/").otherwise("/")}]).constant("HTTP_API","http://localhost:8089/rest/api"),angular.module("angularjsApp").controller("MainCtrl",["$scope","$state","Menu",function(a,b,c){a.hasLogin=!1,$(".carousel").carousel({interval:5e3}),a.prev=function(){$(".carousel").carousel("prev")},a.next=function(){$(".carousel").carousel("next")},a.submit=function(){a.user;b.go("index.default")},a.hasLogin?b.go("index.default"):b.go("index.login")}]).factory("Menu",["$http","HTTP_API",function(a,b){return{query:function(c){return a.get(b+"/menu/list/"+c+".json").then(function(a){var b=[];return angular.forEach(a.data.menuList,function(a,c){b[c]=a}),b})}}}]).config(["$stateProvider",function(a){a.state("index",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("index.default",{url:"/default",templateUrl:"views/home/default.html",controller:"MainCtrl"}).state("index.login",{url:"/login",templateUrl:"views/home/login.html",controller:"MainCtrl"}).state("index.content",{url:"/content",templateUrl:"views/content.html",controller:"ContentCtrl"})}]),angular.module("angularjsApp").controller("ContentCtrl",["$scope","$state","Menu",function(a,b,c){c.query(4).then(function(b){a.submenus=b})}]).config(["$stateProvider",function(a){}]),angular.module("angularjsApp").controller("DefaultCtrl",["$scope",function(a){}]).config(["$stateProvider",function(a){a.state("index.content.default",{url:"/default",templateUrl:"views/home/default.html",controller:"DefaultCtrl"})}]);