import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the passport scanner device in an ATM.
 */
export default class PassportScanner extends DeviceBase {
    constructor() {
        super('PassportScanner');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'ReadImageCompleted':
                console.log('Passport scan completed:', obj);
                return true;
            case 'ReadDataCompleted':
                console.log('Passport data read completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to scan a passport.
     */
    readImage(timeout = 30000) {
        this.sendCommand('ReadImage', { timeout });
    }
    /**
     * A function to read passport data.
     */
    readData(timeout = 30000) {
        this.sendCommand('ReadData', { timeout });
    }
    /**
     * A function to eject the passport.
     */
    ejectMedia() {
        this.sendCommand('EjectMedia');
    }
    /**
     * A function to get the status information of passport scanner device.
     */
    getStatus(passportScannerStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'PassportScannerStatusResponse') {
                passportScannerStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=PassportScanner.js.map