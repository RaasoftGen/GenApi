import DeviceBase from './DeviceBase';
import { ServiceState } from '../enums';
import { DeviceConfigResponse, ModeStatusResponse } from '../models';
/**
 * @group API
 * @description This class is used to get configuration and other information of a terminal.
 * The Terminal class receives the mode status changed event from the ATM
 * by registering the callback function for the event.
 * To get the terminal information, the Terminal class provides inquiry methods such as
 * [[getConfig]] and [[getStatus]], which are asynchronous methods.
 * So, the caller should pass the callback function as a parameter to the methods.
 */
export default class Terminal extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * @deprecated
     * A function to initialize a terminal (ATM) and enable detection of the mode status changed event.
     * The callback function registered by the [[addModeEventListener]] receives the [[ModeResponse]] as the result of the operation.
     */
    init(): void;
    /**
     * A function that gets the terminal's device configuration.
     *
     * @param deviceConfigResponseEventCallback - The callback function to receive the [[DeviceConfigResponse]] as the result of the operation.
     */
    getConfig(deviceConfigResponseEventCallback: (obj: DeviceConfigResponse) => void): void;
    /**
     *
     */
    initMode(): void;
    /**
     * This function requests a mode switch.
     *
     * @param nextMode - IN_SERVICE, OUT_OF_SERVICE
     */
    setMode(nextMode: ServiceState): void;
    /**
     * This function requests the current mode.
     *
     * @param modeStatusResponseEventCallback - [[ModeStatusResponse]] Callback function for the response.
     */
    getModeStatus(modeStatusResponseEventCallback: (obj: ModeStatusResponse) => void): void;
}
