/**
 * Message type sent from host.
 *
 * @public
 */
export declare const ReceivedEventType: {
    readonly NONE: "";
    /**
     * Trasaction Reply
     */
    readonly TRAN_REPLY: "TRAN_REPLY";
    /**
     * Transaction Interactive
     */
    readonly TRAN_INTERTRANRESP: "TRAN_INTERTRANRESP";
};
/**
 * @public
 */
export type ReceivedEventType = (typeof ReceivedEventType)[keyof typeof ReceivedEventType];
