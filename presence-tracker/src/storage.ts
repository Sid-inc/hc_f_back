import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { StatusData, DeviceStatus } from './types';

const DATA_PATH = path.join(__dirname, '../data/status.json');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const access = promisify(fs.access);

export const initStorage = async (): Promise<void> => {
  try {
    await access(DATA_PATH);
  } catch {
    const initialData: StatusData = {
      lastSeen: null,
      currentStatus: 'offline',
      history: []
    };
    await saveData(initialData);
  }
};

export const readStatus = async (): Promise<StatusData> => {
  try {
    const data = await readFile(DATA_PATH, 'utf8');
    if (!data.trim()) {
      // Файл пустой, возвращаем значения по умолчанию
      return getDefaultStatus();
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading status file, returning default:', error);
    return getDefaultStatus();
  }
};

function getDefaultStatus(): StatusData {
  return {
    lastSeen: null,
    currentStatus: 'offline',
    history: []
  };
}

export const updateStatus = async (status: DeviceStatus): Promise<void> => {
  try {
    const data = await readStatus();
    const now = new Date();
    const localTime = now.toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow',
      hour12: false
    });


    // Обновляем только при реальном изменении статуса
    if (data.currentStatus !== status) {
      data.currentStatus = status;
      data.lastSeen = status === 'online' ? localTime : data.lastSeen;
      
      data.history.push({
        timestamp: localTime,
        status
      });

      // Ограничиваем историю
      if (data.history.length > 100) {
        data.history = data.history.slice(-100);
      }

      await saveData(data);
    }
  } catch (error) {
    console.error('Error updating status:', error);
  }
};

const saveData = async (data: StatusData): Promise<void> => {
  try {
    await writeFile(DATA_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};