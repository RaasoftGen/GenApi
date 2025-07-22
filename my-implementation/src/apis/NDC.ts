import DeviceBase from './DeviceBase';

export interface NDCCommand {
  command: string;
  data?: any;
}

export interface NDCState {
  stateNumber: string;
  nextState?: string;
  screenData?: string;
}

/**
 * @group API
 * @description This class handles NDC (Network Data Communication) protocol for ATM communication.
 */
export default class NDC extends DeviceBase {
  constructor() {
    super('NDC');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'NDCCommandReceived':
        console.log('NDC command received:', obj);
        return true;
      case 'NDCStateChanged':
        console.log('NDC state changed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to send NDC command.
   */
  public sendNDCCommand(command: NDCCommand): void {
    this.sendCommand('SendNDCCommand', command);
  }

  /**
   * A function to set NDC state.
   */
  public setState(state: NDCState): void {
    this.sendCommand('SetState', state);
  }

  /**
   * A function to get current NDC state.
   */
  public getState(): void {
    this.sendCommand('GetState');
  }

  /**
   * A function to process NDC message.
   */
  public processMessage(message: string): void {
    this.sendCommand('ProcessMessage', { message });
  }

  /**
   * A function to initialize NDC communication.
   */
  public initialize(): void {
    this.sendCommand('Initialize');
  }

  /**
   * A function to terminate NDC communication.
   */
  public terminate(): void {
    this.sendCommand('Terminate');
  }
}
