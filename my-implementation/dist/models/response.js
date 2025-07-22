import { DeviceStatus, ResponseDetailInfo } from '../enums';
export class AbstractResponse {
    constructor(command, detail = ResponseDetailInfo.OK) {
        this.Command = command;
        this.Detail = detail;
        this.RequestId = '';
        this.Timestamp = new Date();
    }
}
export class TaskResponse extends AbstractResponse {
    constructor(command, detail = ResponseDetailInfo.OK) {
        super(command, detail);
    }
}
export class AbstractDeviceStatusResponse extends TaskResponse {
    constructor(command) {
        super(command);
        this.DeviceStatus = DeviceStatus.UNKNOWN;
        this.IsAvailable = null;
        this.ExtraStatuses = [];
    }
}
export class ExtraStatus {
    constructor(key, value) {
        this.Key = key;
        this.Value = value;
    }
}
export class ReceiptPrinterStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('ReceiptPrinterStatusResponse');
    }
}
export class CashDispenserStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('CashDispenserStatusResponse');
        this.CassetteStatus = '';
        this.StackerStatus = '';
    }
}
export class CashAcceptorStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('CashAcceptorStatusResponse');
        this.AcceptorStatus = '';
        this.StackerStatus = '';
    }
}
export class PinPadStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('PinPadStatusResponse');
        this.EncryptionStatus = '';
    }
}
export class CameraStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('CameraStatusResponse');
        this.CameraStatus = '';
    }
}
export class CardDispenserStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('CardDispenserStatusResponse');
        this.MediaStatus = '';
    }
}
export class BarcodeReaderStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('BarcodeReaderStatusResponse');
        this.ScannerStatus = '';
    }
}
export class FingerprintStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('FingerprintStatusResponse');
        this.ScannerStatus = '';
    }
}
export class DocumentScannerStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('DocumentScannerStatusResponse');
        this.ScannerStatus = '';
    }
}
export class DocumentPrinterStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('DocumentPrinterStatusResponse');
        this.PrinterStatus = '';
    }
}
export class IDScannerStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('IDScannerStatusResponse');
        this.ScannerStatus = '';
    }
}
export class PassportScannerStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('PassportScannerStatusResponse');
        this.ScannerStatus = '';
    }
}
export class RFIDReaderStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('RFIDReaderStatusResponse');
        this.ReaderStatus = '';
    }
}
export class SignpadStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('SignpadStatusResponse');
        this.PadStatus = '';
    }
}
export class PalmveinScannerStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('PalmveinScannerStatusResponse');
        this.ScannerStatus = '';
    }
}
export class EKTPReaderStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('EKTPReaderStatusResponse');
        this.ReaderStatus = '';
    }
}
export class ChecksAcceptorStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('ChecksAcceptorStatusResponse');
        this.AcceptorStatus = '';
    }
}
export class VoiceGuidanceStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('VoiceGuidanceStatusResponse');
        this.SpeakerStatus = '';
    }
}
export class TerminalStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('TerminalStatusResponse');
        this.TerminalStatus = '';
        this.ConnectionStatus = '';
    }
}
export class CardReaderStatusResponse extends AbstractDeviceStatusResponse {
    constructor() {
        super('CardReaderStatusResponse');
        this.MediaStatus = '';
        this.ChipStatus = '';
    }
}
export class AuthorizationResponse extends TaskResponse {
    constructor() {
        super('AuthorizationResponse');
        this.Machine = '';
        this.Code = '';
    }
}
//# sourceMappingURL=response.js.map