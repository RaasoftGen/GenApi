import DeviceBase from './DeviceBase';
export interface TransactionParams {
    transactionId: string;
    amount?: number;
    currency?: string;
    account?: string;
    reference?: string;
}
export interface TransactionResult {
    transactionId: string;
    status: string;
    amount?: number;
    reference?: string;
    timestamp: string;
}
/**
 * @group API
 * @description This class handles transaction processing and management.
 */
export default class Transaction extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to start a transaction.
     */
    start(params: TransactionParams): void;
    /**
     * A function to commit a transaction.
     */
    commit(transactionId: string): void;
    /**
     * A function to rollback a transaction.
     */
    rollback(transactionId: string): void;
    /**
     * A function to cancel a transaction.
     */
    cancel(transactionId: string): void;
    /**
     * A function to get transaction status.
     */
    getTransactionStatus(transactionId: string): void;
    /**
     * A function to get transaction history.
     */
    getHistory(params?: {
        limit?: number;
        offset?: number;
    }): void;
}
//# sourceMappingURL=Transaction.d.ts.map