import { DeviceStatus, StringBoolean, ResponseDetailInfo } from '../enums';

export abstract class AbstractResponse {
  public Command: string;
  public Detail: ResponseDetailInfo;
  public RequestId: string;
  public Timestamp: Date;

  constructor(command: string, detail: ResponseDetailInfo = ResponseDetailInfo.OK) {
    this.Command = command;
    this.Detail = detail;
    this.RequestId = '';
    this.Timestamp = new Date();
  }
}

export class TaskResponse extends AbstractResponse {
  constructor(command: string, detail: ResponseDetailInfo = ResponseDetailInfo.OK) {
    super(command, detail);
  }
}

export class AbstractDeviceStatusResponse extends TaskResponse {
  public DeviceStatus: DeviceStatus;
  public IsAvailable: StringBoolean | null;
  public ExtraStatuses: Array<ExtraStatus>;

  constructor(command: string) {
    super(command);
    this.DeviceStatus = DeviceStatus.UNKNOWN;
    this.IsAvailable = null;
    this.ExtraStatuses = [];
  }
}

export class ExtraStatus {
  public Key: string;
  public Value: string;

  constructor(key: string, value: string) {
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
  public CassetteStatus: string;
  public StackerStatus: string;
  
  constructor() {
    super('CashDispenserStatusResponse');
    this.CassetteStatus = '';
    this.StackerStatus = '';
  }
}

export class CashAcceptorStatusResponse extends AbstractDeviceStatusResponse {
  public AcceptorStatus: string;
  public StackerStatus: string;
  
  constructor() {
    super('CashAcceptorStatusResponse');
    this.AcceptorStatus = '';
    this.StackerStatus = '';
  }
}

export class PinPadStatusResponse extends AbstractDeviceStatusResponse {
  public EncryptionStatus: string;
  
  constructor() {
    super('PinPadStatusResponse');
    this.EncryptionStatus = '';
  }
}

export class CameraStatusResponse extends AbstractDeviceStatusResponse {
  public CameraStatus: string;
  
  constructor() {
    super('CameraStatusResponse');
    this.CameraStatus = '';
  }
}

export class CardDispenserStatusResponse extends AbstractDeviceStatusResponse {
  public MediaStatus: string;
  
  constructor() {
    super('CardDispenserStatusResponse');
    this.MediaStatus = '';
  }
}

export class BarcodeReaderStatusResponse extends AbstractDeviceStatusResponse {
  public ScannerStatus: string;
  
  constructor() {
    super('BarcodeReaderStatusResponse');
    this.ScannerStatus = '';
  }
}

export class FingerprintStatusResponse extends AbstractDeviceStatusResponse {
  public ScannerStatus: string;
  
  constructor() {
    super('FingerprintStatusResponse');
    this.ScannerStatus = '';
  }
}

export class DocumentScannerStatusResponse extends AbstractDeviceStatusResponse {
  public ScannerStatus: string;
  
  constructor() {
    super('DocumentScannerStatusResponse');
    this.ScannerStatus = '';
  }
}

export class DocumentPrinterStatusResponse extends AbstractDeviceStatusResponse {
  public PrinterStatus: string;
  
  constructor() {
    super('DocumentPrinterStatusResponse');
    this.PrinterStatus = '';
  }
}

export class IDScannerStatusResponse extends AbstractDeviceStatusResponse {
  public ScannerStatus: string;
  
  constructor() {
    super('IDScannerStatusResponse');
    this.ScannerStatus = '';
  }
}

export class PassportScannerStatusResponse extends AbstractDeviceStatusResponse {
  public ScannerStatus: string;
  
  constructor() {
    super('PassportScannerStatusResponse');
    this.ScannerStatus = '';
  }
}

export class RFIDReaderStatusResponse extends AbstractDeviceStatusResponse {
  public ReaderStatus: string;
  
  constructor() {
    super('RFIDReaderStatusResponse');
    this.ReaderStatus = '';
  }
}

export class SignpadStatusResponse extends AbstractDeviceStatusResponse {
  public PadStatus: string;
  
  constructor() {
    super('SignpadStatusResponse');
    this.PadStatus = '';
  }
}

export class PalmveinScannerStatusResponse extends AbstractDeviceStatusResponse {
  public ScannerStatus: string;
  
  constructor() {
    super('PalmveinScannerStatusResponse');
    this.ScannerStatus = '';
  }
}

export class EKTPReaderStatusResponse extends AbstractDeviceStatusResponse {
  public ReaderStatus: string;
  
  constructor() {
    super('EKTPReaderStatusResponse');
    this.ReaderStatus = '';
  }
}

export class ChecksAcceptorStatusResponse extends AbstractDeviceStatusResponse {
  public AcceptorStatus: string;
  
  constructor() {
    super('ChecksAcceptorStatusResponse');
    this.AcceptorStatus = '';
  }
}

export class VoiceGuidanceStatusResponse extends AbstractDeviceStatusResponse {
  public SpeakerStatus: string;
  
  constructor() {
    super('VoiceGuidanceStatusResponse');
    this.SpeakerStatus = '';
  }
}

export class TerminalStatusResponse extends AbstractDeviceStatusResponse {
  public TerminalStatus: string;
  public ConnectionStatus: string;
  
  constructor() {
    super('TerminalStatusResponse');
    this.TerminalStatus = '';
    this.ConnectionStatus = '';
  }
}

export class CardReaderStatusResponse extends AbstractDeviceStatusResponse {
  public MediaStatus: string;
  public ChipStatus: string;
  
  constructor() {
    super('CardReaderStatusResponse');
    this.MediaStatus = '';
    this.ChipStatus = '';
  }
}

export class AuthorizationResponse extends TaskResponse {
  public Machine: string;
  public Code: string;

  constructor() {
    super('AuthorizationResponse');
    this.Machine = '';
    this.Code = '';
  }
}
