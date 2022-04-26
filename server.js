const http = require('http');
const url  = require('url');
const runner = require('./runner');

http.createServer(function(request, response){
  if(request) {
    getRequest(request);
  }
  response.setHeader("UserId", 12);
  response.setHeader("Content-Type", "text/html; charset=utf-8;");
  response.write("<h2>hello world</h2>");
  response.end();
  // runner.run();
}).listen(3000);

function getRequest(request) {
  // console.log("Url: " + request.url);
  // console.log("Тип запроса: " + request.method);
  // console.log("User-Agent: " + request.headers["user-agent"]);
  // console.log("Все заголовки");
  // console.log(request.headers);
  if(request.method === 'GET') {
    let url_parts = url.parse(request.url, true);
    if(url_parts.query.run === 'true') {
      runner.run();
    }
    if(url_parts.query.run === 'false') {
      runner.stop();
    }
  }
}
