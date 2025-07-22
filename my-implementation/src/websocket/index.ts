import { ConfigType } from '../types';
import { WebSocketEvents, ServiceState } from '../enums';
import { EventBusHandler, MessageFormat, WARPJsonFormat, generateUUID } from '../utils';

export class WebSocketClient {
  private ws: WebSocket | null = null;
  private eventHandler: EventBusHandler;
  private config: ConfigType;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  private reconnectInterval: number = 3000;
  private isConnected: boolean = false;

  constructor(config: ConfigType, eventHandler: EventBusHandler) {
    this.config = config;
    this.eventHandler = eventHandler;
  }

  public connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = this.buildWebSocketUrl();
      
      try {
        this.ws = new WebSocket(url);
        
        this.ws.onopen = (event) => {
          this.isConnected = true;
          this.reconnectAttempts = 0;
          console.log('WebSocket connected successfully');
          this.eventHandler.sendEvent(WebSocketEvents.OnConnectToWARPCore, event);
          resolve();
        };

        this.ws.onmessage = (event) => {
          this.handleMessage(event.data);
        };

        this.ws.onclose = (event) => {
          this.isConnected = false;
          console.log('WebSocket connection closed');
          this.eventHandler.sendEvent(WebSocketEvents.OnDisconnectToWARPCore, event);
          this.attemptReconnect();
        };

        this.ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          reject(error);
        };

      } catch (error) {
        reject(error);
      }
    });
  }

  public disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
      this.isConnected = false;
    }
  }

  public send(message: any): void {
    if (this.ws && this.isConnected) {
      const formattedMessage = this.formatMessage(message);
      this.ws.send(JSON.stringify(formattedMessage));
    } else {
      console.error('WebSocket not connected');
    }
  }

  public getConnectionStatus(): boolean {
    return this.isConnected;
  }

  private buildWebSocketUrl(): string {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = this.config.webSocketUrl || '127.0.0.1';
    const port = this.config.webSocketPort || '9091';
    return `${protocol}//${host}:${port}`;
  }

  private handleMessage(data: string): void {
    try {
      const message = JSON.parse(data);
      
      // Decrypt if needed
      if (this.config.isEncryptionMode && message.IsEncrypt) {
        // Handle decryption here
        console.log('Decrypting message...');
      }

      // Route message to appropriate handler
      this.routeMessage(message);
      
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  }

  private routeMessage(message: any): void {
    if (message.Command) {
      this.eventHandler.sendEvent(message.Command, message);
    }
    
    // General message event
    this.eventHandler.sendEvent('message', message);
  }

  private formatMessage(payload: any): MessageFormat {
    const header = payload.Command || 'Unknown';
    const isEncrypt = this.config.isEncryptionMode || false;
    const token = ''; // Get from encryption service
    
    return new MessageFormat(header, payload, isEncrypt, token);
  }

  private attemptReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
      
      setTimeout(() => {
        this.connect().catch(error => {
          console.error('Reconnection failed:', error);
        });
      }, this.reconnectInterval);
    } else {
      console.error('Max reconnection attempts reached');
    }
  }
}
