import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the terminal information and management.
 */
export default class Terminal extends DeviceBase {
    constructor() {
        super('Terminal');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'InitializeCompleted':
                console.log('Terminal initialize completed:', obj);
                return true;
            case 'ShutdownCompleted':
                console.log('Terminal shutdown completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to initialize the terminal.
     */
    initialize(params = {}) {
        this.sendCommand('Initialize', params);
    }
    /**
     * A function to shutdown the terminal.
     */
    shutdown() {
        this.sendCommand('Shutdown');
    }
    /**
     * A function to restart the terminal.
     */
    restart() {
        this.sendCommand('Restart');
    }
    /**
     * A function to get terminal information.
     */
    getInfo() {
        this.sendCommand('GetInfo');
    }
    /**
     * A function to set terminal information.
     */
    setInfo(params) {
        this.sendCommand('SetInfo', params);
    }
    /**
     * A function to get the status information of terminal.
     */
    getStatus(terminalStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'TerminalStatusResponse') {
                terminalStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=Terminal.js.map