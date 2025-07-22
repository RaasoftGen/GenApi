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
  constructor() {
    super('Common');
  }

  protected othersEventCallback(obj: any): boolean {
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
  public getConfiguration(key: string, scope: string = 'global'): void {
    this.sendCommand('GetConfiguration', { key, scope });
  }

  /**
   * A function to set configuration value.
   */
  public setConfiguration(params: ConfigurationParams): void {
    this.sendCommand('SetConfiguration', params);
  }

  /**
   * A function to get all configurations.
   */
  public getAllConfigurations(scope: string = 'global'): void {
    this.sendCommand('GetAllConfigurations', { scope });
  }

  /**
   * A function to log a message.
   */
  public log(params: LogParams): void {
    this.sendCommand('Log', params);
  }

  /**
   * A function to get system information.
   */
  public getSystemInfo(): void {
    this.sendCommand('GetSystemInfo');
  }

  /**
   * A function to get device list.
   */
  public getDeviceList(): void {
    this.sendCommand('GetDeviceList');
  }

  /**
   * A function to get application version.
   */
  public getVersion(): void {
    this.sendCommand('GetVersion');
  }

  /**
   * A function to perform health check.
   */
  public healthCheck(): void {
    this.sendCommand('HealthCheck');
  }

  /**
   * A function to get timestamp.
   */
  public getTimestamp(): void {
    this.sendCommand('GetTimestamp');
  }

  /**
   * A function to generate UUID.
   */
  public generateUUID(): void {
    this.sendCommand('GenerateUUID');
  }
}
