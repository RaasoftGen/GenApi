import DeviceBase from './DeviceBase';
import { CashDispenserStatusResponse } from '../models';
import { ResetActionType } from '../enums';
/**
 * @group API
 * @description This class consists of functions related to the withdrawal transaction such as `dispenseByAmount`, `retractNote` etc.
 * Most methods are asynchronous so the caller should register a callback function to receive the corresponding response to those asynchronous functions by using
 * `addListener` before calling a method or pass the callback function as a parameter.
 * Also, when it finishes controlling the transaction, it should `removeListener` to stop receiving responses.
 */
export default class CashDispenser extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function that commands the withdraw to request amount.
     * As the result of the operation, an `ItemsPresented` and `DispenseNoteCompleted` response will be sent.
     * when dispensing cash is completed and the ATM is waiting for a customer to take the cash.
     * When the customer takes the bills, an `ItemsTaken` response is sent.
     * If the customer does not take the cash after a certain amount of time,
     * an `ItemsTaken` is sent with additional information in `Detail` field and cash will be retracted.
     *
     * @param amount - The amount to be dispensed.
     * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
     * @param present - Decide whether immediately present notes after dispense. (default: true)
     */
    dispenseByAmount({ amount, takeNoteTimeout, present }: {
        amount: number;
        takeNoteTimeout?: number;
        present?: boolean;
    }): void;
    /**
     * A function that commands the withdraw to request count array.
     * As the result of the operation, an `ItemsPresented` and `DispenseNoteCompleted` response will be sent.
     * when dispensing cash is completed and the ATM is waiting for a customer to take the cash.
     * When the customer takes the bills, an `ItemsTaken` response is sent.
     * If the customer does not take the cash after a certain amount of time,
     * an `ItemsTaken` is sent with additional information in `Detail` field and cash will be retracted.
     *
     * @param count - The count list.
     * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
     * @param present - Decide whether immediately present notes after dispense. (default: true)
     */
    dispenseByCount({ count, takeNoteTimeout, present }: {
        count: Array<number>;
        takeNoteTimeout?: number;
        present?: boolean;
    }): void;
    /**
     * A function to retract notes dispenser device.
     * For example, if `retractNote` method is operating, the `RetractNoteCompleted` event will be sent.
     */
    retractNote(): void;
    /**
     * A function to reset cash dispenser device.
     * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action: ResetActionType): void;
    /**
     * A function to get the status information of cash dispenser device.
     *
     * @param cashDispenserStatusEventCallback - The callback function to receive the response
     */
    getStatus(cashDispenserStatusEventCallback: (obj: CashDispenserStatusResponse) => void): void;
    /**
     * This function checks whether the desired amount can be dispensed.
     * For example, if `isAmountDispensable` method is operating, the `DenominateNoteCompleted` event will be sent.
     *
     * @param amount - This is the amount to check whether dispensing is possible.
     */
    isAmountDispensable(amount: number): void;
    /**
     * This function checks whether the desired cassette count can be dispensed.
     * For example, if `isCountDispensable` method is operating, the `DenominateNoteCompleted` event will be sent.
     *
     * @param counts - This is to check whether each cassette has a dispensable count.
     */
    isCountDispensable(counts: Array<number>): void;
    /**
     * A function to present dispensed note using dispenseByAmount or dispenseByCounts.
     * For example, if `presentNote` method is operating, the `PresentNoteCompleted` event will be sent.
     *
     * @param timeout - Timeout for take note. (default: 0 millisecond, which means infinity)
     */
    presentNote(timeout?: number): void;
}
//# sourceMappingURL=CashDispenser.d.ts.map