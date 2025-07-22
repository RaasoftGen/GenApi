import { ConfigType } from '../types';
import { WebSocketClient } from '../websocket';
import { EventBusHandler } from '../utils';
import { EncryptionInfo } from '../encryption';

/**
 * Main initialization class for the ATM Device API
 * This class handles WebSocket connection setup and device configuration
 */
export default class ATMDeviceAPI {
  private static webSocketClient: WebSocketClient | null = null;
  private static eventHandler: EventBusHandler | null = null;
  private static encryptionInfo: EncryptionInfo | null = null;

  /**
   * Initialize the ATM Device API with configuration
   * @param config - Configuration object with WebSocket and encryption settings
   * @param config.isEncryptionMode - Enable encryption mode (default: true)
   * @param config.webSocketUrl - WebSocket server URL (default: '127.0.0.1')
   * @param config.webSocketPort - WebSocket server port (default: '9091' or '443')
   */
  public static async init(config: ConfigType = {}): Promise<void> {
    // Set default configuration
    const defaultConfig: ConfigType = {
      isEncryptionMode: true,
      webSocketUrl: '127.0.0.1',
      webSocketPort: '9091',
      ...config
    };

    // Initialize encryption
    ATMDeviceAPI.encryptionInfo = EncryptionInfo.getInstance();
    ATMDeviceAPI.encryptionInfo.isEncryptionMode = defaultConfig.isEncryptionMode || false;

    // Initialize event handler
    ATMDeviceAPI.eventHandler = new EventBusHandler();

    // Initialize WebSocket client
    ATMDeviceAPI.webSocketClient = new WebSocketClient(defaultConfig, ATMDeviceAPI.eventHandler);

    try {
      // Connect to WebSocket server
      await ATMDeviceAPI.webSocketClient.connect();
      console.log('ATM Device API initialized successfully');
    } catch (error) {
      console.error('Failed to initialize ATM Device API:', error);
      throw error;
    }
  }

  /**
   * Get the WebSocket client instance
   */
  public static getWebSocketClient(): WebSocketClient | null {
    return ATMDeviceAPI.webSocketClient;
  }

  /**
   * Get the event handler instance
   */
  public static getEventHandler(): EventBusHandler | null {
    return ATMDeviceAPI.eventHandler;
  }

  /**
   * Get the encryption info instance
   */
  public static getEncryptionInfo(): EncryptionInfo | null {
    return ATMDeviceAPI.encryptionInfo;
  }

  /**
   * Disconnect and cleanup resources
   */
  public static disconnect(): void {
    if (ATMDeviceAPI.webSocketClient) {
      ATMDeviceAPI.webSocketClient.disconnect();
      ATMDeviceAPI.webSocketClient = null;
    }

    if (ATMDeviceAPI.eventHandler) {
      ATMDeviceAPI.eventHandler.removeAllEventListener();
      ATMDeviceAPI.eventHandler = null;
    }

    ATMDeviceAPI.encryptionInfo = null;
    console.log('ATM Device API disconnected');
  }

  /**
   * Check if the API is connected
   */
  public static isConnected(): boolean {
    return ATMDeviceAPI.webSocketClient?.getConnectionStatus() || false;
  }
}
