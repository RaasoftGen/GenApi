import DeviceBase from './DeviceBase';
import { CardDispenserStatusResponse } from '../models';
import { ResetActionType } from '../enums';
/**
 * @group API
 * @description This class controls the card dispenser device in an ATM.
 * To control the device, this class consists of event listeners, control commands.
 * As the methods are asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `addListener` before calling a method.
 * When it finishes controlling the device, it should `removeListener` to stop receiving responses.
 */
export default class CardDispenser extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to dispense a card.
     */
    dispense(): void;
    /**
     * A function to eject the card.
     */
    eject(): void;
    /**
     * A function to retract the card.
     */
    retract(): void;
    /**
     * A function to reset card dispenser device.
     */
    reset(action: ResetActionType): void;
    /**
     * A function to get the status information of card dispenser device.
     */
    getStatus(cardDispenserStatusEventCallback: (obj: CardDispenserStatusResponse) => void): void;
}
//# sourceMappingURL=CardDispenser.d.ts.map