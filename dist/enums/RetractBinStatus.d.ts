/**
 * Provides the retract BIN status.
 *
 * @public
 */
export declare const RetractBinStatus: {
    readonly OK: "OK";
    readonly HIGH: "HIGH";
    readonly FULL: "FULL";
    readonly UNKNOWN: "UNKNOWN";
    readonly NOTSUPP: "NOTSUPP";
};
/**
 * @public
 */
export type RetractBinStatus = (typeof RetractBinStatus)[keyof typeof RetractBinStatus];
