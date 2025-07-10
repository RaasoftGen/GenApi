import { AbstractCommandName } from './AbstractCommandName';
export declare const DoorCommandName: {
    readonly BoltCabinet: "BoltCabinet";
    readonly UnboltCabinet: "UnboltCabinet";
    readonly BoltSafe: "BoltSafe";
    readonly UnboltSafe: "UnboltSafe";
    readonly SetShield: "SetShield";
};
/**
 * @public
 */
export type DoorCommandName = (typeof DoorCommandName)[keyof typeof DoorCommandName] | AbstractCommandName;
