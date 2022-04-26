const testTask = require('./modules/test');

module.exports.run = function() {
  testTask.run();
}

module.exports.stop = function() {
  testTask.stop();
}