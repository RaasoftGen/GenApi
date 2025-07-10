/**
 * provides the CHIP power status.
 *
 * @public
 */
export declare const ChipPowerStatus: {
    /**
     * ChipPower status of Card Reader is ONLINE
     */
    readonly ONLINE: "ONLINE";
    /**
     * ChipPower status of Card Reader is POWEREDOFF
     */
    readonly POWEREDOFF: "POWEREDOFF";
    /**
     * ChipPower status of Card Reader is NODEVICE
     */
    readonly NODEVICE: "NODEVICE";
    /**
     * ChipPower status of Card Reader is HWERROR
     */
    readonly HWERROR: "HWERROR";
    /**
     * ChipPower status of Card Reader is NOCARD
     */
    readonly NOCARD: "NOCARD";
    /**
     * ChipPower status of Card Reader is not supported
     */
    readonly NOTSUPP: "NOTSUPP";
    /**
     * ChipPower status of Card Reader is UNKNWON
     */
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * @public
 */
export type ChipPowerStatus = (typeof ChipPowerStatus)[keyof typeof ChipPowerStatus];
