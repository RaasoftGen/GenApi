import DeviceBase from './DeviceBase';
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
    constructor() {
        super('CashAcceptor');
    }
    othersEventCallback(obj) {
        // Handle cash acceptor specific events
        switch (obj.Command) {
            case 'ItemsInserted':
                console.log('Cash inserted by customer:', obj);
                return true;
            case 'ItemsPresented':
                console.log('Cash presented to customer:', obj);
                return true;
            case 'ItemsTaken':
                console.log('Cash taken by customer:', obj);
                return true;
            case 'AcceptNoteCompleted':
                console.log('Accept cash operation completed:', obj);
                return true;
            case 'RefuseNoteCompleted':
                console.log('Refuse cash operation completed:', obj);
                return true;
            case 'ReturnNoteCompleted':
                console.log('Return cash operation completed:', obj);
                return true;
            case 'RetractNoteCompleted':
                console.log('Retract cash operation completed:', obj);
                return true;
            case 'CommitNoteCompleted':
                console.log('Commit operation completed:', obj);
                return true;
            case 'NoteError':
                console.log('Note error occurred:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * @deprecated Use the `accept` instead.
     * A function that starts a cash deposit transaction, waits for a customer to insert cash, and completes counting the cash.
     * The responses such as `ItemsInserted`, `ItemsPresented`, `ItemsTaken`, `NoteError`
     * and `AcceptNoteCompleted`, and `RefuseNoteCompleted` will be sent.
     */
    acceptCash(denominationList, currencyID, maxCount = 0, maxAmount = 0, insertNoteTimeout = 30000, takeNoteTimeout = 0) {
        this.accept({
            denominationList,
            currencyID,
            maxCount,
            maxAmount,
            insertNoteTimeout,
            takeNoteTimeout
        });
    }
    /**
     * A function that starts a cash deposit transaction, waits for a customer to insert cash, and completes counting the cash.
     * The responses such as `ItemsInserted`, `ItemsPresented`, `ItemsTaken`,
     * `AcceptNoteCompleted` and `RefuseNoteCompleted` will be sent.
     */
    accept({ denominationList = Array.from({ length: 100 }, (_, i) => i + 1), currencyID, maxCount = 0, maxAmount = 0, insertNoteTimeout = 30000, takeNoteTimeout = 0 }) {
        this.sendCommand('AcceptCash', {
            denominationList,
            currencyID,
            maxCount,
            maxAmount,
            insertNoteTimeout,
            takeNoteTimeout
        });
    }
    /**
     * @deprecated Use the `return` instead.
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `ReturnNoteCompleted`, `ItemsTaken` and `ItemsPresented` will be sent.
     */
    returnCash(takeNoteTimeout = 0) {
        this.return(takeNoteTimeout);
    }
    /**
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `ReturnNoteCompleted`, `ItemsTaken` and `ItemsPresented` will be sent.
     */
    return(takeNoteTimeout = 0) {
        this.sendCommand('ReturnCash', { takeNoteTimeout });
    }
    /**
     * @deprecated Use the `retract` instead.
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `RetractNoteCompleted` are sent.
     */
    retractCash() {
        this.retract();
    }
    /**
     * A function that returns the cash to a customer and waits for the customer to take the cash.
     * As the result of the operation, `RetractNoteCompleted` are sent.
     */
    retract() {
        this.sendCommand('RetractCash');
    }
    /**
     * A function that asks you to deposit a cash or check to finish the transaction.
     * Depending on the transaction type, corresponding responses will be sent.
     * If it is a cash deposit, a `CommitNoteCompleted` will be sent.
     */
    commit() {
        this.sendCommand('CommitCash');
    }
    /**
     * A function that cancels the requests for accepting cash or checks.
     * A `AcceptNoteCompleted` response will be sent if the operation can be canceled.
     */
    cancel() {
        this.sendCommand('CancelAccept');
    }
    /**
     * A function to reset cash acceptor device.
     * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
     */
    reset(action) {
        this.sendCommand('ResetDevice', { action });
    }
    /**
     * A function to get the status information of cash acceptor device.
     */
    getStatus(cashAcceptorStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'CashAcceptorStatusResponse') {
                cashAcceptorStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=CashAcceptor.js.map