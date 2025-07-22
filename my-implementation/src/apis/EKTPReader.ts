import DeviceBase from './DeviceBase';
import { EKTPReaderStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the EKTP (Indonesian ID card) reader device in an ATM.
 */
export default class EKTPReader extends DeviceBase {
  constructor() {
    super('EKTPReader');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'ReadDataCompleted':
        console.log('EKTP read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to read EKTP data.
   */
  public readData(timeout: number = 30000): void {
    this.sendCommand('ReadData', { timeout });
  }

  /**
   * A function to reset the EKTP reader.
   */
  public reset(): void {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of EKTP reader device.
   */
  public getStatus(ektpReaderStatusEventCallback: (obj: EKTPReaderStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'EKTPReaderStatusResponse') {
        ektpReaderStatusEventCallback(response as EKTPReaderStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
