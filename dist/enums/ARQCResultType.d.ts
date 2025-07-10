/**
 * provides types for the arqc result
 */
export declare const ARQCResultType: {
    readonly OK: "OK";
    readonly Error: "Error";
};
/**
 * provides types for the arqc result
 */
export type ARQCResultType = (typeof ARQCResultType)[keyof typeof ARQCResultType];
