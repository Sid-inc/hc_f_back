const fs = require("fs");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

let state = '0';

async function pinger() {
  let d = new Date();

  try {
    const { stdout, stderr } = await exec(`ping -с 1 ${iphone.ip}`);
    if (stdout.indexOf(' 0 received') === -1) {
      state = '1';
    } else {
      state = '0';
    }
  } catch (err) {
    state = '0';
  }
  
  fs.appendFileSync("pinglog.txt", `${state};${d.toString()}\n`);
}

setInterval(function() {
  pinger();
}, 1000);
