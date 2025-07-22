import DeviceBase from './DeviceBase';
import { TerminalStatusResponse } from '../models';

export interface TerminalInfoParams {
  terminalId?: string;
  institutionId?: string;
  applicationId?: string;
}

/**
 * @group API
 * @description This class controls the terminal information and management.
 */
export default class Terminal extends DeviceBase {
  constructor() {
    super('Terminal');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'InitializeCompleted':
        console.log('Terminal initialize completed:', obj);
        return true;
      case 'ShutdownCompleted':
        console.log('Terminal shutdown completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to initialize the terminal.
   */
  public initialize(params: TerminalInfoParams = {}): void {
    this.sendCommand('Initialize', params);
  }

  /**
   * A function to shutdown the terminal.
   */
  public shutdown(): void {
    this.sendCommand('Shutdown');
  }

  /**
   * A function to restart the terminal.
   */
  public restart(): void {
    this.sendCommand('Restart');
  }

  /**
   * A function to get terminal information.
   */
  public getInfo(): void {
    this.sendCommand('GetInfo');
  }

  /**
   * A function to set terminal information.
   */
  public setInfo(params: TerminalInfoParams): void {
    this.sendCommand('SetInfo', params);
  }

  /**
   * A function to get the status information of terminal.
   */
  public getStatus(terminalStatusEventCallback: (obj: TerminalStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'TerminalStatusResponse') {
        terminalStatusEventCallback(response as TerminalStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
