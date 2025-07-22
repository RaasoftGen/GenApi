import { ConfigType } from '../types';
import { WebSocketClient } from '../websocket';
import { EventBusHandler } from '../utils';
import { EncryptionInfo } from '../encryption';
/**
 * Main initialization class for the ATM Device API
 * This class handles WebSocket connection setup and device configuration
 */
export default class ATMDeviceAPI {
    private static webSocketClient;
    private static eventHandler;
    private static encryptionInfo;
    /**
     * Initialize the ATM Device API with configuration
     * @param config - Configuration object with WebSocket and encryption settings
     * @param config.isEncryptionMode - Enable encryption mode (default: true)
     * @param config.webSocketUrl - WebSocket server URL (default: '127.0.0.1')
     * @param config.webSocketPort - WebSocket server port (default: '9091' or '443')
     */
    static init(config?: ConfigType): Promise<void>;
    /**
     * Get the WebSocket client instance
     */
    static getWebSocketClient(): WebSocketClient | null;
    /**
     * Get the event handler instance
     */
    static getEventHandler(): EventBusHandler | null;
    /**
     * Get the encryption info instance
     */
    static getEncryptionInfo(): EncryptionInfo | null;
    /**
     * Disconnect and cleanup resources
     */
    static disconnect(): void;
    /**
     * Check if the API is connected
     */
    static isConnected(): boolean;
}
//# sourceMappingURL=ATMDeviceAPI.d.ts.map