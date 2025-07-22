import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the signature pad device in an ATM.
 */
export default class Signpad extends DeviceBase {
    constructor() {
        super('Signpad');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'CaptureCompleted':
                console.log('Signature capture completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to capture a signature.
     */
    capture(params) {
        this.sendCommand('Capture', params);
    }
    /**
     * A function to clear the signature pad.
     */
    clear() {
        this.sendCommand('Clear');
    }
    /**
     * A function to reset the signature pad.
     */
    reset() {
        this.sendCommand('Reset');
    }
    /**
     * A function to get the status information of signature pad device.
     */
    getStatus(signpadStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'SignpadStatusResponse') {
                signpadStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=Signpad.js.map