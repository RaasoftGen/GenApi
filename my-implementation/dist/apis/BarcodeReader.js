import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the barcode reader device in an ATM.
 */
export default class BarcodeReader extends DeviceBase {
    constructor() {
        super('BarcodeReader');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'ReadDataCompleted':
                console.log('Barcode read completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to read barcode data.
     */
    readData(timeout = 30000) {
        this.sendCommand('ReadData', { timeout });
    }
    /**
     * A function to get the status information of barcode reader device.
     */
    getStatus(barcodeReaderStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'BarcodeReaderStatusResponse') {
                barcodeReaderStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=BarcodeReader.js.map