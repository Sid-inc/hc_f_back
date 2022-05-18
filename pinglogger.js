const fs = require("fs");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CronJob = require('cron').CronJob;

let state = '0';

let pinger = new CronJob('*/2 * * * * *', async function() {
  let d = new Date();

  try {
    const { stdout, stderr } = await exec(`ping -c 1 192.168.1.10`);
    if (stdout.indexOf(' 0 received') === -1) {
      state = '1';
	fs.appendFileSync("pinglog.txt", `1;${d.toString()}\n`);
    } else {
      state = '0';
	fs.appendFileSync("pinglog.txt", `0;${d.toString()}\n`);
    }
  } catch (err) {
    state = '0';
	fs.appendFileSync("pinglog.txt", `0;${d.toString()}\n`);
  }

//  fs.appendFileSync("pinglog.txt", `${state};${d.toString()}\n`);
}, null, true, '');
