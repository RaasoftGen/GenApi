import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class handles device events and event management across all ATM devices.
 */
export default class DeviceEvent extends DeviceBase {
    constructor() {
        super('DeviceEvent');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'DeviceEventOccurred':
                console.log('Device event occurred:', obj);
                return true;
            case 'EventFilterUpdated':
                console.log('Event filter updated:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to subscribe to device events.
     */
    subscribe(filter = {}) {
        this.sendCommand('Subscribe', filter);
    }
    /**
     * A function to unsubscribe from device events.
     */
    unsubscribe() {
        this.sendCommand('Unsubscribe');
    }
    /**
     * A function to get event history.
     */
    getEventHistory(filter = {}) {
        this.sendCommand('GetEventHistory', filter);
    }
    /**
     * A function to clear event history.
     */
    clearEventHistory() {
        this.sendCommand('ClearEventHistory');
    }
    /**
     * A function to set event filter.
     */
    setEventFilter(filter) {
        this.sendCommand('SetEventFilter', filter);
    }
    /**
     * A function to get current event filter.
     */
    getEventFilter() {
        this.sendCommand('GetEventFilter');
    }
    /**
     * A function to trigger a custom device event.
     */
    triggerEvent(eventData) {
        this.sendCommand('TriggerEvent', eventData);
    }
}
//# sourceMappingURL=DeviceEvent.js.map