import CryptoJS from 'crypto-js';
import { JSEncrypt } from 'jsencrypt';
export class EncryptionInfo {
    constructor() {
        this.isEncryptionMode = false;
        this.token = null;
        this.publicKey = null;
        this.aesKeySeed = null;
        this.aesIVSeed = null;
    }
    static getInstance() {
        if (!EncryptionInfo.instance) {
            EncryptionInfo.instance = new EncryptionInfo();
        }
        return EncryptionInfo.instance;
    }
}
export class EncryptionHelper {
    constructor() {
        this.encryptionInfo = EncryptionInfo.getInstance();
    }
    // RSA Encryption
    encryptRSA(data, publicKey) {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey || this.encryptionInfo.publicKey || '');
        return encrypt.encrypt(data) || '';
    }
    // AES Encryption
    encryptAES(data, key, iv) {
        const keyToUse = key || this.encryptionInfo.aesKeySeed || '';
        const ivToUse = iv || this.encryptionInfo.aesIVSeed || '';
        const encrypted = CryptoJS.AES.encrypt(data, keyToUse, {
            iv: CryptoJS.enc.Utf8.parse(ivToUse),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }
    // AES Decryption
    decryptAES(encryptedData, key, iv) {
        const keyToUse = key || this.encryptionInfo.aesKeySeed || '';
        const ivToUse = iv || this.encryptionInfo.aesIVSeed || '';
        const decrypted = CryptoJS.AES.decrypt(encryptedData, keyToUse, {
            iv: CryptoJS.enc.Utf8.parse(ivToUse),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    // MD5 Hash
    md5Hash(data) {
        return CryptoJS.MD5(data).toString();
    }
    // SHA256 Hash
    sha256Hash(data) {
        return CryptoJS.SHA256(data).toString();
    }
    // Generate random key
    generateRandomKey(length = 32) {
        return CryptoJS.lib.WordArray.random(length).toString();
    }
}
//# sourceMappingURL=index.js.map