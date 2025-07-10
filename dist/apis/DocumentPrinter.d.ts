import DeviceBase from './DeviceBase';
import { DocumentPrinterStatusResponse } from '../models';
import { ResetActionType } from '../enums';
/**
 * @group API
 * @remarks This class is currently under development. Currently this device is not supported by the simulator.
 * @description This class controls the document printer device in an ATM.
 * To control the document printer, this class consists of event listeners and document printer control commands.
 * The methods, except for {@link addListener} and {@link removeListener} are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using
 * `{@link addListener} before calling a method. Also, when it finishes controlling the device,
 * it should `{@link removeListener} to stop receiving responses.
 */
export default class DocumentPrinter extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to print image.
     * When the image is printed, the response `{@link CommandReadyCompleted}, `{@link PrintImageCompleted}
     * will be passed to the registered callback function.
     *
     * @param imageData - The image content to print (base64 string)
     * @param timeout - Device timeout
     */
    printImage(imageData: string, timeout: number): void;
    /**
     * A function to reset DocumentPrinter device.
     * For example, if `{@link reset} method is operating, the `{@link ResetDeviceCompleted} event will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action: ResetActionType): void;
    /**
     * A function to get the status information of document printer device.
     *
     * @param documentPrinterStatusEventCallback - The callback function to receive the `{@link DocumentPrinterStatusResponse} as the result of the operation.
     */
    getStatus(documentPrinterStatusEventCallback: (obj: DocumentPrinterStatusResponse) => void): void;
}
