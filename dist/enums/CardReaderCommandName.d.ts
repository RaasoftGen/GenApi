import { AbstractCommandName } from './AbstractCommandName';
export declare const CardReaderCommandName: {
    readonly ReadForm: "ReadForm";
    readonly ReadRawData: "ReadRawData";
    readonly ReadAvailableRawData: "ReadAvailableRawData";
    readonly CancelAccept: "CancelAccept";
    readonly EjectMedia: "EjectMedia";
    readonly EjectMediaAndWaitTaken: "EjectMediaAndWaitTaken";
    readonly WaitMediaTaken: "WaitMediaTaken";
    readonly RetainMedia: "RetainMedia";
    readonly ResetRetainCount: "ResetRetainCount";
    readonly WriteForm: "WriteForm";
    readonly WriteRawData: "WriteRawData";
    readonly ChipIO: "ChipIO";
    readonly ChipPower: "ChipPower";
    readonly EMVClessPerformTransaction: "EMVClessPerformTransaction";
    readonly EMVClessConfigure: "EMVClessConfigure";
};
/**
 * @public
 */
export type CardReaderCommandName = (typeof CardReaderCommandName)[keyof typeof CardReaderCommandName] | AbstractCommandName;
