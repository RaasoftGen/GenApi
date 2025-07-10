import DeviceBase from './DeviceBase';
import { CashAcceptorStatusResponse } from '../models';
import { CashAcceptorResetActionType } from '../enums';
type AcceptParams = Partial<{
    denominationList: Array<number>;
    maxCount: number;
    maxAmount: number;
    insertNoteTimeout: number;
    takeNoteTimeout: number;
}> & {
    currencyID: string;
};
/**
 * @group API
 * @description This class consists of functions related to the deposit transaction such as
 * `{@link acceptCash}`, `{@link verifyConfirmDeposit}`, `{@link commit}`, etc.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using an
 * `{@link addListener}` before calling a method or pass the callback function as a parameter
 * depending on the method. Also, when it finishes controlling the transaction,
 * it should `{@link removeListener}` to stop receiving responses.
 */
export default class CashAcceptor extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * @deprecated Use the `accept` instead.
     * A function that starts a cash deposit transaction, waits for a customer to insert cash, and completes counting the cash.
     * The responses such as `{@link ItemsInserted}`, `{@link ItemsPresented}`, `{@link ItemsTaken}`, `{@link NoteError}`
     * and `{@link AcceptNoteCompleted}`, and `{@link RefuseNoteCompleted}` will be sent.
     *
     * @param denominationList - denomination list (range: 1 ~ 100 / e.g. [1, 2, 3])
     * @param currencyID - Currency Code (e.g. 'USD')
     * @param maxCount - The maxCount to be accepted. (default: 0)
     * @param maxAmount - The maxAmount to be accepted. (default: 0)
     * @param insertNoteTimeout - insert note timeout (default: 30000 / milliseconds)
     * @param takeNoteTimeout - take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
     */
    acceptCash(denominationList: Array<number>, currencyID: string, maxCount?: number, maxAmount?: number, insertNoteTimeout?: number, takeNoteTimeout?: number): void;
    /**
     * @description A function that starts a cash deposit transaction, waits for a customer to insert cash, and completes counting the cash.
     * The responses such as `{@link ItemsInserted}`, `{@link ItemsPresented}`, `{@link ItemsTaken}`,
     * `{@link AcceptNoteCompleted}` and `{@link RefuseNoteCompleted}` will be sent.
     *
     * @param denominationList - denomination list (default: [1, ..., 100], range: 1 ~ 100 / e.g. [1, 2, 3])
     * @param currencyID - Currency Code (e.g. 'USD')
     * @param maxCount - The maxCount to be accepted. (default: 0)
     * @param maxAmount - The maxAmount to be accepted. (default: 0)
     * @param insertNoteTimeout - insert note timeout (default: 30000 / milliseconds)
     * @param takeNoteTimeout - take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
     */
    accept({ denominationList, currencyID, maxCount, maxAmount, insertNoteTimeout, takeNoteTimeout, }: AcceptParams): void;
    /**
     * @deprecated Use the `return` instead.
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `{@link ReturnNoteCompleted}`, `{@link ItemsTaken}` and `{@link ItemsPresented}` will be sent.
     *
     * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
     */
    returnCash(takeNoteTimeout?: number): void;
    /**
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `{@link ReturnNoteCompleted}`, `{@link ItemsTaken}` and `{@link ItemsPresented}` will be sent.
     *
     * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
     */
    return(takeNoteTimeout?: number): void;
    /**
     * @deprecated Use the `retract` instead.
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `{@link RetractNoteCompleted}` are sent.
     */
    retractCash(): void;
    /**
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `{@link RetractNoteCompleted}` are sent.
     */
    retract(): void;
    /**
     * A function that asks you to deposit a cash or check to finish the transaction.
     * Depending on the transaction type, corresponding responses will be sent.
     * If it is a cash deposit, a `{@link CommitNoteCompleted}` will be sent.
     */
    commit(): void;
    /**
     * A function that cancels the requests for accepting cash or checks.
     * A `{@link AcceptNoteCompleted}` response will be sent if the operation can be canceled.
     */
    cancel(): void;
    /**
     * A function to reset cash acceptor device.
     * For example, if `{@link reset}` method is operating, the `{@link ResetDeviceCompleted}` event will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action: CashAcceptorResetActionType): void;
    /**
     * A function to get the status information of cash acceptor device.
     *
     * @param cashAcceptorStatusEventCallback - The callback function to receive the `{@link CashAcceptorStatusResponse}` as the result of the operation.
     */
    getStatus(cashAcceptorStatusEventCallback: (obj: CashAcceptorStatusResponse) => void): void;
}
export {};
