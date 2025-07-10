/**
 *  Device Status
 * @public
 */
export declare const FlashRate: {
    readonly OFF: "OFF";
    readonly SLOW: "SLOW";
    readonly MEDIUM: "MEDIUM";
    readonly CONTINOUS: "CONTINOUS";
};
/**
 * @public
 */
export type FlashRate = (typeof FlashRate)[keyof typeof FlashRate];
