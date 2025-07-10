/**
 * position status of the reject position of the item acceptor
 */
export declare const RejectPositionStatus: {
    readonly OK: "OK";
    readonly LOW: "LOW";
    readonly EMPTY: "EMPTY";
    readonly NOTEMPTY: "NOTEMPTY";
    readonly FULL: "FULL";
    readonly NOTSUPP: "NOTSUPP";
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * position status of the reject position of the item acceptor
 */
export type RejectPositionStatus = (typeof RejectPositionStatus)[keyof typeof RejectPositionStatus];
