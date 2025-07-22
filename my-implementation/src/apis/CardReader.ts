import DeviceBase from './DeviceBase';
import { CardReaderStatusResponse } from '../models';
import { ResetActionType } from '../enums';

/**
 * @group API
 * @description This class controls the card reader device in an ATM.
 * It handles card insertion, reading magnetic stripe and chip data, and card ejection.
 * As the methods are asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `addListener` before calling a method.
 * When it finishes controlling the device, it should `removeListener` to stop receiving responses.
 */
export default class CardReader extends DeviceBase {
  constructor() {
    super('CardReader');
  }

  protected othersEventCallback(obj: any): boolean {
    // Handle card reader specific events
    switch (obj.Command) {
      case 'CardReadCompleted':
        console.log('Card read completed:', obj);
        return true;
      case 'EjectCardCompleted':
        console.log('Card eject completed:', obj);
        return true;
      case 'RetractCardCompleted':
        console.log('Card retract completed:', obj);
        return true;
      case 'ChipInitializeCompleted':
        console.log('Chip initialize completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to read card data from magnetic stripe or chip.
   * As the result of reading, `CardReadCompleted` will be sent.
   *
   * @param timeout - Read timeout in milliseconds (default: 30000)
   * @param tracks - Which tracks to read (default: all tracks)
   */
  public readCard(timeout: number = 30000, tracks: string = 'AllTrack'): void {
    this.sendCommand('ReadCard', {
      timeout,
      tracks
    });
  }

  /**
   * A function to eject the card.
   * As the result of ejecting, `EjectCardCompleted` will be sent.
   */
  public ejectCard(): void {
    this.sendCommand('EjectCard');
  }

  /**
   * A function to retract the card.
   * As the result of retracting, `RetractCardCompleted` will be sent.
   */
  public retractCard(): void {
    this.sendCommand('RetractCard');
  }

  /**
   * A function to initialize chip card.
   * As the result of initialization, `ChipInitializeCompleted` will be sent.
   */
  public initializeChip(): void {
    this.sendCommand('ChipInitialize');
  }

  /**
   * A function to reset card reader device.
   * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
   *
   * @param action - Define device reset action.
   */
  public reset(action: ResetActionType): void {
    this.sendCommand('ResetDevice', { action });
  }

  /**
   * A function to get the status information of card reader device.
   *
   * @param cardReaderStatusEventCallback - The callback function to receive the response
   */
  public getStatus(cardReaderStatusEventCallback: (obj: CardReaderStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'CardReaderStatusResponse') {
        cardReaderStatusEventCallback(response as CardReaderStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }

  /**
   * A function to power on chip card.
   * As the result of power on, `ChipPowerCompleted` will be sent.
   */
  public chipPowerOn(): void {
    this.sendCommand('ChipPowerOn');
  }

  /**
   * A function to power off chip card.
   * As the result of power off, `ChipPowerCompleted` will be sent.
   */
  public chipPowerOff(): void {
    this.sendCommand('ChipPowerOff');
  }

  /**
   * A function to send APDU command to chip card.
   * As the result of APDU, `ChipIOCompleted` will be sent.
   *
   * @param apduCommand - APDU command in hex string format
   */
  public chipIO(apduCommand: string): void {
    this.sendCommand('ChipIO', { apduCommand });
  }
}
