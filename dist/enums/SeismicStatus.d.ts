/**
 * Provides the Seismic status.
 *
 * @public
 */
export declare const SeismicStatus: {
    readonly NOTAVAILABLE: "NOTAVAILABLE";
    readonly OFF: "OFF";
    readonly ON: "ON";
};
/**
 * @public
 */
export type SeismicStatus = (typeof SeismicStatus)[keyof typeof SeismicStatus];
