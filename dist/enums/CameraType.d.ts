/**
 * Defines Camera Type.
 */
export declare const CameraType: {
    readonly ROOM: "ROOM";
    readonly PERSON: "PERSON";
    readonly EXITSLOT: "EXITSLOT";
};
/**
 * Defines Camera Type.
 */
export type CameraType = (typeof CameraType)[keyof typeof CameraType];
