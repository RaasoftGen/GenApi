import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the checks acceptor device in an ATM.
 */
export default class ChecksAcceptor extends DeviceBase {
    constructor() {
        super('ChecksAcceptor');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'AcceptCompleted':
                console.log('Checks accept completed:', obj);
                return true;
            case 'ReturnCompleted':
                console.log('Checks return completed:', obj);
                return true;
            case 'RetractCompleted':
                console.log('Checks retract completed:', obj);
                return true;
            case 'CommitCompleted':
                console.log('Checks commit completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to accept checks.
     */
    accept(params = {}) {
        this.sendCommand('Accept', params);
    }
    /**
     * A function to return checks to customer.
     */
    return() {
        this.sendCommand('Return');
    }
    /**
     * A function to retract checks.
     */
    retract() {
        this.sendCommand('Retract');
    }
    /**
     * A function to commit the checks transaction.
     */
    commit() {
        this.sendCommand('Commit');
    }
    /**
     * A function to reset the checks acceptor.
     */
    reset() {
        this.sendCommand('Reset');
    }
    /**
     * A function to get the status information of checks acceptor device.
     */
    getStatus(checksAcceptorStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'ChecksAcceptorStatusResponse') {
                checksAcceptorStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=ChecksAcceptor.js.map