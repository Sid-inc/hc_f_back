const getDev = require('../dbquerys/getDevices');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CronJob = require('cron').CronJob;

async function monitoringSet() {
  let devices = await getDev();
  for (let i = 0; i < devices.length; i++) {
    monitoringRun(devices[i]);
  }
}

function monitoringRun(device) {
  switch (device.type) {
    case 'iphone': 
      monitoringIphone(device);
      break;
    default: 
  }
}

function monitoringIphone(iphone) {
  let task = new CronJob('* */2 * * * *', function() {
    сheckIphone(iphone);
  }, null, true, '');
  task.stop();
}

async function сheckIphone(iphone) {
  let ping = await pinger();
  console.log(ping);
}

async function pinger() {
  const { stdout, stderr } = await exec('ping 127.0.0.1');

  return stdout;
}

monitoringSet();