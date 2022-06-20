const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CronJob = require('cron').CronJob;
const getDeviceStatus = require('../dbquerys/getDeviceStatus');
const setDeviceStatus = require('../dbquerys/setDeviceStatus');
const sendMessage = require('./sendMessage');

function monitoringIphone(iphone) {
  let task = new CronJob('*/2 * * * *', function() {
    console.log('Создана таска');
    сheckIphone(iphone);
  }, null, true, '');
  task.stop();
  
  return task;
}

async function сheckIphone(iphone) {
  let workLog = '';
  // Актуализируем статус
  let currentState = await getDeviceStatus(iphone.id);
  workLog += `Текущий статус из базы ${currentState}\n`;
  workLog += `--------------------------------------\n`;
  let state = '';

  try {
    const { stdout, stderr } = await exec(`ping -i 0.5 -w 60 -q ${iphone.ip}`);
    if (stdout.indexOf(' 0 received') === -1) {
      state = 'online';
    } else {
      state = 'offline';
    }
  } catch (err) {
    state = 'offline';
  }
  workLog += `Новый статус полученный при пинге ${state}`;
  workLog += `--------------------------------------\n`;

  // Проверка нового статуса устройства вышел из сети/вошел, не изменился
  if (state !== currentState) { // Статус изменился
    workLog += 'Текущий статус не совпал с полученным при пинге';
    workLog += `--------------------------------------\n`;
    if (currentState === null || currentState === 'offline') {
      // Устройство вошло в сеть
      sendMessage(`Телефон ${iphone.name} подключился к домашней сети`);
      await setDeviceStatus(iphone.id, 'online');
      workLog += 'Записали статус online в базу';
    } else {
      // Устройство вышло из сети
      sendMessage(`Телефон ${iphone.name} вышел из домашней сети`);
      await setDeviceStatus(iphone.id, 'offline');
      workLog += 'Записали статус offline в базу';
    }
  }
  sendMessage(workLog);
}

module.exports = monitoringIphone;
