// Core enums based on the original @warp/api2 analysis

export enum DeviceStatus {
  ONLINE = 'ONLINE',
  POWEREDOFF = 'POWEREDOFF',
  NODEVICE = 'NODEVICE',
  HWERROR = 'HWERROR',
  NOCARD = 'NOCARD',
  NOTSUPP = 'NOTSUPP',
  UNKNOWN = 'UNKNOWN'
}

export enum ResponseDetailInfo {
  OK = 'OK',
  ERROR = 'ERROR',
  FULL = 'FULL',
  RETRACTCASH = 'OK|RETRACTED_CASH',
  TIMEOUT = 'TIMEOUT',
  PRESENT = 'PRESENT',
  NOTPRESENT = 'NOTPRESENT',
  CANCELLED = 'CANCELLED',
  INCORRECTPIN = 'INCORRECTPIN',
  MISMATCHPIN = 'MISMATCHPIN',
  RETRACT = 'RETRACT',
  REFUSED = 'REFUSED',
  WRONGPIN = 'WRONGPIN3TIMES',
  INSUFFICIENTBALANCE = 'INSUFFICIENTBALANCE'
}

export enum ResetActionType {
  RETAIN = 'RETAIN',
  EJECT = 'EJECT'
}

export enum ServiceState {
  OFFLINE = 'OFFLINE',
  INSERVICE = 'IN_SERVICE',
  INSUPERVISOR = 'IN_SUPERVISOR',
  OUTOFSERVICE = 'OUT_OF_SERVICE',
  PENDING = 'PENDING'
}

export enum WebSocketEvents {
  WebSocketConnectionEvent = 'SubscribeEvents|webSocketConnectionEvent',
  OnConnectToWARPCore = 'OnConnectToWARPCore',
  OnDisconnectToWARPCore = 'OnDisconnectToWARPCore'
}

export enum CoreAPIResponseCommand {
  TaskResponse = 'TaskResponse',
  ModeResponse = 'ModeResponse',
  CardReadCompleted = 'CardReadCompleted',
  PinEntryCompleted = 'PinEntryCompleted',
  ItemsPresented = 'ItemsPresented',
  DispenseNoteCompleted = 'DispenseNoteCompleted',
  ItemsTaken = 'ItemsTaken',
  TaskCompleted = 'TaskCompleted',
  TaskCanceled = 'TaskCanceled',
  TaskTimeout = 'TaskTimeout',
  TaskError = 'TaskError',
  PrintCompleted = 'PrintCompleted',
  EjectMediaCompleted = 'EjectMediaCompleted',
  ResetDeviceCompleted = 'ResetDeviceCompleted',
  AuthorizationResponse = 'AuthorizationResponse',
  TransactionReady = 'TransactionReady'
}

export enum DeviceName {
  CardReader = 'CardReader',
  CashDispenser = 'CashDispenser',
  CashAcceptor = 'CashAcceptor',
  ReceiptPrinter = 'ReceiptPrinter',
  PinPad = 'PinPad',
  Camera = 'Camera',
  Fingerprint = 'Fingerprint',
  BarcodeReader = 'BarcodeReader'
}

export enum StringBoolean {
  True = 'True',
  False = 'False'
}

export enum MediaStatus {
  PRESENT = 'PRESENT',
  NOTPRESENT = 'NOTPRESENT',
  JAMMED = 'JAMMED',
  ENTERING = 'ENTERING',
  UNKNOWN = 'UNKNOWN',
  EXITING = 'EXITING'
}
