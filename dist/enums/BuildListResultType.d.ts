/**
 * Defines the Build List Result type
 *
 * @public
 */
export declare const BuildListResultType: {
    readonly None: "None";
    readonly NotPerformed: "NotPerformed";
    readonly InitialFail: "InitialFail";
    readonly BuildFail: "BuildFail";
    readonly Success: "Success";
    readonly FallBack: "FallBack";
};
/**
 * @public
 */
export type BuildListResultType = (typeof BuildListResultType)[keyof typeof BuildListResultType];
