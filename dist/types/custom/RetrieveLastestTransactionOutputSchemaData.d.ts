import { Denomination } from './Denomination';
export declare class RetrieveLastestTransactionOutputSchemaData {
    reference_no?: string;
    customer_name?: string;
    card_number?: string;
    account_number?: string;
    account_name?: string;
    total_amount?: string;
    denomination?: Array<Denomination>;
    trans_datetime?: string;
    description?: string;
    constructor(reference_no?: string, customer_name?: string, card_number?: string, account_number?: string, account_name?: string, total_amount?: string, denomination?: Array<Denomination>, trans_datetime?: string, description?: string);
}
