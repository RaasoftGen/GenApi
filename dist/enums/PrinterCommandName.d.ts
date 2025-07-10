import { AbstractCommandName } from './AbstractCommandName';
export declare const PrinterCommandName: {
    readonly ControlMedia: "ControlMedia";
    readonly EjectAndWaitTaken: "EjectAndWaitTaken";
    readonly PrintForm: "PrintForm";
    readonly PrintImage: "PrintImage";
    readonly PrintBarcode: "PrintBarcode";
    readonly ReadForm: "ReadForm";
    readonly ReadImage: "ReadImage";
    readonly SendRawData: "SendRawData";
    readonly GetMediaExtents: "GetMediaExtents";
    readonly ResetRetractCount: "ResetRetractCount";
    readonly QueryFormList: "QueryFormList";
    readonly QueryMediaList: "QueryMediaList";
    readonly QueryForm: "QueryForm";
    readonly QueryField: "QueryField";
    readonly QueryMedia: "QueryMedia";
    readonly Retract: "Retract";
    readonly DispensePaper: "DispensePaper";
    readonly CancelWaitForMediaTaken: "CancelWaitForMediaTaken";
    readonly CancelAccept: "CancelAccept";
};
/**
 * @public
 */
export type PrinterCommandName = (typeof PrinterCommandName)[keyof typeof PrinterCommandName] | AbstractCommandName;
