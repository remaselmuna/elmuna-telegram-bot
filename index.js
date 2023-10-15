import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import commands from './commands.js';
import { sendMessage } from './chatgpt.js';
dotenv.config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/ask (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  sendMessage(resp, (message) => {
    bot.sendMessage(chatId, message);
  })
});

commands.forEach(command => {
  bot.onText(new RegExp(command.command), (msg, match) => {
    const chatId = msg.chat.id;
    const resp = command.textResponse;

    bot.sendMessage(chatId, resp);
  });
});

console.log('Bot is running...')