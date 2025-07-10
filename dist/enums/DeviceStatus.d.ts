/**
 *  Device Status
 * @public
 */
export declare const DeviceStatus: {
    readonly DEVONLINE: "DEVONLINE";
    readonly DEVOFFLINE: "DEVOFFLINE";
    readonly DEVHWERROR: "DEVHWERROR";
    readonly NOTSUPP: "NOTSUPP";
    readonly DEVNODEVICE: "DEVNODEVICE";
};
/**
 * @public
 */
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];
