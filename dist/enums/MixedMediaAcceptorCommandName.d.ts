import { AbstractCommandName } from './AbstractCommandName';
export declare const MixedMediaAcceptorCommandName: {
    readonly MediaIn: "MediaIn";
    readonly CancelMediaIn: "CancelMediaIn";
    readonly MediaInEnd: "MediaInEnd";
    readonly MediaInRollback: "MediaInRollback";
    readonly RollbackCashAndMediaInEnd: "RollbackCashAndMediaInEnd";
    readonly RollbackCheckAndMediaInEnd: "RollbackCheckAndMediaInEnd";
    readonly ReadImage: "ReadImage";
    readonly SetDestination: "SetDestination";
    readonly PresentMedia: "PresentMedia";
    readonly RetractMedia: "RetractMedia";
    readonly PrintText: "PrintText";
    readonly SetMediaBinInfo: "SetMediaBinInfo";
    readonly SetGuideLight: "SetGuideLight";
    readonly GetNextItem: "GetNextItem";
    readonly ActionItem: "ActionItem";
    readonly ExpelMedia: "ExpelMedia";
    readonly GetImageAfterPrint: "GetImageAfterPrint";
    readonly AcceptItem: "AcceptItem";
    readonly RefuseItem: "RefuseItem";
    readonly ReplenishToner: "ReplenishToner";
    readonly ReplenishInk: "ReplenishInk";
    readonly PowerSaveControl: "PowerSaveControl";
    readonly ResetAndWaitTaken: "ResetAndWaitTaken";
    readonly SetCashUnitInfo: "SetCashUnitInfo";
};
/**
 * @public
 */
export type MixedMediaAcceptorCommandName = (typeof MixedMediaAcceptorCommandName)[keyof typeof MixedMediaAcceptorCommandName] | AbstractCommandName;
