/**
 * Provides the retain BIN status.
 */
export declare const RejectBinStatus: {
    readonly OK: "OK";
    readonly HIGH: "HIGH";
    readonly FULL: "FULL";
    readonly UNKNOWN: "UNKNOWN";
    readonly NOTSUPP: "NOTSUPP";
};
/**
 * Provides the retain BIN status.
 */
export type RejectBinStatus = (typeof RejectBinStatus)[keyof typeof RejectBinStatus];
