import { exec } from 'child_process';
import { promisify } from 'util';
import { updateStatus, readStatus } from './storage';
import { ScanConfig } from './types';

const execAsync = promisify(exec);

export class NetworkScanner {
  private config: ScanConfig;
  private lastOnlineStatus: boolean = false;
  private scanInProgress: boolean = false;

  constructor(config: ScanConfig) {
    this.config = config;
  }

  public async scan(): Promise<boolean> {
    if (this.scanInProgress) return this.lastOnlineStatus;
    
    this.scanInProgress = true;
    let isPresent = false;
    
    try {
      const { stdout } = await execAsync(
        `sudo arp-scan -I ${this.config.scanInterface} --localnet --retry=2 --timeout=1000`,
        { timeout: 30000 }
      );

      // Поиск MAC в выводе
      const macRegex = new RegExp(this.config.targetMAC.replace(/:/g, '[-:]?'), 'i');
      isPresent = macRegex.test(stdout);

      await this.handleDeviceStatus(isPresent);
    } catch (error: any) {
      console.error(`[${new Date().toISOString()}] Scan error:`, error.message);
    } finally {
      this.scanInProgress = false;
    }
    
    return isPresent;
  }

  private async handleDeviceStatus(isPresent: boolean): Promise<void> {
    const timestamp = new Date().toISOString();
    
    if (isPresent) {
      if (!this.lastOnlineStatus) {
        console.log(`[${timestamp}] Device ${this.config.targetMAC} detected`);
        await updateStatus('online');
      }
      this.lastOnlineStatus = true;
      return;
    }

    // Проверка времени отсутствия
    if (this.lastOnlineStatus) {
      const statusData = await readStatus();
      
      if (statusData.lastSeen) {
        const lastSeenTime = new Date(statusData.lastSeen).getTime();
        const currentTime = Date.now();
        const minutesOffline = (currentTime - lastSeenTime) / (1000 * 60);
        
        if (minutesOffline >= this.config.offlineThreshold) {
          console.log(`[${timestamp}] Device ${this.config.targetMAC} marked as offline`);
          this.lastOnlineStatus = false;
          await updateStatus('offline');
        }
      }
    }
  }
}