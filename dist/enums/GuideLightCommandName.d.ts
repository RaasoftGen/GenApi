import { AbstractCommandName } from './AbstractCommandName';
export declare const GuideLightCommandName: {
    readonly SetGuideLights: "SetGuideLights";
};
/**
 * @public
 */
export type GuideLightCommandName = (typeof GuideLightCommandName)[keyof typeof GuideLightCommandName] | AbstractCommandName;
