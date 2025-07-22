import DeviceBase from './DeviceBase';
import { ReceiptPrinterStatusResponse } from '../models';
import { ResetActionType } from '../enums';
type PrintParams = Partial<{
    headerImageData: string;
    taillmageData: string;
    skipPrintHeaderImage: boolean;
}> & {
    printData: Array<string>;
};
/**
 * @group API
 * @description This class controls the receipt printer device in an ATM.
 * To control the device, this class consists of event listeners, control commands.
 * As the methods are asynchronous, the caller should register a callback function
 * to receive the corresponding response by using an `addListener` before calling a method.
 * When it finishes controlling the device, it should `removeListener` to stop receiving responses.
 * Also, some inquiry methods have parameters like a callback function to receive the result.
 */
export default class ReceiptPrinter extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to print a receipt.
     * As the result of printing, `PrintCompleted` will be sent.
     *
     * @param printData - Array of strings to print
     * @param skipPrintHeaderImage - Skip printing header image
     * @param headerImageData - Base64 encoded header image
     * @param taillmageData - Base64 encoded tail image
     */
    print({ printData, skipPrintHeaderImage, headerImageData, taillmageData }: PrintParams): void;
    /**
     * A function to print a receipt with eject.
     * As the result of printing, `PrintCompleted` will be sent.
     *
     * @param printData - Array of strings to print
     * @param skipPrintHeaderImage - Skip printing header image
     * @param headerImageData - Base64 encoded header image
     * @param taillmageData - Base64 encoded tail image
     */
    printWithEject({ printData, skipPrintHeaderImage, headerImageData, taillmageData }: PrintParams): void;
    /**
     * A function to eject a receipt.
     * As the result of ejecting, `EjectMediaCompleted` will be sent.
     */
    eject(): void;
    /**
     * A function to reset receipt device.
     * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action: ResetActionType): void;
    /**
     * A function to get the status information of receiptPrinter device.
     *
     * @param receiptPrinterStatusEventCallback - The callback function to receive the response
     */
    getStatus(receiptPrinterStatusEventCallback: (obj: ReceiptPrinterStatusResponse) => void): void;
}
export {};
//# sourceMappingURL=ReceiptPrinter.d.ts.map