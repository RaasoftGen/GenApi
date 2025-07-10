/**
 * Specifies the cash-in status.
 */
export declare const CashInStatus: {
    readonly OK: "OK";
    readonly ROLLBACK: "ROLLBACK";
    readonly ACTIVE: "ACTIVE";
    readonly RETRACT: "RETRACT";
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * @public
 */
export type CashInStatus = (typeof CashInStatus)[keyof typeof CashInStatus];
