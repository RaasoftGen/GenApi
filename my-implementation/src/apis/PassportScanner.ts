import DeviceBase from './DeviceBase';
import { PassportScannerStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the passport scanner device in an ATM.
 */
export default class PassportScanner extends DeviceBase {
  constructor() {
    super('PassportScanner');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'ReadImageCompleted':
        console.log('Passport scan completed:', obj);
        return true;
      case 'ReadDataCompleted':
        console.log('Passport data read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to scan a passport.
   */
  public readImage(timeout: number = 30000): void {
    this.sendCommand('ReadImage', { timeout });
  }

  /**
   * A function to read passport data.
   */
  public readData(timeout: number = 30000): void {
    this.sendCommand('ReadData', { timeout });
  }

  /**
   * A function to eject the passport.
   */
  public ejectMedia(): void {
    this.sendCommand('EjectMedia');
  }

  /**
   * A function to get the status information of passport scanner device.
   */
  public getStatus(passportScannerStatusEventCallback: (obj: PassportScannerStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'PassportScannerStatusResponse') {
        passportScannerStatusEventCallback(response as PassportScannerStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
