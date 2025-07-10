import { CardDispenserStatusResponse } from '../models';
import DeviceBase from './DeviceBase';
import { ResetActionType } from '../enums';
/**
 * @group API
 * @description This class controls the card dispenser device in an ATM.
 * To control the card dispenser, this class consists of event listeners and card dispenser control commands
 * such as `{@link dispense}`, `{@link readCard}`, `{@link printCard}`, etc.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * `{@link addListener}` before calling a method. Also, when it finishes controlling the device,
 * it should `{@link removeListener}` to stop receiving responses.
 */
export default class CardDispenser extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to dispense a card.
     * When dispensing a card is completed, the response {@link DispenseCardCompleted} will be passed to the registered callback function.
     *
     * @param hopperNumber - Hopper number of card dispenser issuing card
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    dispense(hopperNumber: number, timeout?: number): void;
    /**
     * A function to read the card information for the dispensed card.
     * When reading the card information is completed, the response `{@link CardReadCompleted}` will be passed
     * to the registered callback function.
     */
    readCard(): void;
    /**
     * A function to print data on the dispensed card.
     * When printing data is completed, the response {@link PrintDataCompleted} will be passed to the registered callback function.
     *
     * @param printData - The data to print on the issued card
     * @param printData2 - The data to print on the issued card
     */
    printCard(printData: string, printData2?: string): void;
    /**
     * A function to eject dispensed card.
     * When the card is ejected, a {@link EjectCardCompleted} response will be sent.
     * When the card is taken, a {@link MediaTaken} response will be sent.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    ejectCard(timeout?: number): void;
    /**
     * A function to retract a card when a customer does not take the ejected card.
     * As the result of the operation, a {@link RetractCardCompleted} response will be passed to the `{@link dataCallback}` function.
     *
     * @param binNumber - retract bin num (null or 9 or 1o).
     */
    retractCard(binNumber?: number): void;
    /**
     * A function to reset Card Dispenser device.
     * For example, if {@link reset} method is operating, the {@link ResetDeviceCompleted} event will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action: ResetActionType): void;
    /**
     * A function to get the status information of card dispenser device.
     *
     * @param cardDispenserStatusEventCallback - The callback function to receive the {@link CardDispenserStatusResponse} as the result of the operation.
     */
    getStatus(cardDispenserStatusEventCallback: (obj: CardDispenserStatusResponse) => void): void;
}
