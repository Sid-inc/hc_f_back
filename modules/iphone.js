const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CronJob = require('cron').CronJob;
const getDeviceStatus = require('../dbqueryes');
const sendMessage = require('sendMessage');

function monitoringIphone(iphone) {
  let task = new CronJob('* */2 * * * *', function() {
    сheckIphone(iphone);
  }, null, true, '');
  task.stop();
}

async function сheckIphone(iphone) {
  // Актуализируем статус
  const currentState = await getDeviceStatus(iphone.id);
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

  // Проверка нового статуса устройства вышел из сети/вошел, не изменился
  if (state !== currentState) { // Статус изменился
    if (currentState === null || currentState === 'offline') {
      // Устройство вышло из сети
      sendMessage(`Телефон ${iphone.name} вышел из домашней сети`);
      setDevice(iphone.id, 'offline');
    } else {
      // Устройство вошло в сеть
      sendMessage(`Телефон ${iphone.name} подключился к домашней сети`);
      setDevice(iphone.id, 'online');
    }
  }
}

function setDevice() {};

сheckIphone({ ip: '192.168.1.10' });

module.exports = monitoringIphone;
