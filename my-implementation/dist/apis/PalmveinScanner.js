import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the palm vein scanner device in an ATM.
 */
export default class PalmveinScanner extends DeviceBase {
    constructor() {
        super('PalmveinScanner');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'ScanCompleted':
                console.log('Palm vein scan completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to scan palm vein.
     */
    scan(timeout = 30000) {
        this.sendCommand('Scan', { timeout });
    }
    /**
     * A function to reset the palm vein scanner.
     */
    reset() {
        this.sendCommand('Reset');
    }
    /**
     * A function to get the status information of palm vein scanner device.
     */
    getStatus(palmveinScannerStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'PalmveinScannerStatusResponse') {
                palmveinScannerStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=PalmveinScanner.js.map