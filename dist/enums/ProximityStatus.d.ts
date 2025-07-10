/**
 * Provides the Proximity status.
 *
 * @public
 */
export declare const ProximityStatus: {
    readonly NOTAVAILABLE: "NOTAVAILABLE";
    readonly NOTPRESENT: "NOTPRESENT";
    readonly PRESENT: "PRESENT";
};
/**
 * @public
 */
export type ProximityStatus = (typeof ProximityStatus)[keyof typeof ProximityStatus];
