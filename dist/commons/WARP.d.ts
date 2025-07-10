import WARPJsonFormat from './WARPJsonFormat';
/**
 * @internal
 */
export interface IWARPCore {
    Key: string;
}
/**
 * @internal
 */
export interface IConfig {
    Version: string;
    WARPCore?: IWARPCore;
}
/**
 * @public
 */
export declare module WARP {
    /**
     * Communicator handling data for Websocket communication.
     * @public
     */
    class HyousngManager {
        #private;
        constructor();
        connect: (url: string, isEncryptionMode: boolean) => void;
        subscribeMessageEvent: (name: string, onSocketHandler: (data: string) => void) => void;
        /****************************************************************
          Write to AP log if connected or console.log if not connected.
          TODO: No GUID? Is this okay or not?
        ****************************************************************/
        /**
         * Writes a log to the log file.
         *
         * @param message - string value
         * @param className - string value
         * @param jsonObj
         */
        appLogWrite: (message: string, className?: string, jsonObj?: any) => void;
        /**
         * Send data to the server via socket.
         *
         * @param name - string value
         * @param message - WARPJSONFormat value
         */
        sendData: (name: string, message: WARPJsonFormat) => void;
    }
    export const manager: HyousngManager;
    export {};
}
