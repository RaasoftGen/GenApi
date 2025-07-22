import DeviceBase from './DeviceBase';
export var CameraType;
(function (CameraType) {
    CameraType["ROOM"] = "ROOM";
    CameraType["PERSON"] = "PERSON";
    CameraType["EXITSLOT"] = "EXITSLOT";
})(CameraType || (CameraType = {}));
/**
 * @group API
 * @description This class controls the camera in the ATM.
 * To control the camera, this class consists of event listeners and camera control commands such as capture.
 * The methods, except for addListener and removeListener, are all asynchronous.
 * So the caller should register a callback function to receive the corresponding response by using addListener before calling a method.
 * Also, when it finishes controlling the device, it should removeListener to stop receiving responses.
 */
export default class Camera extends DeviceBase {
    constructor() {
        super('Camera');
    }
    othersEventCallback(obj) {
        // Handle camera specific events
        switch (obj.Command) {
            case 'CaptureImageCompleted':
                console.log('Image capture completed:', obj);
                return true;
            default:
                return false;
        }
    }
    /**
     * A function to capture by camera.
     * When capture is completed, the response CaptureImageCompleted will be passed to the registered callback function.
     *
     * @param cameraType - ROOM, PERSON, EXITSLOT
     * @param fileName - file name only
     * @param textOnImage - text to be added to the image
     */
    capture({ cameraType, fileName, textOnImage }) {
        this.sendCommand('CaptureImage', {
            cameraType,
            fileName,
            textOnImage
        });
    }
    /**
     * A function to get the status information of camera device.
     */
    getStatus(cameraStatusEventCallback) {
        const statusListener = (response) => {
            if (response.Command === 'CameraStatusResponse') {
                cameraStatusEventCallback(response);
            }
        };
        this.addListener(statusListener);
        this.sendCommand('GetStatus');
    }
}
//# sourceMappingURL=Camera.js.map