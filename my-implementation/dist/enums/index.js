// Core enums based on the original @warp/api2 analysis
export var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["ONLINE"] = "ONLINE";
    DeviceStatus["POWEREDOFF"] = "POWEREDOFF";
    DeviceStatus["NODEVICE"] = "NODEVICE";
    DeviceStatus["HWERROR"] = "HWERROR";
    DeviceStatus["NOCARD"] = "NOCARD";
    DeviceStatus["NOTSUPP"] = "NOTSUPP";
    DeviceStatus["UNKNOWN"] = "UNKNOWN";
})(DeviceStatus || (DeviceStatus = {}));
export var ResponseDetailInfo;
(function (ResponseDetailInfo) {
    ResponseDetailInfo["OK"] = "OK";
    ResponseDetailInfo["ERROR"] = "ERROR";
    ResponseDetailInfo["FULL"] = "FULL";
    ResponseDetailInfo["RETRACTCASH"] = "OK|RETRACTED_CASH";
    ResponseDetailInfo["TIMEOUT"] = "TIMEOUT";
    ResponseDetailInfo["PRESENT"] = "PRESENT";
    ResponseDetailInfo["NOTPRESENT"] = "NOTPRESENT";
    ResponseDetailInfo["CANCELLED"] = "CANCELLED";
    ResponseDetailInfo["INCORRECTPIN"] = "INCORRECTPIN";
    ResponseDetailInfo["MISMATCHPIN"] = "MISMATCHPIN";
    ResponseDetailInfo["RETRACT"] = "RETRACT";
    ResponseDetailInfo["REFUSED"] = "REFUSED";
    ResponseDetailInfo["WRONGPIN"] = "WRONGPIN3TIMES";
    ResponseDetailInfo["INSUFFICIENTBALANCE"] = "INSUFFICIENTBALANCE";
})(ResponseDetailInfo || (ResponseDetailInfo = {}));
export var ResetActionType;
(function (ResetActionType) {
    ResetActionType["RETAIN"] = "RETAIN";
    ResetActionType["EJECT"] = "EJECT";
})(ResetActionType || (ResetActionType = {}));
export var ServiceState;
(function (ServiceState) {
    ServiceState["OFFLINE"] = "OFFLINE";
    ServiceState["INSERVICE"] = "IN_SERVICE";
    ServiceState["INSUPERVISOR"] = "IN_SUPERVISOR";
    ServiceState["OUTOFSERVICE"] = "OUT_OF_SERVICE";
    ServiceState["PENDING"] = "PENDING";
})(ServiceState || (ServiceState = {}));
export var WebSocketEvents;
(function (WebSocketEvents) {
    WebSocketEvents["WebSocketConnectionEvent"] = "SubscribeEvents|webSocketConnectionEvent";
    WebSocketEvents["OnConnectToWARPCore"] = "OnConnectToWARPCore";
    WebSocketEvents["OnDisconnectToWARPCore"] = "OnDisconnectToWARPCore";
})(WebSocketEvents || (WebSocketEvents = {}));
export var CoreAPIResponseCommand;
(function (CoreAPIResponseCommand) {
    CoreAPIResponseCommand["TaskResponse"] = "TaskResponse";
    CoreAPIResponseCommand["ModeResponse"] = "ModeResponse";
    CoreAPIResponseCommand["CardReadCompleted"] = "CardReadCompleted";
    CoreAPIResponseCommand["PinEntryCompleted"] = "PinEntryCompleted";
    CoreAPIResponseCommand["ItemsPresented"] = "ItemsPresented";
    CoreAPIResponseCommand["DispenseNoteCompleted"] = "DispenseNoteCompleted";
    CoreAPIResponseCommand["ItemsTaken"] = "ItemsTaken";
    CoreAPIResponseCommand["TaskCompleted"] = "TaskCompleted";
    CoreAPIResponseCommand["TaskCanceled"] = "TaskCanceled";
    CoreAPIResponseCommand["TaskTimeout"] = "TaskTimeout";
    CoreAPIResponseCommand["TaskError"] = "TaskError";
    CoreAPIResponseCommand["PrintCompleted"] = "PrintCompleted";
    CoreAPIResponseCommand["EjectMediaCompleted"] = "EjectMediaCompleted";
    CoreAPIResponseCommand["ResetDeviceCompleted"] = "ResetDeviceCompleted";
    CoreAPIResponseCommand["AuthorizationResponse"] = "AuthorizationResponse";
    CoreAPIResponseCommand["TransactionReady"] = "TransactionReady";
})(CoreAPIResponseCommand || (CoreAPIResponseCommand = {}));
export var DeviceName;
(function (DeviceName) {
    DeviceName["CardReader"] = "CardReader";
    DeviceName["CashDispenser"] = "CashDispenser";
    DeviceName["CashAcceptor"] = "CashAcceptor";
    DeviceName["ReceiptPrinter"] = "ReceiptPrinter";
    DeviceName["PinPad"] = "PinPad";
    DeviceName["Camera"] = "Camera";
    DeviceName["Fingerprint"] = "Fingerprint";
    DeviceName["BarcodeReader"] = "BarcodeReader";
})(DeviceName || (DeviceName = {}));
export var StringBoolean;
(function (StringBoolean) {
    StringBoolean["True"] = "True";
    StringBoolean["False"] = "False";
})(StringBoolean || (StringBoolean = {}));
export var MediaStatus;
(function (MediaStatus) {
    MediaStatus["PRESENT"] = "PRESENT";
    MediaStatus["NOTPRESENT"] = "NOTPRESENT";
    MediaStatus["JAMMED"] = "JAMMED";
    MediaStatus["ENTERING"] = "ENTERING";
    MediaStatus["UNKNOWN"] = "UNKNOWN";
    MediaStatus["EXITING"] = "EXITING";
})(MediaStatus || (MediaStatus = {}));
//# sourceMappingURL=index.js.map