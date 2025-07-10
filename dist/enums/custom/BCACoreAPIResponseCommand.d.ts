export declare const BCACoreAPIResponseCommand: {
    readonly EncryptKeyResponse: "EncryptKeyResponse";
    readonly ValidatePasscodeResponse: "ValidatePasscodeResponse";
    readonly UpdatePasscodeResponse: "UpdatePasscodeResponse";
    readonly ResetPasscodeResponse: "ResetPasscodeResponse";
    readonly SingleDepositTransactionResponse: "SingleDepositTransactionResponse";
    readonly BundleDepositTransactionResponse: "BundleDepositTransactionResponse";
    readonly RetrieveLatestTransactionResponse: "RetrieveLatestTransactionResponse";
    readonly ReplenishmentResponse: "ReplenishmentResponse";
    readonly FileListResponse: "FileListResponse";
};
/**
 * @public
 */
export type BCACoreAPIResponseCommand = (typeof BCACoreAPIResponseCommand)[keyof typeof BCACoreAPIResponseCommand];
