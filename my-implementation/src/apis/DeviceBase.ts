import { EventBusHandler, generateUUID } from '../utils';

/**
 * Base class for all ATM device controllers
 * This class provides common functionality like event handling and communication
 */
export default abstract class DeviceBase {
  protected className: string;
  private eventHandler: EventBusHandler;
  private dataCallback: ((data: any) => void) | null = null;

  protected constructor(className: string) {
    this.className = className;
    this.eventHandler = new EventBusHandler();
  }

  /**
   * Register a function to receive device events
   * @param dataCallback - Function to handle device responses
   */
  public addListener(dataCallback: (data: any) => void): void {
    this.dataCallback = dataCallback;
    this.eventHandler.addEventListener(this.className, dataCallback);
  }

  /**
   * Unregister the event listener
   */
  public removeListener(): void {
    if (this.dataCallback) {
      this.eventHandler.removeEventListener(this.className, this.dataCallback);
      this.dataCallback = null;
    }
  }

  /**
   * Send a command to the device
   * @param command - Command name
   * @param parameters - Command parameters
   */
  protected sendCommand(command: string, parameters: any = {}): void {
    const message = {
      Command: command,
      RequestId: generateUUID(),
      DeviceName: this.className,
      Timestamp: new Date().toISOString(),
      ...parameters
    };

    // This would be sent through the WebSocket connection
    console.log(`Sending command to ${this.className}:`, message);
    
    // Simulate sending through WebSocket
    this.simulateCommand(message);
  }

  /**
   * In a class that extends DeviceBase, add eventCallback handling according to the class
   * @param obj - Response object
   */
  protected abstract othersEventCallback(obj: any): boolean;

  /**
   * Simulate command execution for testing
   * In real implementation, this would go through WebSocket
   */
  private simulateCommand(message: any): void {
    // Simulate response after delay
    setTimeout(() => {
      const response = {
        Command: message.Command + 'Completed',
        RequestId: message.RequestId,
        DeviceName: this.className,
        Detail: 'OK',
        Timestamp: new Date().toISOString()
      };
      
      this.handleResponse(response);
    }, 100);
  }

  /**
   * Handle response from device
   */
  private handleResponse(response: any): void {
    // First, try device-specific handler
    const handled = this.othersEventCallback(response);
    
    // If not handled and we have a callback, call it
    if (!handled && this.dataCallback) {
      this.dataCallback(response);
    }
  }
}
