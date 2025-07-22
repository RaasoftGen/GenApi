import DeviceBase from './DeviceBase';
import { VoiceGuidanceStatusResponse } from '../models';
export interface PlayVoiceParams {
    text?: string;
    audioFile?: string;
    volume?: number;
    repeat?: number;
}
/**
 * @group API
 * @description This class controls the voice guidance device in an ATM.
 */
export default class VoiceGuidance extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to play voice guidance.
     */
    play(params: PlayVoiceParams): void;
    /**
     * A function to stop voice guidance.
     */
    stop(): void;
    /**
     * A function to pause voice guidance.
     */
    pause(): void;
    /**
     * A function to resume voice guidance.
     */
    resume(): void;
    /**
     * A function to set the volume.
     */
    setVolume(volume: number): void;
    /**
     * A function to reset the voice guidance.
     */
    reset(): void;
    /**
     * A function to get the status information of voice guidance device.
     */
    getStatus(voiceGuidanceStatusEventCallback: (obj: VoiceGuidanceStatusResponse) => void): void;
}
//# sourceMappingURL=VoiceGuidance.d.ts.map