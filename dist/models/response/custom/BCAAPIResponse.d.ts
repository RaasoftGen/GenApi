import BCAAbstractResponse from './BCAAbstractResponse';
import { BundleDepositOutputSchema, EncyptKey_OutputSchema, RetrieveLastestOutputSchema, ValidatePasscode_OutputSchema } from '../../../types';
import TaskResponse from '../TaskResponse';
/**
 * @public
 */
export declare class EncryptKeyResponse extends BCAAbstractResponse {
    /**
     *
     */
    output_schema?: EncyptKey_OutputSchema | null;
}
/**
 * @public
 */
export declare class ValidatePasscodeResponse extends BCAAbstractResponse {
    /**
     *
     */
    output_schema: ValidatePasscode_OutputSchema | null;
}
/**
 * @public
 */
export declare class UpdatePasscodeResponse extends BCAAbstractResponse {
}
/**
 * @public
 */
export declare class ResetPasscodeResponse extends BCAAbstractResponse {
}
/**
 * @public
 */
export declare class SingleDepositTransactionResponse extends BCAAbstractResponse {
}
/**
 * @public
 */
export declare class BundleDepositTransactionResponse extends BCAAbstractResponse {
    /**
     *
     */
    output_schema?: BundleDepositOutputSchema | null;
}
/**
 * @public
 */
export declare class RetrieveLastestTransactionResponse extends BCAAbstractResponse {
    /**
     *
     */
    output_schema?: RetrieveLastestOutputSchema | null;
}
/**
 * @public
 */
export declare class ReplenishmentResponse extends BCAAbstractResponse {
}
/**
 * @public
 *
 */
export declare class FileListResponse extends TaskResponse {
    /**
     *Relative file path list based on request directory path
     */
    RelativePathes: Array<string>;
}
