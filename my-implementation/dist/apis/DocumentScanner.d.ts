import DeviceBase from './DeviceBase';
import { DocumentScannerStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the document scanner device in an ATM.
 */
export default class DocumentScanner extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to scan a document.
     */
    readImage(timeout?: number): void;
    /**
     * A function to read document data.
     */
    readData(timeout?: number): void;
    /**
     * A function to eject the document.
     */
    ejectMedia(): void;
    /**
     * A function to retain the document.
     */
    retainMedia(): void;
    /**
     * A function to get the status information of document scanner device.
     */
    getStatus(documentScannerStatusEventCallback: (obj: DocumentScannerStatusResponse) => void): void;
}
//# sourceMappingURL=DocumentScanner.d.ts.map