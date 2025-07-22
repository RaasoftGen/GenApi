import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the document printer device in an ATM.
 */
export default class DocumentPrinter extends DeviceBase {
    constructor() {
        super('DocumentPrinter');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'PrintDataCompleted':
                console.log('Document print completed:', obj);
                return true;
            case 'PrintImageCompleted':
                console.log('Document image print completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to print on a document.
     */
    printData(data) {
        this.sendCommand('PrintData', { data });
    }
    /**
     * A function to print an image on a document.
     */
    printImage(imageData) {
        this.sendCommand('PrintImage', { imageData });
    }
    /**
     * A function to eject the document.
     */
    ejectMedia() {
        this.sendCommand('EjectMedia');
    }
    /**
     * A function to get the status information of document printer device.
     */
    getStatus(documentPrinterStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'DocumentPrinterStatusResponse') {
                documentPrinterStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=DocumentPrinter.js.map