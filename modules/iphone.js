const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CronJob = require('cron').CronJob;

function monitoringIphone(iphone) {
  let task = new CronJob('* */2 * * * *', function() {
    сheckIphone(iphone);
  }, null, true, '');
  task.stop();
}

async function сheckIphone(iphone) {
  const { stdout, stderr } = await exec(`ping ${iphone.ip}`);
  console.log(stdout);
}

module.exports = monitoringIphone;