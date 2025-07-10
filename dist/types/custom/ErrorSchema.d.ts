import { ErrorMessage } from './ErrorMessage';
export declare class ErrorSchema {
    error_code: string | null;
    error_message: ErrorMessage | null;
    constructor(error_code: string | null, error_message: ErrorMessage | null);
}
