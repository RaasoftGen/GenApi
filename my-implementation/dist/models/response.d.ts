import { DeviceStatus, StringBoolean, ResponseDetailInfo } from '../enums';
export declare abstract class AbstractResponse {
    Command: string;
    Detail: ResponseDetailInfo;
    RequestId: string;
    Timestamp: Date;
    constructor(command: string, detail?: ResponseDetailInfo);
}
export declare class TaskResponse extends AbstractResponse {
    constructor(command: string, detail?: ResponseDetailInfo);
}
export declare class AbstractDeviceStatusResponse extends TaskResponse {
    DeviceStatus: DeviceStatus;
    IsAvailable: StringBoolean | null;
    ExtraStatuses: Array<ExtraStatus>;
    constructor(command: string);
}
export declare class ExtraStatus {
    Key: string;
    Value: string;
    constructor(key: string, value: string);
}
export declare class ReceiptPrinterStatusResponse extends AbstractDeviceStatusResponse {
    constructor();
}
export declare class CashDispenserStatusResponse extends AbstractDeviceStatusResponse {
    CassetteStatus: string;
    StackerStatus: string;
    constructor();
}
export declare class CashAcceptorStatusResponse extends AbstractDeviceStatusResponse {
    AcceptorStatus: string;
    StackerStatus: string;
    constructor();
}
export declare class PinPadStatusResponse extends AbstractDeviceStatusResponse {
    EncryptionStatus: string;
    constructor();
}
export declare class CameraStatusResponse extends AbstractDeviceStatusResponse {
    CameraStatus: string;
    constructor();
}
export declare class CardDispenserStatusResponse extends AbstractDeviceStatusResponse {
    MediaStatus: string;
    constructor();
}
export declare class BarcodeReaderStatusResponse extends AbstractDeviceStatusResponse {
    ScannerStatus: string;
    constructor();
}
export declare class FingerprintStatusResponse extends AbstractDeviceStatusResponse {
    ScannerStatus: string;
    constructor();
}
export declare class DocumentScannerStatusResponse extends AbstractDeviceStatusResponse {
    ScannerStatus: string;
    constructor();
}
export declare class DocumentPrinterStatusResponse extends AbstractDeviceStatusResponse {
    PrinterStatus: string;
    constructor();
}
export declare class IDScannerStatusResponse extends AbstractDeviceStatusResponse {
    ScannerStatus: string;
    constructor();
}
export declare class PassportScannerStatusResponse extends AbstractDeviceStatusResponse {
    ScannerStatus: string;
    constructor();
}
export declare class RFIDReaderStatusResponse extends AbstractDeviceStatusResponse {
    ReaderStatus: string;
    constructor();
}
export declare class SignpadStatusResponse extends AbstractDeviceStatusResponse {
    PadStatus: string;
    constructor();
}
export declare class PalmveinScannerStatusResponse extends AbstractDeviceStatusResponse {
    ScannerStatus: string;
    constructor();
}
export declare class EKTPReaderStatusResponse extends AbstractDeviceStatusResponse {
    ReaderStatus: string;
    constructor();
}
export declare class ChecksAcceptorStatusResponse extends AbstractDeviceStatusResponse {
    AcceptorStatus: string;
    constructor();
}
export declare class VoiceGuidanceStatusResponse extends AbstractDeviceStatusResponse {
    SpeakerStatus: string;
    constructor();
}
export declare class TerminalStatusResponse extends AbstractDeviceStatusResponse {
    TerminalStatus: string;
    ConnectionStatus: string;
    constructor();
}
export declare class CardReaderStatusResponse extends AbstractDeviceStatusResponse {
    MediaStatus: string;
    ChipStatus: string;
    constructor();
}
export declare class AuthorizationResponse extends TaskResponse {
    Machine: string;
    Code: string;
    constructor();
}
//# sourceMappingURL=response.d.ts.map