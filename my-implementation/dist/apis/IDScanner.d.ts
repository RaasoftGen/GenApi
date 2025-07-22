import DeviceBase from './DeviceBase';
import { IDScannerStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the ID scanner device in an ATM.
 */
export default class IDScanner extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to scan an ID document.
     */
    readImage(timeout?: number): void;
    /**
     * A function to read ID data.
     */
    readData(timeout?: number): void;
    /**
     * A function to eject the ID document.
     */
    ejectMedia(): void;
    /**
     * A function to get the status information of ID scanner device.
     */
    getStatus(idScannerStatusEventCallback: (obj: IDScannerStatusResponse) => void): void;
}
//# sourceMappingURL=IDScanner.d.ts.map