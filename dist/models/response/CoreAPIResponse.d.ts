import TaskResponse from './TaskResponse';
import { TransactionType, StringBoolean, CardBinType, CardReaderType, PinPadKey, DeviceStatus, StateStatus, ProximityEventType, AudioJackEventType, CashDispenserType, CashAcceptorType, NFCReaderType, FingerprintReaderType, ReceiptPrinterType, RetractBinStatus, RetainBinStatus, PaperStatus, TonerStatus, MediaStatus, AcceptorStatus, ChipPowerStatus, RejectBinStatus, PositionStatus, StackerStatus, RejectPositionStatus, ServiceState, BuildListResultType, AppSelectResultType, HandSetStatus, ProximityStatus, EnhancedAudioStatus, OperatorSwitchStatus, SeismicStatus, TamperStatus, HeatStatus, ReceivedEventType, DeviceShortName, DeviceName, CommandName, SafeDoorStatus, DoorStatus, CabinetDoorStatus, CashInStatus, ChipStatus, ARQCResultType, CameraStatus, HopperStatus } from '../../enums';
import { SectionInfo, TLVDataInfo, SetTLVResultInfo } from '../../types';
/**
 * This class is parent of all device status responses, such as {@link CardReaderStatusResponse}, {@link CashAcceptorStatusResponse}, etc.
 */
export declare class AbstractDeviceStatusResponse extends TaskResponse {
    /**
     * The device status.
     */
    DeviceStatus: DeviceStatus;
    /**
     * Whether the device is available to use or not.
     */
    IsAvailable: StringBoolean | null;
    /**
     * ExtraStatuses
     */
    ExtraStatuses: Array<ExtraStatus>;
}
/**
 * ExtraStatus
 */
export declare class ExtraStatus {
    /**
     * Key
     */
    Key: string;
    /**
     * Value
     */
    Value: string;
}
/**
 * This class is response to the init method in the [[Terminal]] class.
 */
export declare class ModeResponse extends TaskResponse {
    /**
     * "ServiceState"
     */
    State: string;
    /**
     * ATM service status
     * (e.g IN_SERVICE, OFFLINE, PENDING(PENDING or PowerUP), OUT_OF_SERVICE, IN_SUPERVISOR(Maintenance or Supervisor))
     */
    Status: ServiceState;
}
/**
 * This is the response to {@link Terminal.get} function.
 */
export declare class ModeStatusResponse extends TaskResponse {
    /**
     * The status of State Framework
     */
    State: StateStatus;
    /**
     * ATM service status
     * (e.g IN_SERVICE, OFFLINE, PENDING(PENDING or PowerUP), OUT_OF_SERVICE, IN_SUPERVISOR(Maintenance or Supervisor))
     */
    CurrentMode: ServiceState;
}
/**
 * This is the response to {@link Terminal.getModeStatus} function.
 */
export declare class AuthorizationResponse extends TaskResponse {
    Machine: string;
    Code: string;
}
/**
 * This is the response to {@link DeviceEvent.addProximityEvent} function.
 */
export declare class ProximityResponse extends TaskResponse {
    Status: ProximityEventType;
}
/**
 * This is the response to {@link DeviceEvent.addAudioJackEvent} function.
 */
export declare class EnhancedAudioResponse extends TaskResponse {
    /**
     * The status of Audio Jack
     */
    JackStatus: AudioJackEventType;
}
/**
 * A task response when a media read completes.
 */
export declare class MediaReadCompleted extends TaskResponse {
    /**
     * Make CashInStatus : 10~3|100~5|50~2
     */
    CashInStatus: string;
    /**
     * Current status of stacker
     */
    StackerStatus: StackerStatus;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * A task response from a card eject.
 * This class is response to the `eject` method for the {@link CardReader}, {@link CardDispenser} and {@link IDSacnner} class.
 */
export declare class EjectCardCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * A task response from a card retract.
 * This class is response to the `retract` method for the {@link CardReader}, {@link CardDispenser} and {@link IDScanner} class.
 */
export declare class RetractCardCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
export declare class FIT {
    /**
     * Gets Institution ID Index.
     */
    PIDDX: string;
    /**
     * Gets Institution ID.
     */
    PFIID: string;
    /**
     * PSTDX data in the selected FIT for the NDC transaction
     */
    PSTDX: string;
    /**
     * Gets Algorithm/Bank ID Index
     */
    PAGDX: string;
    /**
     * Gets Maximum PIN Digits Entered
     */
    PMXPN: string;
    /**
     * Gets Maximum PIN Digits Checked
     */
    PCKLN: string;
    /**
     * Gets PIN Pad
     */
    PINPD: string;
    /**
     * Gets PAN Data Index
     */
    PANDX: string;
    /**
     * Gets PAN length
     */
    PANLN: string;
    /**
     * Gets PAN Data
     */
    PANPD: string;
    /**
     * Gets Track 3 PIN
     */
    PRCNT: string;
    /**
     * Gets PIN Offset Data
     */
    POFDX: string;
    /**
     * Gets Decimalisation Table
     */
    PDCTB: string;
    /**
     * Gets Encrypted PIN Key
     */
    PEKEY: string;
    /**
     * Gets Index Reference Point
     */
    PINDX: string;
    /**
     * Gets Language Code Index
     */
    PLNDX: string;
    /**
     * Gets MM Sensor Flag
     */
    PMMSR: string;
    /**
     * This property returns PREF2 fields of FIT data
     */
    PREF2: string;
    /**
     * This property returns PVBDX fields of FIT data
     */
    PVBDX: string;
    /**
     * This property returns PVBLN fields of FIT data
     */
    PVBLN: string;
    /**
     * This property returns PBFMT fields of FIT data
     */
    PBFMT: string;
}
/**
 * A task response from a card read.
 * This class is response to the `read` method for the {@link CardReader} and {@link CardDispenser} class.
 */
export declare class CardReadCompleted extends TaskResponse {
    /**
     * Card Track 1
     */
    CardTrack1: string;
    /**
     * Card Track 2
     */
    CardTrack2: string;
    /**
     * Card Track 3
     */
    CardTrack3: string;
    /**
     * Selected FIT informations.
     */
    SelectedFIT?: FIT;
    /**
     * ATB
     */
    ATB?: string;
    /**
     * Chip Data
     */
    ChipData?: string;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
    /**
     * Chip Status.
     */
    ChipStatus: ChipStatus;
}
/**
 * A task response indicating media was inserted.
 */
export declare class MediaInserted extends TaskResponse {
}
/**
 * A task response indicating media was inserted.
 */
export declare class MediaTaken extends TaskResponse {
}
/**
 * Defines the general internal task timeout response.
 */
export declare class TaskTimeout extends TaskResponse {
}
/**
 * Defines the general task error response for tasks.
 */
export declare class TaskError extends TaskResponse {
    /**
     * Error category for the task error.
     */
    Category: string;
    /**
     * Error code associated with the task error.
     */
    ErrorCode: string | null;
    /**
     * Indicating whether the task has completed.
     */
    HasTaskCompleted: boolean;
}
/**
 * This response is sent when an operation is completed and there is no speicified response.
 * For example, when the shutter in the cash acceptor is opened or closed, this response will occurs.
 */
export declare class TaskCompleted extends TaskResponse {
}
/**
 * This response occurs when the PIN entry is completed
 * as the response to the [[input]] method of [[PinPad]] class.
 */
export declare class PinEntryCompleted extends TaskResponse {
    /**
     * PIN blocks for the entered PIN.
     */
    PinInfo: string;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This response occurs when the data entry is completed ]
 * as the response to the [[inputData]] method of [[PinPad]] class.
 */
export declare class CustomerInputReceived extends TaskResponse {
    /**
     * The data that a customer pressed.
     */
    InputData: string;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This response is sent whenever the pinpad key is pressed
 * as the response to the [[input]] or [[inputData]] method pf [[Pinpad]] class.
 */
export declare class KeyPressed extends TaskResponse {
    /**
     * Pressed key from PinPad
     */
    PressedKey: PinPadKey;
}
/**
 * This response is sent when the item is presented
 * and the machine is waiting to the item is taken.
 */
export declare class ItemsPresented extends TaskResponse {
    /**
     * Indicates the reason why the media is not accepted by the machine if there is a refused media.
     * The value is one of FOREIGNITEMS, STACKERFULL, CODELINEINVALID, INVALIDMEDIA, TOOLONG, TOOSHORT, TOOWIDE, TOONARROW,
     * TOOTHICK, INVALIDORIENTATION, DOUBLE DETECT, REFUSEPOSFULL, RETURNBLOCKED, INVALIDBUNCH, OTHERITEM, OTHERBUNCH,
     * JAMMING and METAL.
     */
    ItemRefusedReason: string;
}
/**
 * This response is sent when the item is dispensed.
 * The item will be presented with [[ItemPresented]] response right after this response is sent.
 */
export declare class DispenseNoteCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This response is sent when the media is presented and the machine is waiting to the media is taken.
 */
export declare class MediaPresented extends TaskResponse {
}
/**
 * This response is sent when the customer takes an item.
 */
export declare class ItemsTaken extends TaskResponse {
}
/**
 * This response is sent when the transaction is ready to start.
 * It is also the response to the sendTransactionEnd method for the [[Transaction]] class.
 */
export declare class TransactionReady extends TaskResponse {
}
/**
 * This response is sent when the item is inserted.
 */
export declare class ItemsInserted extends TaskResponse {
}
/**
 * This is the response to {@link CheckAcceptor.cancel} function.
 */
export declare class TaskCanceled extends TaskResponse {
}
/**
 * Fake note detail informations
 */
export declare class FakeNoteDetailInfo {
    NoteType: number;
    NoteCount: number;
}
/**
 * Fake note informations
 */
export declare class FakeNoteInfo {
    NoteCategory: string;
    FakeNoteInDetail: Array<FakeNoteDetailInfo>;
}
/**
 * Retract note informations
 */
export declare class RetractedNoteInfo {
    Value: string;
    Count: string;
}
/**
 * This is a response to the [[acceptCash]] method of the [[CashAcceptor]] classwhen the counting of inserted cash is completed.
 */
export declare class AcceptNoteCompleted extends TaskResponse {
    /**
     * CashIn Information
     */
    CashInStatus: string;
    /**
     * Stacker status
     */
    StackerStatus: StackerStatus;
    /**
     * Last refused note count
     */
    LastRefusedCount: string;
    /**
     * Position status
     */
    PositionStatus: PositionStatus;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
    /**
     * When a fake note is deposited, information regarding the fake note.
     */
    FakeNoteList?: Array<FakeNoteInfo> | null;
}
/**
 * This is a response to the {@link CashAcceptor.accept} function when the inserted cash is refused.
 */
export declare class RefuseNoteCompleted extends TaskResponse {
    /**
     * CashIn Information
     * (e.g 10~3|100~5|50~2)
     */
    CashInStatus: string;
    /**
     * Stacker status
     */
    StackerStatus: StackerStatus;
    /**
     * Last refused note count
     */
    LastRefusedCount: string;
    /**
     * Position status
     */
    PositionStatus: PositionStatus;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This is a response to the {@link CashAcceptor.accept} function when the inserted cash happens error.
 */
export declare class NoteError extends TaskResponse {
}
/**
 * This is a response to the {@link CashAcceptor.return} function and it occurs when the cash is returned.
 */
export declare class ReturnNoteCompleted extends TaskResponse {
    /**
     * Acceptor status
     */
    AcceptorStatus: AcceptorStatus;
    /**
     * Position status
     */
    PositionStatus: PositionStatus;
    /**
     * Stacker status
     */
    StackerStatus: StackerStatus;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This is a response to {@link CashAcceptor.commit} function and it occurs when the cash is stored.
 */
export declare class CommitNoteCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This is a response to the {@link CashAcceptor.cancel} function and it occurs when the cancellation of the deposit is completed.
 */
export declare class CancelDepositCompleted extends TaskResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to method in the [[Common]] class.
 * This can be a response to getStatus method of [[Card]] class to get the status information of card reader device.
 */
export declare class CardReaderStatusResponse extends AbstractDeviceStatusResponse {
    /**
     * PRESENT,NOTPRESENT,ENTERING,JAMMED,UNKNOWN
     */
    MediaStatus: MediaStatus;
    /**
     * OK,FULL,HIGH,UNKNOWN,NOTSUPP
     */
    RetainBinStatus: RetainBinStatus;
    /**
     * The number of cards currently stored in the retain bin
     */
    RetractedCount: string;
    /**
     * Maximum number of cards that can be stored in the retain bin
     */
    MaxRetainCount: string;
    /**
     * CHIP power status
     */
    ChipPowerStatus: ChipPowerStatus;
    /**
     * PSTDX data in the selected FIT for the NDC transaction
     */
    PSTDX: string | null;
}
/**
 * This class defines the type for cash detail filed in the [[CashDispenserStatusResponse]] or [[CashAcceptorStatusResponse]].
 */
export declare class CashDetailInfo {
    /**
     * Number Of Item Info
     */
    NumberOfItemInfo: Array<NumberOfItem>;
    /**
     * Currency type for the cash
     */
    CurrencyID: string;
    /**
     * The denomination for the cash
     */
    Value: string;
    /**
     * Status for the cash
     */
    Status: string;
    /**
     * The number of the cash
     */
    Count: string;
    /**
     * Cassette type
     */
    UnitType: string;
    /**
     * Type of cash items
     */
    ItemType: string;
    /**
     * Logical name identifier for the cassette
     */
    UnitName: string;
    /**
     * Logical identifier for the cassette unit
     */
    UnitID: string;
    /**
     * Physical hardware identifier of the unit
     */
    PhysicalUnitID: string;
    /**
     * Physical Position name  in the device
     */
    PhysicalPositionName: string;
    /**
     * Maximum capacity of bills/notes the cassette can hold
     */
    PhysicalMaxCount: string;
}
/**
 * Cash Note Type Information
 */
export declare class CashNoteTypeInfo {
    /**
     * ID
     */
    ID: number;
    /**
     * Value
     */
    Value: number;
    /**
     * Currency
     */
    Currency: string;
    /**
     * Exponent
     */
    Exponent: number;
    /**
     * Configured or not
     */
    Configured: boolean;
}
/**
 * Number Of Item
 */
export declare class NumberOfItem {
    /**
     * Item ID
     */
    ItemID: string;
    /**
     * Item Count
     */
    ItemCount: string;
    /**
     * Item Value
     */
    ItemValue: string;
}
/**
 * Note Number Item
 */
export declare class NoteNumberItem {
    /**
     * ID
     */
    ID: string;
    /**
     * Value
     */
    Value: string;
    /**
     * Currency
     */
    Currency: string;
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class CashDispenserStatusResponse extends AbstractDeviceStatusResponse {
    /**
     * OK,FULL,HIGH,UNKNOWN,NOTSUPP
     */
    RejectBinStatus: RejectBinStatus | null;
    /**
     * OK,FULL,HIGH,UNKNOWN,NOTSUPP
     */
    RetractedBinStatus: RetractBinStatus | null;
    MaxDispenseItems: number;
    NumberOfLogicalUnits: number;
    /**
     * Cash Details
     */
    CashDetails: Array<CashDetailInfo>;
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class CheckAcceptorStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class CashAcceptorStatusResponse extends AbstractDeviceStatusResponse {
    /**
     * OK,DEGRADED,NOACCEPT,UNKNOWN
     */
    AcceptorStatus: AcceptorStatus;
    /**
     * EMPTY,NOTEMPTY,NOTSUPP,UNKNOWN
     */
    PositionStatus: PositionStatus;
    /**
     * OK,EMPTY,NOTEMPTY,NOTSUPP,UNKNOWN,FULL,LOW,
     */
    StackerStatus: StackerStatus;
    /**
     * NOTSUPP(Default),OK,EMPTY,NOTEMPTY,,UNKNOWN,FULL,LOW => Kisan Cashacceptor에서 사용
     */
    RejectPositionStatus?: RejectPositionStatus;
    /**
     * Cash Details
     */
    CashDetails: Array<CashDetailInfo>;
    /**
     * Note Number List
     */
    NoteNumberList: Array<NoteNumberItem>;
    /**
     * Cash Note Type List
     */
    CashNoteTypeList?: Array<CashNoteTypeInfo>;
    /**
     * Last Cash In Status
     */
    LastCashInStatus?: CashInStatus;
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class ReceiptPrinterStatusResponse extends AbstractDeviceStatusResponse {
    /**
     * e.g. FULL,LOW,OUT,UNKNOWN,NOTSUPP
     */
    PaperStatus: PaperStatus | null;
    /**
     * FULL,LOW,OUT,UNKNOWN,NOTSUPP
     */
    TonerStatus: TonerStatus | null;
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class PinPadStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class GuideLightStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class SensorStatusResponse extends AbstractDeviceStatusResponse {
    HandSetStatus: HandSetStatus;
    ProximityStatus: ProximityStatus;
    EnhancedAudioStatus: EnhancedAudioStatus;
    OperatorSwitchStatus: OperatorSwitchStatus;
    SeismicStatus: SeismicStatus;
    TamperStatus: TamperStatus;
    HeatStatus: HeatStatus;
    SafeDoorStatus: SafeDoorStatus;
    CabinetDoorStatus: CabinetDoorStatus;
    CabinetFrontDoorStatus: CabinetDoorStatus;
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class CoinAcceptorStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class CoinDispenserStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class MixedMediaAcceptorStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class DepositoryStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class CameraStatusResponse extends AbstractDeviceStatusResponse {
    /**
     * ExitSlotCameraStatus
     */
    ExitSlotCameraStatus: CameraStatus;
    /**
     * PersonCameraStatus
     */
    PersonCameraStatus: CameraStatus;
    /**
     * RoomCameraStatus
     */
    RoomCameraStatus: CameraStatus;
}
/**
 * This is a response to getAllDeviceStatus method in the [[Common]] class.
 */
export declare class AllDeviceStatusResponse extends TaskResponse {
    CashAcceptorStatus: CashAcceptorStatusResponse;
    CashDispenserStatus: CashDispenserStatusResponse;
    CardReaderStatus: CardReaderStatusResponse;
    ReceiptPrinterStatus: ReceiptPrinterStatusResponse;
    PinPadStatus: PinPadStatusResponse;
    CardDispenserStatus: CardDispenserStatusResponse;
    DocumentPrinterStatus: DocumentPrinterStatusResponse;
    IDScannerStatus: IDScannerStatusResponse;
    DocumentScannerStatus: DocumentScannerStatusResponse;
    PassportScannerStatus: PassportScannerStatusResponse;
    RFIDReaderStatus: RFIDReaderStatusResponse;
    IDReaderStatus: IDReaderStatusResponse;
    SignpadStatus: SignpadStatusResponse;
    BarcodeReaderStatus: BarcodeReaderStatusResponse;
    GuideLightStatus: GuideLightStatusResponse;
    SensorStatus: SensorStatusResponse;
    CoinAcceptorStatus: CoinAcceptorStatusResponse;
    CoinDispenserStatus: CoinDispenserStatusResponse;
    CoinDispenser2Status: CoinDispenserStatusResponse;
    DepositoryStatus: DepositoryStatusResponse;
    CheckAcceptorStatus: CheckAcceptorStatusResponse;
    MixedMediaAcceptorStatus: MixedMediaAcceptorStatusResponse;
    CameraStatus: CameraStatusResponse;
}
/**
 * This class defines the card dispenser hopper info list field in the [[CardDispenserStatusResponse]].
 */
export declare class RetractNoteCompleted extends TaskResponse {
    /**
     * When a note is retracted, information regarding the note.
     */
    RetractedNoteDetail?: Array<RetractedNoteInfo> | null;
    /**
     * When a fake note is deposited, information regarding the fake note.
     */
    FakeNoteList?: Array<FakeNoteInfo> | null;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This class defines the card dispenser hopper info list field in the [[CardDispenserStatusResponse]].
 */
export declare class CardDispenserHopperInfo {
    /**
     * Name of the hopper
     */
    Name: string;
    /**
     * Card Bin Type
     */
    CardBinType: CardBinType;
    /**
     * Type of card
     */
    CardType: string;
    /**
     * Card type name
     */
    CardTypeName: string;
    /**
     * Status of the card dispenser
     */
    Status: HopperStatus;
    /**
     * The number of card in the hoppper
     */
    Count: string;
    /**
     * Availability of the hopper
     */
    IsAvailable: string;
    /**
     * Hopper number.
     * This is used for denominate hopper to dispense a card.
     * (e.g TIT Card Dispesner have 8 SUPPLYBIN and 2 RETAINBIN. 9: Front Retain Box / Hopper 10: Rear Retain Box)
     */
    HopperNumber: string;
    /**
     * Card's product code number
     */
    ProductCode: string;
}
/**
 * This is a field in [[AllDeviceStatusResponse]],
 * which is a response to getAllDeviceStatus method in the [[Common]] class.

 */
export declare class CardDispenserStatusResponse extends AbstractDeviceStatusResponse {
    /**
     * PRESENT,NOTPRESENT,ENTERING,JAMMED,UNKNOWN
     */
    MediaStatus: MediaStatus | null;
    /**
     * FULL,LOW,OUT,UNKNOWN,NOTSUPP
     */
    TonerStatus: TonerStatus | null;
    /**
     * CardDispenser's hopper informations
     */
    CardDispenserHopperInfoList: Array<CardDispenserHopperInfo>;
}
/**
 * This is a field in [[AllDeviceStatusResponse]],
 * which is a response to getAllDeviceStatus method in the [[Common]] class.

 */
export declare class IDScannerStatusResponse extends AbstractDeviceStatusResponse {
    /**
     * The status of the id scanner
     * e.g. PRESENT,NOTPRESENT,ENTERING,JAMMED,UNKNOWN
     */
    MediaStatus: MediaStatus | null;
    /**
     * The status of the retract bin
     * e.g. OK,FULL,HIGH,UNKNOWN,NOTSUPP
     */
    RetainBinStatus: RetractBinStatus | null;
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.

 */
export declare class DocumentScannerStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]],
 * which is a response to getAllDeviceStatus method in the [[Common]] class.

 */
export declare class DocumentPrinterStatusResponse extends AbstractDeviceStatusResponse {
    /**
     * e.g. FULL,LOW,OUT,UNKNOWN,NOTSUPP
     */
    PaperStatus: PaperStatus | null;
    /**
     * e.g. FULL,LOW,OUT,UNKNOWN,NOTSUPP
     */
    TonerStatus: TonerStatus | null;
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.

 */
export declare class PassportScannerStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.

 */
export declare class IDReaderStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.

 */
export declare class RFIDReaderStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.

 */
export declare class SignpadStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This is a field in [[AllDeviceStatusResponse]], which is a response to getAllDeviceStatus method in the [[Common]] class.

 */
export declare class BarcodeReaderStatusResponse extends AbstractDeviceStatusResponse {
}
/**
 * This response occurs when the new card is dispensed from the card dispenser.

 */
export declare class DispenseCardCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This response occurs when the image is read.
 * It is sent as a response to the [[readImage]] method of the [[DocumentScanner]], [[IDScanner]], [[PassportScanner]]or [[Signpad]] class.

 */
export declare class ReadImageCompleted extends TaskResponse {
    /**
     * Image data in base64 string format
     */
    ImageData: string;
    /**
     * Image data in base64 string format
     */
    ImageData2: string;
    /**
     * Additional OCR data for passport scanners only
     */
    ReadData: string;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This response occurs when the data is read.
 * It is sent as a response to the [[readBarCode]] method of the [[BarcodeReader]] class,
 * the [[tagEKTP]], [[scanFinger]], or [[verification]] method of the [[EKTPReader]] class,
 * or the [[readData]] method of the [[RFIDReader]] class.
 */
export declare class ReadDataCompleted extends TaskResponse {
    /**
     * Image data in base64 string format
     */
    ReadData: string;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This response occurs when the data is printed.
 * It is sent as a response to the {@link printData} method of the {@link DocumentPrinter} class,
 * {@link printCard} method of the {@link CardDispenser} class,
 * {@link GetTokenCompletedint} method of the {@link Receipt} class.
 */
export declare class PrintDataCompleted extends TaskResponse {
}
/**
 * This response occurs when the image is printed.
 * It is sent as a response to the {@link DocumentPrinter.printImage} method of the {@link DocumentPrinter} class.
 */
export declare class PrintImageCompleted extends TaskResponse {
}
/**
 * This response occurs when the device is ready to execute the command.
 * It is sent as a response to all commands.
 * If [[Detail]] is [[ERROR]], the screen should be redirected to the error screen.
 */
export declare class CommandReadyCompleted extends TaskResponse {
}
/**
 * This response is sent when the transaction is ready to start.
 * It is also the response to the sendTransactionStart method for the [[Transaction]] class.
 */
export declare class TransactionStartResponse extends TaskResponse {
    /**
     * Transaction Type
     */
    TransactionType: TransactionType;
}
/**
 * This response is sent when the transaction is ready to start.
 * It is also the response to the sendTransactionEnd method for the [[Transaction]] class.
 */
export declare class TransactionEndResponse extends TaskResponse {
    /**
     * Transaction Type
     */
    TransactionType: TransactionType;
    /**
     * Non-NDC transaction continuous  after NDC transaction ends
     */
    ContinueTransaction: StringBoolean;
}
/**
 * This response occurs when the status of NDC Switch inquired.
 * It is sent as a response to the [[getNDCStatus]] method of the [[Common]] class.
 */
export declare class GetNDCStatusResponse extends TaskResponse {
    /**
     * NDC Transaction Availability
     */
    IsAvailable: StringBoolean;
}
/**
 * This response occurs when the status of NDC Switch inquired.
 * It is sent as a response to the [[SetGuideLight]] method of the [[GuideLights]] class.
 */
export declare class SetGuideLightCompleted extends TaskResponse {
}
/**
 * This is the response to getConfig method of [[Terminal]] class
 * so it contains the configuration information of the ATM.
 */
export declare class DeviceConfigResponse extends TaskResponse {
    ApplicationVersion: string;
    /**
     * the configured number of the machine
     */
    MachineNumber: string;
    /**
     * the type of Card Reader device.
     */
    CardReaderType: CardReaderType;
    /**
     * the type of Cash Dispenser device.
     */
    CashDispenserType: CashDispenserType;
    /**
     * the type of Cash Acceptor device.
     */
    CashAcceptorType: CashAcceptorType;
    /**
     * the RF Mode.
     */
    NFCReaderType: NFCReaderType;
    /**
     * the type of Finger Printer device.
     */
    FingerprintReaderType: FingerprintReaderType;
    /**
     * the type of Receipt Printer device.
     */
    ReceiptPrinterType: ReceiptPrinterType;
    /**
     * the width of the screen in pixels.
     */
    ResolutionWidth: string;
    /**
     * the height of the screen in pixels.
     */
    ResolutionHeight: string;
    /**
     * the X location of the screen.
     */
    LocationX: string;
    /**
     * the Y location of the screen.
     */
    LocationY: string;
    /**
     *
     */
    HelpActive: string;
    /**
     * Webcam device name
     */
    VideoDeviceName: string;
    /**
     * Sound output device name (default)
     */
    AudioDeviceName: string;
    /**
     * Sound output device name (handset)
     */
    SecondaryAudioDeviceName: string;
    /**
     * Mic output device name (default)
     */
    MicDeviceName: string;
    /**
     * Mic output device name (handset)
     */
    SecondaryMicDeviceName: string;
    /**
     * Mic output device volume
     */
    MicVolume: string;
    /**
     * Partner id (for KiOpsPay configuration)
     */
    PartnerID: string;
    /**
     * EPPSerialNumber
     */
    EPPSerialNumber: string;
    /**
     * RemoteKeyLoaded
     */
    RemoteKeyLoaded: string;
}
/**
 * This is the response to `reset` method of all device.
 */
export declare class ResetDeviceCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This is the response to `reset` method of Cash Acceptor.
 */
export declare class CashAcceptorResetDeviceCompleted extends TaskResponse {
    /**
     * When a fake note is deposited, information regarding the fake note.
     */
    FakeNoteList?: Array<FakeNoteInfo> | null;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This is the response to chipInitialize.
 */
export declare class ChipInitializeCompleted extends TaskResponse {
    /**
     *
     */
    AutomaticICCApplicationSelectionFlag: boolean;
    /**
     *
     */
    SelectedAIDIndex: number;
    /**
     * None, NotPerformed, InitialFail, BuildFail, Success, FallBack
     */
    BuildListResult: BuildListResultType;
    /**
     *
     */
    AppCount: number;
    /**
     *
     */
    AppSelectResult: AppSelectResultType;
    /**
     * VISA, Master, Link etc.
     */
    AppDisplayNames: Array<string>;
    /**
     * A00000002401, A0000000291010, A0000000031010
     */
    AppAIDList: Array<string>;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This is the response to chipReInitialize.
 */
export declare class ChipReInitializeCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This is the response to select App.
 */
export declare class SelectAppCompleted extends TaskResponse {
    /**
     *
     */
    AppSelectResult: string;
    /**
     * VISA, Master, Link etc.
     */
    AppName: string;
    /**
     * A00000002401, A0000000291010, A0000000031010
     */
    AppAID: string;
    /**
     *
     */
    FITMatch: boolean;
    /**
     * EN, VN etc.
     */
    Language: string;
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This is the response to {@link CardReader.setICCTransactionData} function.
 */
export declare class TransactionResponse extends TaskResponse {
}
/**
 * Get Api token response
 */
export declare class GetApiTokenCompleted extends TaskResponse {
    Token: string;
}
/**
 * This is the response to print method of DocumentPrinter.
 */
export declare class PrintCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * This is the response to {@link Certification.#setKey} function.
 */
export declare class SetKeyCompleted extends TaskResponse {
}
/**
 * This is the response to {@link Certification.getToken} function.
 */
export declare class GetTokenCompleted extends TaskResponse {
    AccessToken?: string;
    RefreshToken?: string;
}
/**
 * This is the response to {@link Certification.#generateKey} function.
 */
export declare class GenerateKeyCompleted extends TaskResponse {
    PublicKey?: string;
}
/**
 * This is the response to {@link Certification.getToken} function.
 */
export declare class ValidTokenResponse extends TaskResponse {
}
/**
 * This is the response depends on encrpyiton result.
 */
export declare class EncryptionCompleted extends TaskResponse {
    TransactionDetail?: string;
}
/**
 * This is the response when transaction is started by core.
 */
export declare class TransactionStartRequest extends TaskResponse {
    TransactionType?: string;
    TransactionName?: string;
    SelectedLanguage?: string;
    DateTime?: string;
    TaskTimeout?: string;
    Token?: string;
}
/**
 * This is the response to {@link Common.getSectionDataList} function.
 */
export declare class SectionDictionary extends TaskResponse {
    SectionInfoList?: Array<SectionInfo>;
}
/**
 * The response from a media eject.
 */
export declare class EjectMediaCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
export declare class DeviceStatusResponse extends TaskResponse {
    DocumentScanner?: boolean;
    Camera?: boolean;
    CardDispenser31?: boolean;
    CardPrinter?: boolean;
    CardReader?: boolean;
    CashAcceptor?: boolean;
    CashDispenser?: boolean;
    CheckAcceptor?: boolean;
    CoinAcceptor?: boolean;
    CoinDispenser?: boolean;
    CoinDispenser2?: boolean;
    FingerPrintScanner?: boolean;
    Depository?: boolean;
    Doors?: boolean;
    IDReader?: boolean;
    IDScanner?: boolean;
    JournalPrinter?: boolean;
    MixedMediaAcceptor?: boolean;
    PalmVein?: boolean;
    PassportScanner?: boolean;
    Pinpad?: boolean;
    ReceiptPrinter?: boolean;
    RFIDReader?: boolean;
    ScannerPrinter?: boolean;
    Sensors?: boolean;
    Signpad?: boolean;
    DocumentPrinter?: boolean;
}
/**
 * This response is sent when request to transmit NDC message from frontend to core.
 * It is also the response to the sendNDCHostRequest method for the [[Transaction]] class.
 */
export declare class RecvFromNDCHostResponse extends TaskResponse {
    /**
     * NextState
     */
    NextState: string;
    /**
     * FID
     */
    FID: string;
    /**
     * If the data received from the host is inconsistent, it is rejected.
     * If this property is true, the transaction is canceled, so screen processing is required depending on whether the card is inserted or not.
     * (default: true)
     */
    IsRejected: boolean;
    /**
     * Screen display data sent from host
     */
    DisplayMessage: string;
    /**
     * Message type sent from host
     */
    ReceivedEventType: ReceivedEventType;
    /**
     * NeedICCReInit
     */
    NeedICCReInit: string;
}
/**
 * Response when 'I' state processing is completed.
 */
export declare class NDCHostSendResponse extends TaskResponse {
}
/**
 * Response when close state processing is completed.
 */
export declare class NDCCloseStateResponse extends TaskResponse {
}
/**
 * Response when close state processing is completed.
 */
export declare class ExecuteDeviceActionResponse extends TaskResponse {
    DeviceShortName: DeviceShortName;
    DeviceName: DeviceName;
    CommandName: CommandName;
}
/**
 * This is the response that indicates the current status of the door.
 */
export declare class DoorStatusResponse extends TaskResponse {
    /**
     * DEVONLINE,DEVOFFLINE,DEVHWERROR,NOTSUPP
     */
    Status: DoorStatus;
    /**
     * OPEN,CLOSE,UNKNOWN,NOTSUPP
     */
    SafeDoorStatus: SafeDoorStatus;
    /**
     * OPEN,CLOSE,UNKNOWN,NOTSUPP
     */
    CabinetDoorStatus: CabinetDoorStatus;
}
/**
 * This is the response that checks whether the desired amount can be dispensed.
 */
export declare class DenominateNoteCompleted extends TaskResponse {
    /**
     * It will set this property when DeviceStatus is HWERROR.
     */
    ErrorCode: string | null;
}
/**
 * Response about `{@link CardReader.EMVOnlineApproval}` function.
 */
export declare class EMVOnlineApprovalResponse extends TaskResponse {
}
/**
 * Response about `{@link CardReader.EMVGetTLVData}` function.
 */
export declare class EMVTLVDataResponse extends TaskResponse {
    TLVDataList: Array<TLVDataInfo>;
}
/**
 * Response about `{@link CardReader.EMVSetTLVData}` function.
 */
export declare class EMVSetTLVDataResponse extends TaskResponse {
    SetTLVResultList: Array<SetTLVResultInfo>;
}
/**
 * Response about `{@link CardReader.EMVGetAcquireCID}` function.
 */
export declare class EMVGetAcquireCIDRepsponse extends TaskResponse {
    AcquireList: Array<string>;
}
/**
 * Response about `{@link CardReader.EMVSetAcquireCID}` function.
 */
export declare class EMVSetAcquireCIDRepsponse extends TaskResponse {
}
/**
 * Response about `{@link Camera.capture}` function.
 */
export declare class CaptureImageCompleted extends TaskResponse {
    /**
     * Base64
     */
    PictureData: string;
}
/**
 * Response about `{@link CardReader.EMVGenerateARQC}` function.
 */
export declare class EMVGenerateARQCResponse extends TaskResponse {
    /**
     * OK, Error
     */
    ARQCResult: ARQCResultType;
}
/**
 * Response about `{@link CashDispenser.presentNote}` function.
 */
export declare class PresentNoteCompleted extends TaskResponse {
}
