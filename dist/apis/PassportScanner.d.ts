import DeviceBase from './DeviceBase';
import { PassportScannerStatusResponse } from '../models';
import { FlashRate } from '../enums';
/**
 * @group API
 * @description This class controls the passport scanner device in an ATM.
 * To control the passport scanner, this class consists of event listeners and passport scanner control commands.
 * The methods, except for `{@link addListener}` and `{@link removeListener} are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * `{@link addListener}` before calling a method. Also, when it finishes controlling the device,
 * it should `{@link removeListener}` to stop receiving responses.
 */
export default class PassportScanner extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to wait for the ATM to read image of passport.
     * When an image is read, the response `{@link ReadImageCompleted}` will be passed to the registered callback function.
     */
    readImage(): void;
    /**
     * A function to setting guide lights.
     * The response `{@link SetGuideLightCompleted}` event will be sent.
     *
     * @param  flashRate - Flash rate
     */
    setGuideLight(flashRate: FlashRate): void;
    /**
     * A function to reset Passport Scanner device.
     * For example, if `{@link reset}` method is operating, the `{@link ResetDeviceCompleted}` event will be sent.
     */
    reset(): void;
    /**
     * A function to get the status information of passport scanner device.
     *
     * @param passportScannerStatusEventCallback - The callback function to receive the `{@link PassportScannerStatusResponse}` as the result of the operation.
     */
    getStatus(passportScannerStatusEventCallback: (obj: PassportScannerStatusResponse) => void): void;
}
