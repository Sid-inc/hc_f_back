const dbquery = require('../dbConnection');


async function getDev() {
  let devices = await dbquery('SELECT * FROM `network_devices`');
  return devices;
}

getDev();

module.exports = getDev;