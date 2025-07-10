import { AbstractCommandName } from './AbstractCommandName';
export declare const CashDispenserCommandName: {
    readonly Denominate: "Denominate";
    readonly Dispense: "Dispense";
    readonly RobberyDispense: "RobberyDispense";
    readonly Present: "Present";
    readonly PresentCashAndWaitTaken: "PresentCashAndWaitTaken";
    readonly DispensePresentAndWaitCashTaken: "DispensePresentAndWaitCashTaken";
    readonly Reject: "Reject";
    readonly Retract: "Retract";
    readonly OpenShutter: "OpenShutter";
    readonly CloseShutter: "CloseShutter";
    readonly OpenSafeDoor: "OpenSafeDoor";
    readonly Calibrate: "Calibrate";
    readonly EmptyCassettes: "EmptyCassettes";
    readonly TestCashUnit: "TestCashUnit";
    readonly Cancel: "Cancel";
};
/**
 * @public
 */
export type CashDispenserCommandName = (typeof CashDispenserCommandName)[keyof typeof CashDispenserCommandName] | AbstractCommandName;
