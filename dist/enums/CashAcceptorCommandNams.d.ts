import { AbstractCommandName } from './AbstractCommandName';
export declare const CashAcceptorCommandNams: {
    readonly StartCashIn: "StartCashIn";
    readonly StartCashInEx: "StartCashInEx";
    readonly AcceptCash: "AcceptCash";
    readonly StoreCash: "StoreCash";
    readonly RollbackCash: "RollbackCash";
    readonly RetractCash: "RetractCash";
    readonly OpenShutter: "OpenShutter";
    readonly CloseShutter: "CloseShutter";
    readonly OpenSafeDoor: "OpenSafeDoor";
    readonly CancelAccept: "CancelAccept";
    readonly CreateSignature: "CreateSignature";
    readonly GetSignature: "GetSignature";
    readonly SetCashUnitInfo: "SetCashUnitInfo";
    readonly ResetAndWaitTaken: "ResetAndWaitTaken";
    readonly SetGuideLight: "SetGuideLight";
};
/**
 * @public
 */
export type CashAcceptorCommandNams = (typeof CashAcceptorCommandNams)[keyof typeof CashAcceptorCommandNams] | AbstractCommandName;
