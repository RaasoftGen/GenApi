/**
 * Defines the reset action type
 */
export declare const CashAcceptorResetActionType: {
    /**
     * Reset device with returning Note to customer
     */
    readonly Output: "Output";
    /**
     * Reset device with retracting Note
     */
    readonly RetractBin: "RetractBin";
    /**
     * Reset device with retaining to CST1
     */
    readonly MediaInCST1: "MediaInCST1";
};
/**
 * Defines the reset action type
 */
export type CashAcceptorResetActionType = (typeof CashAcceptorResetActionType)[keyof typeof CashAcceptorResetActionType];
