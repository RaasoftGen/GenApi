/**
 * Data common format used for Websocket communication.
 * @public
 */
declare class MessageFormat {
    Header: string;
    Payload: string;
    IsEncrypt: boolean;
    Token: string;
    constructor(Header: string, Payload: string, IsEncrypt: boolean, Token?: string);
}
export default MessageFormat;
