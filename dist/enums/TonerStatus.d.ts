/**
 * Provides the Toner status.
 */
export declare const TonerStatus: {
    readonly NOTSUPP: "NOTSUPP";
    readonly FULL: "FULL";
    readonly LOW: "LOW";
    readonly OUT: "OUT";
    readonly UNKNOWN: "UNKNOWN";
    readonly NOTSUPPORT: "NOTSUPPORT";
};
/**
 * Provides the Toner status.
 */
export type TonerStatus = (typeof TonerStatus)[keyof typeof TonerStatus];
