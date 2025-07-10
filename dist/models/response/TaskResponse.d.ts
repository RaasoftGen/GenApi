import AbstractResponse from './AbstractResponse';
/**
 * This class is parent of almost all device or transaction responses.
 */
export default abstract class TaskResponse extends AbstractResponse {
    /**
     * The name of response
     */
    Name?: string;
    /**
     * The detail status of response.
     * It could be [[OK]], [[NG]], etc.
     */
    Detail?: string | null;
}
