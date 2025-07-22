import { ConfigType } from '../types';
import { EventBusHandler } from '../utils';
export declare class WebSocketClient {
    private ws;
    private eventHandler;
    private config;
    private reconnectAttempts;
    private maxReconnectAttempts;
    private reconnectInterval;
    private isConnected;
    constructor(config: ConfigType, eventHandler: EventBusHandler);
    connect(): Promise<void>;
    disconnect(): void;
    send(message: any): void;
    getConnectionStatus(): boolean;
    private buildWebSocketUrl;
    private handleMessage;
    private routeMessage;
    private formatMessage;
    private attemptReconnect;
}
//# sourceMappingURL=index.d.ts.map