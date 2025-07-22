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
  constructor() {
    super('VoiceGuidance');
  }

  protected othersEventCallback(obj: any): boolean {
    switch (obj.Command) {
      case 'PlayCompleted':
        console.log('Voice play completed:', obj);
        return true;
      default:
        return false;
    }
  }

  /**
   * A function to play voice guidance.
   */
  public play(params: PlayVoiceParams): void {
    this.sendCommand('Play', params);
  }

  /**
   * A function to stop voice guidance.
   */
  public stop(): void {
    this.sendCommand('Stop');
  }

  /**
   * A function to pause voice guidance.
   */
  public pause(): void {
    this.sendCommand('Pause');
  }

  /**
   * A function to resume voice guidance.
   */
  public resume(): void {
    this.sendCommand('Resume');
  }

  /**
   * A function to set the volume.
   */
  public setVolume(volume: number): void {
    this.sendCommand('SetVolume', { volume });
  }

  /**
   * A function to reset the voice guidance.
   */
  public reset(): void {
    this.sendCommand('Reset');
  }

  /**
   * A function to get the status information of voice guidance device.
   */
  public getStatus(voiceGuidanceStatusEventCallback: (obj: VoiceGuidanceStatusResponse) => void): void {
    const statusListener = (response: any) => {
      if (response.Command === 'VoiceGuidanceStatusResponse') {
        voiceGuidanceStatusEventCallback(response as VoiceGuidanceStatusResponse);
      }
    };

    this.addListener(statusListener);
    this.sendCommand('GetStatus');
  }
}
