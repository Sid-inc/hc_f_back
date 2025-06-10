export type DeviceStatus = 'online' | 'offline';

export interface StatusData {
  lastSeen: string | null;
  currentStatus: DeviceStatus;
  history: {
    timestamp: string;
    status: DeviceStatus;
  }[];
}

export interface ScanConfig {
  targetMAC: string;
  scanInterface: string;
  scanInterval: number;
  offlineThreshold: number;
}