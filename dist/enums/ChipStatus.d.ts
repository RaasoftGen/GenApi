/**
 * provides status for chip
 */
export declare const ChipStatus: {
    readonly READ: "READ";
    readonly NOTREAD: "NOTREAD";
    readonly MISSING: "MISSING";
    readonly INVALID: "INVALID";
};
/**
 * provides status for chip
 */
export type ChipStatus = (typeof ChipStatus)[keyof typeof ChipStatus];
