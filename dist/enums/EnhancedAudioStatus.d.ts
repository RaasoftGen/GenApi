/**
 * Provides the EnhancedAudio status.
 *
 * @public
 */
export declare const EnhancedAudioStatus: {
    readonly NOTAVAILABLE: "NOTAVAILABLE";
    readonly NOTPRESENT: "NOTPRESENT";
    readonly PRESENT: "PRESENT";
};
/**
 * @public
 */
export type EnhancedAudioStatus = (typeof EnhancedAudioStatus)[keyof typeof EnhancedAudioStatus];
