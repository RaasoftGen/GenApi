import DeviceBase from './DeviceBase';
import { SignpadStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the signature pad device in an ATM.
 */
export default class Signpad extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to capture a signature.
     */
    capture(params: {
        timeout: number;
        clearFirst?: boolean;
    }): void;
    /**
     * A function to clear the signature pad.
     */
    clear(): void;
    /**
     * A function to reset the signature pad.
     */
    reset(): void;
    /**
     * A function to get the status information of signature pad device.
     */
    getStatus(signpadStatusEventCallback: (obj: SignpadStatusResponse) => void): void;
}
//# sourceMappingURL=Signpad.d.ts.map