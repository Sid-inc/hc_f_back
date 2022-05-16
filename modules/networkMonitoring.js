const getDev = require('../dbquerys/getDevices');
const monitoringIphone = require('./iphone');
let queue = [];

//function monitoringSet() {
//  const start = async function() {
module.exports.start = async function() {
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

//const stop = function() {
  module.exports.stop = function() {
    for (let item of queue) {
      item.stop();
    }
  }
//}

//module.exports = monitoringSet;
//module.exports = start;
//module.exports = stop;
