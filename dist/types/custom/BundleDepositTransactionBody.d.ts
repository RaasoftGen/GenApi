import { Denomination } from './Denomination';
export declare class BundleDepositTransactionBody {
    card_number: string;
    account_number: string;
    total_amount: string;
    batch_number: string;
    description: string;
    denomination: Array<Denomination>;
    constructor(card_number: string, account_number: string, total_amount: string, batch_number: string, description: string, denomination: Array<Denomination>);
}
