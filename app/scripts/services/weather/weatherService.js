/* global angular */
'use strict'

angular.module('app.services')
	.factory("weatherService", ["$resource", 'API',
		function ($resource, API) {
			return $resource(API + "/weather/:cityname", {}, {});
		}
	])