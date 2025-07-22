import DeviceBase from './DeviceBase';
import { EKTPReaderStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the EKTP (Indonesian ID card) reader device in an ATM.
 */
export default class EKTPReader extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to read EKTP data.
     */
    readData(timeout?: number): void;
    /**
     * A function to reset the EKTP reader.
     */
    reset(): void;
    /**
     * A function to get the status information of EKTP reader device.
     */
    getStatus(ektpReaderStatusEventCallback: (obj: EKTPReaderStatusResponse) => void): void;
}
//# sourceMappingURL=EKTPReader.d.ts.map