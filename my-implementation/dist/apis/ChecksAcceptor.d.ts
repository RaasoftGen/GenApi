import DeviceBase from './DeviceBase';
import { ChecksAcceptorStatusResponse } from '../models';
export interface AcceptChecksParams {
    timeout?: number;
    maxChecks?: number;
}
/**
 * @group API
 * @description This class controls the checks acceptor device in an ATM.
 */
export default class ChecksAcceptor extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to accept checks.
     */
    accept(params?: AcceptChecksParams): void;
    /**
     * A function to return checks to customer.
     */
    return(): void;
    /**
     * A function to retract checks.
     */
    retract(): void;
    /**
     * A function to commit the checks transaction.
     */
    commit(): void;
    /**
     * A function to reset the checks acceptor.
     */
    reset(): void;
    /**
     * A function to get the status information of checks acceptor device.
     */
    getStatus(checksAcceptorStatusEventCallback: (obj: ChecksAcceptorStatusResponse) => void): void;
}
//# sourceMappingURL=ChecksAcceptor.d.ts.map