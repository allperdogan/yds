import { UserStats, SRSItem } from '../types';

export interface BackupPayload {
  version: number;
  timestamp: string;
  stats: UserStats;
  srsData: Record<string, SRSItem>;
}

export class SyncService {
  private static STORAGE_VERSION = 1;

  /**
   * Generates a portable Base64 encoded string of all user data
   */
  public static generateBackupCode(stats: UserStats, srsData: Record<string, SRSItem>): string {
    const payload: BackupPayload = {
      version: this.STORAGE_VERSION,
      timestamp: new Date().toISOString(),
      stats,
      srsData
    };

    const jsonStr = JSON.stringify(payload);
    // Base64 encode for UTF-8 compatibility
    return btoa(unescape(encodeURIComponent(jsonStr)));
  }

  /**
   * Restores user data from a Base64 encoded string
   */
  public static restoreFromBackupCode(code: string): BackupPayload | null {
    try {
      const trimmed = code.trim();
      const decodedStr = decodeURIComponent(escape(atob(trimmed)));
      const payload: BackupPayload = JSON.parse(decodedStr);

      if (payload && payload.stats && payload.srsData) {
        return payload;
      }
    } catch (e) {
      console.error('Failed to restore from backup code:', e);
    }
    return null;
  }

  /**
   * Triggers browser download of a backup .json file
   */
  public static downloadBackupFile(stats: UserStats, srsData: Record<string, SRSItem>): void {
    const payload: BackupPayload = {
      version: this.STORAGE_VERSION,
      timestamp: new Date().toISOString(),
      stats,
      srsData
    };

    const jsonStr = JSON.stringify(payload, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().split('T')[0];

    const link = document.createElement('a');
    link.href = url;
    link.download = `yds_master_backup_${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Reads a JSON file uploaded by the user
   */
  public static parseBackupFile(file: File): Promise<BackupPayload | null> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target?.result as string;
          const payload: BackupPayload = JSON.parse(content);
          if (payload && payload.stats && payload.srsData) {
            resolve(payload);
            return;
          }
        } catch (err) {
          console.error('Failed to parse backup JSON file:', err);
        }
        resolve(null);
      };
      reader.onerror = () => resolve(null);
      reader.readAsText(file);
    });
  }
}
