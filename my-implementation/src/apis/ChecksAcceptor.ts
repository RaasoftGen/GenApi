import DeviceBase from './DeviceBase';
import { ChecksAcceptorStatusResponse } from '../models';

export interface AcceptChecksParams {
  timeout?: number;
  maxChecks?: number;
}

/**
 * @group API
 * @description This class controls the checks acceptor device in an ATM.
 */
export default class ChecksAcceptor extends DeviceBase {
  constructor() {
    super('ChecksAcceptor');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'AcceptCompleted':
        console.log('Checks accept completed:', obj);
        return true;
      case 'ReturnCompleted':
        console.log('Checks return completed:', obj);
        return true;
      case 'RetractCompleted':
        console.log('Checks retract completed:', obj);
        return true;
      case 'CommitCompleted':
        console.log('Checks commit completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to accept checks.
   */
  public accept(params: AcceptChecksParams = {}): void {
    this.sendCommand('Accept', params);
  }

  /**
   * A function to return checks to customer.
   */
  public return(): void {
    this.sendCommand('Return');
  }

  /**
   * A function to retract checks.
   */
  public retract(): void {
    this.sendCommand('Retract');
  }

  /**
   * A function to commit the checks transaction.
   */
  public commit(): void {
    this.sendCommand('Commit');
  }

  /**
   * A function to reset the checks acceptor.
   */
  public reset(): void {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of checks acceptor device.
   */
  public getStatus(checksAcceptorStatusEventCallback: (obj: ChecksAcceptorStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'ChecksAcceptorStatusResponse') {
        checksAcceptorStatusEventCallback(response as ChecksAcceptorStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
