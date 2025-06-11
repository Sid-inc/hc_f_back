import { exec } from 'child_process';
import { promisify } from 'util';
import { updateStatus, readStatus } from './storage';
import { ScanConfig } from './types';

const execAsync = promisify(exec);

export class NetworkScanner {
  private config: ScanConfig;
  private lastOnlineStatus: boolean = false;
  private scanInProgress: boolean = false;
  private lastSeenTime: number = 0;

  constructor(config: ScanConfig) {
    this.config = config;
  }

  public async scan(): Promise<boolean> {
    if (this.scanInProgress) return this.lastOnlineStatus;
    
    this.scanInProgress = true;
    let isPresent = false;
    
    try {
      const { stdout } = await execAsync(
        `sudo arp-scan -I ${this.config.scanInterface} --localnet --retry=5 --timeout=3000`,
        { timeout: 45000  }
      );

      // Поиск MAC в выводе
      const macPattern = this.config.targetMAC.toLowerCase().replace(/:/g, '[ :]?');
      const macRegex = new RegExp(`(${macPattern})(?![0-9a-f])`, 'i');
      isPresent = macRegex.test(stdout);

      await this.handleDeviceStatus(isPresent);
    } catch (error: any) {
      console.error(`[${new Date().toISOString()}] Scan error:`, error.message);
      isPresent = this.lastOnlineStatus;
    } finally {
      this.scanInProgress = false;
    }
    
    const arpPresent = isPresent;
    const dhcpPresent = await this.checkDhcpLease();
  
    return arpPresent || dhcpPresent;
  }

  private async handleDeviceStatus(isPresent: boolean): Promise<void> {
    const now = new Date();
    const timestamp = now.toISOString();
    
    if (isPresent) {
      if (!this.lastOnlineStatus) {
        console.log(`[${timestamp}] Device ${this.config.targetMAC} detected`);
        await updateStatus('online');
      }
      this.lastOnlineStatus = true;
      this.lastSeenTime = now.getTime();
      return;
    }

    // Проверка времени отсутствия
    if (this.lastOnlineStatus) {
      const statusData = await readStatus();
      
      if (statusData.lastSeen) {
        const minutesOffline = (now.getTime() - this.lastSeenTime) / (1000 * 60);
        // Только если устройство не обнаруживается дольше порога
        if (minutesOffline >= this.config.offlineThreshold) {
          if (this.lastOnlineStatus) {
            console.log(`[${timestamp}] Device ${this.config.targetMAC} marked as offline`);
            this.lastOnlineStatus = false;
            await updateStatus('offline');
          }
        } else {
          // Временное отсутствие - сохраняем статус "online"
          this.lastOnlineStatus = true;
        }
      }
    }
  }

  async checkDhcpLease(): Promise<boolean> {
  try {
    const { stdout } = await execAsync('cat /var/lib/misc/dnsmasq.leases');
    return stdout.includes(this.config.targetMAC.toLowerCase());
  } catch {
    return false;
  }
}
}