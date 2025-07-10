/**
 * This class is the parent of all device classes in an ATM.
 * To control the device, this class adds and removes event listeners.
 * @internal
 */
export default abstract class DeviceBase {
    #private;
    protected className: string;
    protected constructor(className: string);
    /**
     * In a class that extends ServiceBase, add eventCallback handling according to the class.
     * @internal
     * @param obj - N/A
     */
    protected abstract othersEventCallback(obj: any): boolean;
    /**
     * Register a function to receive device events.
     * @param dataCallback - N/A
     */
    addListener(dataCallback: (dataCallback: any) => void): void;
    /**
     * Unregister a function to receive device events. Once this method is called, the [[dataCallback]] function
     * will not be called when a response is sent from the ATM.
     */
    removeListener(): void;
}
