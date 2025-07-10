/**
 * @public
 */
export default class KiOpsUtils {
    static serialize(obj?: any): string;
    static deserialize<TOutput>(data?: string): TOutput;
    static newGuid(): string;
    static newGuidString(): string;
    static serverLogWrite(msg: string): void;
    static generateRandomString(length: number): string;
    static stringToEncrypt(publicKey: string, key: string, iv: string): string | false;
    static decryptData(payload: string, aesKeySeed: string, aesIVSeed: string): string;
    static encryptData(payload: string, aesKeySeed: string, aesIVSeed: string): string;
}
