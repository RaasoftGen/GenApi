import DeviceBase from './DeviceBase';
import { CameraType } from '../enums';
import { CameraStatusResponse } from '../models';
/**
 * @group API
 * @description This class controls the `camera` in the ATM.
 * To control the `camera`, this class consists of event listeners and `camera` control commands such as {@link capture}.
 * The methods, except for {@link addListener} and {@link removeListener}, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using {@link addListener} before calling a method.
 * Also, when it finishes controlling the device, it should {@link removeListener} to stop receiving responses.
 */
export default class Camera extends DeviceBase {
    #private;
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function to capture by `camera`.
     * When capture is completed, the response {@link CaptureImageCompleted} will be passed to the registered callback function.
     *
     * @param cameraType - ROOM, PERSON, EXITSLOT
     * @param fileName - file name only.
     * @param textOnImage - text to be added to the image.
     */
    capture({ cameraType, fileName, textOnImage, }: {
        cameraType: CameraType;
        fileName: string;
        textOnImage?: string;
    }): void;
    /**
     * A function to get the status information of camera device.
     *
     * @param cameraStatusEventCallback - The callback function to receive the `{@link CameraStatusResponse}` as the result of the operation.
     */
    getStatus(cameraStatusEventCallback: (obj: CameraStatusResponse) => void): void;
}
