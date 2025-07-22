/**
 * Base class for all ATM device controllers
 * This class provides common functionality like event handling and communication
 */
export default abstract class DeviceBase {
    protected className: string;
    private eventHandler;
    private dataCallback;
    protected constructor(className: string);
    /**
     * Register a function to receive device events
     * @param dataCallback - Function to handle device responses
     */
    addListener(dataCallback: (data: any) => void): void;
    /**
     * Unregister the event listener
     */
    removeListener(): void;
    /**
     * Send a command to the device
     * @param command - Command name
     * @param parameters - Command parameters
     */
    protected sendCommand(command: string, parameters?: any): void;
    /**
     * In a class that extends DeviceBase, add eventCallback handling according to the class
     * @param obj - Response object
     */
    protected abstract othersEventCallback(obj: any): boolean;
    /**
     * Simulate command execution for testing
     * In real implementation, this would go through WebSocket
     */
    private simulateCommand;
    /**
     * Handle response from device
     */
    private handleResponse;
}
//# sourceMappingURL=DeviceBase.d.ts.map