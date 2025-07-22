import DeviceBase from './DeviceBase';
import { BarcodeReaderStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the barcode reader device in an ATM.
 */
export default class BarcodeReader extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to read barcode data.
     */
    readData(timeout?: number): void;
    /**
     * A function to get the status information of barcode reader device.
     */
    getStatus(barcodeReaderStatusEventCallback: (obj: BarcodeReaderStatusResponse) => void): void;
}
//# sourceMappingURL=BarcodeReader.d.ts.map