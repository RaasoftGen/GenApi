/**
 * provides the stacker status.
 * @public
 */
export declare const StackerStatus: {
    readonly EMPTY: "EMPTY";
    readonly NOTEMPTY: "NOTEMPTY";
    readonly FULL: "FULL";
    readonly NOTSUPP: "NOTSUPP";
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * @public
 */
export type StackerStatus = (typeof StackerStatus)[keyof typeof StackerStatus];
