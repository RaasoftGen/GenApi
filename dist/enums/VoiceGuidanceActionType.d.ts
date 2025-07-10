/**
 * Defines the strings used as voiceGuidance action type
 */
export declare const VoiceGuidanceActionType: {
    readonly play: "play";
    readonly stop: "stop";
};
export type VoiceGuidanceActionType = (typeof VoiceGuidanceActionType)[keyof typeof VoiceGuidanceActionType];
