// Types and interfaces based on the original analysis

export interface ConfigType {
  isEncryptionMode?: boolean;
  webSocketUrl?: string;
  webSocketPort?: string;
}

export interface SectionInfo {
  [key: string]: any;
}

export interface SectionData {
  Key: string;
  Value: string;
  SaveToFile: boolean;
}

export interface TLVDataInfo {
  [key: string]: any;
}

export interface SetTLVResultInfo {
  [key: string]: any;
}

export interface AIDInfo {
  [key: string]: any;
}

export interface AccountInfo {
  account_number: string;
  account_name: string;
}

export interface Denomination {
  denom: number;
  count: number;
}

export interface ErrorMessage {
  english: string;
  indonesia: string;
}

export interface ErrorSchema {
  error_code: string;
  error_message: ErrorMessage;
}

export interface TerminalConfig {
  is_hide_account: boolean;
  location: string;
}

export interface ValidatePasscodeDetail {
  card_type: string;
  account_list: AccountInfo[];
  customer_name: string;
  cardholder_name: string;
  vendor_name: string;
}

export interface DictionaryPair<K, V> {
  key: K;
  value: V;
}

export interface GenericType<T = any> {
  [key: string]: T;
}
