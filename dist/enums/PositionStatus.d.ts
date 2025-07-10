/**
 * position status of the input position of the item acceptor
 */
export declare const PositionStatus: {
    readonly EMPTY: "EMPTY";
    readonly NOTEMPTY: "NOTEMPTY";
    readonly NOTSUPP: "NOTSUPP";
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * position status of the input position of the item acceptor
 */
export type PositionStatus = (typeof PositionStatus)[keyof typeof PositionStatus];
