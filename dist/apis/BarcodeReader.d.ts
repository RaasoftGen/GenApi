import DeviceBase from './DeviceBase';
import { BarcodeReaderStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the barcode reader device in an ATM.
 * To control the barcode reader, this class consists of event listeners and barcode reader control commands.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * [[addListener]] before calling a method. Also, when it finishes controlling the device,
 * it should [[removeListener]] to stop receiving responses.
 */
export default class BarcodeReader extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to wait for the ATM to read barcodes.
     * When an barcode is read, the response [[ReadDataCompleted]] will be sent.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    read(timeout?: number): void;
    /**
     * A function to reset BarCode Reader device.
     * For example, if `{@link reset}` method is operating, the `{@link ResetDeviceCompleted}` event will be sent.
     */
    reset(): void;
    /**
     * A function to get the status information of barcode reader device.
     *
     * @param barcodeReaderStatusEventCallback - The callback function to receive the [[BarcodeReaderStatusResponse]] as the result of the operation.
     */
    getStatus(barcodeReaderStatusEventCallback: (obj: BarcodeReaderStatusResponse) => void): void;
}
