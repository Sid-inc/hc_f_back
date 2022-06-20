const networkMonitoring = require('./modules/networkMonitoring');

module.exports.run = function() {
  networkMonitoring.start();
}

module.exports.stop = function() {
  networkMonitoring.stop();
}
