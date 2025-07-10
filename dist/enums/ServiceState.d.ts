/**
 * Specifies all service states for the ATM.
 * The serviceStateChanged event contains the current service state which is one of the enumeration members.
 * @public
 */
export declare const ServiceState: {
    readonly OFFLINE: "OFFLINE";
    /**
     * The ATM is in service and the transactions that the ATM provides are available.
     * But depending on the device status, some transactions might not be available.
     * For example, even if the ATM is in the service state, customers might not be able to do deposit
     * transactions because the cash acceptor has some problem. So, INSERVICE state
     * means that the ATM can provide at least one transaction.
     */
    readonly INSERVICE: "IN_SERVICE";
    /**
     * The ATM is in supervisor mode and users cannot use the machine for any transactions
     * because a supervisor, operator or technician might be using the ATM for maintenance.
     */
    readonly INSUPERVISOR: "IN_SUPERVISOR";
    readonly Maintenance: "Maintenance";
    /**
     * The ATM is out of service. There may be a hardware error.
     * Transactions cannot be run.
     */
    readonly OUTOFSERVICE: "OUT_OF_SERVICE";
    /**
     * The initial service state of the ATM.
     */
    readonly PENDING: "PENDING";
    /**
     * When an ATM is powered up, the service state is PowerUp.
     * In this state, the machine prepares the devices for transactions,
     * so transactions cannot be run in this state.
     * After the ATM completes its preaparation, it changes the state to INSERVICE
     * or OUTOFSERVICE depending on the current status.
     */
    readonly POWERUP: "PowerUp";
};
/**
 * @public
 */
export type ServiceState = (typeof ServiceState)[keyof typeof ServiceState];
