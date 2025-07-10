/**
 *
 */
export default class Commands {
    /**
     * The command string constants for DocumentPrinter used in WARP.
     */
    static get Certification(): {
        getToken: string;
        refreshToken: string;
        generateKey: string;
        getKey: string;
        setKey: string;
    };
    /**
     * The command string constants for DocumentPrinter used in WARP.
     */
    static get DocumentPrinter(): {
        printImage: string;
        printData: string;
        reset: string;
        documentPrinterStatus: string;
    };
    /**
     * The command string constants for DocumentScanner used in WARP.
     */
    static get DocumentScanner(): {
        readImage: string;
        eject: string;
        reset: string;
        documentScannerStatus: string;
    };
    /**
     * The command string constants for BarcodeReader used in WARP.
     */
    static get BarcodeReader(): {
        readData: string;
        reset: string;
        barcodeReaderStatus: string;
    };
    /**
     * The command string constants for CardDispenser used in WARP.
     */
    static get CardDispenser(): {
        dispense: string;
        readCard: string;
        printCard: string;
        ejectCard: string;
        retractCard: string;
        reset: string;
        cardDispenserStatus: string;
    };
    /**
     * The command string constants for Card used in WARP.
     */
    static get CardReader(): {
        readCard: string;
        cancelCard: string;
        ejectCard: string;
        retractCard: string;
        reset: string;
        cardReaderStatus: string;
        chipInitialize: string;
        selectApp: string;
        setICCTranData: string;
        EMVOnlineApproval: string;
        EMVGetTLVData: string;
        EMVSetTLVData: string;
        EMVGetAcquireCID: string;
        EMVSetAcquireCID: string;
        EMVGenerateARQC: string;
    };
    /**
     * The command string constants for CashAcceptor used in WARP.
     */
    static get CashAcceptor(): {
        accept: string;
        return: string;
        commit: string;
        cancel: string;
        retract: string;
        reset: string;
        cashAcceptorStatus: string;
    };
    /**
     * Defines the command string constants for the Withdrawal transaction used in WARP.
     */
    static get CashDispenser(): {
        dispense: string;
        retractNote: string;
        reset: string;
        cashDispenserStatus: string;
        noteDispensable: string;
        presentNote: string;
    };
    /**
     * Defines the event string constants used in WARP.
     */
    static get DeviceEvent(): {
        modeEvent: string;
        subscribeDeviceFrameworkEvent: string;
        subscribeEnhancedAudioEvent: string;
        removeEnhancedAudioEvent: string;
        subscribeproximityEvent: string;
        removeProximityEvent: string;
        subscribeHandSetEvent: string;
        removeHandSetEvent: string;
        subscribeDoorEvent: string;
        removeDoorEvent: string;
    };
    /**
     * The command string constants for e-KTPReader used in WARP.
     */
    static get EKTPReader(): {
        tagEKTP: string;
        scanFinger: string;
        verification: string;
        cancel: string;
    };
    /**
     * Defines the command string constants for the Fingerprint read function used in WARP.
     */
    static get Fingerprint(): {
        readFingerprint: string;
        cancelFingerprint: string;
    };
    /**
     * The command string constants for IDScanner used in WARP.
     */
    static get IDScanner(): {
        readImage: string;
        ejectCard: string;
        cancel: string;
        retractCard: string;
        reset: string;
        idScannerStatus: string;
    };
    /**
     * Defines the command string constants for getting or setting information on the ATM.
     */
    static get Common(): {
        deviceStatus: string;
        allDevieStatus: string;
        modeStatus: string;
        deviceConfig: string;
        writeJournal: string;
        writeMDBJournal: string;
        setMode: string;
        loadTransactionData: string;
        saveTransactionData: string;
        updateEMVAIDInfo: string;
        retrieveEMVAIDInfo: string;
    };
    /**
     * The command string constants for PalmveinScanner used in WARP.
     */
    static get PalmveinScanner(): {
        readImage: string;
        readData: string;
        cancel: string;
    };
    /**
     * The command string constants for PassportScanner used in WARP.
     */
    static get PassportScanner(): {
        readImage: string;
        reset: string;
        setGuideLight: string;
        passportScannerStatus: string;
        guideLightStatus: string;
    };
    /**
     * Defines the command string constants for the Pinpad used in WARP.
     */
    static get PinPad(): {
        readInput: string;
        readInputData: string;
        cancel: string;
        reset: string;
        pinpadStatus: string;
    };
    /**
     * Defines the command string constants for the Receipt Printer used in WARP.
     */
    static get ReceiptPrinter(): {
        printReceipt: string;
        ejectReceipt: string;
        reset: string;
        receiptPrinterStatus: string;
    };
    /**
     * The command string constants for RFIDReader used in WARP.
     */
    static get RFIDReader(): {
        readCard: string;
        cancel: string;
        reset: string;
        rfidReaderStatus: string;
    };
    /**
     * The command string constants for Signpad used in WARP.
     */
    static get Signpad(): {
        readImage: string;
        reset: string;
        setGuideLight: string;
        signpadStatus: string;
    };
    /**
     * The command string constants for Transaction used in WARP.
     */
    static get Transaction(): {
        transactionStart: string;
        transactionEnd: string;
        ndcHostRequest: string;
        ndcCloseStateRequest: string;
        clearCache: string;
    };
    /**
     * Defines the command string constants for the Voice Guidance used in WARP.
     */
    static get VoiceGuidance(): {
        play: string;
    };
    static get NDC(): {
        HostSendRequest: string;
        HostCloseStateRequest: string;
    };
    static get Camera(): {
        captureImage: string;
        getCameraStatus: string;
    };
    static get External(): {
        encryptKeyRequest: string;
        publicKeyRequest: string;
        validateCardRequest: string;
        updatePasscodeRequest: string;
        resetPasscodeRequest: string;
        singleDepositTransactionRequest: string;
        bundleDepositTransactionRequest: string;
        retrieveLatestTransactionRequest: string;
        replenishmentRequest: string;
        checkHostHealth: string;
        getFileList: string;
        registerCashUnitEvent: string;
        unregisterCashUnitEvent: string;
        writeTransactionResultRequest: string;
        getApiToken: string;
        sendTransactionPay: string;
    };
}
