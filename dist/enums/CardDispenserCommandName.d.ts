import { AbstractCommandName } from './AbstractCommandName';
export declare const CardDispenserCommandName: {
    readonly Dispense: "Dispense";
    readonly Eject: "Eject";
    readonly Retain: "Retain";
    readonly EjectMediaAndWaitTaken: "EjectMediaAndWaitTaken";
};
/**
 * @public
 */
export type CardDispenserCommandName = (typeof CardDispenserCommandName)[keyof typeof CardDispenserCommandName] | AbstractCommandName;
