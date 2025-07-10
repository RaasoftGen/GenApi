/**
 * @public
 */
export declare const WebSocketEvents: {
    readonly WebSocketConnectionEvent: "SubscribeEvents|webSocketConnectionEvent";
    readonly OnConnectToWARPCore: "OnConnectToWARPCore";
    readonly OnDisconnectToWARPCore: "OnDisconnectToWARPCore";
};
/**
 * @public
 */
export type WebSocketEvents = (typeof WebSocketEvents)[keyof typeof WebSocketEvents];
