const http = require('http');
const url  = require('url');
const runner = require('./runner');
const sendMessage = require('./modules/sendMessage');
let monitoringState = false;

http.createServer(function(request, response){
  if(request) {
    getRequest(request);
  }
  response.setHeader("UserId", 12);
  response.setHeader("Content-Type", "text/html; charset=utf-8;");
  response.write("<h2>hello world</h2>");
  response.end();
}).listen(3000);

function getRequest(request) {
  if(request.method === 'GET') {
    let url_parts = url.parse(request.url, true);
    if(url_parts.query.run === 'true') {
      if(!monitoringState) {
        runner.run();
        sendMessage(`Запущены системы мониторинга`);
        monitoringState = true;
      } else {
        sendMessage(`Системы мониторинга уже запущены`);
      }
    }
    if(url_parts.query.run === 'false') {
      if(monitoringState) {
        runner.stop();
        sendMessage(`Остановлены системы мониторинга`);
      } else {
        sendMessage(`Системы мониторинга не запущены`);
      }
    }
  }
}
