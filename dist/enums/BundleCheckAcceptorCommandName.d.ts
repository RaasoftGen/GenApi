import { AbstractCommandName } from './AbstractCommandName';
export declare const BundleCheckAcceptorCommandName: {
    readonly MediaIn: "MediaIn";
    readonly CancelMediaIn: "CancelMediaIn";
    readonly MediaInEnd: "MediaInEnd";
    readonly MediaInRollback: "MediaInRollback";
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
};
/**
 * @public
 */
export type BundleCheckAcceptorCommandName = (typeof BundleCheckAcceptorCommandName)[keyof typeof BundleCheckAcceptorCommandName] | AbstractCommandName;
