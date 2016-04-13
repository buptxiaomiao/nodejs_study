//-------------------nodejs 的http 服务器-----------

var http = require('http');
http.createServer(function(require,response){
	
	//发送HTTP头部
	//HTTP 状态值：200,OK
	//内容类型：text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	
	//发送响应数据 “Hello World"
	response.end('Hello World\n');
}).listen(8888);

//终端打印如下信息
console.log("Server running at http://127.0.0.1:8888/");

//node server.js
//然后打开浏览器 127.0.0.1：8888
