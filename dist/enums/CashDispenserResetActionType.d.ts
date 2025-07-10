/**
 * Defines the reset action type
 * @public
 */
export declare const CashDispenserResetActionType: {
    /**
     * Reset device with retracting Note
     */
    readonly Retract: "RETRACT";
    /**
     * Reset device with rejecting Note
     */
    readonly Reject: "REJECT";
    /**
     * Reset device with returning Note
     */
    readonly Output: "Output";
};
/**
 * @public
 */
export type CashDispenserResetActionType = (typeof CashDispenserResetActionType)[keyof typeof CashDispenserResetActionType];
