/**
 * Provides the SafeDoor status.
 */
export declare const SafeDoorStatus: {
    readonly NOTAVAILABLE: "NOTAVAILABLE";
    readonly CLOSED: "CLOSED";
    readonly OPEN: "OPEN";
    readonly LOCKED: "LOCKED";
    readonly BOLTED: "BOLTED";
    readonly TAMPERED: "TAMPERED";
};
/**
 * Provides the SafeDoor status.
 */
export type SafeDoorStatus = (typeof SafeDoorStatus)[keyof typeof SafeDoorStatus];
