import { AbstractCommandName } from './AbstractCommandName';
export declare const FingerPrintCommandName: {
    readonly AcquireFinger: "AcquireFinger";
    readonly StopAcquireFinger: "StopAcquireFinger";
};
/**
 * @public
 */
export type FingerPrintCommandName = (typeof FingerPrintCommandName)[keyof typeof FingerPrintCommandName] | AbstractCommandName;
