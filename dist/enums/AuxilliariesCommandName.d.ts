import { AbstractCommandName } from './AbstractCommandName';
export declare const AuxilliariesCommandName: {
    readonly EngageUPS: "EngageUPS";
    readonly DisengageUPS: "DisengageUPS";
    readonly SetVolume: "SetVolume";
    readonly SetAlarm: "SetAlarm";
    readonly SetRMSMonitor: "SetRMSMonitor";
    readonly SetEnhancedAudioCtrl: "SetEnhancedAudioCtrl";
    readonly SetPort: "SetPort";
};
/**
 * @public
 */
export type AuxilliariesCommandName = (typeof AuxilliariesCommandName)[keyof typeof AuxilliariesCommandName] | AbstractCommandName;
