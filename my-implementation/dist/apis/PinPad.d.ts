import DeviceBase from './DeviceBase';
import { PinPadStatusResponse } from '../models';
export declare enum PinPadKey {
    ENTER = "ENTER",
    CLEAR = "CLEAR",
    CANCEL = "CANCEL",
    NUMBERS = "NUMBERS",
    F1 = "F1",
    F2 = "F2",
    F3 = "F3",
    F4 = "F4",
    F5 = "F5",
    F6 = "F6",
    F7 = "F7",
    F8 = "F8"
}
/**
 * @group API
 * @description This class controls the Pinpad device in an ATM to get a customer's PIN for a transaction.
 * To control the Pinpad, this class consists of event listeners and control commands
 * As the control methods are all asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `addListener` before calling a method.
 * Also, when it finishes controlling the device, it should `removeListener` not to get the response.
 */
export default class PinPad extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to enable the Pinpad to get the PIN from a customer.
     * After this method is called, a `KeyPressed` response is sent to the registered callback function
     * when a customer presses a key. When the PIN entry is completed, the response `PinEntryCompleted`
     * will be passed to the callback function. When the PIN entry is canceled because the customer
     * presses the CANCEL key, `PinEntryCompleted` will be sent with `CANCELLED` in the `Detail` field.
     * If the customer does not enter PIN after a certain amount of time,
     * the caller will get a `PinEntryCompleted` response with `TIMEOUT` in the `Detail` field.
     * If there is an error activating the Pinpad,
     * a `PinEntryCompleted` response will be sent from the ATM with `ERROR` in the `Detail` field.
     *
     * @param minDigits - The minimum number of key presses
     * @param maxDigits - The maximum number of key presses
     * @param autoEnd - Whether to proceed the transaction automatically when reached `maxDigits`
     * @param timeout - The time to wait for data entry to be finished (default: 30000 milliseconds)
     */
    inputPIN(minDigits: number, maxDigits: number, autoEnd: boolean, timeout?: number): void;
    /**
     * A function to enable the Pinpad to get the input data from a customer such as phone number.
     * After this method is called, a `KeyPressed` response is sent to the registered callback function
     * when a customer presses a key. When the data entry is completed, the response `CustomerInputReceived`
     * will be passed to the callback function. When the data entry is canceled because the customer
     * presses the `CANCEL` key, `CustomerInputReceived` will be sent with `CANCELLED` in the `Detail` field.
     * If there is an error activating the Pinpad,
     * A `CustomerInputReceived` response will be sent from the ATM with `ERROR` in the `Detail` field.
     *
     * @param maxDigits - The maximum number of key presses
     * @param activeKeys - The keys that are enabled to be pressed
     * @param terminateKeys - The keys that end the data entry
     * @param timeout - The time to wait for data entry to be finished (default: 30000 milliseconds)
     */
    inputData(maxDigits: number, activeKeys: Array<PinPadKey>, terminateKeys: Array<PinPadKey>, timeout?: number): void;
    /**
     * A function to cancel `inputPIN` or `inputData` command.
     * If the ATM is able to cancel the operation, the `KeyPressed` response will be sent with the `PressedKey` field `CANCELLED`.
     */
    cancel(): void;
    /**
     * A function to reset Pin Pad device.
     * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
     */
    reset(): void;
    /**
     * A function to get the status information of pinpad device.
     */
    getStatus(pinPadStatusEventCallback: (obj: PinPadStatusResponse) => void): void;
}
//# sourceMappingURL=PinPad.d.ts.map