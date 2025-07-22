import DeviceBase from './DeviceBase';
export interface NDCCommand {
    command: string;
    data?: any;
}
export interface NDCState {
    stateNumber: string;
    nextState?: string;
    screenData?: string;
}
/**
 * @group API
 * @description This class handles NDC (Network Data Communication) protocol for ATM communication.
 */
export default class NDC extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to send NDC command.
     */
    sendNDCCommand(command: NDCCommand): void;
    /**
     * A function to set NDC state.
     */
    setState(state: NDCState): void;
    /**
     * A function to get current NDC state.
     */
    getState(): void;
    /**
     * A function to process NDC message.
     */
    processMessage(message: string): void;
    /**
     * A function to initialize NDC communication.
     */
    initialize(): void;
    /**
     * A function to terminate NDC communication.
     */
    terminate(): void;
}
//# sourceMappingURL=NDC.d.ts.map