let CronJob = require('cron').CronJob;

let runCounter = 0;

let task = new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
  runCounter++;
  console.log(runCounter);

  if (runCounter === 100) {
    runCounter = 0;
  }
}, null, true, '');
task.stop();

module.exports.run = function() {
  task.start();
}

module.exports.stop = function() {
  task.stop();
}
