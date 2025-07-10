import { AccountInfo } from './AccountInfo';
export declare class ValidatePasscodeDetail {
    card_type: string;
    account_list?: Array<AccountInfo>;
    customer_name?: string;
    cardholder_name?: string;
    vendor_name?: string;
    constructor(card_type: string, account_list: Array<AccountInfo>, customer_name: string, cardholder_name: string, vendor_name: string);
}
