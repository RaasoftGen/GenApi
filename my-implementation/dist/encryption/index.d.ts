export declare class EncryptionInfo {
    private static instance;
    isEncryptionMode: boolean;
    token: string | null;
    publicKey: string | null;
    aesKeySeed: string | null;
    aesIVSeed: string | null;
    private constructor();
    static getInstance(): EncryptionInfo;
}
export declare class EncryptionHelper {
    private encryptionInfo;
    constructor();
    encryptRSA(data: string, publicKey?: string): string;
    encryptAES(data: string, key?: string, iv?: string): string;
    decryptAES(encryptedData: string, key?: string, iv?: string): string;
    md5Hash(data: string): string;
    sha256Hash(data: string): string;
    generateRandomKey(length?: number): string;
}
//# sourceMappingURL=index.d.ts.map