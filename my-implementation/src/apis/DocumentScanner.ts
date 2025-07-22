import DeviceBase from './DeviceBase';
import { DocumentScannerStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the document scanner device in an ATM.
 */
export default class DocumentScanner extends DeviceBase {
  constructor() {
    super('DocumentScanner');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'ReadImageCompleted':
        console.log('Document scan completed:', obj);
        return true;
      case 'ReadDataCompleted':
        console.log('Document data read completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to scan a document.
   */
  public readImage(timeout: number = 30000): void {
    this.sendCommand('ReadImage', { timeout });
  }

  /**
   * A function to read document data.
   */
  public readData(timeout: number = 30000): void {
    this.sendCommand('ReadData', { timeout });
  }

  /**
   * A function to eject the document.
   */
  public ejectMedia(): void {
    this.sendCommand('EjectMedia');
  }

  /**
   * A function to retain the document.
   */
  public retainMedia(): void {
    this.sendCommand('RetainMedia');
  }

  /**
   * A function to get the status information of document scanner device.
   */
  public getStatus(documentScannerStatusEventCallback: (obj: DocumentScannerStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'DocumentScannerStatusResponse') {
        documentScannerStatusEventCallback(response as DocumentScannerStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
