/**
 * Provides the TransactionNubmer
 *
 * @public
 */
export declare const NDCTransactionTypeNumber: {
    readonly None: "";
    readonly Withdrawal: "001";
    readonly FastCash: "001";
    readonly PreferredFastCash: "001";
    readonly CheckCashing: "001";
    readonly CashDeposit: "002";
    readonly Deposit: "002";
    readonly ForcedDeposit: "002";
    readonly CheckDeposit: "002";
    readonly CoinDeposit: "002";
    readonly BalanceInquiry: "003";
    readonly MiniStatementType1: "003";
    readonly MiniStatementType2: "003";
    readonly MiniStatementType3: "003";
    readonly MiniStatementType4: "003";
    readonly GetPreferences: "003";
    readonly SetPreferences: "003";
    readonly PinAuthentication: "003";
    readonly GetAccounts: "003";
    readonly Transfer: "004";
    readonly CashPayment: "005";
    readonly CheckPayment: "005";
    readonly Payment: "005";
    readonly TransferPayment: "005";
    readonly PinChange: "006";
};
/**
 * @public
 */
export type NDCTransactionTypeNumber = (typeof NDCTransactionTypeNumber)[keyof typeof NDCTransactionTypeNumber];
