/**
 * Provides the Acceptor status.
 */
export declare const AcceptorStatus: {
    readonly OK: "OK";
    readonly NOACCEPT: "NOACCEPT";
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * Provides the Acceptor status.
 */
export type AcceptorStatus = (typeof AcceptorStatus)[keyof typeof AcceptorStatus];
