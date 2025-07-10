import { AbstractCommandName } from './AbstractCommandName';
export declare const CoinDispenserCommaneName: {
    readonly Denominate: "Denominate";
    readonly DispenseAndPresent: "DispenseAndPresent";
    readonly DispenseExAndPresent: "DispenseExAndPresent";
    readonly Present: "Present";
    readonly PresentCashAndWaitTaken: "PresentCashAndWaitTaken";
    readonly Reject: "Reject";
    readonly Retract: "Retract";
    readonly OpenShutter: "OpenShutter";
    readonly CloseShutter: "CloseShutter";
};
/**
 * @public
 */
export type CoinDispenserCommaneName = (typeof CoinDispenserCommaneName)[keyof typeof CoinDispenserCommaneName] | AbstractCommandName;
