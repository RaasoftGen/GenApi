/**
 * Provides the Door status.
 */
export declare const DoorStatus: {
    readonly DEVONLINE: "DEVONLINE";
    readonly DEVOFFLINE: "DEVOFFLINE";
    readonly DEVHWERROR: "DEVHWERROR";
    readonly NOTSUPP: "NOTSUPP";
};
/**
 * Provides the Door status.
 */
export type DoorStatus = (typeof DoorStatus)[keyof typeof DoorStatus];
