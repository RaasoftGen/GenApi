import { AbstractCommandName } from './AbstractCommandName';
export declare const CheckScannerCommandName: {
    readonly RetainMedia: "RetainMedia";
    readonly EjectMedia: "EjectMedia";
    readonly ProcessForm: "ProcessForm";
    readonly CancelAccept: "CancelAccept";
};
/**
 * @public
 */
export type CheckScannerCommandName = (typeof CheckScannerCommandName)[keyof typeof CheckScannerCommandName] | AbstractCommandName;
