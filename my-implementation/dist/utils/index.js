import { v4 as uuidv4 } from 'uuid';
export class EventBus {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }
    emit(eventName, ...args) {
        const callbacks = this.events[eventName];
        if (!callbacks || callbacks.length === 0) {
            return false;
        }
        for (const callback of callbacks) {
            callback(...args);
        }
        return true;
    }
    off(eventName, callback) {
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
        }
        else {
            this.events[eventName].length = 0;
        }
        return true;
    }
    offAll() {
        Object.keys(this.events).forEach(eventName => {
            this.off(eventName);
        });
    }
}
export class EventBusHandler {
    constructor() {
        this.eventBus = new EventBus();
    }
    sendEvent(eventName, ...args) {
        this.eventBus.emit(eventName, ...args);
    }
    addEventListener(eventName, callback, removeExisting = true) {
        if (removeExisting) {
            this.eventBus.off(eventName, callback);
        }
        this.eventBus.on(eventName, callback);
    }
    removeEventListener(eventName, callback) {
        this.eventBus.off(eventName, callback);
    }
    removeAllEventListener() {
        this.eventBus.offAll();
    }
}
export class MessageFormat {
    constructor(header, payload, isEncrypt = false, token = '') {
        this.Header = header;
        this.Payload = payload;
        this.IsEncrypt = isEncrypt;
        this.Token = token;
    }
}
export class WARPJsonFormat {
    constructor(name, tag, dataParameter) {
        this.Name = name;
        this.Tag = tag;
        this.DataParameter = dataParameter;
    }
}
export class Caller {
    constructor(name, callback) {
        this.name = name;
        this.callBack = callback;
    }
}
export function generateUUID() {
    return uuidv4();
}
//# sourceMappingURL=index.js.map