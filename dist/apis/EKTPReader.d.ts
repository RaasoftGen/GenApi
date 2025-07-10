import DeviceBase from './DeviceBase';
/**
 * @group API
 * @remarks for Indonesia
 * @description This class controls the e-KTP reader device in an ATM.
 * To control the e-KTP reader, this class consists of event listeners and e-KTP reader control commands.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * [[addListener]] before calling a method. Also, when it finishes controlling the device,
 * it should [[removeListener]] to stop receiving responses.
 */
export default class EKTPReader extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to wait for the ATM to read e-KTP.
     * When reading the e-KTP data is completed,
     * the response [[ReadDataCompleted]] will be passed to the registered callback function.
     * @public
     */
    tagEKTP(): void;
    /**
     * A function to wait for the ATM to scan fingerprint built in the e-KTP reader device.
     * When scanning the fingerprint data is completed,
     * the response [[ReadDataCompleted]] will be passed to the registered callback function.
     * @public
     */
    scanFinger(): void;
    /**
     * A function to verify e-KTP data and fingerprint.
     * When verifying is completed, the response [[ReadDataCompleted]] will be passed
     * to the registered callback function.
     * @public
     */
    verification(): void;
    /**
     * A function to cancel all e-KTP reader commands.
     * If the ATM is able to cancel the operation, a response of the the running command will be sent with the [[Detail]] field [[CANCELLED]].
     * For example, if [[tagEKTP]] method is operating, the [[ReadDataCompleted]] event will be sent.
     * @public
     */
    cancel(): void;
}
