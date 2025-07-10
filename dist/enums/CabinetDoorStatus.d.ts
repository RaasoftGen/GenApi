/**
 * Provides the CabinetDoor status.
 */
export declare const CabinetDoorStatus: {
    readonly NOTAVAILABLE: "NOTAVAILABLE";
    readonly CLOSED: "CLOSED";
    readonly OPEN: "OPEN";
    readonly LOCKED: "LOCKED";
    readonly BOLTED: "BOLTED";
    readonly TAMPERED: "TAMPERED";
};
/**
 * Provides the CabinetDoor status.
 */
export type CabinetDoorStatus = (typeof CabinetDoorStatus)[keyof typeof CabinetDoorStatus];
