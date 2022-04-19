const http = require("http");
let CronJob = require('cron').CronJob;

let runCounter = 0;

let job = new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
  runCounter++;
  console.log(runCounter);

  if (runCounter === 100) {
    runCounter = 0;
  }
}, null, true, '');
job.start();

http.createServer(function(request, response){
  response.setHeader("UserId", 12);
  response.setHeader("Content-Type", "text/html; charset=utf-8;");
  response.write("<h2>hello world</h2>");
  response.end();
}).listen(3000);
