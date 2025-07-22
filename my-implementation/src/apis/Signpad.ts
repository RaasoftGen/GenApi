import DeviceBase from './DeviceBase';
import { SignpadStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the signature pad device in an ATM.
 */
export default class Signpad extends DeviceBase {
  constructor() {
    super('Signpad');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'CaptureCompleted':
        console.log('Signature capture completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to capture a signature.
   */
  public capture(params: { timeout: number; clearFirst?: boolean }): void {
    this.sendCommand('Capture', params);
  }

  /**
   * A function to clear the signature pad.
   */
  public clear(): void {
    this.sendCommand('Clear');
  }

  /**
   * A function to reset the signature pad.
   */
  public reset(): void {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of signature pad device.
   */
  public getStatus(signpadStatusEventCallback: (obj: SignpadStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'SignpadStatusResponse') {
        signpadStatusEventCallback(response as SignpadStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
