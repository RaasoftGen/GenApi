import { WebSocketEvents } from '../enums';
import { MessageFormat } from '../utils';
export class WebSocketClient {
    constructor(config, eventHandler) {
        this.ws = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectInterval = 3000;
        this.isConnected = false;
        this.config = config;
        this.eventHandler = eventHandler;
    }
    connect() {
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
            }
            catch (error) {
                reject(error);
            }
        });
    }
    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
            this.isConnected = false;
        }
    }
    send(message) {
        if (this.ws && this.isConnected) {
            const formattedMessage = this.formatMessage(message);
            this.ws.send(JSON.stringify(formattedMessage));
        }
        else {
            console.error('WebSocket not connected');
        }
    }
    getConnectionStatus() {
        return this.isConnected;
    }
    buildWebSocketUrl() {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const host = this.config.webSocketUrl || '127.0.0.1';
        const port = this.config.webSocketPort || '9091';
        return `${protocol}//${host}:${port}`;
    }
    handleMessage(data) {
        try {
            const message = JSON.parse(data);
            // Decrypt if needed
            if (this.config.isEncryptionMode && message.IsEncrypt) {
                // Handle decryption here
                console.log('Decrypting message...');
            }
            // Route message to appropriate handler
            this.routeMessage(message);
        }
        catch (error) {
            console.error('Error parsing WebSocket message:', error);
        }
    }
    routeMessage(message) {
        if (message.Command) {
            this.eventHandler.sendEvent(message.Command, message);
        }
        // General message event
        this.eventHandler.sendEvent('message', message);
    }
    formatMessage(payload) {
        const header = payload.Command || 'Unknown';
        const isEncrypt = this.config.isEncryptionMode || false;
        const token = ''; // Get from encryption service
        return new MessageFormat(header, payload, isEncrypt, token);
    }
    attemptReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
            setTimeout(() => {
                this.connect().catch(error => {
                    console.error('Reconnection failed:', error);
                });
            }, this.reconnectInterval);
        }
        else {
            console.error('Max reconnection attempts reached');
        }
    }
}
//# sourceMappingURL=index.js.map