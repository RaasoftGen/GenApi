import DeviceBase from './DeviceBase';
import { CardReaderStatusResponse } from '../models';
import { ResetActionType } from '../enums';
import { TLVDataInfo } from '../types';
/**
 * @group API
 * @description This class controls the card reader device in an ATM.
 * To control the card reader, this class consists of event listeners and card reader control commands
 * such as {@link read}, {@link eject}, {@link retract}, etc.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * {@link addListener} before calling a method. Also, when it finishes controlling the device,
 * it should {@link removeListener} to stop receiving responses.
 */
export default class CardReader extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * @description A function to read magnetic strip (MS) and chip information for the inserted card.
     * When a card is inserted, the response {@link MediaInserted} will be sent from the ATM.
     * When reading the card information is completed, the response {@link CardReadCompleted} will be passed
     * to the registered callback function.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    read(timeout?: number): void;
    /**
     * A function to read magnetic strip (MS) information for the inserted card.
     * When a card is inserted, the response {@link MediaInserted} will be sent from the ATM.
     * When reading the card information is completed, the response {@link CardReadCompleted} will be passed to the registered callback function.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    readMS(timeout?: number): void;
    /**
     * A function to read chip information for the inserted card.
     * When a card is inserted, the response {@link MediaInserted} will be sent from the ATM.
     * When reading the card information is completed, the response {@link CardReadCompleted} will be passed to the registered callback function.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    readChip(timeout?: number): void;
    /**
     * A function to eject a card when card reader is `MOTOR` type.
     * Depending on the card taken, {@link CommandReadyCompleted}, {@link EjectCardCompleted}, {@link MediaTaken} response will be sent.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    eject(timeout?: number): void;
    /**
     * A function that retracts a card when a customer does not take the ejected card.
     * As the result of the operation, a {@link RetractCardCompleted} response will be sent.
     */
    retract(): void;
    /**
     * A function to cancel all card reader commands.
     * If the ATM is able to cancel the operation, a response of the running command will be sent with the `Detail` field `CANCELLED`.
     * For example, if {@link read} method is operating, the {@link CardReadCompleted} response will be sent.
     */
    cancel(): void;
    /**
     * A function to reset card reader device.
     * For example, if {@link reset} method is operating, the {@link ResetDeviceCompleted} response will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action: ResetActionType): void;
    /**
     * A function to get the status information of card reader device.
     *
     * @param cardReaderStatusEventCallback - The callback function to receive the {@link CardReaderStatusResponse} as the result of the operation.
     */
    getStatus(cardReaderStatusEventCallback: (obj: CardReaderStatusResponse) => void): void;
    /**
     * A function to initialize chip.
     * As the result of the operation, a {@link ChipInitializeCompleted} response will be sent.
     */
    chipInitialize(): void;
    /**
     * A function to select App.
     * As the result of the operation, a {@link SelectAppCompleted} response will be sent.
     *
     * @param appIndex - (default: 0)
     */
    selectApp(appIndex?: number): void;
    /**
     * A function to SetICCTranData.
     * As the result of the operation, a {@link TransactionResponse} response will be sent.
     *
     * @param currencyType
     * @param transactionType
     * @param currencyExponent
     */
    setICCTransactionData({ currencyType, transactionType, currencyExponent, }: {
        currencyType: string;
        transactionType: string;
        currencyExponent?: string;
    }): void;
    /**
     * A function to EMVOnlineApproval.
     * As the result of the operation, a {@link EMVOnlineApprovalResponse} response will be sent.
     *
     * @param hostResponseCode - Host result, e.g. "3030"
     * @param ARPCData - ARPC data
     * @param issuerScriptData - Issuer script data
     */
    EMVOnlineApproval({ hostResponseCode, ARPCData, issuerScriptData, }: {
        hostResponseCode: string;
        ARPCData: string;
        issuerScriptData: string;
    }): void;
    /**
     * A function to EMVGetTLVData.
     * As the result of the operation, a {@link EMVTLVDataResponse} response will be sent.
     *
     * @param tagIDList - length and value for tag ID.
     */
    EMVGetTLVData(tagIDList: Array<string>): void;
    /**
     * A function to EMVSetTLVData.
     * As the result of the operation, a {@link EMVSetTLVDataResponse} response will be sent.
     *
     * @param tlvDataList - TLVData list.
     */
    EMVSetTLVData(tlvDataList: Array<TLVDataInfo>): void;
    /**
     * A function to EMVGetAcquireCID.
     * As the result of the operation, a {@link EMVGetAcquireCIDRepsponse} response will be sent.
     */
    EMVGetAcquireCID(): void;
    /**
     * A function to EMVSetAcquireCID.
     * As the result of the operation, a {@link EMVSetAcquireCIDRepsponse} response will be sent.
     *
     * @param acquireList
     */
    EMVSetAcquireCID(acquireList: Array<string>): void;
    /**
     * A function to EMVGenerateARQC.
     * As the result of the operation, a {@link EMVGenerateARQCResponse} response will be sent.
     *
     * @param pinBlock
     */
    EMVGenerateARQC(pinBlock: string): void;
}
