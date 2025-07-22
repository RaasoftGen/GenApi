import DeviceBase from './DeviceBase';
import { IDScannerStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the ID scanner device in an ATM.
 */
export default class IDScanner extends DeviceBase {
  constructor() {
    super('IDScanner');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'ReadImageCompleted':
        console.log('ID scan completed:', obj);
        return true;
      case 'ReadDataCompleted':
        console.log('ID data read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to scan an ID document.
   */
  public readImage(timeout: number = 30000): void {
    this.sendCommand('ReadImage', { timeout });
  }

  /**
   * A function to read ID data.
   */
  public readData(timeout: number = 30000): void {
    this.sendCommand('ReadData', { timeout });
  }

  /**
   * A function to eject the ID document.
   */
  public ejectMedia(): void {
    this.sendCommand('EjectMedia');
  }

  /**
   * A function to get the status information of ID scanner device.
   */
  public getStatus(idScannerStatusEventCallback: (obj: IDScannerStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'IDScannerStatusResponse') {
        idScannerStatusEventCallback(response as IDScannerStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
