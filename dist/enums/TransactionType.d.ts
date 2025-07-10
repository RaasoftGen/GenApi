/**
 * Defines the transaction type
 */
export declare const TransactionType: {
    /**
     * Non NDC
     */
    readonly None: "NONE";
    /**
     * NDC
     */
    readonly NDC: "NDC";
    /**
     * LOCAL
     */
    readonly LOCAL: "LOCAL";
    /**
     * WARP
     */
    readonly WARP: "WARP";
};
/**
 * Defines the transaction type
 */
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
