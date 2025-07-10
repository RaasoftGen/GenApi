/**
 * Defines the Check Acceptor type
 *
 * @public
 */
export declare const CheckAcceptorType: {
    /**
     * BundleCheckAcceptor
     */
    readonly BCA: "BCA";
    /**
     * BundleCheckAcceptor
     */
    readonly CCIM: "CCIM";
    /**
     * CheckScanner
     */
    readonly CSM: "CSM";
    /**
     * SingleCheckAcceptor
     */
    readonly CSM3: "CSM3";
};
/**
 * @public
 */
export type CheckAcceptorType = (typeof CheckAcceptorType)[keyof typeof CheckAcceptorType];
