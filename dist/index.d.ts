export * from './apis';
export * from './commons';
export * from './constants';
export * from './enums';
export * from './helpers';
export * from './types';
export * from './models';
export * from './utils';
declare type ConfigType = {
    isEncryptionMode?: boolean;
    webSocketUrl?: string;
    webSocketPort?: string;
};
export default class InitClass {
    #private;
    /**
     * @param config - An optional param with a default value.
     * @param config.isEncryptionMode - default vaule is `true`.
     * @param config.webSocketUrl - default vaule is `127.1.1.1`.
     * @param config.webSocketPort - default vaule is `9091` or `443`.
     */
    static init: (config: ConfigType) => void;
}
