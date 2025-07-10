declare class EncryptionInfo {
    #private;
    isEncryptionMode: boolean;
    token: string | null;
    publicKey: string | null;
    aesKeySeed: string | null;
    aesIVSeed: string | null;
    static getInstance(): EncryptionInfo;
}
declare const _default: EncryptionInfo;
export default _default;
