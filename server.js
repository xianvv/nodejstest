var http = require("http");
var events = require("events");
var event = new events.EventEmitter();
http.createServer(function(request, response) {
	var fs = require("fs");
	var data = fs.readFileSync('README.md');
	//发送HTTP头部
	//HTTP状态值：200：OK
	//内容类型：text/plain
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.write('alert(\"yes\")');
	response.on("error", function(e) {
		console.log("error  sth");
	});
	//发送响应数据
	response.end();
}).listen(8888);

//终端打印
console.log('Server running at http://127.0.0.1:8888');