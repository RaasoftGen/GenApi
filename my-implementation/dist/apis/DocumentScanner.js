import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the document scanner device in an ATM.
 */
export default class DocumentScanner extends DeviceBase {
    constructor() {
        super('DocumentScanner');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'ReadImageCompleted':
                console.log('Document scan completed:', obj);
                return true;
            case 'ReadDataCompleted':
                console.log('Document data read completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to scan a document.
     */
    readImage(timeout = 30000) {
        this.sendCommand('ReadImage', { timeout });
    }
    /**
     * A function to read document data.
     */
    readData(timeout = 30000) {
        this.sendCommand('ReadData', { timeout });
    }
    /**
     * A function to eject the document.
     */
    ejectMedia() {
        this.sendCommand('EjectMedia');
    }
    /**
     * A function to retain the document.
     */
    retainMedia() {
        this.sendCommand('RetainMedia');
    }
    /**
     * A function to get the status information of document scanner device.
     */
    getStatus(documentScannerStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'DocumentScannerStatusResponse') {
                documentScannerStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=DocumentScanner.js.map