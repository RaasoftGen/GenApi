import DeviceBase from './DeviceBase';
import { FlashRate, ResetActionType } from '../enums';
import { SignpadStatusResponse } from '../models';
/**
 * @group API
 * @remarks This class is currently under development. Currently this device is not supported by the simulator.
 * @description This class controls the sign pad device in an ATM.
 * To control the sign pad, this class consists of event listeners and sign pad control commands.
 * The methods, except for {@link addListener} and {@link removeListener} are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * `{@link addListener}` before calling a method. Also, when it finishes controlling the device,
 * it should `{@link removeListener}` to stop receiving responses.
 */
export default class Signpad extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to wait for the ATM to read image of signature.
     * When an image is read, the response `{@link ReadImageCompleted}` event will be sent.
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
     * A function to reset Signpad device.
     * For example, if `{@link reset}` method is operating, the `{@link ResetDeviceCompleted}` event will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action: ResetActionType): void;
    /**
     * A function to get the status information of signpad device.
     *
     * @param signpadStatusEventCallback - The callback function to receive the `{@link SignpadStatusResponse}` as the result of the operation.
     */
    getStatus(signPadStatusEventCallback: (obj: SignpadStatusResponse) => void): void;
}
