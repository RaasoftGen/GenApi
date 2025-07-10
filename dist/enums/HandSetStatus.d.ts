/**
 * Provides the HandSet status.
 *
 * @public
 */
export declare const HandSetStatus: {
    readonly NOTAVAILABLE: "NOTAVAILABLE";
    readonly OFFTHEHOOK: "OFFTHEHOOK";
    readonly ONTHEHOO: "ONTHEHOOK";
};
/**
 * @public
 */
export type HandSetStatus = (typeof HandSetStatus)[keyof typeof HandSetStatus];
