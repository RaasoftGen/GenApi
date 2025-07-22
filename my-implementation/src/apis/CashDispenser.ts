import DeviceBase from './DeviceBase';
import { CashDispenserStatusResponse } from '../models';
import { ResetActionType } from '../enums';

/**
 * @group API
 * @description This class consists of functions related to the withdrawal transaction such as `dispenseByAmount`, `retractNote` etc.
 * Most methods are asynchronous so the caller should register a callback function to receive the corresponding response to those asynchronous functions by using
 * `addListener` before calling a method or pass the callback function as a parameter.
 * Also, when it finishes controlling the transaction, it should `removeListener` to stop receiving responses.
 */
export default class CashDispenser extends DeviceBase {
  constructor() {
    super('CashDispenser');
  }

  protected othersEventCallback(obj: any): boolean {
    // Handle cash dispenser specific events
    switch (obj.Command) {
      case 'ItemsPresented':
        console.log('Cash presented to customer:', obj);
        return true;
      case 'DispenseNoteCompleted':
        console.log('Dispense operation completed:', obj);
        return true;
      case 'ItemsTaken':
        console.log('Cash taken by customer:', obj);
        return true;
      case 'RetractNoteCompleted':
        console.log('Retract operation completed:', obj);
        return true;
      case 'DenominateNoteCompleted':
        console.log('Denomination check completed:', obj);
        return true;
      case 'PresentNoteCompleted':
        console.log('Present note completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function that commands the withdraw to request amount.
   * As the result of the operation, an `ItemsPresented` and `DispenseNoteCompleted` response will be sent.
   * when dispensing cash is completed and the ATM is waiting for a customer to take the cash.
   * When the customer takes the bills, an `ItemsTaken` response is sent.
   * If the customer does not take the cash after a certain amount of time,
   * an `ItemsTaken` is sent with additional information in `Detail` field and cash will be retracted.
   *
   * @param amount - The amount to be dispensed.
   * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
   * @param present - Decide whether immediately present notes after dispense. (default: true)
   */
  public dispenseByAmount({
    amount,
    takeNoteTimeout = 0,
    present = true
  }: {
    amount: number;
    takeNoteTimeout?: number;
    present?: boolean;
  }): void {
    this.sendCommand('DispenseByAmount', {
      amount,
      takeNoteTimeout,
      present
    });
  }

  /**
   * A function that commands the withdraw to request count array.
   * As the result of the operation, an `ItemsPresented` and `DispenseNoteCompleted` response will be sent.
   * when dispensing cash is completed and the ATM is waiting for a customer to take the cash.
   * When the customer takes the bills, an `ItemsTaken` response is sent.
   * If the customer does not take the cash after a certain amount of time,
   * an `ItemsTaken` is sent with additional information in `Detail` field and cash will be retracted.
   *
   * @param count - The count list.
   * @param takeNoteTimeout - Take note timeout (default: 0 / milliseconds / 0 means timeout infinity)
   * @param present - Decide whether immediately present notes after dispense. (default: true)
   */
  public dispenseByCount({
    count,
    takeNoteTimeout = 0,
    present = true
  }: {
    count: Array<number>;
    takeNoteTimeout?: number;
    present?: boolean;
  }): void {
    this.sendCommand('DispenseByCount', {
      count,
      takeNoteTimeout,
      present
    });
  }

  /**
   * A function to retract notes dispenser device.
   * For example, if `retractNote` method is operating, the `RetractNoteCompleted` event will be sent.
   */
  public retractNote(): void {
    this.sendCommand('RetractNote');
  }

  /**
   * A function to reset cash dispenser device.
   * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
   *
   * @param action - Define device reset action.
   */
  public reset(action: ResetActionType): void {
    this.sendCommand('ResetDevice', { action });
  }

  /**
   * A function to get the status information of cash dispenser device.
   *
   * @param cashDispenserStatusEventCallback - The callback function to receive the response
   */
  public getStatus(cashDispenserStatusEventCallback: (obj: CashDispenserStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'CashDispenserStatusResponse') {
        cashDispenserStatusEventCallback(response as CashDispenserStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }

  /**
   * This function checks whether the desired amount can be dispensed.
   * For example, if `isAmountDispensable` method is operating, the `DenominateNoteCompleted` event will be sent.
   *
   * @param amount - This is the amount to check whether dispensing is possible.
   */
  public isAmountDispensable(amount: number): void {
    this.sendCommand('IsAmountDispensable', { amount });
  }

  /**
   * This function checks whether the desired cassette count can be dispensed.
   * For example, if `isCountDispensable` method is operating, the `DenominateNoteCompleted` event will be sent.
   *
   * @param counts - This is to check whether each cassette has a dispensable count.
   */
  public isCountDispensable(counts: Array<number>): void {
    this.sendCommand('IsCountDispensable', { counts });
  }

  /**
   * A function to present dispensed note using dispenseByAmount or dispenseByCounts.
   * For example, if `presentNote` method is operating, the `PresentNoteCompleted` event will be sent.
   *
   * @param timeout - Timeout for take note. (default: 0 millisecond, which means infinity)
   */
  public presentNote(timeout: number = 0): void {
    this.sendCommand('PresentNote', { timeout });
  }
}
