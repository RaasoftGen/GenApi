import { DoorStatusResponse } from '../../models';
import DeviceEvent from '../DeviceEvent';
/**
 * @group API
 * @description This class is used to registerN/unregister device events.
 * The API users can register a callback function to receive
 * the device events by using `{@link addListener}` and unregister the callback function with `{@link removeListener}`.
 */
export default class BCADeviceEvent extends DeviceEvent {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * @internal
     * @description Subscribes to door status response events.
     * @param doorStatusResponseCallback The callback function to be called when a door status response is received.
     */
    subscribeDoorStatusResponse(doorStatusResponseCallback: (obj: DoorStatusResponse) => void): void;
    /**
     * @internal
     * @description Unsubscribes from door status response events.
     */
    unsubscribeDoorStatusResponse(): void;
}
