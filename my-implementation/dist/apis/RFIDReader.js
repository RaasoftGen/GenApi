import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the RFID reader device in an ATM.
 */
export default class RFIDReader extends DeviceBase {
    constructor() {
        super('RFIDReader');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'ReadDataCompleted':
                console.log('RFID read completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to read RFID data.
     */
    readData(timeout = 30000) {
        this.sendCommand('ReadData', { timeout });
    }
    /**
     * A function to get the status information of RFID reader device.
     */
    getStatus(rfidReaderStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'RFIDReaderStatusResponse') {
                rfidReaderStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=RFIDReader.js.map