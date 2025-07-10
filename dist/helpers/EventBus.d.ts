type EventHandler = (args?: any) => void;
interface Events {
    [key: string]: Array<EventHandler>;
}
declare class EventBus {
    events: Events;
    on(eventName: string, handler: EventHandler): void;
    emit(eventName: string, ...args: any[]): void | boolean;
    off(eventName: string, handler?: EventHandler): boolean | void;
    offAll(): boolean | void;
}
declare const _default: EventBus;
export default _default;
