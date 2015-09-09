/* global angular */
'use strict'

angular.module('app.services')
	.factory("ipService", ["$resource", 'API',
		function ($resource, API) {
			return $resource(API + "/ip", {}, {});
		}
	])