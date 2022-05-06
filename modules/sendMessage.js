const BOT_TOKEN = '';
const telegramBot = require('node-telegram-bot-api');
const bot = new telegramBot(BOT_TOKEN, { polling: true });
const chatId = '';

function sendMessage (message) {
  bot.sendMessage(chatId, message);
  console.log('Отправили сообщение выходим из функции sendMessage');
  return;
}

module.exports = sendMessage;
