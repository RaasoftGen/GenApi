/**
 * Type of the proximity device event.
 * @public
 */
export declare const ProximityEventType: {
    /**
     * Proximity status of Sensors is NOTPRESENT
     */
    readonly NOTPRESENT: "NOTPRESENT";
    /**
     * Proximity status of Sensors is PRESENT
     */
    readonly PRESENT: "PRESENT";
};
/**
 * @public
 */
export type ProximityEventType = (typeof ProximityEventType)[keyof typeof ProximityEventType];
