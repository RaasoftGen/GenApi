/**
 * Provides the retain BIN status.
 */
export declare const RetainBinStatus: {
    readonly OK: "OK";
    readonly HIGH: "HIGH";
    readonly FULL: "FULL";
    readonly UNKNOWN: "UNKNOWN";
    readonly NOTSUPP: "NOTSUPP";
};
/**
 * Provides the retain BIN status.
 */
export type RetainBinStatus = (typeof RetainBinStatus)[keyof typeof RetainBinStatus];
