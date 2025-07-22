import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the fingerprint scanner device in an ATM.
 */
export default class Fingerprint extends DeviceBase {
    constructor() {
        super('Fingerprint');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'FingerprintReadCompleted':
                console.log('Fingerprint scan completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to acquire fingerprint from customer.
     */
    acquireFinger(timeout = 30000) {
        this.sendCommand('AcquireFinger', { timeout });
    }
    /**
     * A function to stop fingerprint acquisition.
     */
    stopAcquireFinger() {
        this.sendCommand('StopAcquireFinger');
    }
    /**
     * A function to get the status information of fingerprint device.
     */
    getStatus(fingerprintStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'FingerprintStatusResponse') {
                fingerprintStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=Fingerprint.js.map