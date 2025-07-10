import DeviceBase from './DeviceBase';
import { RFIDReaderStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the RFID reader device in an ATM.
 * To control the RFID reader, this class consists of event listeners and RFID reader control commands.
 * The methods, except for `{@link addListener}` and `{@link removeListener}`, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * `{@link addListener}` before calling a method. Also, when it finishes controlling the device,
 * it should `{@link removeListener}` to stop receiving responses.
 */
export default class RFIDReader extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to wait for the ATM to read RFID.
     * When reading the RFID data is completed,
     * the response `{@link CardReadCompleted}`will be passed to the registered callback function.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    readMS(timeout?: number): void;
    /**
     * A function to wait for the ATM to read RFID.
     * When reading the RFID data with EMV is completed,
     * the response `{@link CardReadCompleted}` will be passed to the registered callback function.
     * Chip data will be set in the `Track2` field of the `{@link CardReadCompleted}`.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    readChip(timeout?: number): void;
    /**
     * A function to cancel `readData` command.
     * If the ATM is able to cancel the operation, it stops waiting for the RFID to be read
     * and sends a `{@link CardReadCompleted}` response with the `Detail` field `CANCELLED`.
     */
    cancel(): void;
    /**
     * A function to reset RFID device.
     * For example, if `{@link reset}` method is operating, the `{@link ResetDeviceCompleted}` event will be sent.
     */
    reset(): void;
    /**
     * A function to get the status information of RFID reader device.
     *
     * @param rfidReaderStatusEventCallback - The callback function to receive the `{@link RFIDReaderStatusResponse}` as the result of the operation.
     */
    getStatus(rfidReaderStatusEventCallback: (obj: RFIDReaderStatusResponse) => void): void;
}
