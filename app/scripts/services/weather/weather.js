/* global angular */
'use strict'

angular.module('app.services')
.constant("WEATHER_API","http://apis.baidu.com/showapi_open_bus/weather_showapi/")
.constant("API_KEY","6649fc642ea5cb7f7b402dca00c5d1b3")
.factory("weatherService",["$http", "WEATHER_API", "API_KEY", function($http,WEATHER_API,API_KEY){
	
	return {
		getWeather: function(area){
			 $http.get(WEATHER_API + "areaid",{ headers:{apikey:API_KEY},params: { area: area } })
    			.success(function(response) {
					console.log(response);
					
					});
			
				
		}
	}
}])