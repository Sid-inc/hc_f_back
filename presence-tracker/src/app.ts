import express from 'express';
import dotenv from 'dotenv';
import * as cron from 'cron';
import { initStorage, readStatus } from './storage';
import { NetworkScanner } from './scanner';
import { ScanConfig } from './types';

const CronJob = cron.CronJob;
dotenv.config();
process.env.TZ = 'Europe/Moscow';

// Проверка обязательных переменных окружения
const requiredVars = ['DEVICE_MAC', 'CRON_SCHEDULE', 'OFFLINE_THRESHOLD'];
requiredVars.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(`Missing environment variable: ${varName}`);
  }
});

// Конфигурация
const CONFIG: ScanConfig = {
  targetMAC: process.env.DEVICE_MAC!,
  scanInterface: 'wlan0',
  scanInterval: 0, // Не используется в cron-режиме
  offlineThreshold: parseInt(process.env.OFFLINE_THRESHOLD!, 10)
};

(async () => {
  await initStorage();
  
  const app = express();
  const port = process.env.PORT || 3000;
  const scanner = new NetworkScanner(CONFIG);

  // Инициализация cron-задания
  const cronSchedule = process.env.CRON_SCHEDULE!;
  const cronJob = new CronJob(
    cronSchedule,
    async () => {
      try {
        const isPresent = await scanner.scan();
        console.log(`[${new Date().toISOString()}] Cron scan executed. Device ${isPresent ? 'present' : 'absent'}`);
      } catch (error) {
        console.error(`[${new Date().toISOString()}] Cron job error:`, error);
      }
    },
    null, // onComplete
    true, // start immediately
    'Europe/Moscow' // timezone
  );

  // Первое сканирование при запуске
  scanner.scan();

  // API Endpoints
  app.get('/status', async (req, res) => {
    try {
      const status = await readStatus();
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read status' });
    }
  });

  app.get('/history', async (req, res) => {
    try {
      const status = await readStatus();
      res.json(status.history);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read history' });
    }
  });

  // Добавим endpoint для ручного запуска сканирования
  app.post('/scan', async (req, res) => {
    try {
      const isPresent = await scanner.scan();
      res.json({ success: true, present: isPresent });
    } catch (error) {
      res.status(500).json({ error: 'Scan failed' });
    }
  });

  app.listen(port, () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
    console.log(`Tracking device: ${CONFIG.targetMAC}`);
    console.log(`Cron schedule: '${cronSchedule}'`);
    console.log(`Offline threshold: ${CONFIG.offlineThreshold} minutes`);
    console.log(`Cron job started: ${cronJob.running}`);
  });
})();