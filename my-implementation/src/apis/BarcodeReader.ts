import DeviceBase from './DeviceBase';
import { BarcodeReaderStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the barcode reader device in an ATM.
 */
export default class BarcodeReader extends DeviceBase {
  constructor() {
    super('BarcodeReader');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'ReadDataCompleted':
        console.log('Barcode read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to read barcode data.
   */
  public readData(timeout: number = 30000): void {
    this.sendCommand('ReadData', { timeout });
  }

  /**
   * A function to get the status information of barcode reader device.
   */
  public getStatus(barcodeReaderStatusEventCallback: (obj: BarcodeReaderStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'BarcodeReaderStatusResponse') {
        barcodeReaderStatusEventCallback(response as BarcodeReaderStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
