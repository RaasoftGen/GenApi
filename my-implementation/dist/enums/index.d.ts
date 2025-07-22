export declare enum DeviceStatus {
    ONLINE = "ONLINE",
    POWEREDOFF = "POWEREDOFF",
    NODEVICE = "NODEVICE",
    HWERROR = "HWERROR",
    NOCARD = "NOCARD",
    NOTSUPP = "NOTSUPP",
    UNKNOWN = "UNKNOWN"
}
export declare enum ResponseDetailInfo {
    OK = "OK",
    ERROR = "ERROR",
    FULL = "FULL",
    RETRACTCASH = "OK|RETRACTED_CASH",
    TIMEOUT = "TIMEOUT",
    PRESENT = "PRESENT",
    NOTPRESENT = "NOTPRESENT",
    CANCELLED = "CANCELLED",
    INCORRECTPIN = "INCORRECTPIN",
    MISMATCHPIN = "MISMATCHPIN",
    RETRACT = "RETRACT",
    REFUSED = "REFUSED",
    WRONGPIN = "WRONGPIN3TIMES",
    INSUFFICIENTBALANCE = "INSUFFICIENTBALANCE"
}
export declare enum ResetActionType {
    RETAIN = "RETAIN",
    EJECT = "EJECT"
}
export declare enum ServiceState {
    OFFLINE = "OFFLINE",
    INSERVICE = "IN_SERVICE",
    INSUPERVISOR = "IN_SUPERVISOR",
    OUTOFSERVICE = "OUT_OF_SERVICE",
    PENDING = "PENDING"
}
export declare enum WebSocketEvents {
    WebSocketConnectionEvent = "SubscribeEvents|webSocketConnectionEvent",
    OnConnectToWARPCore = "OnConnectToWARPCore",
    OnDisconnectToWARPCore = "OnDisconnectToWARPCore"
}
export declare enum CoreAPIResponseCommand {
    TaskResponse = "TaskResponse",
    ModeResponse = "ModeResponse",
    CardReadCompleted = "CardReadCompleted",
    PinEntryCompleted = "PinEntryCompleted",
    ItemsPresented = "ItemsPresented",
    DispenseNoteCompleted = "DispenseNoteCompleted",
    ItemsTaken = "ItemsTaken",
    TaskCompleted = "TaskCompleted",
    TaskCanceled = "TaskCanceled",
    TaskTimeout = "TaskTimeout",
    TaskError = "TaskError",
    PrintCompleted = "PrintCompleted",
    EjectMediaCompleted = "EjectMediaCompleted",
    ResetDeviceCompleted = "ResetDeviceCompleted",
    AuthorizationResponse = "AuthorizationResponse",
    TransactionReady = "TransactionReady"
}
export declare enum DeviceName {
    CardReader = "CardReader",
    CashDispenser = "CashDispenser",
    CashAcceptor = "CashAcceptor",
    ReceiptPrinter = "ReceiptPrinter",
    PinPad = "PinPad",
    Camera = "Camera",
    Fingerprint = "Fingerprint",
    BarcodeReader = "BarcodeReader"
}
export declare enum StringBoolean {
    True = "True",
    False = "False"
}
export declare enum MediaStatus {
    PRESENT = "PRESENT",
    NOTPRESENT = "NOTPRESENT",
    JAMMED = "JAMMED",
    ENTERING = "ENTERING",
    UNKNOWN = "UNKNOWN",
    EXITING = "EXITING"
}
//# sourceMappingURL=index.d.ts.map