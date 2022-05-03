const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CronJob = require('cron').CronJob;
const getDeviceStatus = require('../dbquerys/getDeviceStatus');
const setDeviceStatus = require('../dbquerys/setDeviceStatus');
 const sendMessage = require('./sendMessage');

function monitoringIphone(iphone) {
  let task = new CronJob('* */2 * * * *', function() {
    сheckIphone(iphone);
  }, null, true, '');
  task.stop();
}

async function сheckIphone(iphone) {
  // Актуализируем статус
  let currentState = await getDeviceStatus(iphone.id);
  console.log(`Текущий статус из базы ${currentState}`);
  let state = '';

  try {
    const { stdout, stderr } = await exec(`ping -i 0.5 -w 61 -q ${iphone.ip}`);
    if (stdout.indexOf(' 0 received') === -1) {
      state = 'online';
    } else {
      state = 'offline';
    }
  } catch (err) {
    state = 'offline';
  }
    console.log(`Новый статус полученный при пинге ${state}`);

  // Проверка нового статуса устройства вышел из сети/вошел, не изменился
  if (state !== currentState) { // Статус изменился
    console.log('Текущий статус не совпал с полученным при пинге');
    if (currentState === null || currentState === 'offline') {
      // Устройство вошло в сеть
      sendMessage(`Телефон ${iphone.name} подключился к домашней сети`);
      await setDeviceStatus(iphone.id, 'online');
    } else {
      // Устройство вышло из сети
      sendMessage(`Телефон ${iphone.name} вышел из домашней сети`);
      await setDeviceStatus(iphone.id, 'offline');
    }
  }
  console.log('Закончилась функция CheckIphone выходим...');
  process.exit();
  return;
}

сheckIphone({ ip: '192.168.1.10', id: 1 });

module.exports = monitoringIphone;
