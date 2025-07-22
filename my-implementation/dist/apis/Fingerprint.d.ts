import DeviceBase from './DeviceBase';
import { FingerprintStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the fingerprint scanner device in an ATM.
 */
export default class Fingerprint extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to acquire fingerprint from customer.
     */
    acquireFinger(timeout?: number): void;
    /**
     * A function to stop fingerprint acquisition.
     */
    stopAcquireFinger(): void;
    /**
     * A function to get the status information of fingerprint device.
     */
    getStatus(fingerprintStatusEventCallback: (obj: FingerprintStatusResponse) => void): void;
}
//# sourceMappingURL=Fingerprint.d.ts.map