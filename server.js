var http = require("http");
http.createServer(function(request, response) {
	var fs = require("fs");
	var data = fs.readFileSync('README.md');
	//发送HTTP头部
	//HTTP状态值：200：OK
	//内容类型：text/plain
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.write('Hello \n' + data.toString());
	//发送响应数据
	response.end();
}).listen(8888);

//终端打印
console.log('Server running at http://127.0.0.1:8888');