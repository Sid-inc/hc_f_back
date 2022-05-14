// const testTask = require('./modules/test');
const networkMonitoring = require('./modules/networkMonitoring');

module.exports.run = function() {
  networkMonitoring.run();
// testTask.run();
}

module.exports.stop = function() {
  networkMonitoring.stop();
// testTask.stop();
}
