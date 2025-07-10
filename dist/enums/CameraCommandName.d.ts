import { AbstractCommandName } from './AbstractCommandName';
export declare const CameraCommandName: {
    readonly Capture: "Capture";
};
/**
 * @public
 */
export type CameraCommandName = (typeof CameraCommandName)[keyof typeof CameraCommandName] | AbstractCommandName;
