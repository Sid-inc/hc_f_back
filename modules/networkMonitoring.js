const getDev = require('../dbquerys/getDevices');
const monitoringIphone = require('./iphone');
let queue = [];

async function monitoringSet() {
  const start = function() {
    let devices = await getDev();
    for (const element of devices) {
      switch (element.type) {
        case 'iphone': 
          let iphone = await monitoringIphone(element);
          iphone.start();
          queue.push(iphone);
          break;
        default: 
      }
    }
  }

  const stop = function() {
    for (let item of queue) {
      item.stop();
    }
  }
}

monitoringSet();
