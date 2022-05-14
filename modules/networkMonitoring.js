const getDev = require('../dbquerys/getDevices');
const monitoringIphone = require('./iphone');
let queue = [];

//function monitoringSet() {
//  const start = async function() {
   async function start() {
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

//  const stop = function() {
  function stop() {
    for (let item of queue) {
      item.stop();
    }
  }
//}

//module.exports = monitoringSet;
start();
module.exports = start;
module.exports = stop;
