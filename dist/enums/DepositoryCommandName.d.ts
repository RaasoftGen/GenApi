import { AbstractCommandName } from './AbstractCommandName';
export declare const DepositoryCommandName: {
    readonly Deposit: "Deposit";
    readonly CancelAccept: "CancelAccept";
    readonly Dispense: "Dispense";
    readonly Retract: "Retract";
};
/**
 * @public
 */
export type DepositoryCommandName = (typeof DepositoryCommandName)[keyof typeof DepositoryCommandName] | AbstractCommandName;
