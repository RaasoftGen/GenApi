import DeviceBase from './DeviceBase';
import { FingerprintStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the fingerprint scanner device in an ATM.
 */
export default class Fingerprint extends DeviceBase {
  constructor() {
    super('Fingerprint');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'FingerprintReadCompleted':
        console.log('Fingerprint scan completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to acquire fingerprint from customer.
   */
  public acquireFinger(timeout: number = 30000): void {
    this.sendCommand('AcquireFinger', { timeout });
  }

  /**
   * A function to stop fingerprint acquisition.
   */
  public stopAcquireFinger(): void {
    this.sendCommand('StopAcquireFinger');
  }

  /**
   * A function to get the status information of fingerprint device.
   */
  public getStatus(fingerprintStatusEventCallback: (obj: FingerprintStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'FingerprintStatusResponse') {
        fingerprintStatusEventCallback(response as FingerprintStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
