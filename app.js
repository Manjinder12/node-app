var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World,hello test, Rollback, demo\n");
});
server.listen(9095);
app.use('/',fuction(){console.log('app is working')})
console.log("Server running at http://127.0.0.1:9095/");
