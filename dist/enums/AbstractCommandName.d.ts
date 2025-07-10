export declare const AbstractCommandName: {
    readonly RequestLock: "RequestLock";
    readonly ReleaseLock: "ReleaseLock";
    readonly Reset: "Reset";
};
/**
 * @public
 */
export type AbstractCommandName = (typeof AbstractCommandName)[keyof typeof AbstractCommandName];
