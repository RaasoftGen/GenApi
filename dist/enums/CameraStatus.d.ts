/**
 * Camera
 *
 * @public
 */
export declare const CameraStatus: {
    readonly OK: "OK";
    readonly UNKNOWN: "UNKNOWN";
    readonly NOTSUPP: "NOTSUPP";
    readonly HWERROR: "HWERROR";
};
/**
 * @public
 */
export type CameraStatus = (typeof CameraStatus)[keyof typeof CameraStatus];
