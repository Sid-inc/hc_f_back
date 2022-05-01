const BOT_TOKEN = '796567768:AAEo_9nRsDvmDj6cbVpkRUGhnftFd4oDsGA';
const telegramBot = require('node-telegram-bot-api');
const bot = new telegramBot(BOT_TOKEN, { polling: true });
const chatId = '384765627';

function sendMessage (message) {
  bot.sendMessage(chatId, message);
}

module.exports = sendMessage;
