import DeviceBase from './DeviceBase';
export interface ConfigurationParams {
    key: string;
    value: any;
    scope?: 'global' | 'device' | 'session';
}
export interface LogParams {
    level: 'debug' | 'info' | 'warn' | 'error';
    message: string;
    category?: string;
    metadata?: any;
}
/**
 * @group API
 * @description This class provides common utility functions and shared functionality across all ATM devices.
 */
export default class Common extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to get configuration value.
     */
    getConfiguration(key: string, scope?: string): void;
    /**
     * A function to set configuration value.
     */
    setConfiguration(params: ConfigurationParams): void;
    /**
     * A function to get all configurations.
     */
    getAllConfigurations(scope?: string): void;
    /**
     * A function to log a message.
     */
    log(params: LogParams): void;
    /**
     * A function to get system information.
     */
    getSystemInfo(): void;
    /**
     * A function to get device list.
     */
    getDeviceList(): void;
    /**
     * A function to get application version.
     */
    getVersion(): void;
    /**
     * A function to perform health check.
     */
    healthCheck(): void;
    /**
     * A function to get timestamp.
     */
    getTimestamp(): void;
    /**
     * A function to generate UUID.
     */
    generateUUID(): void;
}
//# sourceMappingURL=Common.d.ts.map