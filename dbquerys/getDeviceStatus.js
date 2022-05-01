const dbquery = require('../dbConnection');

async function getDeviceStatus(id) {
  let deviceStatus = await dbquery('SELECT `status` FROM `network_devices` WHERE `id`=' + id);
  return deviceStatus;
}

module.exports = getDeviceStatus;
