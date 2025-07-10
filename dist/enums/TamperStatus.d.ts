/**
 * Provides the Tamper status.
 *
 * @public
 */
export declare const TamperStatus: {
    readonly NOTAVAILABLE: "NOTAVAILABLE";
    readonly OFF: "OFF";
    readonly ON: "ON";
};
/**
 * @public
 */
export type TamperStatus = (typeof TamperStatus)[keyof typeof TamperStatus];
