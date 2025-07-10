/**
 * Provides the Paper status.
 *
 * @public
 */
export declare const PaperStatus: {
    readonly FULL: "FULL";
    readonly LOW: "LOW";
    readonly OUT: "OUT";
    readonly UNKNOWN: "UNKNOWN";
    readonly NOTSUPP: "NOTSUPP";
};
/**
 * @public
 */
export type PaperStatus = (typeof PaperStatus)[keyof typeof PaperStatus];
