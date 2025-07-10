import DeviceBase from './DeviceBase';
import { IDScannerStatusResponse } from '../models';
import { ResetActionType } from '../enums';
/**
 * @group API
 * @description This class controls the ID scanner device in an ATM.
 * To control the ID scanner, this class consists of event listeners and ID scanner control commands.
 * The methods, except for `{@link addListener}` and `{@link removeListener}` are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * `{@link addListener}` before calling a method. Also, when it finishes controlling the device,
 * it should `{@link removeListener}` to stop receiving responses.
 */
export default class IDScanner extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to wait for the ATM to read an image of ID.
     * When reading an image is completed, the response `{@link ReadImageCompleted}` will be sent.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    readImage(timeout?: number): void;
    /**
     * A function to eject the ID card. Depending on the card taken,
     * `{@link CommandReadyCompleted}`, `{@link EjectCardCompleted}`, `{@link MediaTaken}` response will be sent.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    ejectCard(timeout?: number): void;
    /**
     * A function to cancel `{@link readImage}` command.
     * If the ATM is able to cancel the operation, it stops waiting for the ID sacnner to be read
     * and sends a `{@link ReadImageCompleted}` response with the `Detail` field `CANCELLED`.
     */
    cancel(): void;
    /**
     * A function that retracts a card when a customer does not take the ejected card.
     * As the result of the operation, a `{@link RetractCardCompleted}` response will be passed to the `{@link dataCallback}` function.
     */
    retract(): void;
    /**
     * A function to reset ID Scanner device.
     * For example, if `{@link reset}` method is operating, the `{@link ResetDeviceCompleted}` event will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action: ResetActionType): void;
    /**
     * A function to get the status information of id scanner device.
     *
     * @param idScannerStatusEventCallback - The callback function to receive the `{@link IDScannerStatusResponse}` as the result of the operation.
     */
    getStatus(idScannerStatusEventCallback: (obj: IDScannerStatusResponse) => void): void;
}
