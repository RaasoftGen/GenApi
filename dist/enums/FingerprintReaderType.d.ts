/**
 * Defines the Fingerprint Reader type
 *
 * @public
 */
export declare const FingerprintReaderType: {
    readonly NONE: "NONE";
    readonly NORMAL: "NORMAL";
};
/**
 * @public
 */
export type FingerprintReaderType = (typeof FingerprintReaderType)[keyof typeof FingerprintReaderType];
