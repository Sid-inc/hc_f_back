const getDev = require('../dbquerys/getDevices');
const monitoringIphone = require('./iphone');

async function monitoringSet() {
  let devices = await getDev();
  for (const element of devices) {
    switch (element.type) {
      case 'iphone': 
        let iphone = await monitoringIphone(element);
	iphone.start();
        break;
      default: 
    }
  }
}

function monitoringRun(device) {
  
}

monitoringSet();
