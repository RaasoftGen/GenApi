/**
 * Defines the Card Dispenser type
 *
 * @public
 */
export declare const CashDispenserType: {
    readonly NONE: "NONE";
    readonly CDM: "CDM";
    readonly CDUP: "CDUP";
    readonly CDUS: "CDUS";
};
/**
 * @public
 */
export type CashDispenserType = (typeof CashDispenserType)[keyof typeof CashDispenserType];
