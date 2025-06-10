import fs from 'fs/promises';
import path from 'path';
import { StatusData, DeviceStatus } from './types';

const DATA_PATH = path.join(__dirname, '../data/status.json');

export const initStorage = async (): Promise<void> => {
  try {
    await fs.access(DATA_PATH);
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
    const data = await fs.readFile(DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading status file:', error);
    return {
      lastSeen: null,
      currentStatus: 'offline',
      history: []
    };
  }
};

export const updateStatus = async (status: DeviceStatus): Promise<void> => {
  try {
    const data = await readStatus();
    const timestamp = new Date().toISOString();

    // Обновляем только при реальном изменении статуса
    if (data.currentStatus !== status) {
      data.currentStatus = status;
      data.lastSeen = status === 'online' ? timestamp : data.lastSeen;
      
      data.history.push({
        timestamp,
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
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};