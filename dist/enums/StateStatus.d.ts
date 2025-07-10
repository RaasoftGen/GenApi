/**
 * The status of State Framework
 * @public
 */
export declare const StateStatus: {
    /**
     * State Framework is idle (waiting a customer)
     */
    readonly Idle: "Idle";
    /**
     * State Framework is doing a transaction
     */
    readonly Transaction: "Transaction";
    /**
     * Transaction Request is sent
     */
    readonly Requesting: "Requesting";
    /**
     * State Framework is processing the transaction reply
     */
    readonly Processing: "Processing";
    /**
     * State Framework is deactivated (not running)
     */
    readonly Deactivated: "Deactivated";
    /**
     * State Framework is deactivating (not running)
     */
    readonly Deactivating: "Deactivating";
    /**
     *
     */
    readonly Close: "Close";
};
/**
 * @public
 */
export type StateStatus = (typeof StateStatus)[keyof typeof StateStatus];
