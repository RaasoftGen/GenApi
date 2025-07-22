import DeviceBase from './DeviceBase';
import { PalmveinScannerStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the palm vein scanner device in an ATM.
 */
export default class PalmveinScanner extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to scan palm vein.
     */
    scan(timeout?: number): void;
    /**
     * A function to reset the palm vein scanner.
     */
    reset(): void;
    /**
     * A function to get the status information of palm vein scanner device.
     */
    getStatus(palmveinScannerStatusEventCallback: (obj: PalmveinScannerStatusResponse) => void): void;
}
//# sourceMappingURL=PalmveinScanner.d.ts.map