export declare const CardTrackType: {
    /**
     * EMPTY
     */
    None: string;
    /**
     * All Type
     */
    AllTrack: string;
    /**
     * MS Type
     */
    MSTrack: string;
    /**
     * Chip Type
     */
    Chip: string;
};
/**
 * @public
 */
export type CardTrackType = (typeof CardTrackType)[keyof typeof CardTrackType];
