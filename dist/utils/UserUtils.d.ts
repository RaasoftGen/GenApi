/**
 * @public
 */
export default class UserUtils {
    /**
     * Get the user IP throught the webkitRTCPeerConnection
     * @public
     * @returns Promise
     */
    static getUserIP(): Promise<string>;
}
