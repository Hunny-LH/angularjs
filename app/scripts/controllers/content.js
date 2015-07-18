/*global angular*/
'use strict';

angular.module('angularjsApp')
	.controller('ContentCtrl', ['$scope', '$state', 'Menu',
		function($scope, Menu) {

			Menu.query(4).then(function(submenus) {
				$scope.submenus = submenus;
			});
		}
	]);
