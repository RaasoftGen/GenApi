/**
 * This class is the parent of the {@link TaskResponse}.
 *
 * @public
 */
export default abstract class AbstractResponse {
    /**
     * The type of response
     */
    Type: string;
    constructor(_Type: string);
}
