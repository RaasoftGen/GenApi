import { CashDispenserStatusResponse } from '../models';
import DeviceBase from './DeviceBase';
import { CashDispenserResetActionType } from '../enums';
/**
 * @group API
 * @description This class consists of functions related to the withdrawal transaction such as `{@link dispenseByAmount}` , `{@link retractNote}`  etc.
 * Most methods are asynchronous so the caller should register a callback function to receive the corresponding response to those asynchronous functions by using
 * `{@link addListener}`  before calling a method or pass the callback function as a parameter.
 * Also, when it finishes controlling the transaction, it should `{@link removeListener}`  to stop receiving responses.
 */
export default class CashDispenser extends DeviceBase {
    #private;
    constructor();
    /**
     * A function that receives and dispatches a withdrawal event consisting of a JSON string.
     */
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function that commands the withdraw to request amount.
     * As the result of the operation, an `{@link ItemsPresented}`  and `{@link DispenseNoteCompleted}`  response will be sent.
     * when dispensing cash is completed and the ATM is waiting for a customer to take the cash.
     * When the customer takes the bills, an `{@link ItemsTaken}`  response is sent.
     * If the customer does not take the cash after a certain amount of time,
     * an `{@link ItemsTaken}`  is sent with additional information in `Detail`  field and cash will be retracted.
     *
     * @param amount - The amount to be dispensed.
     * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
     * @param present - Decide whether immediately present notes after dispense. (default: true)
     */
    dispenseByAmount({ amount, takeNoteTimeout, present, }: {
        amount: number;
        takeNoteTimeout?: number;
        present?: boolean;
    }): void;
    /**
     * A function that commands the withdraw to request count array.
     * As the result of the operation, an `{@link ItemsPresented}`  and `{@link DispenseNoteCompleted}`  response will be sent.
     * when dispensing cash is completed and the ATM is waiting for a customer to take the cash.
     * When the customer takes the bills, an `{@link ItemsTaken}`  response is sent.
     * If the customer does not take the cash after a certain amount of time,
     * an `{@link ItemsTaken}`  is sent with additional information in `Detail` field and cash will be retracted.
     *
     * @param count - The count list.
     * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
     * @param present - Decide whether immediately present notes after dispense. (default: true)
     */
    dispenseByCount({ count, takeNoteTimeout, present, }: {
        count: Array<number>;
        takeNoteTimeout?: number;
        present?: boolean;
    }): void;
    /**
     * A function to retract notes dispenser device.
     * For example, if `{@link retractNote}`  method is operating, the `{@link RetractNoteCompleted}` event will be sent.
     */
    retractNote(): void;
    /**
     * A function to reset cash dispenser device.
     * For example, if `{@link reset}`  method is operating, the `{@link ResetDeviceCompleted}` event will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action: CashDispenserResetActionType): void;
    /**
     * A function to get the status information of cash dispenser device.
     *
     * @param cashDispenserStatusEventCallback - The callback function to receive the `{@link CashDispenserStatusResponse} as the result of the operation.
     */
    getStatus(cashDispenserStatusEventCallback: (obj: CashDispenserStatusResponse) => void): void;
    /**
     * This function checks whether the desired amount can be dispensed.
     * For example, if `{@link isAmountDispensable}` method is operating, the `{@link DenominateNoteCompleted}` event will be sent.
     *
     * @param amount - This is the amount to check whether dispensing is possible.
     */
    isAmountDispensable(amount: number): void;
    /**
     * This function checks whether the desired cassete count can be dispensed.
     * For example, if `{@link isCountDispensable}` method is operating, the `{@link DenominateNoteCompleted}` event will be sent.
     *
     * @param counts - This is to check whether each cassette has a dispensable count.
     */
    isCountDispensable(counts: Array<number>): void;
    /**
     * A function to present dispensed note using dispenseByAmount or dispenseByCounts..
     * For example, if `{@link presentNote}` method is operating, the `{@link PresentNoteCompleted}` event will be sent.
     *
     * @param timeout - Timeout for take note. (default: 0 millisecond, which means infinity)
     */
    presentNote(timeout?: number): void;
}
