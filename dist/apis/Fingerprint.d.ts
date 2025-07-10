import DeviceBase from './DeviceBase';
/**
 * @group API
 * @remarks This class is currently under development. Currently this device is not supported by the simulator.
 * @description This class controls the fingerprint reader device in an ATM.
 * To control the fingerprint reader, this class consists of event listeners and the control commands
 * such as [[read]] and [[cancel]].
 * As the control methods are all asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an [[addListener]] before calling a method.
 * Also, when it finishes controlling the device, it should [[removeListener]] to stop receiving responses.
 *
 */
export default class Fingerprint extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to wait for the ATM to read a fingerprint.
     * When reading of the fingerprint is completed, the response [[ReadDataCompleted]] will be passed
     * to the registered callback function.
     * @public
     */
    read(): void;
    /**
     * A function to cancel [[read]] command.
     * If the ATM is able to cancel the operation, it stops waiting for the fingerprint to be read
     * and sends a [[ReadDataCompleted]] response with the [[Detail]] field [[CANCELLED]].
     * @public
     */
    cancel(): void;
}
