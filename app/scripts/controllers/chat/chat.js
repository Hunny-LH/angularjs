/*global angular*/
'use strict'

angular.module('angularjsApp')
.controller('ChatCtrl',['$scope', 'socket', '$timeout', function($scope, socket,$timeout){
		
		socket.connect("ws://127.0.0.1:8080/angualrServer/webscoket");
		
	    var messages = [];
		
		var i = 0
		socket.onopen(function(evnet){
				   messages.push({message: "Welcome to chating room,\n Connection established. "});
				   $scope.messages =messages;
		});
		
		socket.onmessage(function(event){
			if(i==0){
					$scope.nickname = event.data;
				}else{
			  		try {
					        messages.push(JSON.parse(event.data));
					} catch (error) {
							messages.push({message:event.data});
					}
				}
				i++;
				var timer = $timeout(function(){
						$scope.messages =messages;
				},1);
				
				timer.then(function(){
					$timeout.cancel(timer);
				});
		});
		
		
		
		
		$scope.send = function(){
			socket.send($scope.content);
			$scope.content = "";
		}

}])