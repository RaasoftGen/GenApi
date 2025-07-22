import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the card dispenser device in an ATM.
 * To control the device, this class consists of event listeners, control commands.
 * As the methods are asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `addListener` before calling a method.
 * When it finishes controlling the device, it should `removeListener` to stop receiving responses.
 */
export default class CardDispenser extends DeviceBase {
    constructor() {
        super('CardDispenser');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'DispenseCardCompleted':
                console.log('Card dispense completed:', obj);
                return true;
            case 'EjectMediaCompleted':
                console.log('Card eject completed:', obj);
                return true;
            case 'RetractCardCompleted':
                console.log('Card retract completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to dispense a card.
     */
    dispense() {
        this.sendCommand('DispenseCard');
    }
    /**
     * A function to eject the card.
     */
    eject() {
        this.sendCommand('EjectCard');
    }
    /**
     * A function to retract the card.
     */
    retract() {
        this.sendCommand('RetractCard');
    }
    /**
     * A function to reset card dispenser device.
     */
    reset(action) {
        this.sendCommand('ResetDevice', { action });
    }
    /**
     * A function to get the status information of card dispenser device.
     */
    getStatus(cardDispenserStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'CardDispenserStatusResponse') {
                cardDispenserStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=CardDispenser.js.map