import DeviceBase from './DeviceBase';
import { DocumentScannerStatusResponse } from '../models';
/**
 * @group API
 * @remarks This class is currently under development. Currently this device is not supported by the simulator.
 * @description This class controls the document scanner device in an ATM.
 * To control the document scanner, this class consists of event listeners and document scanner control commands.
 * The methods, except for {@link addListener} and {@link removeListener} are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * `{@link addListener}` before calling a method. Also, when it finishes controlling the device,
 * it should `{@link removeListener}` to stop receiving responses.
 */
export default class DocumentScanner extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to read an Document image.
     * When an image is read, the response `{@link CommandReadyCompleted}`, `{@link ReadImageCompleted}`
     * will be passed to the registered callback function.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    readImage(timeout?: number): void;
    /**
     * A function to reset DocumentScanner device.
     * For example, if `{@link eject}` method is operating,
     * the response `{@link CommandReadyCompleted}`, `{@link EjectMediaCompleted}` event will be sent.
     *
     * @param timeout - Device timeout (default: 30000 / milliseconds)
     */
    eject(timeout?: number): void;
    /**
     * A function to reset DocumentScanner device.
     * For example, if `{@link reset}` method is operating,
     * the response `{@link CommandReadyCompleted}`, `{@link ResetDeviceCompleted}` event will be sent.
     */
    reset(): void;
    /**
     * A function to get the status information of document scanner device.
     *
     * @param documentScannerStatusEventCallback - The callback function to receive the `{@link DocumentScannerStatusResponse}` as the result of the operation.
     */
    getStatus(documentScannerStatusEventCallback: (obj: DocumentScannerStatusResponse) => void): void;
}
