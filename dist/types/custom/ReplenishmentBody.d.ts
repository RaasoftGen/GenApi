import { Denomination } from './Denomination';
export declare class ReplenishmentBody {
    card_number: string;
    total_amount: string;
    denomination: Array<Denomination>;
    constructor(cardNumber: string, totalAmount: string, denomination: Array<Denomination>);
}
