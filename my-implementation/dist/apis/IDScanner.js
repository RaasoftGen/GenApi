import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the ID scanner device in an ATM.
 */
export default class IDScanner extends DeviceBase {
    constructor() {
        super('IDScanner');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'ReadImageCompleted':
                console.log('ID scan completed:', obj);
                return true;
            case 'ReadDataCompleted':
                console.log('ID data read completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to scan an ID document.
     */
    readImage(timeout = 30000) {
        this.sendCommand('ReadImage', { timeout });
    }
    /**
     * A function to read ID data.
     */
    readData(timeout = 30000) {
        this.sendCommand('ReadData', { timeout });
    }
    /**
     * A function to eject the ID document.
     */
    ejectMedia() {
        this.sendCommand('EjectMedia');
    }
    /**
     * A function to get the status information of ID scanner device.
     */
    getStatus(idScannerStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'IDScannerStatusResponse') {
                idScannerStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=IDScanner.js.map