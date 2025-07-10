import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class certificate user in an ATM.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * [[addListener]] before calling a method. Also, when it finishes controlling the device,
 * it should [[removeListener]] to stop receiving responses.
 */
export default class Certification extends DeviceBase {
    #private;
    constructor(name?: string);
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function that gets the valid token from ATM.
     *
     * @internal
     */
    getToken(): void;
}
