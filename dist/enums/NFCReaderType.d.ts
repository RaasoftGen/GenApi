/**
 * Defines the NFC Reader type
 */
export declare const NFCReaderType: {
    readonly NONE: "NONE";
    readonly CardEmul: "CardEmul";
    readonly P2P: "P2P";
};
/**
 * Defines the NFC Reader type
 */
export type NFCReaderType = (typeof NFCReaderType)[keyof typeof NFCReaderType];
