import { AbstractCommandName } from './AbstractCommandName';
export declare const PinPadCommandName: {
    readonly GenerateRandomNumber: "GenerateRandomNumber";
    readonly EncryptECB: "EncryptECB";
    readonly DecryptECB: "DecryptECB";
    readonly EncryptCBC: "EncryptCBC";
    readonly DecryptCBC: "DecryptCBC";
    readonly GenerateMAC: "GenerateMAC";
    readonly ImportKey: "ImportKey";
    readonly ReadPIN: "ReadPIN";
    readonly VerifyLocalDES: "VerifyLocalDES";
    readonly BuildPINBlock: "BuildPINBlock";
    readonly ReadData: "ReadData";
    readonly InitializeEDM: "InitializeEDM";
    readonly GenerateKCV: "GenerateKCV";
    readonly SetKeyEntryMode: "SetKeyEntryMode";
    readonly ImportRSAPublicKey: "ImportRSAPublicKey";
    readonly GetEppData: "GetEppData";
    readonly ImportRSASignedDESKey: "ImportRSASignedDESKey";
    readonly GenerateRSAKeyPair: "GenerateRSAKeyPair";
    readonly GetRSAEPPSignedData: "GetRSAEPPSignedData";
    readonly LoadCertificate: "LoadCertificate";
    readonly GetCertificate: "GetCertificate";
    readonly ReplaceCertificate: "ReplaceCertificate";
    readonly ImportRSAEncipheredPKCS7Key: "ImportRSAEncipheredPKCS7Key";
    readonly SecureKeyEntry: "SecureKeyEntry";
    readonly CancelSecureKeyEntry: "CancelSecureKeyEntry";
    readonly CancelReadPIN: "CancelReadPIN";
    readonly CancelReadData: "CancelReadData";
    readonly EnterPassword: "EnterPassword";
    readonly LoadCertificateEx: "LoadCertificateEx";
    readonly ImportRSAEncipheredPKCS7KeyEx: "ImportRSAEncipheredPKCS7KeyEx";
    readonly ImportKeyBlock: "ImportKeyBlock";
    readonly StartAuthenticateSync: "StartAuthenticateSync";
    readonly InitializeEDMEx: "InitializeEDMEx";
};
/**
 * @public
 */
export type PinPadCommandName = (typeof PinPadCommandName)[keyof typeof PinPadCommandName] | AbstractCommandName;
