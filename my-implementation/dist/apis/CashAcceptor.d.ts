import DeviceBase from './DeviceBase';
import { CashAcceptorStatusResponse } from '../models';
import { ResetActionType } from '../enums';
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
 * `accept`, `verifyConfirmDeposit`, `commit`, etc.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using an
 * `addListener` before calling a method or pass the callback function as a parameter
 * depending on the method. Also, when it finishes controlling the transaction,
 * it should `removeListener` to stop receiving responses.
 */
export default class CashAcceptor extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * @deprecated Use the `accept` instead.
     * A function that starts a cash deposit transaction, waits for a customer to insert cash, and completes counting the cash.
     * The responses such as `ItemsInserted`, `ItemsPresented`, `ItemsTaken`, `NoteError`
     * and `AcceptNoteCompleted`, and `RefuseNoteCompleted` will be sent.
     */
    acceptCash(denominationList: Array<number>, currencyID: string, maxCount?: number, maxAmount?: number, insertNoteTimeout?: number, takeNoteTimeout?: number): void;
    /**
     * A function that starts a cash deposit transaction, waits for a customer to insert cash, and completes counting the cash.
     * The responses such as `ItemsInserted`, `ItemsPresented`, `ItemsTaken`,
     * `AcceptNoteCompleted` and `RefuseNoteCompleted` will be sent.
     */
    accept({ denominationList, currencyID, maxCount, maxAmount, insertNoteTimeout, takeNoteTimeout }: AcceptParams): void;
    /**
     * @deprecated Use the `return` instead.
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `ReturnNoteCompleted`, `ItemsTaken` and `ItemsPresented` will be sent.
     */
    returnCash(takeNoteTimeout?: number): void;
    /**
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `ReturnNoteCompleted`, `ItemsTaken` and `ItemsPresented` will be sent.
     */
    return(takeNoteTimeout?: number): void;
    /**
     * @deprecated Use the `retract` instead.
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `RetractNoteCompleted` are sent.
     */
    retractCash(): void;
    /**
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `RetractNoteCompleted` are sent.
     */
    retract(): void;
    /**
     * A function that asks you to deposit a cash or check to finish the transaction.
     * Depending on the transaction type, corresponding responses will be sent.
     * If it is a cash deposit, a `CommitNoteCompleted` will be sent.
     */
    commit(): void;
    /**
     * A function that cancels the requests for accepting cash or checks.
     * A `AcceptNoteCompleted` response will be sent if the operation can be canceled.
     */
    cancel(): void;
    /**
     * A function to reset cash acceptor device.
     * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
     */
    reset(action: ResetActionType): void;
    /**
     * A function to get the status information of cash acceptor device.
     */
    getStatus(cashAcceptorStatusEventCallback: (obj: CashAcceptorStatusResponse) => void): void;
}
export {};
//# sourceMappingURL=CashAcceptor.d.ts.map