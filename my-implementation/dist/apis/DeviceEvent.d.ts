import DeviceBase from './DeviceBase';
export interface DeviceEventData {
    deviceType: string;
    eventType: string;
    timestamp: string;
    data?: any;
}
export interface EventFilter {
    deviceTypes?: string[];
    eventTypes?: string[];
    startTime?: string;
    endTime?: string;
}
/**
 * @group API
 * @description This class handles device events and event management across all ATM devices.
 */
export default class DeviceEvent extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to subscribe to device events.
     */
    subscribe(filter?: EventFilter): void;
    /**
     * A function to unsubscribe from device events.
     */
    unsubscribe(): void;
    /**
     * A function to get event history.
     */
    getEventHistory(filter?: EventFilter): void;
    /**
     * A function to clear event history.
     */
    clearEventHistory(): void;
    /**
     * A function to set event filter.
     */
    setEventFilter(filter: EventFilter): void;
    /**
     * A function to get current event filter.
     */
    getEventFilter(): void;
    /**
     * A function to trigger a custom device event.
     */
    triggerEvent(eventData: DeviceEventData): void;
}
//# sourceMappingURL=DeviceEvent.d.ts.map