/**
 * Defines the App Select Result type
 *
 * @public
 */
export declare const AppSelectResultType: {
    readonly NotPerformed: "NotPerformed";
    readonly ICCAppSelectionSuccess: "ICCAppSelectionSuccess";
    readonly NoUsableApp: "NoUsableApp";
    readonly ERROR: "ERROR";
};
/**
 * @public
 */
export type AppSelectResultType = (typeof AppSelectResultType)[keyof typeof AppSelectResultType];
