/**
 * Provides the OperatorSwitch status.
 *
 * @public
 */
export declare const OperatorSwitchStatus: {
    readonly SUPERVISOR: "SUPERVISOR";
    readonly RUN: "RUN";
    readonly NONE: "NONE";
};
/**
 * @public
 */
export type OperatorSwitchStatus = (typeof OperatorSwitchStatus)[keyof typeof OperatorSwitchStatus];
