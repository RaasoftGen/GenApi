import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class is used to registerN/unregister device events.
 * The API users can register a callback function to receive
 * the device events by using `{@link addListener}` and unregister the callback function with `{@link removeListener}`.
 */
export default class DeviceEvent extends DeviceBase {
    constructor(name?: string);
    protected othersEventCallback(obj: any): boolean;
    /**
     * @deprecated instead {@link subscribeDoorStatusEvent}
     * Register a callback to be called when the Door's status changes.
     */
    addDoorStatusEvent(): void;
    /**
     * @deprecated instead {@link unsubscribeDoorStatusEvent}
     * Unregister a callback to be called when the Door's status changes
     */
    removeDoorStatusEvent(): void;
    /**
     * Register a callback to be called when the Door's status changes.
     */
    subscribeDoorStatusEvent(): void;
    /**
     * Unregister a callback to be called when the Door's status changes
     */
    unsubscribeDoorStatusEvent(): void;
    /**
     * @deprecated instead {@link subscribeAudioJackEvent}
     * A function to enable the ATM to detect the audio jack status.
     * As the result of the operation, an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * Whenever the audio status is changed after this method is called,
     * `{@link EnhancedAudioResponse}` will be passed as a parameter for the callback function.
     */
    addAudioJackEvent(): void;
    /**
     * @deprecated instead {@link unsubscribeAudioJackEvent}
     * A function to disable the ATM to detect the audio jack status.
     * As the result of the operation, an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * `{@link EnhancedAudioResponse}` will not be sent after this method is called.
     */
    removeAudioJackEvent(): void;
    /**
     * A function to enable the ATM to detect the audio jack status.
     * As the result of the operation, an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * Whenever the audio status is changed after this method is called,
     * `{@link EnhancedAudioResponse}` will be passed as a parameter for the callback function.
     */
    subscribeAudioJackEvent(): void;
    /**
     * A function to disable the ATM to detect the audio jack status.
     * As the result of the operation, an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * `{@link EnhancedAudioResponse}` will not be sent after this method is called.
     */
    unsubscribeAudioJackEvent(): void;
    /**
     * @deprecated instead {@link subscribeProximityEvent}
     * A function to enable the ATM to detect the proximity sensor status and as the result of the operation,
     * an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * Whenever the proximity sensor status is changed after this method is called,
     * `{@link ProximityResponse}` will be passed as a parameter for the callback function.
     */
    addProximityEvent(): void;
    /**
     * @deprecated instead {@link unsubscribeProximityEvent}
     * A function to disable the ATM to detect the proximity sensor status
     * and as the result of the operation, an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * `{@link ProximityResponse}` will not be sent after this method is called.
     */
    removeProximityEvent(): void;
    /**
     * A function to enable the ATM to detect the proximity sensor status and as the result of the operation,
     * an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * Whenever the proximity sensor status is changed after this method is called,
     * `{@link ProximityResponse}` will be passed as a parameter for the callback function.
     */
    subscribeProximityEvent(): void;
    /**
     * A function to disable the ATM to detect the proximity sensor status
     * and as the result of the operation, an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * `{@link ProximityResponse}` will not be sent after this method is called.
     */
    unsubscribeProximityEvent(): void;
    /**
     * @remarks This function is currently under development. Currently this device is not supported by the simulator.
     * @description A function to enable the ATM to detect the hand set status and as the result of the operation,
     * an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * Whenever the hand set status is changed after this method is called,
     * `{@link HandSetStatusResponse}` will be passed as a parameter for the callback function.
     */
    subscribeHandSetEvent(): void;
    /**
     * @remarks This function is currently under development. Currently this device is not supported by the simulator.
     * @description A function to disable the ATM to detect the hand set status and as the result of the operation,
     * an `{@link AuthorizationResponse}` response will be sent to the callback function.
     * `{@link HandSetStatusResponse}` will not be sent after this method is called.
     */
    unsubscribeHandSetEvent(): void;
    /**
     * @remarks This function is currently under development. Currently this device is not supported by the simulator.
     * @description This function subscribes to events on device state changes.
     * When you call this function, you will receive a `{@link AllDeviceStatusResponse}` response when the device state changes.
     */
    subscribeChangedAllDeviceStatus(): void;
}
