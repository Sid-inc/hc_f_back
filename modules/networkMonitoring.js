const getDev = require('../dbquerys/getDevices');
const monitoringIphone = require('./iphone');

async function monitoringSet() {
  let devices = await getDev();
  for (const element of devices) {
    monitoringRun(element);
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

monitoringSet();
