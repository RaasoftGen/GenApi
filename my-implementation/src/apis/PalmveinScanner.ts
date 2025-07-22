import DeviceBase from './DeviceBase';
import { PalmveinScannerStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the palm vein scanner device in an ATM.
 */
export default class PalmveinScanner extends DeviceBase {
  constructor() {
    super('PalmveinScanner');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'ScanCompleted':
        console.log('Palm vein scan completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to scan palm vein.
   */
  public scan(timeout: number = 30000): void {
    this.sendCommand('Scan', { timeout });
  }

  /**
   * A function to reset the palm vein scanner.
   */
  public reset(): void {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of palm vein scanner device.
   */
  public getStatus(palmveinScannerStatusEventCallback: (obj: PalmveinScannerStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'PalmveinScannerStatusResponse') {
        palmveinScannerStatusEventCallback(response as PalmveinScannerStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
