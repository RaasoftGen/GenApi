declare class EventBusHandler {
    sendEvent(name: string, ...args: any[]): void;
    addEventListener(name: string, callback: (...args: any[]) => void, init?: boolean): void;
    removeEventListener(name: string, callback?: (...args: any[]) => void): void;
    removeAllEventListener(): void;
}
declare const _default: EventBusHandler;
export default _default;
