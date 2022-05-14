const telegram = require('../telegramSettings');
const http = require('request');

const BOT_TOKEN = telegram.token;
const chatId = telegram.chat;
let res = '';

function sendMessage (message) {
  message = encodeURI(message);
  http.post(
    `
      https://api.telegram.org/bot${telegram.token}/sendMessage?chat_id=${telegram.chat}&parse_mode=html&text=${message}
    `, 
    function (error, response, body) { }
  );
  return;
}

module.exports = sendMessage;
