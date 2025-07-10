/**
 * provides status for card hopper
 */
export declare const HopperStatus: {
    readonly OK: "OK";
    readonly FULL: "FULL";
    readonly HIGH: "HIGH";
    readonly LOW: "LOW";
    readonly EMPTY: "EMPTY";
    readonly FATAL: "FATAL";
    readonly MISSING: "MISSING";
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * provides status for card hopper
 */
export type HopperStatus = (typeof HopperStatus)[keyof typeof HopperStatus];
