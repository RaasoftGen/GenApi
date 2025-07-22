import { v4 as uuidv4 } from 'uuid';

export class EventBus {
  private events: { [key: string]: Function[] } = {};

  on(eventName: string, callback: Function): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName: string, ...args: any[]): boolean {
    const callbacks = this.events[eventName];
    if (!callbacks || callbacks.length === 0) {
      return false;
    }

    for (const callback of callbacks) {
      callback(...args);
    }
    return true;
  }

  off(eventName: string, callback?: Function): boolean {
    const callbacks = this.events[eventName];
    if (!callbacks || callbacks.length === 0) {
      return false;
    }

    if (callback) {
      for (let i = callbacks.length - 1; i >= 0; i--) {
        if (callbacks[i] === callback) {
          callbacks.splice(i, 1);
        }
      }
    } else {
      this.events[eventName].length = 0;
    }
    return true;
  }

  offAll(): void {
    Object.keys(this.events).forEach(eventName => {
      this.off(eventName);
    });
  }
}

export class EventBusHandler {
  private eventBus: EventBus;

  constructor() {
    this.eventBus = new EventBus();
  }

  sendEvent(eventName: string, ...args: any[]): void {
    this.eventBus.emit(eventName, ...args);
  }

  addEventListener(eventName: string, callback: Function, removeExisting: boolean = true): void {
    if (removeExisting) {
      this.eventBus.off(eventName, callback);
    }
    this.eventBus.on(eventName, callback);
  }

  removeEventListener(eventName: string, callback?: Function): void {
    this.eventBus.off(eventName, callback);
  }

  removeAllEventListener(): void {
    this.eventBus.offAll();
  }
}

export class MessageFormat {
  public Header: string;
  public Payload: any;
  public IsEncrypt: boolean;
  public Token: string;

  constructor(header: string, payload: any, isEncrypt: boolean = false, token: string = '') {
    this.Header = header;
    this.Payload = payload;
    this.IsEncrypt = isEncrypt;
    this.Token = token;
  }
}

export class WARPJsonFormat {
  public Name: string;
  public Tag: string;
  public DataParameter: any;

  constructor(name: string, tag: string, dataParameter: any) {
    this.Name = name;
    this.Tag = tag;
    this.DataParameter = dataParameter;
  }
}

export class Caller {
  public name: string;
  public callBack: Function;

  constructor(name: string, callback: Function) {
    this.name = name;
    this.callBack = callback;
  }
}

export function generateUUID(): string {
  return uuidv4();
}
