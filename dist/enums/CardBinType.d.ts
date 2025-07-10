/**
 * Defines Card Bin Type.
 *
 * @public
 */
export declare const CardBinType: {
    /**
     * Hopper
     */
    readonly SUPPLYBIN: "SUPPLYBIN";
    /**
     * Retain Bin
     */
    readonly RETAINBIN: "RETAINBIN";
};
/**
 * @public
 */
export type CardBinType = (typeof CardBinType)[keyof typeof CardBinType];
