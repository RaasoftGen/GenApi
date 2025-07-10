import { AbstractRequest } from '..';
/**
 * This class is the parent of all BCA API requests sent to the Warp core.
 * @public
 */
export default class BCAAbstractRequest extends AbstractRequest {
    /**
     * A 3-digit number that represents the sequence of transaction requested to BCA server.
     * Counter must be reset to 001 every transaction cycle.
     */
    Counter: number;
}
