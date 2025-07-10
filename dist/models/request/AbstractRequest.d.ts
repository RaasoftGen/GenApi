/**
 * This class is the parent of all requests sent to the Warp core.
 * @public
 */
export default abstract class AbstractRequest {
    #private;
    /**
     * The type of request
     */
    Type: string;
    /**
     * The transaction token
     */
    Token: string;
    constructor();
}
