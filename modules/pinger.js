const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function pinger( ip, rate = 1, time = 4 ) {
  try {
    const { stdout } = await exec(`ping -i ${rate} -w ${time} -q ${ip}`);
    if (stdout.indexOf(' 0 received') === -1) {
      return 'ok';
    } else {
      return 'timeout';
    }
  } catch (err) {
    return 'error';
  }
}

module.exports = pinger;
