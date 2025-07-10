/**
 * Defines the reset action type
 */
export declare const ResetActionType: {
    /**
     * Reset device with RETAIN
     */
    readonly Retain: "RETAIN";
    /**
     * Reset device with Eject
     */
    readonly Eject: "EJECT";
};
/**
 * Defines the reset action type
 */
export type ResetActionType = (typeof ResetActionType)[keyof typeof ResetActionType];
