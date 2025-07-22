import DeviceBase from './DeviceBase';
import { RFIDReaderStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the RFID reader device in an ATM.
 */
export default class RFIDReader extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to read RFID data.
     */
    readData(timeout?: number): void;
    /**
     * A function to get the status information of RFID reader device.
     */
    getStatus(rfidReaderStatusEventCallback: (obj: RFIDReaderStatusResponse) => void): void;
}
//# sourceMappingURL=RFIDReader.d.ts.map