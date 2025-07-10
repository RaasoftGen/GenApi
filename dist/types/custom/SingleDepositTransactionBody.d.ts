import { Denomination } from './Denomination';
export declare class SingleDepositTransactionBody {
    card_number: string;
    account_number: string;
    total_amount: string;
    batch_number: string;
    denomination: Array<Denomination>;
    constructor(card_number: string, account_number: string, total_amount: string, batch_number: string, denomination: Array<Denomination>);
}
