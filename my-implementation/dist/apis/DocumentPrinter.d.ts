import DeviceBase from './DeviceBase';
import { DocumentPrinterStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the document printer device in an ATM.
 */
export default class DocumentPrinter extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to print on a document.
     */
    printData(data: string[]): void;
    /**
     * A function to print an image on a document.
     */
    printImage(imageData: string): void;
    /**
     * A function to eject the document.
     */
    ejectMedia(): void;
    /**
     * A function to get the status information of document printer device.
     */
    getStatus(documentPrinterStatusEventCallback: (obj: DocumentPrinterStatusResponse) => void): void;
}
//# sourceMappingURL=DocumentPrinter.d.ts.map