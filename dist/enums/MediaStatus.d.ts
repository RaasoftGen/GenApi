/**
 * Provides the Media status.
 */
export declare const MediaStatus: {
    readonly PRESENT: "PRESENT";
    readonly NOTPRESENT: "NOTPRESENT";
    readonly JAMMED: "JAMMED";
    readonly ENTERING: "ENTERING";
    readonly UNKNOWN: "UNKNOWN";
    readonly EXITING: "EXITING";
};
/**
 * Provides the Media status.
 */
export type MediaStatus = (typeof MediaStatus)[keyof typeof MediaStatus];
