import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class handles NDC (Network Data Communication) protocol for ATM communication.
 */
export default class NDC extends DeviceBase {
    constructor() {
        super('NDC');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'NDCCommandReceived':
                console.log('NDC command received:', obj);
                return true;
            case 'NDCStateChanged':
                console.log('NDC state changed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to send NDC command.
     */
    sendNDCCommand(command) {
        this.sendCommand('SendNDCCommand', command);
    }
    /**
     * A function to set NDC state.
     */
    setState(state) {
        this.sendCommand('SetState', state);
    }
    /**
     * A function to get current NDC state.
     */
    getState() {
        this.sendCommand('GetState');
    }
    /**
     * A function to process NDC message.
     */
    processMessage(message) {
        this.sendCommand('ProcessMessage', { message });
    }
    /**
     * A function to initialize NDC communication.
     */
    initialize() {
        this.sendCommand('Initialize');
    }
    /**
     * A function to terminate NDC communication.
     */
    terminate() {
        this.sendCommand('Terminate');
    }
}
//# sourceMappingURL=NDC.js.map