import Transaction from '../Transaction';
/**
 * This class is consitists of functinos related to the transaction,
 * such as ATB of the transaction.
 * It is also the parent class of the [[Transaction]].
 * @public
 */
export default class ATBTransaction extends Transaction {
    constructor();
    othersEventCallback(obj: any): boolean;
    /**
     *
     * @public
     * @param fileName
     * @param data
     */
    sendWriteTransactionResultRequest(fileName: string, data: string): void;
}
