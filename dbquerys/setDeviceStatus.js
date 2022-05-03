const dbquery = require('../dbConnection');


async function setDeviceStatus(id, status) {
  let deviceStatus = await dbquery('UPDATE `network_devices` SET `status`="' + status + '" WHERE `network_devices`.`id`=' + id);
  console.log('Обновили статус в базе возвращаем и выходим');
  return deviceStatus;
}

module.exports = setDeviceStatus;
