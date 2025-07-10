import Certification from '../Certification';
/**
 * @group API
 * @description Support only KiOpsPay
 */
export default class KiOpsPayCertification extends Certification {
    constructor();
    protected othersEventCallback(obj: any): boolean;
    /**
     * A function that gets the KiOpsPay api token from ATM.
     * Response to {@link GetApiTokenCompleted}
     */
    getApiToken(): void;
}
