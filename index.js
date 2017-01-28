var http = require("http");

var server = http.createServer(onRequest);
server.listen(8080);
console.log("Listening to port 8080");

function onRequest(request, response)
{
	var host = request.headers.host;
	var acceptLanguage = request.headers["accept-language"];
	var userAgent = request.headers["user-agent"];

	var obj = {};
	obj.host = host.split(":")[0];
	obj.language = acceptLanguage.split(",")[0];
	var start = userAgent.indexOf("(");
	var stop = userAgent.indexOf(")");
	obj.os = userAgent.substring(start + 1, stop);
	
	response.end(JSON.stringify(obj));
}
