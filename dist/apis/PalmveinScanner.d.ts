import DeviceBase from './DeviceBase';
/**
 * @group API
 * @remarks This class is currently under development. Currently this device is not supported by the simulator.
 * @description This class controls the ID scanner device in an ATM.
 * To control the ID scanner, this class consists of event listeners and ID scanner control commands
 * such as [[readImage]], [[ejectCard]], and [[cancel]].
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * [[addListener]] before calling a method. Also, when it finishes controlling the device,
 * it should [[removeListener]] to stop receiving responses.
 */
export default class PalmveinScanner extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to wait for the ATM to read an image of ID.
     * When reading an image is completed, the response [[ReadImageCompleted]] will be passed
     * to the registered callback function.
     * @public
     */
    readImage(): void;
    /**
     * A function to verify the Palmvein.
     * a [[MediaTaken]] response will be sent.
     * @public
     */
    readData(): void;
    /**
     * A function to cancel [[readImage]] command.
     * If the ATM is able to cancel the operation, it stops waiting for the ID sacnner to be read
     * and sends a [[ReadImageCompleted]] response with the [[Detail]] field [[CANCELLED]].
     * @public
     */
    cancel(): void;
}
