const CronJob = require('cron').CronJob;
const getDeviceStatus = require('../dbquerys/getDeviceStatus');
const setDeviceStatus = require('../dbquerys/setDeviceStatus');
const sendMessage = require('./sendMessage');
const pinger = require('./pinger');

function monitoringIphone(iphone) {
  let task = new CronJob('*/2 * * * *', function() {
    console.log('Создана таска');
    сheckIphone(iphone);
  }, null, true, '');
  task.stop();
  
  return task;
}

async function checkState(newState, currentState) {
  let workLog = '';

  if(newState === 'error') {
    workLog += '5 попыток пинга завершились ошибкой\n';
    sendMessage(workLog);
    return;
  }

// Проверка нового статуса устройства вышел из сети/вошел, не изменился
  if (newState !== currentState) { // Статус изменился
    workLog += 'Текущий статус не совпал с полученным при пинге\n';
    workLog += `--------------------------------------\n`;
    if (currentState === null || currentState === 'offline') {
      // Устройство вошло в сеть
      sendMessage(`Телефон ${iphone.name} подключился к домашней сети`);
      await setDeviceStatus(iphone.id, 'online');
      workLog += 'Записали статус online в базу';
      sendMessage(workLog);
    } else {
      // Устройство вышло из сети
      sendMessage(`Телефон ${iphone.name} вышел из домашней сети`);
      await setDeviceStatus(iphone.id, 'offline');
      workLog += 'Записали статус offline в базу';
      sendMessage(workLog);
    }
  }
}

async function сheckIphone(iphone) {
  let workLog = '';
  // Актуализируем статус
  const currentState = await getDeviceStatus(iphone.id);
  workLog += `Текущий статус из базы ${currentState}\n`;
  workLog += `--------------------------------------\n`;
  let state = '';
  
  for(let i = 1; i <=5; i++) {
    state = await pinger(iphone.ip, 0.5, 60);

    if(state !== 'error') {
      break;
    }
  }

  if(state === 'ok') state = 'online';
  if(state === 'timeout') state = 'offline';

  workLog += `Новый статус полученный при пинге ${state}\n`;
  workLog += `--------------------------------------\n`;
  sendMessage(workLog);
  
  checkState(state, currentState);
}

module.exports = monitoringIphone;
