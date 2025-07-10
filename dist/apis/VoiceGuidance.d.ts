import DeviceBase from './DeviceBase';
/**
 * @group API
 * @description This class controls the voice guidance with `{@link play}` and `{@link stop}` methods, which are asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using `{@link addListener}` before calling a method.
 * Also, when it finishes listening for responses, it should `{@link removeListener}` to stop receiving responses.
 */
export default class VoiceGuidance extends DeviceBase {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function that tells the script to read the input script.
     *
     * @param script - The script to be spoken and to get the response from a customer. A script should be in the JSON format
     */
    play(script: string): void;
    /**
     * This function instructs the script to stop reading.
     */
    stop(): void;
}
