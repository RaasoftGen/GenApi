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
  constructor() {
    super('Transaction');
  }

  protected othersEventCallback(obj: any): boolean {
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
  public start(params: TransactionParams): void {
    this.sendCommand('Start', params);
  }

  /**
   * A function to commit a transaction.
   */
  public commit(transactionId: string): void {
    this.sendCommand('Commit', { transactionId });
  }

  /**
   * A function to rollback a transaction.
   */
  public rollback(transactionId: string): void {
    this.sendCommand('Rollback', { transactionId });
  }

  /**
   * A function to cancel a transaction.
   */
  public cancel(transactionId: string): void {
    this.sendCommand('Cancel', { transactionId });
  }

  /**
   * A function to get transaction status.
   */
  public getTransactionStatus(transactionId: string): void {
    this.sendCommand('GetTransactionStatus', { transactionId });
  }

  /**
   * A function to get transaction history.
   */
  public getHistory(params: { limit?: number; offset?: number } = {}): void {
    this.sendCommand('GetHistory', params);
  }
}
