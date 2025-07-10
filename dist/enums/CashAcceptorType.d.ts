/**
 * Defines the Card Acceptor type
 *
 * @public
 */
export declare const CashAcceptorType: {
    readonly NONE: "NONE";
    readonly CCIM: "CCIM";
    readonly BRM: "BRM";
};
/**
 * @public
 */
export type CashAcceptorType = (typeof CashAcceptorType)[keyof typeof CashAcceptorType];
