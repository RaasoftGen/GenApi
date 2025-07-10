import { AbstractCommandName } from './AbstractCommandName';
export declare const CoinAcceptorCommandName: {
    readonly StartCashIn: "StartCashIn";
    readonly AcceptCash: "AcceptCash";
    readonly StoreCash: "StoreCash";
    readonly RollbackCash: "RollbackCash";
    readonly RetractCash: "RetractCash";
    readonly OpenShutter: "OpenShutter";
    readonly CloseShutter: "CloseShutter";
    readonly OpenSafeDoor: "OpenSafeDoor";
    readonly CancelAccept: "CancelAccept";
    readonly SetCashUnitInfo: "SetCashUnitInfo";
    readonly ResetAndWaitTaken: "ResetAndWaitTaken";
};
/**
 * @public
 */
export type CoinAcceptorCommandName = (typeof CoinAcceptorCommandName)[keyof typeof CoinAcceptorCommandName] | AbstractCommandName;
