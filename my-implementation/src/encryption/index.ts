import CryptoJS from 'crypto-js';
import { JSEncrypt } from 'jsencrypt';

export class EncryptionInfo {
  private static instance: EncryptionInfo;
  
  public isEncryptionMode: boolean = false;
  public token: string | null = null;
  public publicKey: string | null = null;
  public aesKeySeed: string | null = null;
  public aesIVSeed: string | null = null;

  private constructor() {}

  public static getInstance(): EncryptionInfo {
    if (!EncryptionInfo.instance) {
      EncryptionInfo.instance = new EncryptionInfo();
    }
    return EncryptionInfo.instance;
  }
}

export class EncryptionHelper {
  private encryptionInfo: EncryptionInfo;

  constructor() {
    this.encryptionInfo = EncryptionInfo.getInstance();
  }

  // RSA Encryption
  public encryptRSA(data: string, publicKey?: string): string {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey || this.encryptionInfo.publicKey || '');
    return encrypt.encrypt(data) || '';
  }

  // AES Encryption
  public encryptAES(data: string, key?: string, iv?: string): string {
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
  public decryptAES(encryptedData: string, key?: string, iv?: string): string {
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
  public md5Hash(data: string): string {
    return CryptoJS.MD5(data).toString();
  }

  // SHA256 Hash
  public sha256Hash(data: string): string {
    return CryptoJS.SHA256(data).toString();
  }

  // Generate random key
  public generateRandomKey(length: number = 32): string {
    return CryptoJS.lib.WordArray.random(length).toString();
  }
}
