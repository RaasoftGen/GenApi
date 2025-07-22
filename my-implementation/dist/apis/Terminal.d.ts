import DeviceBase from './DeviceBase';
import { TerminalStatusResponse } from '../models';
export interface TerminalInfoParams {
    terminalId?: string;
    institutionId?: string;
    applicationId?: string;
}
/**
 * @group API
 * @description This class controls the terminal information and management.
 */
export default class Terminal extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to initialize the terminal.
     */
    initialize(params?: TerminalInfoParams): void;
    /**
     * A function to shutdown the terminal.
     */
    shutdown(): void;
    /**
     * A function to restart the terminal.
     */
    restart(): void;
    /**
     * A function to get terminal information.
     */
    getInfo(): void;
    /**
     * A function to set terminal information.
     */
    setInfo(params: TerminalInfoParams): void;
    /**
     * A function to get the status information of terminal.
     */
    getStatus(terminalStatusEventCallback: (obj: TerminalStatusResponse) => void): void;
}
//# sourceMappingURL=Terminal.d.ts.map