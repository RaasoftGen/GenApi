import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class handles transaction processing and management.
 */
export default class Transaction extends DeviceBase {
    constructor() {
        super('Transaction');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'TransactionCompleted':
                console.log('Transaction completed:', obj);
                return true;
            case 'TransactionCancelled':
                console.log('Transaction cancelled:', obj);
                return true;
            case 'TransactionFailed':
                console.log('Transaction failed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to start a transaction.
     */
    start(params) {
        this.sendCommand('Start', params);
    }
    /**
     * A function to commit a transaction.
     */
    commit(transactionId) {
        this.sendCommand('Commit', { transactionId });
    }
    /**
     * A function to rollback a transaction.
     */
    rollback(transactionId) {
        this.sendCommand('Rollback', { transactionId });
    }
    /**
     * A function to cancel a transaction.
     */
    cancel(transactionId) {
        this.sendCommand('Cancel', { transactionId });
    }
    /**
     * A function to get transaction status.
     */
    getTransactionStatus(transactionId) {
        this.sendCommand('GetTransactionStatus', { transactionId });
    }
    /**
     * A function to get transaction history.
     */
    getHistory(params = {}) {
        this.sendCommand('GetHistory', params);
    }
}
//# sourceMappingURL=Transaction.js.map