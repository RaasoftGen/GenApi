import { AbstractRequest } from '..';
/**
 * This class is used to request
 * @public
 */
export declare class WriteTransactionResultBody extends AbstractRequest {
    /**
     *
     */
    FileName: string;
    /**
     *
     */
    Data: string;
    constructor(FileName: string, Data: string);
}
