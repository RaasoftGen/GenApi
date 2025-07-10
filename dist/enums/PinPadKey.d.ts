/**
 * Defines the key name of Pinpad
 * @public
 */
export declare const PinPadKey: {
    readonly ENTER: "ENTER";
    readonly CLEAR: "CLEAR";
    readonly CANCEL: "CANCEL";
    readonly NUMBERS: "NUMBERS";
    readonly F1: "F1";
    readonly F2: "F2";
    readonly F3: "F3";
    readonly F4: "F4";
    readonly F5: "F5";
    readonly F6: "F6";
    readonly F7: "F7";
    readonly F8: "F8";
};
/**
 * @public
 */
export type PinPadKey = (typeof PinPadKey)[keyof typeof PinPadKey];
