import { PinPadStatusResponse } from '../models';
import DeviceBase from './DeviceBase';
import { PinPadKey } from '../enums';
/**
 * @group API
 * @description This class controls the Pinpad device in an ATM to get a customer's PIN for a transaction.
 * To control the Pinpad, this class consists of event listeners and control commands
 * As the control methods are all asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `{@link addListener}` before calling a method.
 * Also, when it finishes controlling the device, it should `{@link removeListener}` not to get the response.
 */
export default class PinPad extends DeviceBase {
    #private;
    constructor();
    /**
     * Depending on a method, the response of this `{@link PinPad}` class could be among
     */
    protected othersEventCallback(obj: any): boolean;
    /**
     * 암호화 된 PinBlock을 생성하는 역할을 하기 때문에, 실제로 어떤 값을 눌렀는지는 알 수 없다.
     * (PIN이 눌린 경우 임의의 값을 보내줌)
     * A function to enable the Pinpad to get the PIN from a customer.
     * After this method is called, a `{@link KeyPressed}` response is sent to the registered callback function
     * when a customer presses a key. When the PIN entry is completed, the response `{@link PinEntryCompleted}`
     * will be passed to the callback function. When the PIN entry is canceled because the customer
     * presses the CANCEL key, `{@link PinEntryCompleted}` will be sent with `CANCELLED` in the `Detail` field.1
     * If the customer does not enter PIN after a certain amount of time,
     * the caller will get a `{@link PinEntryCompleted}` response with `TIMEOUT` in the `Detail` field.
     * If there is an error activating the Pinpad,
     * a `{@link PinEntryCompleted}` response will be sent from the ATM with `ERROR` in the `Detail` field.
     *
     * @param minDigits - The minimum number of key presses. Customers can proceed the transaction if the number of pressed key is more than this number.
     * @param maxDigits - The maximum number of key presses. Customers can proceed the transaction if the number of pressed key is under this number.
     * @param autoEnd - Whether to proceed the transaction automatically when reached `maxDigits`.
     * @param timeout - The time to wait for data entry to be finished. (default: 30000 / milliseconds)
     * A `{@link PinEntryCompleted}` will be sent with `TIMEOUT` in the `Detail` field
     * if the customer does not complete the data entry within the designated time.
     * For infinite wait, -1 can be set.
     */
    inputPIN(minDigits: number, maxDigits: number, autoEnd: boolean, timeout?: number): void;
    /**
     * A function to enable the Pinpad to get the input data from a customer such as phone number.
     * After this method is called, a `{@link KeyPressed}` response is sent to the registered callback function
     * when a customer presses a key. When the data entry is completed, the response `{@link CustomerInputReceived}`
     * will be passed to the callback function. When the data entry is canceled because the customer
     * presses the `CANCEL` key, `{@link CustomerInputReceived}` will be sent with `CANCELLED` in the `Detail` field.
     * If there is an error activating the Pinpad,
     * A `{@link CustomerInputReceived}` response will be sent from the ATM with `ERROR` in the `Detail` field.
     *
     * @public
     * @param maxDigits - The maximum number of key presses. Customers cannot press more keys than this number.
     * @param activeKeys - The keys that are enabled to be pressed.
     * For example, ['NUMBERS','CLEAR','ENTER','CANCEL'] allows the customer to press number keys, and the CLEAR, ENTER and CANCEL keys.
     * @param terminateKeys - The keys that end the data entry. This can be a combination of keys
     * For example, ['ENTER','CANCEL'] allows the ENTER key or CANCEL key to terminate the data entry.
     * The terminateKeys must be included in activeKeys.
     * When the designated key is pressed,
     * the entry is completed and a `{@link CustomerInputReceived}` with input data will be sent.
     * @param timeout - The time to wait for data entry to be finished. (default: 30000 / milliseconds)
     * A `{@link CustomerInputReceived}` will be sent with `TIMEOUT` in the `Detail` field
     * if the customer does not complete the data entry within the designated time.
     * For infinite wait, -1 can be set.
     */
    inputData(maxDigits: number, activeKeys: Array<PinPadKey>, terminateKeys: Array<PinPadKey>, timeout?: number): void;
    /**
     * A function to cancel `{@link inputPIN}` or `{@link inputData}` command.
     * If the ATM is able to cancel the operation, the `{@link KeyPressed}` response will be sent with the `PressedKey` field `CANCELLED`.
     */
    cancel(): void;
    /**
     * A function to reset Pin Pad device.
     * For example, if `{@link reset}` method is operating, the `{@link ResetDeviceCompleted}` event will be sent.
     */
    reset(): void;
    /**
     * A function to get the status information of pinpad device.
     *
     * @param pinPadStatusEventCallback - The callback function to receive the `{@link PinPadStatusResponse}` as the result of the operation.
     */
    getStatus(pinPadStatusEventCallback: (obj: PinPadStatusResponse) => void): void;
}
