import TaskResponse from '../TaskResponse';
import { ErrorSchema } from '../../../types';
/**
 * @public
 */
export default abstract class BCAAbstractResponse extends TaskResponse {
    /**
     * 	200(OK),408(RequestTimeout), 504(GatewayTimeout) etc
     */
    httpstatuscode?: number;
    /**
     * 	bca request header
     */
    requestid?: string;
    /**
     * 	bca error object
     */
    error_schema?: ErrorSchema | null;
}
