/**
 * Created by xianvv on 2016/1/31.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function (req, res) {
        var urlObj = url.parse(req.url);
        var pathName = urlObj.pathname;
        if (pathName === '/') {
            readAndResponse("test.js", res);
        } else if (pathName === '/ajax') {
            res.end('{result:\"this is ajax result.\"}');
        } else {
            readAndResponse(pathName.substr(1), res);
        }
    }
);
server.listen(5555);

function readAndResponse(pathName, res) {
    fs.readFile(pathName, "utf8", function (err, data) {
        if (err && err.code == "ENOENT") {
            res.writeHead(404);
            res.end("404");
        } else {
            res.end(data);
        }
    });
}