import DeviceBase from './DeviceBase';
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
    constructor() {
        super('ReceiptPrinter');
    }
    othersEventCallback(obj) {
        // Handle receipt printer specific events
        switch (obj.Command) {
            case 'PrintCompleted':
                console.log('Print operation completed:', obj);
                return true;
            case 'EjectMediaCompleted':
                console.log('Eject operation completed:', obj);
                return true;
            case 'ResetDeviceCompleted':
                console.log('Reset operation completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to print a receipt.
     * As the result of printing, `PrintCompleted` will be sent.
     *
     * @param printData - Array of strings to print
     * @param skipPrintHeaderImage - Skip printing header image
     * @param headerImageData - Base64 encoded header image
     * @param taillmageData - Base64 encoded tail image
     */
    print({ printData, skipPrintHeaderImage, headerImageData, taillmageData }) {
        this.sendCommand('Print', {
            printData,
            skipPrintHeaderImage,
            headerImageData,
            taillmageData
        });
    }
    /**
     * A function to print a receipt with eject.
     * As the result of printing, `PrintCompleted` will be sent.
     *
     * @param printData - Array of strings to print
     * @param skipPrintHeaderImage - Skip printing header image
     * @param headerImageData - Base64 encoded header image
     * @param taillmageData - Base64 encoded tail image
     */
    printWithEject({ printData, skipPrintHeaderImage, headerImageData, taillmageData }) {
        this.sendCommand('PrintWithEject', {
            printData,
            skipPrintHeaderImage,
            headerImageData,
            taillmageData
        });
    }
    /**
     * A function to eject a receipt.
     * As the result of ejecting, `EjectMediaCompleted` will be sent.
     */
    eject() {
        this.sendCommand('EjectMedia');
    }
    /**
     * A function to reset receipt device.
     * For example, if `reset` method is operating, the `ResetDeviceCompleted` event will be sent.
     *
     * @param action - Define device reset action.
     */
    reset(action) {
        this.sendCommand('ResetDevice', { action });
    }
    /**
     * A function to get the status information of receiptPrinter device.
     *
     * @param receiptPrinterStatusEventCallback - The callback function to receive the response
     */
    getStatus(receiptPrinterStatusEventCallback) {
        // Add temporary listener for status response
        const statusListener = (response) => {
            if (response.Command === 'ReceiptPrinterStatusResponse') {
                receiptPrinterStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=ReceiptPrinter.js.map