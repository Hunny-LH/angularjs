/* global angular */
'use strict'

angular.module("app.services")
.factory('socket',[function(){
		return {
				connect: function(url){			//连接服务端
					console.log("连接成功");
	                this.connection = new WebSocket(url);
	            },
				onopen : function(callback){		//连接成功
					this.connection.onopen = function(event){
						callback(event);
					}
				},
				onmessage : function(callback){		//接收消息
					this.connection.onmessage = function(event){
						callback(event);
					}
				},
				onerror : function(callback){	//出错
					this.connection.onerror = function(error){
						callback(event);
					}
				},
	            send : function(message) {			//发送消息
	                this.connection.send(message);
	            },
				
	            close : function() {						//关闭
	                this.connection.onclose = function () {};
	                this.connection.close()
	            }
	    }
}]);