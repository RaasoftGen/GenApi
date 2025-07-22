import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class provides common utility functions and shared functionality across all ATM devices.
 */
export default class Common extends DeviceBase {
    constructor() {
        super('Common');
    }
    othersEventCallback(obj) {
        switch (obj.Command) {
            case 'ConfigurationUpdated':
                console.log('Configuration updated:', obj);
                return true;
            case 'LogEntryAdded':
                console.log('Log entry added:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to get configuration value.
     */
    getConfiguration(key, scope = 'global') {
        this.sendCommand('GetConfiguration', { key, scope });
    }
    /**
     * A function to set configuration value.
     */
    setConfiguration(params) {
        this.sendCommand('SetConfiguration', params);
    }
    /**
     * A function to get all configurations.
     */
    getAllConfigurations(scope = 'global') {
        this.sendCommand('GetAllConfigurations', { scope });
    }
    /**
     * A function to log a message.
     */
    log(params) {
        this.sendCommand('Log', params);
    }
    /**
     * A function to get system information.
     */
    getSystemInfo() {
        this.sendCommand('GetSystemInfo');
    }
    /**
     * A function to get device list.
     */
    getDeviceList() {
        this.sendCommand('GetDeviceList');
    }
    /**
     * A function to get application version.
     */
    getVersion() {
        this.sendCommand('GetVersion');
    }
    /**
     * A function to perform health check.
     */
    healthCheck() {
        this.sendCommand('HealthCheck');
    }
    /**
     * A function to get timestamp.
     */
    getTimestamp() {
        this.sendCommand('GetTimestamp');
    }
    /**
     * A function to generate UUID.
     */
    generateUUID() {
        this.sendCommand('GenerateUUID');
    }
}
//# sourceMappingURL=Common.js.map