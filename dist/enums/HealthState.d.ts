/**
 * Specifies the health state of the ATM.
 * @public
 */
export declare const HealthState: {
    /**
     * The ATM has lost the connection to its host so no transactions can be performed.
     */
    readonly OFFLINE: "OFFLINE";
    /**
     * The ATM is online.
     */
    readonly ONLINE: "ONLINE";
    /**
     * The ATM is shut down.
     */
    readonly SHUTDOWN: "SHUTDOWN";
};
/**
 * @public
 */
export type HealthState = (typeof HealthState)[keyof typeof HealthState];
