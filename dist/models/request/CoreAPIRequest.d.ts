import AbstractRequest from './AbstractRequest';
import { CashAcceptorResetActionType, CashDispenserResetActionType, LanguageType, ResetActionType, TransactionType, FlashRate, VoiceGuidanceActionType, CardTrackType, CameraType } from '../../enums';
import { SectionInfo, TLVDataInfo, AIDInfo } from '../../types';
/**
 * This class is used to request starting transaction.
 * Request about `{@link Transaction.sendTransactionStart}` function.
 */
export declare class TransactionStartMessage extends AbstractRequest {
    /**
     * Transaction type is Non NDC or NDC.
     * (e.g NDC or empty string)
     */
    TransactionType: TransactionType;
    /**
     * Transaction name for NDC Transaction.
     * (e.g Withdrawal, Deposit...)
     */
    TransactionName?: string;
    /**
     * Language type for NDC Transaction
     * (e.g en, vi)
     */
    SelectedLanguage?: LanguageType;
    constructor(transactionType: TransactionType, transactionName?: string, selectedLanguage?: LanguageType);
}
/**
 * Request about `{@link CardDispenser.dispense}` function.
 */
export declare class CardDispenserDispenseParameter extends AbstractRequest {
    /**
     *
     */
    HopperNumber: string;
    /**
     *
     */
    Timeout?: string;
    constructor(hopperNumber: string, timeout?: string);
}
/**
 * Request about `{@link CardDispenser.printCard}` function.
 */
export declare class CardDispenserPrintCardParameter extends AbstractRequest {
    /**
     * Line1
     */
    PrintData: string;
    /**
     * Line2
     */
    PrintData2?: string;
    constructor(printData: string, printData2?: string);
}
/**
 * Request about `{@link CardDispenser.retractCard}` function.
 */
export declare class CardDispenserRetractParameter extends AbstractRequest {
    /**
     *
     */
    HopperNumber: string | null;
    constructor(binNumber?: string);
}
/**
 * Request about `{@link PinPad.inputPIN}` function.
 */
export declare class PinEntryInputPinParameter extends AbstractRequest {
    /**
     *
     */
    MinDigits: string;
    MaxDigits: string;
    IsAutoEnd: boolean;
    Timeout?: string;
    constructor(minDigits: string, maxDigits: string, isAutoEnd: boolean, timeout?: string);
}
/**
 * Request about `{@link PinPad.inputData}` function.
 */
export declare class PinEntryInputDataParameter extends AbstractRequest {
    /**
     *
     */
    MaxDigits: string;
    ActiveKeys: string;
    TerminateKeys: string;
    Timeout?: string;
    constructor(maxDigits: string, activeKeys: string, terminateKeys: string, timeout?: string);
}
/**
 * Request about `setGuideLight` function of all devices.
 */
export declare class SetGuideLightParameter extends AbstractRequest {
    /**
     * Index
     */
    FlashRate: FlashRate;
    constructor(FlashRate: FlashRate);
}
/**
 * Request about `{@link CashDispenser.dispenseByAmount}` function.
 */
export declare class DispenseNoteDataParameter extends AbstractRequest {
    /**
     * The amount to be dispensed.
     */
    Amount: string;
    /**
     * Number of bills to dispense for each cassette
     */
    Count: Array<number>;
    /**
     * Take note timeout
     */
    TakeNoteTimeout: number;
    /**
     * Decide whether immediately present notes after dispense
     */
    Present: boolean;
    constructor(amount: string, count: Array<number>, takeNoteTimeout: number, present: boolean);
}
/**
 * Request about `{@link DocumentPrinter.printImage}` function.
 */
export declare class PrintImageParameter extends AbstractRequest {
    ImageData: string;
    Timeout: string;
    constructor(imageData: string, timeout: string);
}
/**
 * Request about `reset` function of all devices.
 */
export declare class DeviceResetParameter extends AbstractRequest {
    Action: '' | ResetActionType | CashAcceptorResetActionType | CashDispenserResetActionType;
    constructor(action?: '' | ResetActionType | CashAcceptorResetActionType | CashDispenserResetActionType);
}
/**
 * Request about some function with setting timeout
 */
export declare class CommandTimeoutParamter extends AbstractRequest {
    Timeout?: string;
    constructor(timeout?: string);
}
/**
 * Request about `{@link CardReader.read}`, `{@link CardReader.readMS}`, `{@link CardReader.readChip}`,
 * `{@link RFIDReader.read}` and `{@link RFIDReader.readWithEMV}` functions.
 */
export declare class ReadCardParamter extends AbstractRequest {
    Tracks: CardTrackType;
    Timeout?: string;
    constructor(tracks: CardTrackType, timeout?: string);
}
/**
 * Request about `{@link CashAcceptor.accept}` and `{@link CashAcceptor.acceptCash}` functions.
 */
export declare class AcceptNoteParameter extends AbstractRequest {
    DenominationList: Array<number>;
    CurrencyID: string;
    MaxCount?: number;
    MaxAmount?: number;
    InsertNoteTimeout?: number;
    TakeNoteTimeout?: number;
    constructor(denominationList: Array<number>, currencyID: string, maxCount?: number, maxAmount?: number, insertNoteTimeout?: number, takeNoteTimeout?: number);
}
/**
 * Request about `{@link CashAcceptor.return}` and `{@link CashAcceptor.returnCash}` functions.
 */
export declare class ReturnNoteParameter extends AbstractRequest {
    TakeNoteTimeout?: number;
    constructor(takeNoteTimeout?: number);
}
/**
 * Request about `{@link ReceiptPrinter.print}` function.
 */
export declare class PrintReceiptRequest extends AbstractRequest {
    /**
     * If this flag is true, eject is also performed.
     */
    EjectMedia: boolean;
    PrintData: Array<string>;
    HeaderImageData?: string;
    TaillmageData?: string;
    SkipPrintHeaderImage?: boolean;
    constructor(ejectMedia: boolean, printData: Array<string>, headerImageData?: string, taillmageData?: string, skipPrintHeaderImage?: boolean);
}
/**
 * Request about `{@link ReceiptPrinter.eject}` function.
 */
export declare class EjectMediaRequest extends AbstractRequest {
}
/**
 * Request about `{@link Common.writeMDBJournal}` function.
 */
export declare class WriteMDBJounalDataParameter extends AbstractRequest {
    TransactionType: string;
    Contents: Array<string>;
    constructor(transactionType: string, contents: Array<string>);
}
/**
 * Request about `{@link VoiceGuidance.play}` function.
 */
export declare class VoiceGuidancePlayParameter extends AbstractRequest {
    Action: VoiceGuidanceActionType;
    PlayData: string;
    constructor(action: VoiceGuidanceActionType, playData?: string);
}
/**
 * Request about `{@link Common.getSectionDataList}` function.
 */
export declare class SectionDataRequestParameter extends AbstractRequest {
    Section: Array<string>;
    SectionInfoList?: Array<SectionInfo>;
    constructor(section: Array<string>);
}
/**
 * Request about `{@link Common.setSectionDataList}` function.
 */
export declare class SectionDataSetRequestParameter extends AbstractRequest {
    SectionInfoList: Array<SectionInfo>;
    constructor(sectionInfoList: Array<SectionInfo>);
}
/**
 * Request about `{@link Common.updateEMVAIDInfoParameter}` function.
 */
export declare class UpdateEMVAIDInfoParameter extends AbstractRequest {
    CountryCode: string;
    TerminalType: string;
    TerminalCapability: string;
    FloorLimit: string;
    ApplicationVersion: string;
    AIDInfos: Array<AIDInfo>;
    constructor(countryCode: string, terminalType: string, terminalCapability: string, floorLimit: string, applicationVersion: string, aIDInfos: Array<AIDInfo>);
}
/**
 * Request about `{@link CardReader.selectApp}` function.
 */
export declare class SelectAppParameter extends AbstractRequest {
    AppIndex?: number;
    constructor(appIndex?: number);
}
/**
 * Request about `{@link CardReader.setICCTransactionData}` function.
 */
export declare class SetICTranDataParameter extends AbstractRequest {
    CurrencyType: string;
    TransactionType: string;
    CurrencyExponent: string;
    constructor(currencyType: string, transactionType: string, currencyExponent?: string);
}
/**
 * Request to transmit NDC message from frontend to core.
 * Request about `{@link Transaction.sendNDCHostRequest}` function.
 */
export declare class NDCHostSendRequest extends AbstractRequest {
    constructor();
}
/**
 * Request move to close state.
 * Request about `{@link Transaction.sendNDCCloseStateRequest}` function.
 */
export declare class NDCCloseStateRequest extends AbstractRequest {
    constructor();
}
/**
 * Request about `{@link CashDispenser.isAmountDispensable}` function.
 */
export declare class DenominateNoteDataParameter extends AbstractRequest {
    Amount: number;
    /**
     * Number of bills to dispense for each cassette
     */
    Count: Array<number>;
    constructor(amount: number, counts: Array<number>);
}
/**
 * Request about `{@link CardReader.EMVOnlineApproval}` function.
 */
export declare class EMVOnlineApprovalParameter extends AbstractRequest {
    /**
     * host result, e.g. "3030"
     */
    HostResponseCode: string;
    /**
     * ARPC Data
     */
    ARPCData: string;
    /**
     * Issuer Script Data
     */
    IssuerScriptData: string;
    constructor(hostResponseCode: string, ARPCData: string, issuerScriptData: string);
}
/**
 * Request about `{@link CardReader.EMVGetTLVData}` function.
 */
export declare class EMVGetTLVDataParameter extends AbstractRequest {
    /**
     * Tag ID List.
     */
    TagID: Array<string>;
    constructor(tagID: Array<string>);
}
/**
 * Request about `{@link CardReader.EMVSetTLVData}` function.
 */
export declare class EMVSetTLVDataParameter extends AbstractRequest {
    TLVDataList: Array<TLVDataInfo>;
    constructor(tlvDataList: Array<TLVDataInfo>);
}
/**
 * Request about `{@link CardReader.EMVSetAcquireCID}` function.
 */
export declare class EMVSetAcquireCIDParameter extends AbstractRequest {
    AcquireList: Array<string>;
    constructor(acquireList: Array<string>);
}
/**
 * Request about `{@link Camera.capture}` function.
 */
export declare class CaptureImageParameter extends AbstractRequest {
    CameraType: CameraType;
    FileName: string;
    TextOnImage: string;
    constructor(cameraType: CameraType, fileName: string, textOnImage?: string);
}
/**
 * Request about `{@link CardReader.EMVGenerateARQC}` function.
 */
export declare class EMVGenerateARQCParameter extends AbstractRequest {
    PinBlock: string;
    constructor(pinBlock: string);
}
/**
 * Request about `{@link CashDispenser.presentNote}` function.
 */
export declare class PresentNoteDataParameter extends AbstractRequest {
    /**
     * Timeout for take note. (default: 0 millisecond, which means infinity)
     */
    Timeout: string;
    constructor(timeout: string);
}
