import TelegramBot from 'node-telegram-bot-api';
import ping from 'ping';
import wol from 'wake_on_lan';
import { exec } from 'child_process';
import { promisify } from 'util';
import { CameraService } from './cameraService';

const execAsync = promisify(exec);

// Объявляем bot до использования
let bot: TelegramBot;

// Интерфейс для ошибки
interface ErrorWithMessage extends Error {
  message: string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return typeof error === 'object' && error !== null && 'message' in error;
}

export function initTelegramBot() {
  bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN || '', { polling: true });

  // Инициализация CameraService
  const cameraService = new CameraService(
    process.env.CAMERA_LOGIN || '',
    process.env.CAMERA_PASSWORD || '',
    process.env.CAMERA_NAME || ''
  );

  bot.on('message', async (msg) => {
    if (!msg.from?.id || !process.env.AUTHORIZED_USERS?.includes(msg.from.id.toString())) {
      return bot.sendMessage(msg.chat.id, '🚫 Доступ запрещен');
    }

    if (msg.text?.startsWith('/shutdown')) {
      await handleShutdownCommand(msg.chat.id, msg.text);
    }
  });

  bot.on('callback_query', async (query) => {
    if (!query.data || !query.message) return;

    const action = query.data.startsWith('shutdown_') ?
      `/shutdown ${query.data.replace('shutdown_', '')}` :
      '/shutdown';

    await handleShutdownCommand(query.message.chat.id, action);
    await bot.answerCallbackQuery(query.id);
  });

  bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id,
      `Команды:
        /status - Проверить статус
        /shutdown [мин] - Выключить ПК
        /wake - Разбудить ПК,
        /camera - Получить изображение с камеры`,
      { parse_mode: 'Markdown' }
    );
  });

  bot.onText(/\/camera/, async (msg) => {
    if (!msg.from?.id || !process.env.AUTHORIZED_USERS?.includes(msg.from.id.toString())) {
      return bot.sendMessage(msg.chat.id, '🚫 Доступ запрещен');
    }

    try {
      const loadingMsg = await bot.sendMessage(msg.chat.id, '🔄 Получаю снимок с камеры...');

      try {
        await cameraService.initialize();
        const imageBuffer = await cameraService.getSnapshot();

        await bot.deleteMessage(msg.chat.id, loadingMsg.message_id.toString());
        await bot.sendPhoto(msg.chat.id, imageBuffer, {
          caption: `📷 Камера • ${new Date().toLocaleString('ru-RU')}`,
          parse_mode: 'Markdown'
        });
      } catch (error) {
        await bot.editMessageText('❌ Ошибка при получении снимка с камеры', {
          chat_id: msg.chat.id,
          message_id: loadingMsg.message_id
        });
        console.error('Camera error:', error);
      }
    } catch (error) {
      console.error('Camera command error:', error);
      await bot.sendMessage(msg.chat.id, '❌ Ошибка: не удалось инициализировать сервис камеры');
    }
  });
}

async function handleShutdownCommand(chatId: number, command: string) {
  try {
    // Пробуждение ПК
    await new Promise<void>((resolve, reject) => {
      wol(process.env.PC_MAC || '', (error: unknown) => {
        if (error) {
          reject(typeof error === 'string' ? new Error(error) : error);
        } else {
          resolve();
        }
      });
    });

    const delayMinutes = command.split(' ')[1] ? parseInt(command.split(' ')[1]) : 0;
    const { stderr } = await execAsync(
      `shutdown /s /t ${delayMinutes * 60} /m \\\\${process.env.PC_IP}`
    );

    if (stderr) throw new Error(stderr);

    await bot.sendMessage(
      chatId,
      `✅ ПК будет выключен ${delayMinutes ? `через ${delayMinutes} минут` : 'немедленно'}`,
      { parse_mode: 'Markdown' }
    );
  } catch (error: unknown) {
    const errorMessage = isErrorWithMessage(error) ? error.message : 'Неизвестная ошибка';
    await bot.sendMessage(
      chatId,
      `❌ Ошибка: ${errorMessage}\n\nПопробуйте вручную через RDP или TeamViewer`
    );
    console.error('Shutdown error:', error);
  }
}

export async function checkPcAndNotify(chatId: number) {
  try {
    const res = await ping.promise.probe(process.env.PC_IP || '', { timeout: 2 });
    if (res.alive) {
      await bot.sendMessage(
        chatId,
        '⚠️ Кажется, ты забыл выключить Windows ПК!',
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Выключить', callback_data: 'shutdown_now' }],
              [{ text: 'Отложить на 30 мин', callback_data: 'shutdown_30' }]
            ]
          }
        }
      );
    }
  } catch (error: unknown) {
    console.error('PC check error:', error);
  }
}