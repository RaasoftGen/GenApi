/**
 * Type of the Audio Jack device event.
 * @public
 */
export declare const AudioJackEventType: {
    /**
     * Audio Jack is not present
     */
    readonly NOTPRESENT: "NOTPRESENT";
    /**
     * Audio Jack is present
     */
    readonly PRESENT: "PRESENT";
};
/**
 * @public
 */
export type AudioJackEventType = (typeof AudioJackEventType)[keyof typeof AudioJackEventType];
