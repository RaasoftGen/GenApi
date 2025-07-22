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
  constructor() {
    super('DeviceEvent');
  }

  protected othersEventCallback(obj: any): boolean {
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
  public subscribe(filter: EventFilter = {}): void {
    this.sendCommand('Subscribe', filter);
  }

  /**
   * A function to unsubscribe from device events.
   */
  public unsubscribe(): void {
    this.sendCommand('Unsubscribe');
  }

  /**
   * A function to get event history.
   */
  public getEventHistory(filter: EventFilter = {}): void {
    this.sendCommand('GetEventHistory', filter);
  }

  /**
   * A function to clear event history.
   */
  public clearEventHistory(): void {
    this.sendCommand('ClearEventHistory');
  }

  /**
   * A function to set event filter.
   */
  public setEventFilter(filter: EventFilter): void {
    this.sendCommand('SetEventFilter', filter);
  }

  /**
   * A function to get current event filter.
   */
  public getEventFilter(): void {
    this.sendCommand('GetEventFilter');
  }

  /**
   * A function to trigger a custom device event.
   */
  public triggerEvent(eventData: DeviceEventData): void {
    this.sendCommand('TriggerEvent', eventData);
  }
}
