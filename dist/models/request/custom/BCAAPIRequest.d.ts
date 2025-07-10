import { ValidateCardBody, UpdatePasscodeBody, ResetPasscodeBody, SingleDepositTransactionBody, BundleDepositTransactionBody, RetrieveLatestTransactionBody, ReplenishmentBody, Denomination, FileListRequestBody } from '../../../types';
import BCAAbstractRequest from './BCAAbstractRequest';
import AbstractRequest from '../AbstractRequest';
/**
 * This class is used to request exchange EncryptKey.
 * @public
 */
export declare class EncryptKeyRequest extends BCAAbstractRequest {
    constructor(counter: number);
}
/**
 * This class is used to request exchange PublicKey.
 * @public
 */
export declare class PublicKeyRequest extends BCAAbstractRequest {
    constructor(counter: number);
}
/**
 *
 * @public
 */
export declare class ValidateCardRequest extends BCAAbstractRequest {
    RequestBody: ValidateCardBody;
    constructor(counter: number, cardNumber: string, passcode: string);
}
/**
 *
 * @public
 */
export declare class UpdatePasscodeRequest extends BCAAbstractRequest {
    RequestBody: UpdatePasscodeBody;
    constructor(counter: number, cardNumber: string, newPasscode: string, oldPasscode: string);
}
/**
 *
 * @public
 */
export declare class ResetPasscodeRequest extends BCAAbstractRequest {
    RequestBody: ResetPasscodeBody;
    constructor(counter: number, cardNumber: string);
}
/**
 *
 * @public
 */
export declare class SingleDepositTransactionRequest extends BCAAbstractRequest {
    RequestBody: SingleDepositTransactionBody;
    constructor(counter: number, cardNumber: string, accountNumber: string, totalAmount: string, batchNumber: string, denomination: Array<Denomination>);
}
/**
 *
 * @public
 */
export declare class BundleDepositTransactionRequest extends BCAAbstractRequest {
    RequestBody: BundleDepositTransactionBody;
    constructor(counter: number, cardNumber: string, accountNumber: string, totalAmount: string, batchNumber: string, description: string, denomination: Array<Denomination>);
}
/**
 *
 * @public
 */
export declare class RetrieveLatestTransactionRequest extends BCAAbstractRequest {
    RequestBody: RetrieveLatestTransactionBody;
    constructor(counter: number, cardNumber: string, accountNumber: string);
}
/**
 *
 * @public
 */
export declare class ReplenishmentRequest extends BCAAbstractRequest {
    RequestBody: ReplenishmentBody;
    constructor(counter: number, cardNumber: string, totalAmount: string, denomination: Array<Denomination>);
}
/**
 *
 * @public
 */
export declare class FileListRequest extends AbstractRequest {
    RequestBody: FileListRequestBody;
    constructor(Directory: string, IsRecurse?: boolean);
}
