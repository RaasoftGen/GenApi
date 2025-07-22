import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the voice guidance device in an ATM.
 */
export default class VoiceGuidance extends DeviceBase {
    constructor() {
        super('VoiceGuidance');
    }
    othersEventCallback(obj) {
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
    play(params) {
        this.sendCommand('Play', params);
    }
    /**
     * A function to stop voice guidance.
     */
    stop() {
        this.sendCommand('Stop');
    }
    /**
     * A function to pause voice guidance.
     */
    pause() {
        this.sendCommand('Pause');
    }
    /**
     * A function to resume voice guidance.
     */
    resume() {
        this.sendCommand('Resume');
    }
    /**
     * A function to set the volume.
     */
    setVolume(volume) {
        this.sendCommand('SetVolume', { volume });
    }
    /**
     * A function to reset the voice guidance.
     */
    reset() {
        this.sendCommand('Reset');
    }
    /**
     * A function to get the status information of voice guidance device.
     */
    getStatus(voiceGuidanceStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'VoiceGuidanceStatusResponse') {
                voiceGuidanceStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=VoiceGuidance.js.map