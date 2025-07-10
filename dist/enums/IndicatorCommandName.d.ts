import { AbstractCommandName } from './AbstractCommandName';
export declare const IndicatorCommandName: {
    readonly SetOpenClose: "SetOpenClose";
    readonly SetFasciaLight: "SetFasciaLight";
    readonly SetAudio: "SetAudio";
    readonly SetHeating: "SetHeating";
};
/**
 * @public
 */
export type IndicatorCommandName = (typeof IndicatorCommandName)[keyof typeof IndicatorCommandName] | AbstractCommandName;
