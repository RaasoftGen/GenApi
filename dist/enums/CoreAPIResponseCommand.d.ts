/**
 * Defines all the Responses to the WARP methods and commands.
 * All the members of Response enumeration are passed as a Name field of the parameter
 * for the callback function to get a response to a command or for the status changed event.
 * And depending on the response name, the parameter for the callback function has different data structure.
 * Here, all enumeration members describe their corresponding data structures so that the API users
 * can refer the additional information of the response.
 * @public
 */
export declare const CoreAPIResponseCommand: {
    /**
     * This is the normal response of a command, which does not have specified response
     * for completion of the operation.
     * Detail - [[OK]], [[ERROR]]
     */
    readonly TaskResponse: "TaskResponse";
    /**
     * This response is sent when ATM mode is changed and ontains the status information of the terminal.
     * State - Fixed string, "ServiceState"
     * Status - Current mode of the ATM. Refer to [[ServiceState]]
     * Detail - No Value
     */
    readonly ModeResponse: "ModeResponse";
    /**
     * This is the response to getConfig method of [[Terminal]] class so it contains the configuration
     * information of the ATM.
     * MachineNumber - the configured number of the machine
     * CardReaderType - the type of Card Reader device. Refer to [[CardReaderType]]
     * CashDispenserType - the type of Cash Dispenser device. NONE/CDM/CDUP/CDUS
     * CashAcceptorType - the type of Cash Acceptor device. NONE/CCIM/BRM/NONE
     * NFCReaderType - the RF Mode. NONE/CardEmul/P2P
     * FingerprintReaderType - the type of Finger Printer device. NONE/NORMAL
     * ReceiptPrinterType - the type of Receipt Printer device. NONE/NORMAL
     * ResolutionWidth - the width of the screen in pixels.
     * ResolutionHeight - the height of the screen in pixels.
     * LocationX - the X location of the screen.
     * LocationY - the Y location of the screen.
     * AudioDeviceName - Sound output device name (default)
     * SecondaryAudioDeviceName - Sound output device name (handset)
     * MicDeviceName - Mic output device name (default)
     * SecondaryMicDeviceName - Mic output device name (handset)
     * MicVolume - Mic output device volume
     * Detail - No Value
     */
    readonly DeviceConfigResponse: "DeviceConfigResponse";
    /**
     * Occurs when the card has been read completely.
     * The result of reading a card is set to CardTrack and Detail keys.
     * If there is a hardware error, Detail key will have "ERROR" keyword followed by a delimiter, '|'
     * and the error code. If the crad read is compeleted succesfully, the CardTracks contain
     * the card track data and Detail key will have all three track data with '|' delimiter and an addidtional
     * data of PSTDX in selected FIT for NDC transaction.
     * CardTrack1 - Card Track1 data
     * CardTrack2 - Card Track2 data
     * CardTrack3 - Card Track3 data
     * Detail - Track Data and an addtional information of FIT if the operation succeeds, [[ERROR]] if
     * reading card track fails due to a hardware error during the operation.
     */
    readonly CardReadCompleted: "CardReadCompleted";
    /**
     * Occurs when the PIN entry is completed as the response to the [[input]] method of [[PinPad]] class.
     * Detail - No Value
     */
    readonly PinEntryCompleted: "PinEntryCompleted";
    /**
     * Occurs when the data entry is completed as the response to the [[inputData]] method of [[PinPad]] class.
     * InputData The data that a customer pressed.
     * Detail - "OK"
     */
    readonly CustomerInputReceived: "CustomerInputReceived";
    readonly KeyPressed: "KeyPressed";
    /**
     * This response is sent when items(bills) are presented during a cash deposit transaction
     * and the machine is waiting for the items to be taken.
     * ItemRefusedReason - Indicates the reason why the item is not accepted by the machine if there is a refused item.
     * The value is one of CASHINUNITFULL, INVALIDBILL, NOBILLSTODEPOST, DEPOSITFAILURE, COMMINPCOMPFAILURE, STACKERFULL,
     * INVALIDBUNCH, COUNTERFEIT, LIMITOVERTOTALITEMS, LIMITOVERAMOUNT, and FOREIGNITEMSDETECTED.
     * Detail - No Value
     */
    readonly ItemsPresented: "ItemsPresented";
    /**
     * This response is sent when items(bills) are presented during a cash deposit transaction
     * and the machine is waiting for the items to be taken.
     * DispenseNoteCompleted - Indicates the reason why the item is not accepted by the machine if there is a refused item.
     * The value is one of CASHINUNITFULL, INVALIDBILL, NOBILLSTODEPOST, DEPOSITFAILURE, COMMINPCOMPFAILURE, STACKERFULL,
     * INVALIDBUNCH, COUNTERFEIT, LIMITOVERTOTALITEMS, LIMITOVERAMOUNT, and FOREIGNITEMSDETECTED.
     * Detail - OK, ERROR, TIMEOUT
     */
    readonly DispenseNoteCompleted: "DispenseNoteCompleted";
    /**
     * This response is sent when media(check) is presented during a check deposit transaction
     * and the machine is waiting for the media to be taken.
     * Detail - No Value
     */
    readonly MediaPresented: "MediaPresented";
    /**
     * This response is sent when item(s) is taken by a customer during a cash deposit transaction.
     * Detail - No Value
     */
    readonly ItemsTaken: "ItemsTaken";
    /**
     * This response is sent when media is taken by a customer during a check deposit transaction.
     * Detail - No Value
     */
    readonly MediaTaken: "MediaTaken";
    /**
     * This response is sent when item(s) is inserted during a cash deposit transaction.
     * Detail - No Value
     */
    readonly ItemsInserted: "ItemsInserted";
    /**
     * This response is sent when media is inserted during a check deposit transaction.
     * Detail - No Value
     */
    readonly MediaInserted: "MediaInserted";
    /**
     * This response is sent when an operation is completed and there is no speicified response.
     * Detail - [[OK]], [[ERROR]], [[RETRACTCASH]], [[RETRACTCHECK]], [[RETRACTCASH_2]], [[RETRACTCHECK_2]], [[TIMEOUT]]
     */
    readonly TaskCompleted: "TaskCompleted";
    /**
     * This response is sent when an operation waiting to be completed such as reading a card, entering a pin,
     * inserting a cash, etc. is canceled by a corresponding cancel method.
     * Detail - "CAMCELED"
     */
    readonly TaskCanceled: "TaskCanceled";
    /**
     * This response is sent when an operation waiting to be completed such as reading a card, entering a pin,
     * inserting a cash, etc. is timed out without any action happening.
     * Detail - "TIMEOUT"
     */
    readonly TaskTimeout: "TaskTimeout";
    /**
     * This response is sent when an operation waiting to be completed such as reading a card, entering a pin,
     * inserting a cash, etc. is timed out without any action happening.
     * Detail - "ERROR"
     * Category - ""
     * ErrorCode - "ErrorCode"
     * HasTaskCompleted - true
     */
    readonly TaskError: "TaskError";
    /**
     * This is a response to the [[acceptCash]] method of the [[CashAcceptor]] class when the counting of inserted cash is completed.
     * CashInStatus - The status of cash in. "ACTIVE", "OK", "ROLLBLACK", "RETRACT", "RESET", "UNKNOWN"
     * StackerStatus - [[EMPTY]],  [[NOTEMPTY]], [[FULL]]
     * LastRefusedCount - The count of refused notes.
     * Detail - [[OK]], [[ERROR]]
     */
    readonly AcceptNoteCompleted: "AcceptNoteCompleted";
    /**
     * This is a response to the [[AcceptCash] method of the [[CashAcceptor]] class when inserted cash is refused.
     * Detail - [[OK]], [[ERROR]]
     */
    readonly RefuseNoteCompleted: "RefuseNoteCompleted";
    /**
     * This is a response to the [[returnCash] method of the [[CashAcceptor]] class when rollback  cash is completed.
     * Detail - [[OK]], [[ERROR]], [[EMPTY]], [[OK|RETRACTED_CASH]]
     */
    readonly ReturnNoteCompleted: "ReturnNoteCompleted";
    /**
     * This is a response to the [[cancel] method of the [[CashAcceptor]] class when cancel is completed.
     * Detail - [[OK]], [[ERROR]]
     */
    readonly CancelDepositCompleted: "CancelDepositCompleted";
    /**
     * This is a response to the [[acceptChecks] method of the [[CashAcceptor]] class when the scanning of inserted checks is completed.
     * CashInStatus - The status of cash in. "ACTIVE", "OK", "ROLLBLACK", "RETRACT", "RESET", "UNKNOWN"
     * StackerStatus - [[EMPTY]], [[NOTEMPTY]], [[FULL]]
     * Detail - [[OK]], [[ERROR]], [[RETRACTCASH]], [[RETRACTCHECK]], [[RETRACTCASH_2]], [[RETRACTCHECK_2]]
     */
    readonly MediaReadCompleted: "MediaReadCompleted";
    /**
     * This is a response to [[commit] method of [[CashAcceptor]], [[ChecksAcceptor]] class
     * to finish the deposit transaction.
     * Detail - The result of the operation. [[OK]], [[ERROR]]
     */
    readonly CommitNoteCompleted: "CommitNoteCompleted";
    /**
     * This is a response to [[speak] method of [[VG]] class
     * to play a script for voice guidance.
     * ScriptID - The script ID for the voice guidance
     * PressedKey - The key that a customer pressed as the selection of the voice guidance.
     * Detail - The result data that a customer pressed
     */
    readonly VGSpeakResponse: "VGSpeakResponse";
    /**
     * This is sent from [[DeviceEvent]] class when the audio jack status is changed.
     * JackStatus - [[PRESENT]], [[NOTPRESENT]]
     * Detail - No Value
     */
    readonly EnhancedAudioResponse: "EnhancedAudioResponse";
    /**
     * This is sent from [[DeviceEvent]] class when the proximity sensor status is changed.
     * Status - [[PRESENT]], [[NOTPRESENT]]
     * Detail - No Value
     */
    readonly ProximityResponse: "ProximityResponse";
    /**
     * This is a response to read method of [[FingerPrint]] class
     * to read a customer's finger print by activating the device in the ATM.
     * Detail - Finger print data if the operation succeeds., [[ERROR]]
     */
    readonly FingerprintReadCompleted: "FingerprintReadCompleted";
    /**
     * This is sent when a method for registering an event such as [[setAudioJackEvent]], [[setProximityEvent]]
     * of [[DeviceEvent]] class is called.
     * Machine - Machine Number
     * Code - Currently not used
     * Detail - No Value
     */
    readonly AuthorizationResponse: "AuthorizationResponse";
    /**
     * This response is sent when the next transaction is ready.
     * Detail - No Value
     */
    readonly TransactionReady: "TransactionReady";
    /**
     * This is a response to [[getStatus]] method of [[Card]] class
     * to get the status information of card reader device.
     * DeviceStatus - The availability of the Card Reader. : DEVONLINE, DEVOFFLINE, DEVPOWEROFF, DEVBUSY, DEVNODEVICE, DEVHWERROR, DEVUSERERROR
     * MediaStatus - Current status of the card. : PRESENT, NOTPRESENT, JAMMED, NOTSUPP, UNKNOWN, ENTERING
     * RetainBinStatus - Current status of the retain bin. : OK, HIGH, FULL, NOTSUPP
     * RetractedCount - The number of cards that are currently stored in the retain bin.
     * MaxRetainCount - Maximum number of cards that can be stored in the retain bin.
     * ChipPowerStatus - The status of the chip. : ONLINE, POWEREDOFF, BUSY, NODEVICE, HWERROR, NOCARD, NOTSUPP
     */
    readonly CardReaderStatusResponse: "CardReaderStatusResponse";
    /**
     *
     */
    readonly BalanceInquiryResponse: "BalanceInquiryResponse";
    /**
     *
     */
    readonly CashDispenserStatusResponse: "CashDispenserStatusResponse";
    /**
     *
     */
    readonly CashAcceptorStatusResponse: "CashAcceptorStatusResponse";
    /**
     *
     */
    readonly ReceiptPrinterStatusResponse: "ReceiptPrinterStatusResponse";
    /**
     *
     */
    readonly PinPadStatusResponse: "PinPadStatusResponse";
    /**
     *
     */
    readonly CardDispenserStatusResponse: "CardDispenserStatusResponse";
    /**
     *
     */
    readonly DocumentPrinterStatusResponse: "DocumentPrinterStatusResponse";
    /**
     *
     */
    readonly IDScannerStatusResponse: "IDScannerStatusResponse";
    /**
     *
     */
    readonly PalmveinScannerStatusResponse: "PalmveinScannerStatusResponse";
    /**
     *
     */
    readonly DocumentScannerStatusResponse: "DocumentScannerStatusResponse";
    /**
     *
     */
    readonly PassportScannerStatusResponse: "PassportScannerStatusResponse";
    /**
     *
     */
    readonly IDReaderStatusResponse: "IDReaderStatusResponse";
    /**
     *
     */
    readonly RFIDReaderStatusResponse: "RFIDReaderStatusResponse";
    /**
     *
     */
    readonly SignpadStatusResponse: "SignpadStatusResponse";
    /**
     *
     */
    readonly BarcodeReaderStatusResponse: "BarcodeReaderStatusResponse";
    /**
     *
     */
    readonly CameraStatusResponse: "CameraStatusResponse";
    /**
     *
     */
    readonly DeviceStatusResponse: "DeviceStatusResponse";
    /**
     *
     */
    readonly AllDeviceStatusResponse: "AllDeviceStatusResponse";
    /**
     * This is a response to [[getXXX]] method of [[Transactoin]] class
     * to get the status information of card reader device.
     * Name - The availability of the TransactionResponse
     * Type - Current status of the TransactionResponse class type : BalanceInquiryResponse, MiniStatmentResponse
     * Detail - Current status of the retain bin. : OK, HIGH, FULL, NOTSUPP
     */
    readonly TransactionResponse: "TransactionResponse";
    /**
     * This is a response to [[deposit]] method of [[CashAcceptor]], [[ChecksAcceptor]] class
     * to get the status information of cash acceptor device.
     * Name - The availability of the TransactionResponse
     * Type - Current status of the TransactionResponse class type : NoteError
     * Detail - No value
     */
    readonly NoteError: "NoteError";
    /**
     * Occurs when the card has been retain completely.
     * If there is a hardware error, Detail key will have "ERROR" keyword followed by a delimiter, '|'
     * and the error code.
     * Detail - Track Data and an addtional information of FIT if the operation succeeds, [[ERROR]] if
     * reading card track fails due to a hardware error during the operation.
     */
    readonly RetractCardCompleted: "RetractCardCompleted";
    /**
     * Occurs when the card has been eject completely.
     * If there is a hardware error, Detail key will have "ERROR" keyword followed by a delimiter, '|'
     * and the error code.
     * Detail - Track Data and an addtional information of FIT if the operation succeeds, [[ERROR]] if
     * reading card track fails due to a hardware error during the operation.
     */
    readonly EjectCardCompleted: "EjectCardCompleted";
    /**
     * GetTokenCompleted
     */
    readonly GetTokenCompleted: "GetTokenCompleted";
    /**
     * GenerateKeyCompleted
     */
    readonly GenerateKeyCompleted: "GenerateKeyCompleted";
    /**
     * GenerateKeyCompleted
     */
    readonly GeKeyCompleted: "GeKeyCompleted";
    /**
     * SetKeyCompleted
     */
    readonly SetKeyCompleted: "SetKeyCompleted";
    /**
     * RetractNoteCompleted
     */
    readonly RetractNoteCompleted: "RetractNoteCompleted";
    /**
     * DispenseCardCompleted
     */
    readonly DispenseCardCompleted: "DispenseCardCompleted";
    /**
     * ReadImageCompleted
     */
    readonly ReadImageCompleted: "ReadImageCompleted";
    /**
     * ReadDataCompleted
     */
    readonly ReadDataCompleted: "ReadDataCompleted";
    /**
     * CommandReadyCompleted
     */
    readonly CommandReadyCompleted: "CommandReadyCompleted";
    /**
     * ModeStatusResponse
     */
    readonly ModeStatusResponse: "ModeStatusResponse";
    /**
     * PrintDataCompleted
     */
    readonly PrintDataCompleted: "PrintDataCompleted";
    /**
     * PrintImageCompleted
     */
    readonly PrintImageCompleted: "PrintDataCompleted";
    /**
     * This response is sent when the transaction is started.
     * Detail - No Value
     * TransactionType - [[Non NDC]] or [[NDC]]
     */
    readonly TransactionStartResponse: "TransactionStartResponse";
    /**
     * This response is sent when the transaction is ended.
     * Detail - No Value
     */
    readonly TransactionEndResponse: "TransactionEndResponse";
    /**
     * This response is sent when request to transmit NDC message from frontend to core.
     * NextState -
     * FID -
     */
    readonly RecvFromNDCHostResponse: "RecvFromNDCHostResponse";
    /**
     * This is a response to [[getNDCStatus]] method of [[Common]] class to get the status for NDC Switch.
     * IsAvailable - NDC Transagction Availability
     * Detail - No Value
     */
    readonly GetNDCStatusResponse: "GetNDCStatusResponse";
    /**
     * This is a response to [[setGuideLight]] method of [[GuideLight]] class.
     * Detail - No Value
     */
    readonly SetGuideLightCompleted: "SetGuideLightCompleted";
    readonly ResetDeviceCompleted: "ResetDeviceCompleted";
    readonly CashAcceptorResetDeviceCompleted: "CashAcceptorResetDeviceCompleted";
    readonly GetApiTokenCompleted: "GetApiTokenCompleted";
    readonly PrintCompleted: "PrintCompleted";
    readonly TransactionStartRequest: "TransactionStartRequest";
    readonly GuideLightStatusResponse: "GuideLightStatusResponse";
    readonly SectionDictionary: "SectionDictionary";
    readonly EjectMediaCompleted: "EjectMediaCompleted";
    readonly ChipInitializeCompleted: "ChipInitializeCompleted";
    readonly ChipReInitializeCompleted: "ChipReInitializeCompleted";
    readonly SelectAppCompleted: "SelectAppCompleted";
    readonly NDCHostSendResponse: "NDCHostSendResponse";
    readonly NDCCloseStateResponse: "NDCCloseStateResponse";
    readonly ExecuteDeviceActionResponse: "ExecuteDeviceActionResponse";
    readonly DoorStatusResponse: "DoorStatusResponse";
    /**
     * This is the response that checks whether the desired amount can be dispensed.
     */
    readonly DenominateNoteCompleted: "DenominateNoteCompleted";
    /**
     *
     */
    readonly EncryptionCompleted: "EncryptionCompleted";
    /**
     *
     */
    readonly ValidTokenResponse: "ValidTokenResponse";
    /**
     * This response checks whether the device is ready for a command. Verify if the device failed or did not open.
     */
    readonly EMVSetAcquireCIDRepsponse: "EMVSetAcquireCIDRepsponse";
    /**
     * This response contains Acquire CID list.
     */
    readonly EMVGetAcquireCIDRepsponse: "EMVGetAcquireCIDRepsponse";
    /**
     * This response checks whether the device is ready for the command. Check if the device failed or did not open.
     */
    readonly EMVTLVDataResponse: "EMVTLVDataResponse";
    /**
     * This response checks whether the device is ready for the command. Check if the device failed or did not open.
     */
    readonly EMVSetTLVDataResponse: "EMVSetTLVDataResponse";
    /**
     * This response checks whether the device is ready for a command. Verify if the device failed or did not open.
     */
    readonly EMVOnlineApprovalResponse: "EMVOnlineApprovalResponse";
    /**
     * Command request result response.
     */
    readonly CaptureImageCompleted: "CaptureImageCompleted";
    /**
     * This response checks whether the device is ready for a command. Verify if the device failed or did not open.
     */
    readonly EMVGenerateARQCResponse: "EMVGenerateARQCResponse";
    /**
     * PresentNote Command request result response.
     */
    readonly PresentNoteCompleted: "PresentNoteCompleted";
};
/**
 *
 */
export type CoreAPIResponseCommand = (typeof CoreAPIResponseCommand)[keyof typeof CoreAPIResponseCommand];
