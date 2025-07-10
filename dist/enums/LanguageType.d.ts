/**
 * Defines the Language Type for NDC Transaction
 *
 * @public
 */
export declare const LanguageType: {
    /**
     * English
     */
    readonly en: "en";
    /**
     * Vietnamese
     */
    readonly vi: "vi";
};
/**
 * @public
 */
export type LanguageType = (typeof LanguageType)[keyof typeof LanguageType];
