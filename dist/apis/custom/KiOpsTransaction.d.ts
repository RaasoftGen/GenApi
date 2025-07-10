import DeviceBase from '../DeviceBase';
/**
 * @group API
 * @description Support only KiOpsPay
 */
export default class KiOpsPayTransaction extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function that gets the KiOpsPay api token from ATM.
     * Response to {@link TransactionResponse}
     */
    sendAdviceSettlement(transactionType: string): void;
}
