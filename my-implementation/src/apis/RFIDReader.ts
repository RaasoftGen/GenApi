import DeviceBase from './DeviceBase';
import { RFIDReaderStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the RFID reader device in an ATM.
 */
export default class RFIDReader extends DeviceBase {
  constructor() {
    super('RFIDReader');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'ReadDataCompleted':
        console.log('RFID read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to read RFID data.
   */
  public readData(timeout: number = 30000): void {
    this.sendCommand('ReadData', { timeout });
  }

  /**
   * A function to get the status information of RFID reader device.
   */
  public getStatus(rfidReaderStatusEventCallback: (obj: RFIDReaderStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'RFIDReaderStatusResponse') {
        rfidReaderStatusEventCallback(response as RFIDReaderStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
