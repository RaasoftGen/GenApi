/**
 * Provides the Heat status.
 *
 * @public
 */
export declare const HeatStatus: {
    readonly NOTAVAILABLE: "NOTAVAILABLE";
    readonly OFF: "OFF";
    readonly ON: "ON";
};
/**
 * @public
 */
export type HeatStatus = (typeof HeatStatus)[keyof typeof HeatStatus];
