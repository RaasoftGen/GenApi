export declare class EventBus {
    private events;
    on(eventName: string, callback: Function): void;
    emit(eventName: string, ...args: any[]): boolean;
    off(eventName: string, callback?: Function): boolean;
    offAll(): void;
}
export declare class EventBusHandler {
    private eventBus;
    constructor();
    sendEvent(eventName: string, ...args: any[]): void;
    addEventListener(eventName: string, callback: Function, removeExisting?: boolean): void;
    removeEventListener(eventName: string, callback?: Function): void;
    removeAllEventListener(): void;
}
export declare class MessageFormat {
    Header: string;
    Payload: any;
    IsEncrypt: boolean;
    Token: string;
    constructor(header: string, payload: any, isEncrypt?: boolean, token?: string);
}
export declare class WARPJsonFormat {
    Name: string;
    Tag: string;
    DataParameter: any;
    constructor(name: string, tag: string, dataParameter: any);
}
export declare class Caller {
    name: string;
    callBack: Function;
    constructor(name: string, callback: Function);
}
export declare function generateUUID(): string;
//# sourceMappingURL=index.d.ts.map