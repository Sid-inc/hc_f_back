const fs = require("fs");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CronJob = require('cron').CronJob;

let state = '0';

let pinger = new CronJob('* * * * *', function() {
  let d = new Date();

  try {
    const { stdout, stderr } = exec(`ping -с 1 ${iphone.ip}`);
    if (stdout.indexOf(' 0 received') === -1) {
      state = '1';
    } else {
      state = '0';
    }
  } catch (err) {
    state = '0';
  }
  
  fs.appendFileSync("pinglog.txt", `${state};${d.toString()}\n`);
}, null, true, '');

pinger();
