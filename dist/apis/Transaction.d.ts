import DeviceBase from './DeviceBase';
import { TransactionStartRequest } from '../models';
import { LanguageType, TransactionType } from '../enums';
/**
 * @group API
 * @description This class is consitists of functinos related to the transaction.
 */
export default class Transaction extends DeviceBase {
    #private;
    constructor(name?: string);
    protected othersEventCallback(obj: any): boolean;
    subscribeTransactionStartRequest(transactionStartRequestCallback: (obj: TransactionStartRequest) => void): void;
    /**
     * A function to inform the ATM that transaction started.
     * {@link TransactionStartResponse} event will be sent in response to this function.
     *
     * @param type - Transaction type is `None NDC` or `NDC`
     * @param name - Transaction name is specific string.
     * @param selectedLanguage - Language
     */
    sendTransactionStart(type?: TransactionType, name?: string, selectedLanguage?: LanguageType): void;
    /**
     * A function to inform the ATM that transaction ended.
     * `{@link TransactionEndResponse}` event will be sent in response to this function.
     */
    sendTransactionEnd(): void;
    /**
     * @remarks Internal
     * @description Request to transmit NDC message from frontend to core.
     * `{@link RecvFromNDCHostResponse}` event will be sent in response to this function.
     */
    sendNDCHostRequest(): void;
    /**
     * @remarks Internal
     * Request move to close state.
     * [[NDCCloseStateResponse]] event will be sent in response to this function.
     */
    sendNDCCloseStateRequest(): void;
    /**
     * A function to clear caches.
     * No callback is required in response to this function.
     */
    requestClearCache(): void;
}
