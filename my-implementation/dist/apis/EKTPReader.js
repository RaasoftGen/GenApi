import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the EKTP (Indonesian ID card) reader device in an ATM.
 */
export default class EKTPReader extends DeviceBase {
    constructor() {
        super('EKTPReader');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'ReadDataCompleted':
                console.log('EKTP read completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to read EKTP data.
     */
    readData(timeout = 30000) {
        this.sendCommand('ReadData', { timeout });
    }
    /**
     * A function to reset the EKTP reader.
     */
    reset() {
        this.sendCommand('Reset');
    }
    /**
     * A function to get the status information of EKTP reader device.
     */
    getStatus(ektpReaderStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'EKTPReaderStatusResponse') {
                ektpReaderStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=EKTPReader.js.map