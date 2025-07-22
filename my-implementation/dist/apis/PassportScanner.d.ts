import DeviceBase from './DeviceBase';
import { PassportScannerStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the passport scanner device in an ATM.
 */
export default class PassportScanner extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to scan a passport.
     */
    readImage(timeout?: number): void;
    /**
     * A function to read passport data.
     */
    readData(timeout?: number): void;
    /**
     * A function to eject the passport.
     */
    ejectMedia(): void;
    /**
     * A function to get the status information of passport scanner device.
     */
    getStatus(passportScannerStatusEventCallback: (obj: PassportScannerStatusResponse) => void): void;
}
//# sourceMappingURL=PassportScanner.d.ts.map