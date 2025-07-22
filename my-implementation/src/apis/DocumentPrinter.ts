import DeviceBase from './DeviceBase';
import { DocumentPrinterStatusResponse } from '../models';

/**
 * @group API
 * @description This class controls the document printer device in an ATM.
 */
export default class DocumentPrinter extends DeviceBase {
  constructor() {
    super('DocumentPrinter');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'PrintDataCompleted':
        console.log('Document print completed:', obj);
        return true;
      case 'PrintImageCompleted':
        console.log('Document image print completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to print on a document.
   */
  public printData(data: string[]): void {
    this.sendCommand('PrintData', { data });
  }

  /**
   * A function to print an image on a document.
   */
  public printImage(imageData: string): void {
    this.sendCommand('PrintImage', { imageData });
  }

  /**
   * A function to eject the document.
   */
  public ejectMedia(): void {
    this.sendCommand('EjectMedia');
  }

  /**
   * A function to get the status information of document printer device.
   */
  public getStatus(documentPrinterStatusEventCallback: (obj: DocumentPrinterStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'DocumentPrinterStatusResponse') {
        documentPrinterStatusEventCallback(response as DocumentPrinterStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
