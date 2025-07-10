import Transaction from '../Transaction';
import { Denomination } from '../../types';
/**
 * This class is consitists of functinos related to the transaction,
 * such as BCA server API of the transaction.
 * It is also the parent class of the [[Transaction]].
 * @public
 */
export default class BCATransaction extends Transaction {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * Is used to rotate API Encryption Key based on BCA Security Documentation.
     * @public
     * @param counter - A 3-digit number that represents the sequence of transaction requested to BCA server.
     */
    sendEncryptKeyRequest(counter: number): void;
    /**
     * Is used to rotate API Public Key based on BCA Security Documentation
     * @public
     * @param counter - A 3-digit number that represents the sequence of transaction requested to BCA server.
     */
    sendPublicKeyRequest(counter: number): void;
    /** Is used to authenticate the card, verify the entered passcode, retrieve card information details
     * (customer name, cardholder name, account list, vendor name, and card type), and terminal configuration
     *
     * @public
     * @param counter - A 3-digit number that represents the sequence of transaction requested to BCA server.
     * @param cardNumber - card number
     * @param passcode - card password
     */
    sendValidateCardRequest(counter: number, cardNumber: string, passcode: string): void;
    /**
     * Is used to replace the default or generated passcode to a newly entered one.
     * @public
     * @param counter - A 3-digit number that represents the sequence of transaction requested to BCA server.
     * @param cardNumber - card number
     * @param newPasscode - new card password
     * @param oldPasscode - old card password
     */
    sendUpdatePasscodeRequest(counter: number, cardNumber: string, newPasscode: string, oldPasscode: string): void;
    /**
     *
     * @public
     * @param counter - A 3-digit number that represents the sequence of transaction requested to BCA server.
     * @param cardNumber - card number
     */
    sendResetPasscodeRequest(counter: number, cardNumber: string): void;
    /**
     * Is used to record a single request to the host after money has been deposited into the terminal.
     * @public
     * @param counter - A 3-digit number that represents the sequence of transaction requested to BCA server.
     * @param cardNumber - card number
     * @param accountNumber - card password
     * @param totalAmount - total amount
     * @param batchNumber -
     * @param denomination - denomination
     */
    sendSingleDepositTransactionRequest(counter: number, cardNumber: string, accountNumber: string, totalAmount: string, batchNumber: string, denomination: Array<Denomination>): void;
    /**
     * Is used to compile a group of single deposit transactions and initiate the final request to the host to be processed.
     * @public
     * @param counter - A 3-digit number that represents the sequence of transaction requested to BCA server.
     * @param cardNumber - card number
     * @param accountNumber - account number
     * @param totalAmount - total amount
     * @param batchNumber -
     * @param description - description
     * @param denomination - denomination
     */
    sendBundleDepositTransactionRequest(counter: number, cardNumber: string, accountNumber: string, totalAmount: string, batchNumber: string, description: string, denomination: Array<Denomination>): void;
    /**
     * Is used to obtain last transaction data of a card by a specific account number and terminal
     * @public
     * @param counter - A 3-digit number that represents the sequence of transaction requested to BCA server.
     * @param cardNumber - card number
     * @param accountNumber - account number
     */
    sendRetrieveLatestTransactionRequest(counter: number, cardNumber: string, accountNumber: string): void;
    /**
     * Is used to clear and reset the terminal cassette’s value
     * @public
     * @param counter - A 3-digit number that represents the sequence of transaction requested to BCA server.
     * @param cardNumber - card number
     * @param totalAmount - total amount
     * @param denomination - denomination
     */
    sendReplenishmentRequest(counter: number, cardNumber: string, totalAmount: string, denomination: Array<Denomination>): void;
    /**
     * Is used to bca server health check
     * @public
     */
    sendHealthCheck(): void;
    /**
     * Is used to get Failed message File List
     * @public
     */
    sendGetFileList({ directory, isRecurse, }: {
        directory: string;
        isRecurse?: boolean;
    }): void;
    /**
     * Is used to get Failed message File List
     * @public
     */
    registerCashUnitEvent(): void;
    /**
     * Is used to get Failed message File List
     * @public
     */
    unRegisterCashUnitEvent(): void;
}
