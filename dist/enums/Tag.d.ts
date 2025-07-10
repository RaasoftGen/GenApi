/**
 * Defines the Tag string constants used in WARP.
 *
 * @public
 */
export declare const Tag: {
    readonly None: "";
    readonly Common: "WARP|Common";
    readonly NDC: "WARP|NDC";
    readonly External: "WARP|External";
};
/**
 * @public
 */
export type Tag = (typeof Tag)[keyof typeof Tag];
