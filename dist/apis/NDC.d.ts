import DeviceBase from './DeviceBase';
/**
 * @group API
 * @remarks Internal
 * @description This class controls the NDC transaction in an ATM.
 */
export default class NDC extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * Request to transmit NDC message from frontend to core.
     * The responses such as `{@link RecvFromNDCHostResponse}`, `{@link NDCHostSendResponse} will be sent.
     */
    sendNDCHostRequest(): void;
    /**
     * Request to transmit NDC message from frontend to core.
     * The responses such as `{@link NDCCloseStateResponse}` will be sent.
     */
    sendCloseStateRequest(): void;
}
